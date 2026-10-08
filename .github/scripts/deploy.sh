#!/usr/bin/env bash

set -Eeuo pipefail

readonly SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
readonly REPOSITORY_ROOT="$(cd -- "${SCRIPT_DIR}/../.." && pwd)"
readonly FRONTEND_BUILD="${REPOSITORY_ROOT}/portfolio_front_end/dist"
readonly PHP_SOURCE="${REPOSITORY_ROOT}/portfolio_back_end/services"
readonly COMPOSE_SOURCE="${REPOSITORY_ROOT}/portfolio_back_end/docker-compose.yml"

: "${DEPLOY_ROOT:=/var/www/michaelgrinnell.com/portfolio_2024}"
: "${HEALTHCHECK_HOST:=michaelgrinnell.com}"

DEPLOY_ROOT="$(readlink -f -- "${DEPLOY_ROOT}")"
if [[ -z "${DEPLOY_ROOT}" || "${DEPLOY_ROOT}" == "/" || "${DEPLOY_ROOT}" != /var/www/* ]]; then
  echo "Refusing to deploy outside a specific directory beneath /var/www." >&2
  exit 1
fi

readonly FRONTEND_TARGET="${DEPLOY_ROOT}/portfolio_front_end/dist"
readonly PHP_TARGET="${DEPLOY_ROOT}/portfolio_back_end/services"
readonly COMPOSE_TARGET="${DEPLOY_ROOT}/portfolio_back_end/docker-compose.yml"
readonly LOCK_FILE="${DEPLOY_ROOT}/.deploy.lock"
readonly DIRECTUS_DATA="${DEPLOY_ROOT}/portfolio_back_end"
readonly BACKUP_DIR="${DEPLOY_ROOT}/.directus-backups"

if [[ ! -f "${FRONTEND_BUILD}/index.html" ]]; then
  echo "The frontend build artifact is missing." >&2
  exit 1
fi

if [[ ! -f "${PHP_SOURCE}/vendor/autoload.php" ]]; then
  echo "The PHP dependency artifact is missing." >&2
  exit 1
fi

if [[ ! -f "${COMPOSE_SOURCE}" ]]; then
  echo "The Directus Compose file is missing." >&2
  exit 1
fi

if [[ ! -d "${FRONTEND_TARGET}" || ! -d "${PHP_TARGET}" ]]; then
  echo "The existing Apache deployment directories are missing." >&2
  exit 1
fi

if [[ ! -f "${DIRECTUS_DATA}/database/data.db" || ! -d "${DIRECTUS_DATA}/uploads" || ! -f "${DEPLOY_ROOT}/.env" ]]; then
  echo "The existing Directus database, uploads, or environment file is missing." >&2
  exit 1
fi

exec 9>"${LOCK_FILE}"
if ! flock -n 9; then
  echo "Another portfolio deployment is already running." >&2
  exit 1
fi

# Stop writes before archiving SQLite and uploaded files. Keep the archive private
# and outside the served frontend directory so a failed migration can be restored.
umask 077
mkdir -p -- "${BACKUP_DIR}"
chmod 700 -- "${BACKUP_DIR}"
backup_paths=(.env portfolio_back_end/docker-compose.yml portfolio_back_end/database portfolio_back_end/uploads)
if [[ -d "${DIRECTUS_DATA}/extensions" ]]; then
  backup_paths+=(portfolio_back_end/extensions)
fi

# Restart the old image if any step fails before the new Compose file is installed.
trap 'docker compose --file "${COMPOSE_TARGET}" up --detach directus >&2 || true' ERR
docker compose --file "${COMPOSE_TARGET}" stop directus
backup_file="$(mktemp "${BACKUP_DIR}/directus-$(date -u +%Y%m%dT%H%M%SZ)-XXXXXX.tar.gz")"
if ! tar -C "${DEPLOY_ROOT}" -czf "${backup_file}" -- "${backup_paths[@]}" ||
   ! tar -tzf "${backup_file}" >/dev/null; then
  rm -f -- "${backup_file}"
  docker compose --file "${COMPOSE_TARGET}" up --detach directus
  echo "Directus backup failed; the previous container was restarted." >&2
  exit 1
fi
echo "Directus backup saved to ${backup_file}"

rsync -a --delete --delay-updates -- "${FRONTEND_BUILD}/" "${FRONTEND_TARGET}/"
rsync -a --delete --delay-updates -- "${PHP_SOURCE}/" "${PHP_TARGET}/"
install -m 0644 -- "${COMPOSE_SOURCE}" "${COMPOSE_TARGET}"
trap - ERR

docker compose --file "${COMPOSE_TARGET}" up --detach

directus_status=""
for _ in {1..12}; do
  directus_status="$(
    curl --silent --show-error \
      --output /dev/null \
      --write-out '%{http_code}' \
      --connect-timeout 2 \
      --max-time 5 \
      "http://127.0.0.1:8055/server/ping" || true
  )"

  if [[ "${directus_status}" == "200" ]]; then
    break
  fi

  sleep 5
done

posts_status="$(
  curl --globoff --silent --show-error \
    --output /dev/null \
    --write-out '%{http_code}' \
    --connect-timeout 2 \
    --max-time 5 \
    "http://127.0.0.1:8055/items/posts?limit=1" || true
)"

frontend_status="$(
  curl --insecure --silent --show-error \
    --output /dev/null \
    --write-out '%{http_code}' \
    --connect-timeout 5 \
    --max-time 15 \
    --resolve "${HEALTHCHECK_HOST}:443:127.0.0.1" \
    "https://${HEALTHCHECK_HOST}/" || true
)"

service_status="$(
  curl --insecure --silent --show-error \
    --output /dev/null \
    --write-out '%{http_code}' \
    --connect-timeout 5 \
    --max-time 15 \
    --resolve "${HEALTHCHECK_HOST}:443:127.0.0.1" \
    "https://${HEALTHCHECK_HOST}/services/send_email.php" || true
)"

if [[ ! "${frontend_status}" =~ ^(2|3)[0-9]{2}$ ]]; then
  echo "Frontend health check failed with HTTP ${frontend_status:-no-response}." >&2
  exit 1
fi

if [[ "${service_status}" != "405" ]]; then
  echo "PHP service health check failed with HTTP ${service_status:-no-response}." >&2
  exit 1
fi

if [[ "${directus_status}" != "200" ]]; then
  echo "Directus health check failed with HTTP ${directus_status:-no-response}." >&2
  docker compose --file "${COMPOSE_TARGET}" ps >&2
  exit 1
fi

if [[ "${posts_status}" != "200" ]]; then
  echo "Public blog post API check failed with HTTP ${posts_status:-no-response}." >&2
  exit 1
fi

echo "Deployment completed successfully (frontend ${frontend_status}, service ${service_status}, Directus ${directus_status}, posts ${posts_status})."

