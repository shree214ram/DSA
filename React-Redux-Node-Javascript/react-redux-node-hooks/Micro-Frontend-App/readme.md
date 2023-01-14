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