



# AWS
Cloud skills: AWS Cloud, AWS SQS, AWS Lambda / AWS SAM, AWS API Gateway, AWS S3, AWS Cloudformation, Terraform

Experience with cloud-based infrastructure such as AWS (including EC2, S3, SQS, SNS,
DocumentDB, OpenSearch) and containerization technologies such as Docker and
Kubernetes

Understanding of core AWS services, uses, and basic AWS architecture best practices

9)Proficiency in developing, deploying, and debugging cloud-based applications using AWS

10)Should have knowledge on AWS services like AWS – SNS, SQS,WAT, ELB, Rest API, VPC,      Cloudfront,secretManager,CloudTrail,Load Balancers, Route53

11)Proficiency in AWS Services like ECS,EC2,S3,Lambda,APIgateway,Cloudwatch,Cloud Formation & Dynamo DB

Working knowledge in AWS Services - S3/Lambda/Dynamo DB etc

Cloud AWS :-
            EKS, ECS, ECR, Fargate, EC2, Lambda, ALB

Reviosion of AWS  
    1. Intro 
    2. Benifits 
    3. Services 
        1. Elastic Computing Cloud EC2 
        2. Elastic Container Repository 
        3. AWS Lambda 
            1. Lambda Functions
            2. Benifits 
            3. Drawbacks / Limitation 
            4. Difference between EC2 Vs ECR Vs Lambda
        4. API Gateway 
        5. Load Balancer 
        6. AWS Storage 
            1. S3
            2. Multimedia 
            3. Application Data 
            4. Database 
            5. Glaciar [Birth Certificate]
        7. Elastic Search {Kibana Dashboard}
        8. Benstalk 

### What is AWS , Imortance , uses , advantages, 
https://www.tutorialspoint.com/amazon_web_services/amazon_web_services_elastic_compute_cloud.htm
https://www.tutorialspoint.com/amazon_web_services/amazon_web_services_elastic_block_store.htm

https://www.youtube.com/watch?v=r4YIdn2eTm4&ab_channel=Simplilearn
https://www.youtube.com/watch?v=wrMHPvDhQc4&ab_channel=edureka%21Hindi
https://www.youtube.com/watch?v=dDN-t69sa3U&ab_channel=GreatLearning


### EC2 {Elastic Cloud Computing}
https://www.youtube.com/watch?v=gVYcA4rLYek&ab_channel=edureka%21Hindi

### AWS LAMBDA 
https://www.youtube.com/watch?v=97q30JjEq9Y&ab_channel=Simplilearn

https://www.youtube.com/watch?v=3Ar1ABlD_Vs&ab_channel=TinyTechnicalTutorials


### AWS LAMBDA Vs AWS EC2
https://www.youtube.com/watch?v=e8Vh9-hsRBo&ab_channel=BeABetterDev

### AWS LAMBDA Vs ECR Docker Vs AWS EC2
https://www.tinystacks.com/blog-post/choosing-between-aws-lambda-and-docker/
https://www.youtube.com/watch?v=-L6g9J9_zB8&ab_channel=BeABetterDev


### Amazon Elastic Container Registry
https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html

### Implement a Basic App On AWS 
https://www.youtube.com/watch?v=7m_q1ldzw0U&ab_channel=TinyTechnicalTutorials

Amplify --> API Gateway--> Lambda --> DynamoDB 
                               |
                               |
                               AMI 
### AWS Route53
1. DNS :- connect IP address to a DNS {Domain Name Server}
2. Health Check :- If any health check outage issue detected it redirects to appropriate server 
3. Geolocation Routing Policy :- Once go to the other Region its autometically change region 

### AWS Disaster Recovery option 
https://www.youtube.com/watch?v=8IJUHf5cdbc&ab_channel=GoCloudArchitects

1. Backup (Synchronization):- Backup from data center and keep at cloud 
2. Backup (Synchronization + Transection) :- This is more frequent rather than first approach . 
    We will do the transection from database of Data Center to Cloud DataBase 
3. Auto Scalling :- This method not only transection the data to cloud even generate the same full enviornemnet like Data Center at cloud. So once the Load is so high on Data Center then load will transform to Cloud autometically . This is a very great feature . It Provides very high speed , high performance for Disaster recovery. 
4. Pure and Active Image :- Now all the server and DB replica enviornement has been setup at cloud . If ant things break on data center then cloud has a same enviornemnt so load will transfer their and it is in active and running state . 

# Amazon Elastic Search {Kibana Dashboard}
https://www.youtube.com/watch?v=KNFSJbg7i-c&ab_channel=JohnnyChivers
https://www.youtube.com/watch?v=dPCFGt1AuJw&ab_channel=AWSTutorials
https://www.youtube.com/watch?v=hPc1ecsxRBU&ab_channel=MaheshKariya

### Rest API using Node + MongoDB + API Gateway + Lambda 
https://medium.com/tech-at-nordstrom/building-a-rest-api-in-node-js-using-aws-services-mongodb-and-serverless-framework-9e0530baaa3f

### Amazon Kinesis? 
Streaming the data 

### Amazon CloudFront? 
cloudfront is the CDN It retrived the data from S3 bucket and with the help of network layer generate some "edge Location" . 

once user request out DNS , cloud front serch in nearest "edge location" if data is available in cache then provides it directelly other wise download from edge and show on client device . 

### Most Important Things at the time of selection multiple Region {geographic-zones-regions}
    https://cloud.google.com/architecture/framework/system-design/geographic-zones-regions

    https://aws.amazon.com/blogs/architecture/what-to-consider-when-selecting-a-region-for-your-workloads/

    https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html
    https://aws.amazon.com/blogs/developer/determining-an-applications-current-region/
    

   # lambda function for aws to allow multiple region to access app 

    https://aws.amazon.com/blogs/compute/building-a-multi-region-serverless-application-with-amazon-api-gateway-and-aws-lambda/
  
   # Deploy lambda function for over the Globe {multiple region} 
    https://aws.amazon.com/blogs/compute/deploying-aws-lambda-layers-automatically-across-multiple-regions/ 