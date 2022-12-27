System Design for Notification System which can meet all the functional requirements below:
Understand system events from various systems in organisation that are happening for users based on data changes, user’s actions, etc. and interpret and deliver actionable messages [Event Based]
Route the alerts, notifications to the right channels to ensure right engagement and make it cost effective as well [multi channel]
Enable product managers to configure/schedule personalised notifications at the right time [scheduled]
Ability to aggregate multiple notifications into a single one to enable mail digest to customers [batching/digest]


https://www.youtube.com/watch?v=CUwt9_l0DOg&ab_channel=codeKarle


### Important Functional Requirments
1. send notification {atevery important events}
2. Pluggable {we can easily plug other app as well like , i want to send message on watsup}
3. Saas {means we can track every user rate limit for sending and reciving message }
4. Prioritization :- High:- OTP , Transection {order,dispatched,dilivered,return} , Low:- advertisement , promoting 

### Important Non-Functional Requirments
1. High Availability {Web Socket}
2. Many Clients {so many requests can be send}

### Important Contributers
1. Client Device
3. Load Balancer 
4. Notification Service 
5. Notification Validations & Priorition  
6. user Transection Data 
7. Rate Limiter {user is calling me so many times , how max he can call ? }
8. Notification Handlers and User Preferences 
9. Kafka 
10. Redis 
11. Email Handler Service 
12. SMS Handler Service 


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

