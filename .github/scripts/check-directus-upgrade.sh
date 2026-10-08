#!/usr/bin/env bash

set -Eeuo pipefail

readonly REPOSITORY_ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
readonly DIRECTUS_IMAGE="$(sed -n 's/^[[:space:]]*image:[[:space:]]*\(directus\/directus:[^[:space:]]*\).*/\1/p' \
  "${REPOSITORY_ROOT}/portfolio_back_end/docker-compose.yml")"

if [[ -z "${DIRECTUS_IMAGE}" ]]; then
  echo "A pinned Directus image is required in the Compose file." >&2
  exit 1
fi

readonly TEST_DIR="$(mktemp -d)"
readonly CONTAINER_NAME="directus-upgrade-check-${GITHUB_RUN_ID:-$$}"

cleanup() {
  docker rm --force "${CONTAINER_NAME}" >/dev/null 2>&1 || true
  rm -rf -- "${TEST_DIR}"
}
trap cleanup EXIT

mkdir -- "${TEST_DIR}/database" "${TEST_DIR}/uploads"
cp -a -- "${REPOSITORY_ROOT}/portfolio_back_end/database/." "${TEST_DIR}/database/"
cp -a -- "${REPOSITORY_ROOT}/portfolio_back_end/uploads/." "${TEST_DIR}/uploads/"
chmod -R a+rwX -- "${TEST_DIR}"

post_digest() {
  python3 - "${TEST_DIR}/database/data.db" "${TEST_DIR}/uploads" <<'PY'
import hashlib
import sqlite3
import sys
from pathlib import Path

with sqlite3.connect(sys.argv[1]) as db:
    assert db.execute("PRAGMA integrity_check").fetchone()[0] == "ok"
    posts = db.execute("SELECT * FROM posts ORDER BY id").fetchall()
    media = db.execute("SELECT id, filename_disk FROM directus_files ORDER BY id").fetchall()
    assert posts, "No blog posts found"
    assert all((Path(sys.argv[2]) / filename).is_file() for _, filename in media)
    print(hashlib.sha256(repr((posts, media)).encode()).hexdigest())
PY
}

before="$(post_digest)"

docker run --detach --name "${CONTAINER_NAME}" \
  --publish 127.0.0.1:18055:8055 \
  --volume "${TEST_DIR}/database:/directus/database" \
  --volume "${TEST_DIR}/uploads:/directus/uploads" \
  --env SECRET=upgrade-rehearsal-only \
  --env DB_CLIENT=sqlite3 \
  --env DB_FILENAME=/directus/database/data.db \
  "${DIRECTUS_IMAGE}" >/dev/null

ready=false
for _ in {1..90}; do
  status="$(curl --silent --output /dev/null --write-out '%{http_code}' \
    http://127.0.0.1:18055/server/ping || true)"
  if [[ "${status}" == "200" ]]; then
    ready=true
    break
  fi
  if [[ "$(docker inspect --format '{{.State.Running}}' "${CONTAINER_NAME}")" != "true" ]]; then
    break
  fi
  sleep 2
done

if [[ "${ready}" != true ]]; then
  docker logs "${CONTAINER_NAME}" >&2
  echo "Directus 12 did not start after migrating the copied database." >&2
  exit 1
fi

posts_status="$(curl --globoff --silent --output /dev/null --write-out '%{http_code}' \
  'http://127.0.0.1:18055/items/posts?limit=1' || true)"
if [[ "${posts_status}" != "200" ]]; then
  echo "Public blog post API failed with HTTP ${posts_status}." >&2
  exit 1
fi

docker stop "${CONTAINER_NAME}" >/dev/null
after="$(post_digest)"
if [[ "${before}" != "${after}" ]]; then
  echo "Blog post content changed during the Directus migration rehearsal." >&2
  exit 1
fi

echo "Directus 12 migration rehearsal passed; blog posts and public API are intact."
