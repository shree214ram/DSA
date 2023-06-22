# Design a website having 3 feature 
   1. upload video / image 
   2. text content  
   3. chat box feature for query 

1. Requirments / Priority ??
    1. video / Image Guiedlines 
    2. Chat box {query}
    3. latherboard 
    4. How much user millions , initially 100 users 
    5. It is Open to use to normal User /Admin 
    6. Region {} , 
    6. Analytical Dashboard 
    7. Availably and consistency
    8. Scalability 

2. HLD 
    1. Microservice Admin 
        1. Upload service {Just save data no other crud }
            1. MongoDb {Storing the Media}
            2. CDN for storing data 
            3. Mysql {User} 
        2. User Service {Lator}
    2. Normal User {simple register , ask query , look video }
3. LLD
   
4. acceptenace 