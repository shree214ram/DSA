https://www.cuelogic.com/blog/microservices-with-node-js

#### What is webservice ?
    Web service the group of collections of somany small services 
#### whatis rest api :-
    Rest  is the "Representational state transfer "
    API is "Application Programming Interface" 

##### How To implement SSO (Single Sign on) In Microservice Architecture?
    https://stackoverflow.com/questions/25595492/single-sign-on-in-microservice-architecture

    Amazon has a central SSO which is usable in Amazon Storefront , Alexa,Amazon Prime , Amazon Music 
    Google has a central SSo which is usable for Gmail,Youtube,GoogleMap, 

###### Best Practice for Implement Rest API 
https://scalans.com/9-best-practices-to-follow-for-a-perfect-restful-api-design
1. Security :-
    1. Use SSO and Token Auth V2 
    2. Validate all input variales with all SQL Injections 
    3. 
2. Use JSON for REQUEST/RESPONSE Payload/response
3. Avoid Using Verbs in Rest API Path :-
    "POST: /user" is correct at place of "POST: /user/createUser" 
    "GET: /user"
    "GET: /user/1"
    "PUT: /user/1"
4. Apply Verbs correct in Rest API Path :-
    Don't get confuse to user , write standered path 
5. Allow Search/Sort/Paginatio in API 
6. Handle Error properly 
7. Handle proper status code {200,404,400,500}
8. Maintained Version /v1/ , /v2/


#### Status Code in Rest API
https://qatechhub.com/api-testing-api-status-codes/

https://dev.to/_staticvoid/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5

Most Used API Codes
    200x
        200 - OK
        201 - Created
    300x
        301 - Moved Permanently
        302 - Found
    400x
        400 - Bad Request
        401 - Unauthorized
        403 - Forbidden :- You dont have permission to do that perticular Action 
                            1. You are normal user you cant do Admin Activity .
        404 - Not Found :- /users/1234  , 1234 user not found . 
        405 - Method not allowed :- If you have a POST /users and a GET /users but do not have a DELETE /users, then if I try to DELETE /users you should return a 405 status code to me, this status code
        429 - Too many requests
    500x
        500 - Internal Server Error :- server throws exception error 
        502 - Bad Gateway :- when a proxy server is used and having one proxy error then we need to show this error 
        503 - Service Unavailable ;- Server goes down 
        504 - Gateway Timeout :- 
Coffee Break