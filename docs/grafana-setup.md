# Install kustomize
wget https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize%2Fv4.5.4/kustomize_v4.5.4_linux_amd64.tar.gz

# Install helm
wget https://get.helm.sh/helm-v3.8.2-linux-amd64.tar.gz
tar -xvzf helm-v3.8.2-linux-amd64.tar.gz linux-amd64/helm && mv linux-amd64/helm /usr/local/bin/

# Install the required 
kustomize build deploy --enable-helm | kubectl apply -f -

# Install istio-dashboards
```
# Address of Grafana
$ GRAFANA_HOST="http://10.100.163.252"
$ # The name of the Prometheus data source to use
$ GRAFANA_DATASOURCE="prometheus"
$ # The version of Istio to deploy
$ VERSION=1.13.3
$ # Import all Istio dashboards
for DASHBOARD in 7639 11829 7636 7630 7645; do
    REVISION="$(curl -s https://grafana.com/api/dashboards/${DASHBOARD}/revisions -s | jq ".items[] | select(.description | contains(\"${VERSION}\")) | .revision")"
    rm -f /tmp/${DASHBOARD}.json 
    curl -s https://grafana.com/api/dashboards/${DASHBOARD}/revisions/${REVISION}/download > /tmp/${DASHBOARD}.json
    echo "Importing $(cat /tmp/${DASHBOARD}.json | jq -r '.title') (revision ${REVISION}, id ${DASHBOARD})..."
    curl -s -k -XPOST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -d "{\"dashboard\":$(cat /tmp/${DASHBOARD}.json),\"overwrite\":true, \
            \"inputs\":[{\"name\":\"DS_PROMETHEUS\",\"type\":\"datasource\", \
            \"pluginId\":\"prometheus\",\"value\":\"$GRAFANA_DATASOURCE\"}]}" \
        $GRAFANA_HOST/api/dashboards/import
    echo -e "\nDone\n"
done
```