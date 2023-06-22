#### whatis rest api :-
    Rest  is stands for  "Representational state transfer"

    REST is a web based architecture for representing data in different Format like Json,XML,HTML .
    Rest basically uses HTTP Protocol to perform different behavior and events Like 
    
    app.get
    app.post
    app.delete
    app.put

    Rest is a very good tool for transfer information from one source to destination .
    Rest is platform and language independent it can be supportable in any Opertaing system OS/Windows/Linux and supportable in all Programming Lannguage like Java/Python/Javascript/PHP

    API is "Application Programming Interface" 

#### What is webservice ?
    Web service the group of collections of so many small services 

###### Best Practice for Implement Rest API 
https://scalans.com/9-best-practices-to-follow-for-a-perfect-restful-api-design
1. Security :-
  
    1. HTTP and SSL and TSL 
    2. Cross Site Scripting (XSS)
    3. API GetWay {Reverse Proxy}
    4. Oauth {JWT Token} (Authointication And Authorization)
    5. Prioritize vulnerabilities 
    6. Validate all input variales with all SQL Injections :- Validation at each field from client/server side 

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
        406 - If an HTTP Accept header can't be satisfied, return a 406. If an Accept-Language header can't be satisfied, what's the proper response code? 406
        429 - Too many requests
    500x
        500 - Internal Server Error :- server throws exception error 
        502 - Bad Gateway :- when a proxy server is used and having one proxy error then we need to show this error 
        503 - Service Unavailable ;- Server goes down 
        504 - Gateway Timeout :- 
Coffee Break

#### Difference between authentication and authorization
1. Authentication :- user/password checking 
2. Authorization :- after login , user has access to the perticuler screen/api via role and permission . Like Admin cant add product in ecomerce website only view and add to cart . 
https://identitymanagementinstitute.org/difference-between-authentication-and-authorization

#### What is accesibility in backend ? 

### What are IDEMPOTENT and/or SAFE methods?
https://restcookbook.com/HTTP%20Methods/idempotency/

GET , HEAD and OPTION are the safe methods ,Safe method means they will not update the resource . 

Idempotent Means it will not change the resource even so many times called the method 

for example 

```a=4 is idempotent a will be remain same if we call 10 times 
``` 

```a++ is not idempotent a will be change if we call 10 times it will be 10 if we starts from 1 
``` 

### What is HATEOAS and why is it important for my REST API?
https://restcookbook.com/Basics/hateoas/

Hypertext as the Engine of Application State , is used to findout the way 

1. for example 

GET /account/12345 HTTP/1.1

HTTP/1.1 200 OK
<?xml version="1.0"?>
<account>
    <account_number>12345</account_number>
    <balance currency="usd">100.00</balance>
    <link rel="deposit" href="/account/12345/deposit" />
    <link rel="withdraw" href="/account/12345/withdraw" />
    <link rel="transfer" href="/account/12345/transfer" />
    <link rel="close" href="/account/12345/close" />
</account>
balance is 100 usd so it might be deposite , withdraw transfer Or close .

2. for example 
GET /account/12345 HTTP/1.1

HTTP/1.1 200 OK
<?xml version="1.0"?>
<account>
    <account_number>12345</account_number>
    <balance currency="usd">-25.00</balance>
    <link rel="deposit" href="/account/12345/deposit" />
</account>
balance is -25 usd so it can be only deposite not other  .


#### Unsatisfied Accept Language (406) ? 
If an HTTP Accept header can't be satisfied, return a 406. If an Accept-Language header can't be satisfied, what's the proper response code?
https://restcookbook.com/HTTP%20Headers/acceptlanguage/

#### I want to figure out which methods are supported on a resource. ? 

https://restcookbook.com/HTTP%20Methods/options/
 Please also see "cors policy" C:\Users\Ambika\Desktop\ShreePrep\DSA\React-Redux-Node-Javascript\Javascript\CORS\readme.md


### I want users to login into my RESTful API so only they can see (protected) resources. What is the correct way to do this?
https://restcookbook.com/Basics/loggingin/
1. Basic Authentication {Using HTTP basic authentication}

  GET / HTTP/1.1
  Host: example.org
  Authorization: Basic Zm9vOmJhcg==

   1. Username and password will be sent in Authorization in base 64 incrupted format 
   2. this work only in SSL Or TLS not in simple HTTP
   3. 
2. HMAC {Hypertext Message Authointication}:-
   1. In Basic Authentication there is one drawback basecode password can be easily tracked .
   2. With the help of HMAC we can more secure with some cutom hash protected version 
3. OAUTH {}:-
   1. IN HMAC also a drawback we have to send password in each api call so it can be easily tracked .
   2. So we need to think for teperory password so token is the correct way to introduced more security so OAUTH will be the best way . 
   3. token and secret are the two important values will go to server and safe the API  

### What is the correct way to version my API?
https://restcookbook.com/Basics/versioning/

1. The "URL" way

A commonly used way to version your API is to add a version number in the URL. For instance:
/api/v1/article/1234
To "move" to another API, one could increase the version number:
/api/v2/article/1234

2. The hypermedia way

GET /api/article/1234 HTTP/1.1
Accept: application/vnd.api.article+xml; version=1.0

### How many ways to pass data in rest api :-
https://customercare.igloosoftware.com/support/developers/kb/articles/different_ways_to_pass_data_in_your_api_calls

1. Header parameter :-
    Header parameters: Parameters included in the request header, usually related to authorization.

    After making the create session API calls against your digital workplace (visit creating a session with Igloo via APIs to learn more), a token is returned which is a necessary parameter to make subsequent API calls (visit the subsequent API calls page for more information). This parameter is passed in the header as it is an authorization credential. Example: 

    headers: {
            Accept: 'application/json',
            Cookie: `iglooauth=${this.token}
    }
2. query string parameter , `?titile=test&&pass=test123 ` 

      # In Express it's already done for you and you can simply use req.query for that:

      var id = req.query.id; // $_GET["id"]
      
      # Otherwise, in NodeJS, you can access req.url and the builtin url module to url.parse it manually:

      var url = require('url');
      var url_parts = url.parse(request.url, true);
      var query = url_parts.query;

      # with the help of searchParams  https://usefulangle.com/post/91/nodejs-get-url-parameters 
<script>
        const url = require('url');
            
        const current_url = new URL('http://usefulangle.com/preview?id=123&type=article');
        const search_params = current_url.searchParams;

        const id = search_params.get('id');

        // "123"
        console.log(id);

        // ### Check parameter is there or not
        // true
        if(search_params.has('id')) {
            // 
        }

        // false
        if(search_params.has('name')) {
            // 
        }
  </script>

3. path parameter :-
        Path parameters: Parameters within the path of the endpoint. In the documentation, they're denoted with { curly braces }.
    Examples of this type of parameterizing can be found in a variety of Igloo APIs like:

    /.api/api.svc/blogarticles/{blogArticleId}/update
    As shown below, the blogArticleID is passing within the actual request URL.

    /.api/api.svc/blogarticles/7217f760-c960-4233-a42c-2fc3ed41a9c1/update
<script>
    app.get('/sample/:id', routes.sample);
    // /sample/2
    req.params.id //will print 2 
    </script>
4. payload parameter :-
    const querystring = `title=${title}&parentId=${parentId}&description=${description}&content=${content}&urlTitle=${urlTitle}`;

    axios.post(`https://${this.url}/.api/api.svc/wikiarticles/${wikiArticleId}/update?${querystring}`, null, this.options)
      .then((response) => {
        console.log(response.data.response);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }
5. Request body parameters: Parameters included in the request body. Usually submitted as JSON.
The JSON object contains key-value pairs and may include multiple levels of nesting. For example: 

<script>
updateWiki(wikiArticleId) {
    var payload = new FormData();
    payload.append("title", "This is the title.");
    payload.append("content", "This is the content");
    var options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      }
    };
    axios.post(`https://${this.url}/.api/api.svc/wikiarticles/${wikiArticleId}/update`, payload,    options)
      .then((response) => {
        console.log(response.data.response);
      })
      .catch((err) => {  
        if (err) {
          console.log(err);
        }
      });
  } 
</script>

  ### we can get by req.body after 
   1. adding body-parser and 
   2. add middleware at Post call Or app.use 

<script>
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');

    // Create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.use(express.static('public'));
    app.get('/index.htm', function (req, res) {
        res.sendFile( __dirname + "/" + "index.htm" );
    })

    app.post('/process_post', urlencodedParser, function (req, res) {
        // Prepare output in JSON format
        response = {
            first_name:req.body.first_name,
            last_name:req.body.last_name
        };
        console.log(response);
        res.end(JSON.stringify(response));
    })

    var server = app.listen(8081, function () {
        var host = server.address().address
        var port = server.address().port
        
        console.log("Example app listening at http://%s:%s", host, port)
    })
    </script>




### When should we use PUT and when should we use POST?

https://restcookbook.com/HTTP%20Methods/put-vs-post/
PUT and POST are both unsafe methods. However, PUT is idempotent, while POST is not.



### When should we use the PATCH HTTP method?

https://restcookbook.com/HTTP%20Methods/patch/
    
Patch is only for partial data needs to be update . Patch is neighter Idempotennt nor safe 

### What is difference between PUT and PATCH ??
https://www.geeksforgeeks.org/difference-between-put-and-patch-request/
PUT and Patch basically used for update the data in DB 

1. Put is same like POST ,in which we have to send payload . But in PUT we have to send other details also in payload which will not be updated .
    {
      email: "hello@geeky.com",
      first_name: "Geeky",
      id: 21,
      avatarlast_name: "test"
    }
    If we will not pass so other fields maight be updated with email and firstname . 

2. In Patch only those perticuler details are required only which needs to be updated . 
    {
      email: "hello@geeky.com",
      first_name: "Geeky",
    }
<script>
    let PutRequest = () => {
    // Sending PUT request with fetch API in javascript
      fetch("https://reqres.in/api/users/2", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "PUT",

        // Sending only the fields that to be updated
        body: JSON.stringify({	
          email: "hello@geeky.com",
          first_name: "Geeky",
          id: 21,
          avatarlast_name: "test"
        })
      })
      .then(function (response) {

      // Console.log(response);
      return response.json();
      })
      .then(function (data) {
      console.log(data);
      });
    };

    PutRequest();
</script>

# Restful Web Services | Rest Response | Rest Response Codes | #04

https://www.youtube.com/watch?v=epp4C3MGbtI&ab_channel=ProgRank

# upload file from Post man RestAPI 
https://roytuts.com/how-to-call-file-upload-rest-api-using-postman/
https://www.becomebetterprogrammer.com/how-to-build-a-file-upload-rest-api-in-node-js-and-express/