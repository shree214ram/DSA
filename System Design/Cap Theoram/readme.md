
https://www.youtube.com/watch?v=8UryASGBiR4
CAP Theorem Simplified 2021 | System Design Fundamentals | Distributed Systems | Scaler Academy

Consistency :- 
Availability :- 
Letency :- 

I am planning to build a business for reminder app 

1. Single server {Me}
    ===> its working fine but once we want to grown up business Or scalling 
2. Two Server {Me and My Wife}
    Data UnConsistency problem generates once Server1{My Diary} does not have that entry 
    even this entry exist in server2 { My Wife }

    And X client called to me and I replied there is no any Reminder for you 

    ===> My business will lost 
3. I come up with one solution :-
    We will store all the entries in both the system . 
    Now Consistency problem has been solved ,Now My business starts again 
    ===> One day again a new Problems comes up , My wife is Seak . A new Y person comes up and requested for add a new request . I added in my diary but was not able to add in My wife Diary because she is seak . So i rejected that request and again business going down once any one is On Off Or Sick . If we will not store in both the system again InConsistency Problem will generate .
    That is "UnAvailability" Problem 
4. I come up with one solution :-
    Once My wife will come on work i will request to her before taking any new Entry just add all the new entries added in my system in last 2 days .
    then we are again in Consistency Mode  
    ===> One day again a new Problem generate Me and My Wife Fight each other and we are not talking "Network Partition Issue"
5. In this problem there is one solution Eighter i can Consistent Or Available for Some time . And once we again talk to each other again system will be in consistency Mode 

## The most important part of CAP theoram is 
   1. Eighter we can Consistent with Partion 
   1. OR we can Available with Partion 
