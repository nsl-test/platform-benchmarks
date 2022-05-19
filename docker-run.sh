#!/usr/bin/env sh

#
# This script simply executes a provided JavaScript test using
# the local environment established with the `docker-compose`.
# 
# Each execution is provided a unique tag to differentiate
# discrete test runs within the Grafana dashboard.
#

set -e

# if [ $# -ne 1 ]; then
#     echo "Usage: ./docker-run.sh <MODULE_NAME>"
#     exit 1
# fi

MODULE_NAME="$1"
shift
SCRIPT_NAME=$MODULE_NAME/k6-script.js
TAG_NAME="$(basename -s .js $SCRIPT_NAME)-$(date +%s)"

if command -v nerdctl &> /dev/null
then
    nerdctl run --rm --network=platform-benchmarks_k6 -e K6_PROMETHEUS_REMOTE_URL=http://prometheus:9090/api/v1/write \
    -e K6_OUT=output-prometheus-remote -v $(pwd)/$SCRIPT_NAME:/home/k6/k6-script.js ghcr.io/nsl-test/xk6:v0.6 \
    run /home/k6/k6-script.js --tag testid=$TAG_NAME "$@"
    exit
else
    docker compose run -T --rm  k6 run -<$SCRIPT_NAME --tag testid=$TAG_NAME "$@"
fi


