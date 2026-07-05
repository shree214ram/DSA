k get pods -o wide [fast pod high level details ]
k get pods -A
k get pod <podname> -o yaml [ful details]
k get pod <podname> -o yaml | grep -w "image" [Just print image direct]
kubectl get pods -o custom-columns="POD_NAME:.metadata.name,NODE_NAME:.spec.nodeName,IMAGE:.spec.containers[*].image"



===

To crack the Certified Kubernetes Administrator (CKA) exam fast, you must save time by minimizing typing. [1, 2] 
Here is the ultimate list of high-speed commands and shortcuts essential for passing the exam.
## 1. Speed Setup (Run First Thing)
Run these commands the second your exam environment loads to save minutes on every subsequent command.

* Set up short aliases:

alias k=kubectl
alias kgp="k get pods"
alias kgs="k get svc"

* Define the fast-delete variable:

export do="--dry-run=client -o yaml"
export now="--force --grace-period=0"

[3, 4, 5, 6, 7] 

## 2. High-Speed Imperative Commands
Never write YAML from scratch. Generate it instantly using your $do variable, then modify it. [8, 9, 10] 

* Create a Pod YAML:

k run nginx-pod --image=nginx $do > pod.yaml

* Create a Deployment YAML (with 3 replicas):

k create deployment web-app --image=nginx --replicas=3 $do > deploy.yaml

* Expose a Pod as a Service (ClusterIP):

k expose pod nginx-pod --port=80 --target-port=80 $do > svc.yaml

* Create a NodePort Service:

k create service nodeport web-svc --tcp=80:80 $do

[11] 

## 3. Rapid Troubleshooting & Deletion
When a resource is stuck or you need to inspect an error, use these fast-path tools.

* Force delete a pod instantly:

k delete pod <pod-name> $now

* Check logs with a tail limit:

k logs <pod-name> --tail=20

* Quickly view events sorted by time:

k events --sort-by='.metadata.creationTimestamp'

[12, 13] 

## 4. Cluster Architecture & JSONPath
You will get questions on backing up ETCD and upgrading nodes. Use these to find information instantly.

* Find the ETCD pod static manifest path:

cat /etc/kubernetes/manifests/etcd.yaml

* Drain a node for maintenance:

k drain <node-name> --ignore-daemonsets --delete-emptydir-data

* Uncordon a node after upgrade:

k uncordon <node-name>

* Get internal IPs of all nodes fast:

k get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="InternalIP")].address}'

[14] 

------------------------------
To help you prepare effectively for the CKA, let me know:

* Would you like the exact ETCD backup and restore command sequence?
* Do you need a quick cheatsheet for Ingress networking syntax?
* Are you struggling with NetworkPolicies or RBAC roles generation?


[1] [https://www.devoteam.com](https://www.devoteam.com/expert-view/kubernetes-all-you-need-to-know-about-cka-and-ckad-certifications/)
[2] [https://aptira.com](https://aptira.com/kubernetes-training-prep-for-the-certified-kubernetes-administrator-cka-exam/)
[3] [https://medium.com](https://medium.com/cooking-with-azure/certified-kubernetes-security-specialist-cks-exam-guide-a8fc2b4c47ea)
[4] [https://www.linkedin.com](https://www.linkedin.com/posts/vsadhwani_if-youre-preparing-for-kubernetes-certifications-activity-7343663593353089028-535B)
[5] [https://medium.com](https://medium.com/@rakeshsaw/how-i-pass-ckad-certified-kubernetes-application-developer-exam-c3fe9e59b59c)
[6] [https://medium.com](https://medium.com/google-cloud/cks-preparation-my-two-cents-on-passing-one-of-the-most-sought-after-certifications-bc27e227595d)
[7] [https://goelashwin36.medium.com](https://goelashwin36.medium.com/how-i-cracked-ckad-in-1-5-months-without-experience-8b9aeb1e11b9)
[8] [https://medium.com](https://medium.com/globant/how-to-manage-your-time-in-kubernetes-certification-exams-c062ca2097b1)
[9] [https://mkdev.me](https://mkdev.me/posts/6-tips-for-passing-certified-kubernetes-administrator-exam)
[10] [https://github.com](https://github.com/techwithmohamed/CKA-Certified-Kubernetes-Administrator)
[11] [https://itnext.io](https://itnext.io/how-to-ace-ckad-certified-kubernetes-application-developer-exam-ff5eb34ed7bf)
[12] [https://github.com](https://github.com/schnatterer/cks-short-tips)
[13] [https://www.linkedin.com](https://www.linkedin.com/posts/raidi-kartheek_kubernetes-devops-cloudnative-activity-7367590027842809857-D2EF)
[14] [https://support.crusoecloud.com](https://support.crusoecloud.com/hc/en-us/articles/42807984122011-How-To-Increase-the-Open-Files-nofiles-ulimit-on-Kubernetes-Worker-Nodes)



# 28 June 
k get svc  kubernetes -o yaml | grep labels -A 5

# 29 June 
k get svc  kubernetes -o yaml | grep labels -A 5
k get pods -o custom-columns='imageName:.spec.containers[*].image'
k explain pod 
 k explain pod.spec.containers
 k explain service.spec.ports

 k get pods --selector bu=finance --no-headers | wc -l

 Taint and tolerence 

 for unset a taint 

 k taint node node_name key=value:NoShedule- [atPlaceOfNoScheduleToNoScgedule-]

# 01 July 

apply label to node kubernetes :
k label nodes node01 color=blue

# 3 July 

Priority Class 
15:28 11q From 60 - 37remaining  15:51 , how much time  : 23 Min 

Multiple Scheduler 
15:54 6 question 16:16 23 min 

Lab Admission Controller 
16:20 8q 