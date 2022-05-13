# Postman Collection

Run the following commmands to generate the k6 script and run it using docker

1. Generate the k6 script ( <module_name> can be iam, query, txn ,...)

$ make var=<module_name> gen

2. Start the prometheus, grafana, k6 containers.

$ docker-compose up -d

3. Execute the k6 script

$ ./docker-run.sh <module_name>