# Microfrontend 
https://www.youtube.com/watch?v=s_Fs4AXsTnA&ab_channel=JackHerrington

1. make 2 different apps with help of "Create-mf-app" , 1. Host (8080), 2.Remote(3000) 
2. Remote App :-
    1. go in Remote App and then create a Counter componanat 
    2. webpack.config.js --> plugin --> ModuleFederationPlugin --> exposes --> 
        exposes: {
            "./Counter" : "./src/Counter.jsx"
        }
    3. restart after save all changes , its must 
3. Host App :- 
    1. webpack.config.js -->plugin-->ModuleFerationPlugin --> remotes -->
        remotes : {
            remote : "remote@http://3000/remoteEntry.js" why remote@ because remote app has name : remote 
        }
    2. import Counter from "remote/Counter" 


    https://www.youtube.com/watch?v=D3XYAx30CNc

# Micro frontend  2022:-
Micro frontend is an architectural and organizational style (NOT a specific technology!!!) in which the front-end of the app is decomposed into individual, loosely coupled “micro apps” that can be built, tested, and deployed independently. Just like in the world of microservices where the backend is chopped into individual services.
Micro Frontends - extending the microservice idea to frontend development (micro-frontends.org)
https://micro-frontends.org/

