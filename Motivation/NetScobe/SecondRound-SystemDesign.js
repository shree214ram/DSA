// Sign up Form
// First name,
// last name,
// email address, valid format @.com, .net, .org, unique: if the email exist show a message to sign in
// phone number, valid format 10 digits, unique: if the phone number exists show a message to sign in
// pass,
// confirm password,
// submit button

Function Requirment :- 
1. check email exist or not ? {if exist then show message : Email Already in sysytem}
2. Submit and then show a message {you have sucessfully Regustered in system.}

High Level Design :- 
1. multiple user 
2. Scale : millians 
3. Univarsal {Scale on other contries also}
4. High Availability {Load Balancing }
5. Performance {Lo Latency will be workable}
6. No CDN 
7. NO Redis Serching DB 
8. DB Scaling {DB sharding} 
9. No any Other Module {Simple Registration Form}




                                            Grefana 
                                            Health Check 
                                            Metrics 


                Client                   {High Availablity}
        {Desktop, Mobile, Laptop}        Load Balancer          server 1    server 2  server 3 {Single Point Of Failue}
                                        {USA , India , UK}     {Horizontal Scalling}
                                                                    |
                                                                    |
                                                                    |
                                         { User Service [Register/check email]}          K          TCP/IP {High Consistency}
                                                          API-Microservice               A              Master Slave 
                                                                                         F         DB1    DB2        DB3
                                                                                         K         MYSQL  MYSQL     MYSQL 
                                                                                         A

    Low Level Design 
    {UI : React , Javascript , CSS}
    1. Design a form 
    2. Validate for 
        Email , 
        PhoneNumber, 
        Pass-ConfirmPass

    {Backend NODE API [Express and Mysql ]}
    1. Check Email Already there ?

      1.user/checkEmail :- GET/Payload:- {email:"sunny.parmar@gmail.com"}
        1. import DB in Node Express 
        2. Connect stablished
        3. call api 
        4. get method {axis , fetch api }
        5. Handle Error Or sucess Stage {Promises}
        6. Return Back To ui {Sucess 200 ,statusType : sucess }
        7. User already there {status 200 statusType : Failuere , message: "This email already exist"}

      2. user/insertNewUser :- POST/Payload:- 
        {email:"sunny.parmar@gmail.com", phoneNo:123, firstName: "abc", lastName: "ljk", pass: "Encrypted format password"}
        Insert into DB 
        Show message ""

          

<div>
// build form here

</div>