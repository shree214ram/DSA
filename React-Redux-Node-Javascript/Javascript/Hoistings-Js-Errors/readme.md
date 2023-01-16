# Javascript Hoising 
let 
var 
const 

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

