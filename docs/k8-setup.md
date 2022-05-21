Use this guide if you want to build a kubernetes cluster on your own, else one can use different utilities like
1. Minikube (https://minikube.sigs.k8s.io/docs/start/)
2. RKE2 (https://docs.rke2.io/)
3. Microk8s (https://ubuntu.com/kubernetes/install)

Most of the above packages also install the required binaries too.

## Web Links - https://youtu.be/n4zxKk2an3U

### containerd

https://github.com/containerd/containerd

https://github.com/containerd/containerd/releases

### nerdctl

https://github.com/containerd/nerdctl

https://github.com/containerd/nerdctl/releases

### CNI Plugins

https://github.com/containernetworking/plugins

https://github.com/containernetworking/plugins/releases

### Kubeadm Install

https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm

### CNI Plugins Bridge

https://www.cni.dev/plugins/current/main/bridge

## Commands -
```
# sudo bash

# First diasbale swap
swapoff -a

# And then to disable swap on startup in /etc/fstab
sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

# Change to /tmp
cd /tmp

# We'll run an apt update to populate apt
apt update

# Get latest containerd from soucre
wget https://github.com/containerd/containerd/releases/download/v1.6.4/containerd-1.6.4-linux-amd64.tar.gz
tar Cxzvf /usr/local containerd-1.6.4-linux-amd64.tar.gz 

# Install containerd as service
wget https://raw.githubusercontent.com/containerd/containerd/main/containerd.service -O /etc/systemd/system/containerd.service
systemctl daemon-reload
systemctl enable --now containerd
systemctl status containerd

# Install Runc
wget https://github.com/opencontainers/runc/releases/download/v1.1.2/runc.amd64
install -m 755 runc.amd64 /usr/local/sbin/runc

# Install CNI
wget https://github.com/containernetworking/plugins/releases/download/v1.1.1/cni-plugins-linux-amd64-v1.1.1.tgz
mkdir -p /opt/cni/bin
tar Cxzvf /opt/cni/bin cni-plugins-linux-amd64-v1.1.1.tgz

# Install Nerdctl
wget https://github.com/containerd/nerdctl/releases/download/v0.19.0/nerdctl-0.19.0-linux-amd64.tar.gz
tar Cxzvf /usr/local/bin nerdctl-0.19.0-linux-amd64.tar.gz

# Install and configure buildkit
wget https://github.com/moby/buildkit/releases/download/v0.10.3/buildkit-v0.10.3.linux-amd64.tar.gz
tar Cxvzf /usr/local buildkit-v0.10.3.linux-amd64.tar.gz 
wget https://raw.githubusercontent.com/moby/buildkit/master/examples/systemd/system/buildkit.service
wget https://raw.githubusercontent.com/moby/buildkit/master/examples/systemd/system/buildkit.socket
cp buildkit.service buildkit.socket /etc/systemd/system/
systemctl enable --now buildkit.service

# Run a Docker like command with Nerdctl
nerdctl run --rm -it alpine

# Install and configure kubeadm
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
br_netfilter
EOF

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF

sudo sysctl --system
sudo modprobe br_netfilter

sudo apt-get install -y apt-transport-https ca-certificates curl

# Install and pin kubernetes
sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl

# Get containerd default config
containerd config default | sudo tee /etc/containerd/config.toml

# If using ubuntu 22.04 You need to enable the SystemdCgroup(=true) flag inside the " [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]"

# Initialise kubeadm with a pod-network-cidr
kubeadm init --pod-network-cidr=10.23.0.0/16

# Configure kubeadm with a kubeconfig
export KUBECONFIG=/etc/kubernetes/admin.conf

# Create a CNI configuration
vim /etc/cni/net.d/10-bridge.conf ; watch kubectl get nodes -o wide
# Paste the following and save
{
    "cniVersion": "1.0.0",
    "name": "k8s",
    "type": "bridge",
    "isDefaultGateway": true,
    "forceAddress": true,
    "ipMasq": true,
    "hairpinMode": true,
    "ipam": {
        "type": "host-local",
        "subnet": "10.23.0.0/16"
    }
}

# Show cri0 bridge
ip addr

# Set an alias (update accordingly)
k8s_master=$(hostname)
echo $k8s_master

# Investigate node taints
kubectl describe node $k8s_master | more

# Remove taint
kubectl taint nodes $k8s_master node-role.kubernetes.io/master:NoSchedule-

## Not covered in the course, you may also need to remove the following taint if it is set (changed in 1.24)
kubectl taint nodes $k8s_master node-role.kubernetes.io/control-plane:NoSchedule-


```

