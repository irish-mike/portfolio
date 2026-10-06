#!/usr/bin/env bash

set -Eeuo pipefail

readonly SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
readonly REPOSITORY_ROOT="$(cd -- "${SCRIPT_DIR}/../.." && pwd)"
readonly FRONTEND_BUILD="${REPOSITORY_ROOT}/portfolio_front_end/dist"
readonly PHP_SOURCE="${REPOSITORY_ROOT}/portfolio_back_end/services"

: "${DEPLOY_ROOT:=/var/www/michaelgrinnell.com/portfolio_2024}"
: "${HEALTHCHECK_HOST:=michaelgrinnell.com}"

DEPLOY_ROOT="$(readlink -f -- "${DEPLOY_ROOT}")"
if [[ -z "${DEPLOY_ROOT}" || "${DEPLOY_ROOT}" == "/" || "${DEPLOY_ROOT}" != /var/www/* ]]; then
  echo "Refusing to deploy outside a specific directory beneath /var/www." >&2
  exit 1
fi

readonly FRONTEND_TARGET="${DEPLOY_ROOT}/portfolio_front_end/dist"
readonly PHP_TARGET="${DEPLOY_ROOT}/portfolio_back_end/services"
readonly LOCK_FILE="${DEPLOY_ROOT}/.deploy.lock"

if [[ ! -f "${FRONTEND_BUILD}/index.html" ]]; then
  echo "The frontend build artifact is missing." >&2
  exit 1
fi

if [[ ! -f "${PHP_SOURCE}/vendor/autoload.php" ]]; then
  echo "The PHP dependency artifact is missing." >&2
  exit 1
fi

if [[ ! -d "${FRONTEND_TARGET}" || ! -d "${PHP_TARGET}" ]]; then
  echo "The existing Apache deployment directories are missing." >&2
  exit 1
fi

exec 9>"${LOCK_FILE}"
if ! flock -n 9; then
  echo "Another portfolio deployment is already running." >&2
  exit 1
fi

rsync -a --delete --delay-updates -- "${FRONTEND_BUILD}/" "${FRONTEND_TARGET}/"
rsync -a --delete --delay-updates -- "${PHP_SOURCE}/" "${PHP_TARGET}/"

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

echo "Deployment completed successfully (frontend ${frontend_status}, service ${service_status})."

