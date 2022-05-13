MAKEFLAGS += --silent

all: clean format build

## help: Prints a list of available build targets.
help:
	echo "Usage: make <OPTIONS> ... <TARGETS>"
	echo ""
	echo "Available targets are:"
	echo ''
	sed -n 's/^##//p' ${PWD}/Makefile | column -t -s ':' | sed -e 's/^/ /'
	echo
	echo "Targets run by default are: `sed -n 's/^all: //p' ./Makefile | sed -e 's/ /, /g' | sed -e 's/\(.*\), /\1, and /'`"

## clean: Removes any previously created build artifacts.
clean:
	rm -f ./k6

## build: Builds a custom 'k6' with the local extension.
build:
	CGO_ENABLED=0 go install go.k6.io/xk6/cmd/xk6@latest
	CGO_ENABLED=0 xk6 build --with github.com/grafana/xk6-output-prometheus-remote@latest \
 		--with github.com/grafana/xk6-sql@latest \
 		--with github.com/mostafa/xk6-kafka@latest \
 		--with github.com/szkiba/xk6-jose@latest \
		--with github.com/ydarias/xk6-nats@latest
##	xk6 build --with github.com/grafana/xk6-redis=/Users/rverma/dev/xk6-redis

image:
#	aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 660124699787.dkr.ecr.ap-south-1.amazonaws.com
	docker buildx build --platform linux/amd64,linux/arm64 -t ghcr.io/nsl-test/xk6:v0.4 . --push   

## format: Applies Go formatting to code.
format:
	go fmt ./...


gen:
	@postman-to-k6 $(var)/collection.json -e env/qa3.json -o $(var)/k6-script.js

##	
.PHONY: build clean format help gen

