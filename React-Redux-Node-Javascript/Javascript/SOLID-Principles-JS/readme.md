https://dev.to/denisveleaev/5-solid-principles-with-javascript-how-to-make-your-code-solid-1kl5

https://www.xenonstack.com/blog/solid-principles-javascript

https://www.youtube.com/watch?v=m2GCb-x8e5s&ab_channel=RethinkingUI
# SOLID Principle in javascript 

### S :- Single Responsibility Principle 

    Single function should have single feature , other feature should be in different function so it can be use in another easily . 
    Wrong :- 
        function creareUser (data){
            //validate user 
            if(!data.username && !data.pass){
                console.log("Invalid User");
                return false ;
            }
            User.Create("path");
        }

    Correct :- 

        function creareUser (data){
            //validate user 
            validateUser(data);
            //createuser API 
            User.Create("path");
        }

        function validateUser (data){
            //validate user 
            if(!data.username && !data.pass){
                console.log("Invalid User");
                return false ;
            }
        }
    

### O :- Open/Close , Open for extension and close for modification
   
   ##### This principle says that we dont need to be modify in old existing code we can use as extension . 

    Old Code :- 
        const user = ["Sunny","kamini"]

        function checkUser(user){
            if(user.includes(user)){
                return true
            }
            return false
        }
        checkUser("Sunny") //true
        checkUser("Kamini") //true
        checkUser("Poonam") //false

    New Code :- 
        Without disturbing old code we are adding a new feature as extension 
        function AddNewUser(user){
            user.push(user)
        }
        checkUser("Poonam") //true


### L :- Liskov Substitution 
   ##### This principle says that every class should have generic and irrilative functions method only so we can extend class easily as per their naming convension 
    Wrong Code :-
        class Bird{
            fly(){

            }
        }

        class Eagle{
            fly(){
                
            }
        }

        class Panguin extends Bird{
            //Problem Pangwin can't fly 
        }

    Correct Code :-
        class Bird{
            layEggs(){

            }
        }

        class Flying{
            fly(){
                
            }
        }

        class SwimmingBirds extends Bird{
            swim(){
                
            } 
        }

        class Panguin extends SwimmingBirds{
        }

        const P = new Panguin ()
        p.swimm() // this is correct code 
### I :- Interface Segregation 
   ##### This principle says that some time we dont need to be check and bypass some checks so we can pass a flag and behalf of that we can evaluate , should we need t be check or not ? . Final Mean is that we can segregate our code behalf of flag

    Wrong Code 
        class user{
            constructor(name,pass){
                this.username=name;
                this.password=pass;
                checkCorrectUser()
                sendToDashboard()
            }
            checkCorrectUser (){
                if(this.username !="A" || this.password !="B"){
                    console.log("Invalid User")
                    return false
                }
            }
            sendToDashboard (){
                window.location.href = "/dashboard"
            }
        }
    Correct Code 
        class user{
            constructor(name,pass,check){
                this.username=name;
                this.password=pass;
                if(check==true){
                    checkCorrectUser()
                }
                sendToDashboard()
            }
            checkCorrectUser (){
                if(this.username !="A" || this.password !="B"){
                    console.log("Invalid User")
                    return false
                }
            }
            sendToDashboard (){
                window.location.href = "/dashboard"
            }
        }
### D :- Dependency Inversion 

    TV Remote only need Battery . Battery can be of any company which is not dependent on any company specific . 

    same like that in the below API Call we are setting some state which can be reuse in different functions also 
    Wrong Code :-
        
        fetch("apiPath",(res)=>{
            this.setState({
                name: res.name,
                surname: res.surname,
                mobile: res.mobile,
            })
        })
        
    Correct Code :-
        
        fetch("apiPath",(res)=>{
           setUserData(res);
        })
        //this setUserData can be reuse any other place alse only need same data object. 
        function setUserData(res){
            this.setState({
                name: res.name,
                surname: res.surname,
                mobile: res.mobile,
            })
        }