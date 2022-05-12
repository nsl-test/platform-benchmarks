#!/usr/bin/env sh

#
# This script simply executes a provided JavaScript test using
# the local environment established with the `docker-compose`.
# 
# Each execution is provided a unique tag to differentiate
# discrete test runs within the Grafana dashboard.
#

set -e

if [ $# -ne 1 ]; then
    echo "Usage: ./docker-run.sh <MODULE_NAME>"
    exit 1
fi

SCRIPT_NAME=$1/k6-script.js
TAG_NAME="$(basename -s .js $SCRIPT_NAME)-$(date +%s)"

docker-compose run -T --rm  k6 run -<$SCRIPT_NAME --tag testid=$TAG_NAME
