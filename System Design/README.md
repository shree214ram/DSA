============================= Very Good Content (The Code Skool) High Level System ======================

#### Introduction of System Design 
https://www.youtube.com/watch?v=SsPSJvH2mew&t=433s

```
I have talked about how to learn System Design or High-Level Design(HLD) as a beginner. I have discussed what are the best resources for learning System Design like how to use educative.io courses. This will help you to transition from an SDE-1 to an SDE-2 role at any company.

I have covered all the concepts that are mandatory to learn system design and the standard problems you need to know before going to the interview. 
```
#### Important Concepts
1. Scalability :- How we can scale our system Or how we can build a system so millions of user can use in single time And How can so much traffic can be handle on system
   1. Horizontal
   2. Vertical Scaling
   ###### https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX
    System Design
    Gaurav Sen
    System Design Basics: Horizontal vs. Vertical Scaling
   
2. Performance:- How we can increase the  performance of our system in terms of scability and traffic control 
3. Latency and Throughput :- Response time of system and how its impacted in terms of scability and performance . Howmuch numbers of request comming in system 
4. Consistency :- is our system consistent or not , Is our system returning same data for every api call 
    1. strongly consistent 
    2. weekly consistent 
    3. eventualy consistent 
    ###### https://www.youtube.com/watch?v=zaRkONvyGr8
    What is Consistent Hashing and Where is it used?
    1. make a circle and 
    2. use hash function to distribute server 
    3. Load balancing and availability will be improved from this 
    4. nearest server will be reachable first by request near by 
    5. We can add more vertual server with the help of More Hash function  
    Gaurav Sen

    ###### https://www.youtube.com/watch?v=m4q7VkgDWrM
    Data Consistency and Tradeoffs in Distributed Systems
    1. Consistency
    2. Availability
    3. Partition Tolerance

    Commit And Rollback 
5. Availability
6. Partition Tolerance
7. CAP Theorem
8. Domain Name System
9. Content Delivery Network
10. Load Balancers and Reverse Proxy
    Load Balancing 
    ###### https://www.youtube.com/watch?v=K0Ta65OqQkY
    What is Load Balancing? ⚖️
    Gaurav Sen
    ###### Proxy / Reverse Proxy / Load Balance :- 
    1. what is proxy ?.
    2. What is Reverse Proxy ?.
    3. What is difference between Load Balancer and Reverse Proxy ?.
    4. What is difference between VPN and Reverse Proxy ?.
    https://www.youtube.com/watch?v=MiqrArNSxSM&ab_channel=ITkFunde

11. Microservices
12. Databases
    # https://www.youtube.com/watch?v=5faMjKuB9bc
    What is Database Sharding?
    Gaurav Sen
    745K views
    3 years ago
13. Caching
    ###### https://www.youtube.com/watch?v=U3RkDLtS7uY
    What is Distributed Caching? Explained with Redis!
    {How to reduce Network Call}
    1. To Save Network Call
    2. To Avoid Recomputation 
    3. ToReduce DB Load 
    Redis :-
    LRU 
    1. Server Cheche 
    2. Database Cheche 
    3. Globle Chache 

        Write Through 
        Write Back
14. Message Queues
    ###### https://www.youtube.com/watch?v=oUJbuFMyBDk
    What is a Message Queue and Where is it used?

    With Pizza shop example and Load balancer , there is a very important thing in Sysytem Design is 
    Task/Message Queue :- 

System Design Primer - https://github.com/donnemartin/system...

Standard Questions
1. Pastebin
2. TinyURL
3. Uber
4. BookMyShow
5. Twitter Feed
6. Facebook Messenger
7. Search in Instagram
8. Video Streaming Service


Educative.io course - https://www.educative.io/courses/grok...

System Design template - https://leetcode.com/discuss/career/2...

Netflix Blog - https://netflixtechblog.com/

Uber Engg Blog - https://eng.uber.com/

Google Developers - https://developers.googleblog.com/

High Scalability - http://highscalability.com/

 Subscribe to my channel for more such videos :D

Join my Telegram link for interview preparation material and updates:
https://t.me/thecodeskool

You can also reach me at:

Instagram: 
https://www.instagram.com/thecodeskool/

Twitter: 
https://twitter.com/theCodeSkool

LinkedIn:
https://www.linkedin.com/in/deevanksh...


=========== Gaurav Sen System Design Introduction in term of Pizza Shop ==============

# https://www.youtube.com/watch?v=SqcXvc3ZmRU

All the important term explain in term of Pizza Shop 

Systems design is the use of computer engineering principles to build large scale distributed systems. It involves converting business problems and requirements into technical solutions. Senior engineers use system design patterns to make reliable, scalable and maintainable systems.

We mention 10 tips/terms used by engineers when designing systems:

00:00 Intro
00:38 Vertical scaling
01:07 Preprocessing using cron jobs
01:31 Backup servers
02:12 Horizontal scaling
02:37 Microservices
04:00 Distributed Systems
05:24 Load Balancing
06:39 Decoupling
07:15 Logging and metrics calculation
07:45 Extensibility
08:38 Low level system design

Looking to ace your next interview? Try this System Design video course! 🔥
https://get.interviewready.io?source_id=sdbasics

Course chapters: 
1) Design an email service like Gmail
2) Design a rate limiter
3) Design an audio search engine
4) Design a calling app like WhatsApp
5) Design and code a payment tracking app like Splitwise
6) Machine coding a cache
7) Low level design of an event bus

The chapters have architectural diagrams and capacity estimates, along with subtitled videos. Use the coupon code of 'earlybird' to get a 20% discount!

References:
Scalability Basics: https://youtu.be/xpDnVSmNFX0
Load Balancing: https://youtu.be/K0Ta65OqQkY
Microservices: https://youtu.be/qYhRvH9tJKw
Single Point of Failure: https://youtu.be/-BOysyYErLY
Backups: https://youtu.be/GeGxgmPTe4c
Health checks: https://youtu.be/lWE_UIbm8NA
Designing Data Intensive Applications - https://amzn.to/2yQIrxH

System Design Playlist: https://www.youtube.com/playlist?list...


1. Vertical Scalling (Single Chef)
2. Pre Request Preparation (Single Chef with more work in extra working hours and give him extra {Cron Jobs})
3. Master Slave Architecture (Backup) (Keep one temperory chef who will support when Main Chef sick)
4. Horizontal Scalling (Keep 3 Main Chefs and 3 Backup chefs)
5. Microservices (Keep sapertae request according to their speciallity 1 chefs for Garlic Pizza , 1 for Onion Pizza , 1 for Garlic Bread )
6. Distrubuted System (2 more shops so we will not blocker because of 1 system )
7. Load balancer (Route the request according to system nearest(Time) and avalability status )
8. Decoupling (According to Item send the request in their shop means a shop having burger available so will take the order and send back to shop2 )
9. Logging and Matrics calculation (Any blocker like bike is got stuck , system will see the logs and findout the issue event by event debugging )
10. Extensible (System should be large extensiable like in future any new category comes so system will easily manage . Example Swiggy easily started Swiggy Instamart because it has already system only they have to Keep some small inhancement and they were succeed )

# https://www.youtube.com/watch?v=rJHTK2TfZ1I
What's an Event Driven System?
Gaurav Sen
237K views
4 years ago



# https://www.youtube.com/watch?v=iRhSAR3ldTw
System Design of Doordash: Geo-Hashing and WebSockets for Location Based Services
Gaurav Sen
12K views
2 days ago
New


============================================ Low Level Sysytem Design==========================================
https://www.youtube.com/watch?v=W-aJ1Kp_0P8
Low-Level System Design RoadMap | Object-Oriented Programming | OOPS | SDE1 to SDE2

https://www.youtube.com/watch?v=Q239RHZKO7w
Best System Design Roadmap for FRESHERS | Low Level Design | OOPS | System Design Interview


Basic Requirments for System Design :-
1. OS 
2. DBMS
3. Network 
https://www.youtube.com/watch?v=YD1GR5Z3UpU
Learn System Design For FREE | Best System Design Roadmap | How To Learn System Design?


##################################################### Scaler Mohit Yadav ######################################
https://www.interviewbit.com/system-design-interview-questions/

https://www.youtube.com/watch?v=hPoGyTrhzPE

Relational Data Modeling
0:00

Horizontal vs Vertical Scaling
14:20

Stateless vs Stateful Systems
38:06

Load Balancing in Stateful Systems
43:38

Consistent Hashing
51:12

What is Caching?
55:51


https://www.youtube.com/watch?v=mswjnBHHd1M
Load Balancing and Traffic Routing Strategies Simplified | System Design Fundamentals 2022


https://www.youtube.com/watch?v=q7hEUcgJfZE
Stateless vs Stateful Systems | System Design Fundamentals | Scaler Academy
SCALER
10K views
1 year ago


https://www.youtube.com/watch?v=a0rFl3_BAt0
Load Balancing in Stateful Systems | System Design Fundamentals | Scaler Academy
SCALER
3.6K views
1 year ago

https://www.youtube.com/watch?v=NFzHTqbd8GU
Caching Simplified for Beginners 2021 | Introduction to Caching | System Design Fundamentals


https://www.youtube.com/watch?v=8UryASGBiR4
CAP Theorem Simplified 2021 | System Design Fundamentals | Distributed Systems | Scaler Academy

Consistency :- 
Availability :- 
Letency :- 


https://www.youtube.com/watch?v=P_eh1b6vE-4 

https://www.youtube.com/watch?v=mswjnBHHd1M&t=40s
Load Balancing and Traffic Routing Strategies Simplified | System Design Fundamentals 2022

-------------------Others-----------------------

https://www.youtube.com/watch?v=vge7qwCR1dA&list=PLt4nG7RVVk1g_LutiJ8_LvE914rIE5z4u
Basics of System Design
Coding Simplified
System Design - Load Balancers
10:25
System Design - Cache | Caching | Cache Invalidation | Cache Eviction
18:27
VIEW FULL PLAYLIST

=========================================================
https://www.youtube.com/watch?v=bUHFg8CZFws
System Design Interview – Step By Step Guide

========================================================
https://www.youtube.com/watch?v=OyTEd9h_CVQ&list=PLkQkbY7JNJuAhePp7E_WSpfFqjQp6RniV
System design tutorial
Tech Dummies Narendra L
Learn System design : Distributed Systems Introduction | Horizontal scaling vertical scaling
17:20
Learn System design : Distributed datastores | RDBMS scaling problems | CAP theorem
21:08
VIEW FULL PLAYLIST

========================================================
https://www.youtube.com/watch?v=4hDaQNWqSHA
System Design - How to design a system


========================================================
https://www.youtube.com/watch?v=3loACSxowRU&list=PLhgw50vUymycJPN6ZbGTpVKAJ0cL4OEH3


14
NOW PLAYING
PLAY ALL
System Design Interview Preparation Series
codeKarle
System Design and Architecture Interview Preparation Series by FAANG Engineers
0:39
Database Design Tips | Choosing the Best Database in a System Design Interview
23:28
VIEW FULL PLAYLIST


https://www.youtube.com/watch?v=T6n5PCYLSr0
HLD CheatSheet of Questions to ask|High Level System Design Interview|Extensive list of Quess to ask


======================
https://www.youtube.com/watch?v=q0KGYwNbf-0 
goole syaytem design interview

7:30
https://www.geeksforgeeks.org/system-design-tutorial/
https://www.geeksforgeeks.org/getting-started-with-system-design/
https://www.geeksforgeeks.org/5-common-system-design-concepts-for-interview-preparation/