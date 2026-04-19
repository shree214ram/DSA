// Very Important link for understanding let, var and const.

interviewbit.com/problems/var-vs-let-vs-const/


There are two types of scopes in JS:

 

Function Scope: Visibility is limited to the function.
 function myFn() {

     var x = 10; 

     console.log(x); //prints 10

 } 

 console.log(x); // ReferenceError: x is not defined


 
Block Scope: Visibility is limited to the block of code.
 if (true) { 

     let x = 10; 

     console.log(x); //prints 10

 } 

 console.log(x); // ReferenceError: x is not defined
 
 
Now, that we have idea of scope. We can discuss the scope of var, let and const.

var declarations are function scoped.
let declarations are block scoped.
const declarations are block scoped.

-
Redefining and Redeclaring feature

A variable declared using ‘var’ can be redefined and even redeclared anywhere throughout its scope.

var x = 30;
console.log(x); //prints 30
x = "Hi"; //redefining or re-assigning (works without any error)
console.log(x); //prints "Hi"
 
var y = 10;
console.log(y); //prints 10
var y = "Hello"; //Redeclaring (works without any error)
console.log(y) //Prints "Hello"
 

A variable declared using ‘let’ can be redefined within its scope but cannot be re-declared within its scope.

let x = 11;
console.log(x); //prints 11
x = "IB"; //works without any error
console.log(x); //prints "IB"

let y = 12;
console.log(y); //prints 12
let y = "Scaler"; // error: Identifier y has already been declared

let z = 13;
if(true){
   let z = "Fun"; //works without any error as scope is different.
   console.log(z) //prints "Fun"
}
console.log(z) //prints 13
 
 

A variable declared using ‘const’ cannot be redefined or re-declared within its scope.

const x = 10;
console.log(x); //prints 10
x = 11; // error: Assignment to constant variable.

const y;
y = 2; //error

const z = 12;
console.log(z) //prints 12
const z = 13; // error: Identifier 'z' has already been declared

Every const declaration must be initialized at the time of declaration.