https://www.youtube.com/watch?v=SHINoHxvTso&ab_channel=AkshaySaini

# Function :- javascript has a very beutiful feature that is called "Function" . function can be 
1. decalare as function 
2. assign as value to a variable 
3. pass as an argument 
4. return as another function 

### //normal function {function statement/ Function Declaration}
1. this is normal function statement Or function Declearation .
2. That is global hoising it will work , even if we will call abc() before decalare . 
    
    function abc(){

    }

### //assign function as value {function expression }
1. this is function expression .
2. That is not global hoising it will not work ,even if we will call abc() before decalare . 

    b(); "Uncaught reference error : xyz is not defined"
    const b = function (){

    }


### //Annonumus  function {function statement}
1. Annomumus function does not have their own identity 
2. This is a type of function statement 
3. this will produce an error "function statement should have function name"
4. Annonumus function can be usable when they assigned as value to a variable 
   
    function (){

    }

### //Named Function Expression
1. This is a function expression 
2. This is same like nrmal function expression only the difference is that at place of annonumus function we will use Named Function in expression  
3. But we cant use xyz() out side , this will give error "Uncaught reference error : xyz is not defined"
    Only we can use inside 
    ```
    const b = function xyz(){
        console.log(xyz) // Only we can use inside 
    }
    ```
### //Difference between Parameter and argument 
1. identities passed in expression function is called Parameter 
2. Identities passed in statement/decalartion is called Argument 
    const b = function xyz(a,b){ //a,b values are parameter

    }
    b(1,2); //1,2 are argument
