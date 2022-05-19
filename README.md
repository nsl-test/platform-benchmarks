# Developer setup

## Local (Macos)
1. Install pre-requisites 
```
brew install colima

# use containerd environment to interact with docker commands
colima start --runtime containerd --mount-type 9p

# use kubernetes environment to interact with deployment commands
colima start --runtime kubernetes -c 4 -d 20 -m 7 --mount-type 9p
```

2. Run the following commmands to generate the k6 script and run it using docker
Generate the k6 script ( <module_name> can be iam, query, txn ,...)
```
$ make var=<module_name> gen
```

3. Start the prometheus, grafana, k6 containers.
```
$ nerdctl compose up -d
```

4. Execute the k6 script
```
$ ./docker-run.sh <module_name>
```

## Server
1. Follow docs to install [k8 and required utils](docs/k8-setup.md)
2. Install operator [k6 operator](https://k6.io/blog/running-distributed-tests-on-k8s/)
3. Install in-cluster [grafana and prometheus](docs/grafana-setup.md)
4. Run the test on k8 cluster
```
$ kubectl create configmap iam --from-file iam/k6-scripts.js
$ kubectl apply -f iam/k6.yaml
```

