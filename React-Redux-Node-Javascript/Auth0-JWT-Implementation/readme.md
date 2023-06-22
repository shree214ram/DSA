### What is Open ID and whats-the-difference-between-openid-and-oauth :-

https://stackoverflow.com/questions/1087031/whats-the-difference-between-openid-and-oauth


   #### OpenID (@sunny :- same like google/facebook/linkedId Single login)
    is about authentication (ie. proving who you are), OAuth is about authorisation (ie. to grant access to functionality/data/etc.. without having to deal with the original authentication).

   #### OAuth (@sunny :- After login via single login , sensitive data still will be hidden , till user might not re-authenticate) {token validate and OTP }. OAuth was created to remove the need for users to share their passwords with third-party applications.
    could be used in external partner sites to allow access to protected data without them having to re-authenticate a user.

    The blog post "OpenID versus OAuth from the user’s perspective" has a simple comparison of the two from the user's perspective and "OAuth-OpenID: You’re Barking Up the Wrong Tree if you Think They’re the Same Thing" has more information about it.

    1. Purposes

    OpenID was created for federated authentication, that is, letting a third-party authenticate your users for you, by using accounts they already have. The term federated is critical here because the whole point of OpenID is that any provider can be used (with the exception of white-lists). You don't need to pre-choose or negotiate a deal with the providers to allow users to use any other account they have.

    OAuth was created to remove the need for users to share their passwords with third-party applications. It actually started as a way to solve an OpenID problem: if you support OpenID on your site, you can't use HTTP Basic credentials (username and password) to provide an API because the users don't have a password on your site.

    The problem is with this separation of OpenID for authentication and OAuth for authorization is that both protocols can accomplish many of the same things. They each provide a different set of features which are desired by different implementations but essentially, they are pretty interchangeable. At their core, both protocols are an assertion verification method (OpenID is limited to the 'this is who I am' assertion, while OAuth provides an 'access token' that can be exchanged for any supported assertion via an API).

    2. Features

    Both protocols provide a way for a site to redirect a user somewhere else and come back with a verifiable assertion. OpenID provides an identity assertion while OAuth is more generic in the form of an access token which can then be used to "ask the OAuth provider questions". However, they each support different features:

    OpenID - the most important feature of OpenID is its discovery process. OpenID does not require hard coding each the providers you want to use ahead of time. Using discovery, the user can choose any third-party provider they want to authenticate. This discovery feature has also caused most of OpenID's problems because the way it is implemented is by using HTTP URIs as identifiers which most web users just don't get. Other features OpenID has is its support for ad-hoc client registration using a DH exchange, immediate mode for optimized end-user experience, and a way to verify assertions without making another round-trip to the provider.

    OAuth - the most important feature of OAuth is the access token which provides a long lasting method of making additional requests. Unlike OpenID, OAuth does not end with authentication but provides an access token to gain access to additional resources provided by the same third-party service. However, since OAuth does not support discovery, it requires pre-selecting and hard-coding the providers you decide to use. A user visiting your site cannot use any identifier, only those pre-selected by you. Also, OAuth does not have a concept of identity so using it for login means either adding a custom parameter (as done by Twitter) or making another API call to get the currently "logged in" user.

    3. Technical Implementations

    The two protocols share a common architecture in using redirection to obtain user authorization. In OAuth the user authorizes access to their protected resources and in OpenID, to their identity. But that's all they share.

    Each protocol has a different way of calculating a signature used to verify the authenticity of the request or response, and each has different registration requirements.

### Apart from OTP is there any way to re-authointicate use ??
    yes via some already existing question's answer user written at the time of registration 

# Securing Node.js RESTful APIs with JSON Web Tokens( jWT Tokens:-  2022)

https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/

# JWT Authentication with Node.js - GeeksforGeeks
https://www.geeksforgeeks.org/jwt-authentication-with-node-js/

# How to implement JWT authentication in Express.js app ? - GeeksforGeeks
https://www.geeksforgeeks.org/how-to-implement-jwt-authentication-in-express-js-app/?ref=rp


# How to Build an Authentication API with JWT Token in Node.js | Engineering Education (EngEd) Program | Section
https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/


