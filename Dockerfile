FROM golang:1.17-alpine3.15 as builder
RUN apk --no-cache add git
WORKDIR $GOPATH/src/go.k6.io/k6
ADD . .

ARG TARGETOS
ARG TARGETARCH

RUN CGO_ENABLED=0 GOOS=${TARGETOS} GOARCH=${TARGETARCH} go install go.k6.io/xk6/cmd/xk6@latest
RUN xk6 build --with github.com/grafana/xk6-output-prometheus-remote@latest \
    --with github.com/grafana/xk6-sql@latest \
    --with github.com/mostafa/xk6-kafka@latest \
    --with github.com/szkiba/xk6-jose@latest --output /tmp/k6

# Create image for running k6 with output for Prometheus Remote Write

FROM alpine:3.15
COPY --from=redboxoss/scuttle:latest scuttle /bin/scuttle
RUN apk add --no-cache ca-certificates && adduser -D -u 12345 -g 12345 k6
COPY --from=builder /tmp/k6 /usr/bin/k6
COPY --from=redboxoss/scuttle:latest scuttle /bin/scuttle
COPY iam/libs /home/k6/libs

USER 12345
WORKDIR /home/k6
ENTRYPOINT ["k6"]
