https://www.youtube.com/watch?v=RjQjbJ2UJDg

### Important Functional Requirments
1. send , sent , recived , read {different stage of message communication}
2. Fast immidietelly one to one real world feel comunication 

### Important Non-Functional Requirments
1. High Availability {Web Socket}
2. Low Letency 
3. High Consistency 

### Important Contributers
1. User Device
2. Websocket 
3. Load Balancer 
4. Message Service 
5. Group Service 
6. user service 
7. Web Socket Manager 
8. Redis {user service data}
9. Cassandra {Message data}
10. CDN {Image , video } S3 Bucket


### Important Actions
1. Read Message 
   1. sent {1 grey tick}
   2. recived {2 Grey tick}
   3. read {2 Blue Tick}
2. User Is Online/Offline 

### Important Logics
1. U1 to U2 {Normal one to one messge}
2. U1 to G1 {Normal one to one Group messge}
2. U1 to upload image {Normal one to upload image and send Id to another user}

