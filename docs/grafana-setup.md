# Install kustomize
wget https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize%2Fv4.5.4/kustomize_v4.5.4_linux_amd64.tar.gz

# Install helm
wget https://get.helm.sh/helm-v3.8.2-linux-amd64.tar.gz
tar -xvzf helm-v3.8.2-linux-amd64.tar.gz linux-amd64/helm && mv linux-amd64/helm /usr/local/bin/

# Install the required 
kustomize build deploy --enable-helm | kubectl apply -f -