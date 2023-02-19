# scope

    What is a scope in Javascript?
    JavaScript has two scopes – global and local. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code. Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions.Dec 2, 2014
    Demystifying JavaScript Variable Scope and Hoisting - SitePoint
    https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
    Search for: What is a scope in Javascript?
# Javascript Scope 
https://hackernoon.com/understanding-javascript-scope-1d4a74adcdf5


# Javascript Hoising 

What is hoisted in Javascript?
Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted. Any assignments are left where they are.Feb 2, 2013
Back to Basics: JavaScript Hoisting - SitePoint
https://www.sitepoint.com/back-to-basics-javascript-hoisting/
Search for: What is hoisted in Javascript?


# Javascript hoisting?
https://www.w3schools.com/js/js_hoisting.asp
https://scotch.io/tutorials/understanding-hoisting-in-javascript#toc-hoisting-variables


1. let 
2. var 
3. const 

console.log(b) //"undefined"
var b = 2

console.log(b) //"Uncaught ReferenceError: Cannot access 'b' before initialization"
const b = 2


# Javascript Errors :- 
1. Type Error 
2. Syntex Error 
3. reference Error 


b(); "Uncaught ReferenceError: Cannot access 'b' before initialization"
const b = function (){

}

b(); "Uncaught ReferenceError: Cannot access 'b' before initialization"
let b = function (){

}

b(); //" Uncaught TypeError: b is not a function"
var b = function (){

}

