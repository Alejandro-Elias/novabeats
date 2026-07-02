#!/bin/sh

cd /app/nova || exit 1

exec /app/nova/node_modules/electron/dist/electron --no-sandbox /app/nova/src/main.js "$@"
