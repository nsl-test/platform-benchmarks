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

## format: Applies Go formatting to code.
format:
	go fmt ./...

image:
	docker buildx build --platform linux/amd64,linux/arm64 -t ghcr.io/nsl-test/xk6:v0.7 . --push   

gen:
	@postman-to-k6 $(var)/collection.json -e env/qa3.json -o $(var)/k6-script.js

deploy: 
##	go install sigs.k8s.io/kustomize/kustomize/v4@latest
	@kustomize build deploy --enable-helm | kubectl apply -f -


cm:
	@kubectl create configmap $(var) --from-file $(var)/k6-script.js -o yaml --dry-run=client | kubectl apply -f -	

mock:
	@kubectl create configmap wiremock-mapping --from-file mock/mappings/static.json -o yaml --dry-run=client | kubectl apply -f -	


##	
.PHONY: build clean format help gen deploy	cm mock