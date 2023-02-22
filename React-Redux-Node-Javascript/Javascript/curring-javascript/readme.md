### Curring :- 
https://www.youtube.com/watch?v=vQcCNpuaJO8&ab_channel=AkshaySaini

https://javascriptinterviewquestions.com/2020/04/add123-in-javascript-currying-interview.html
<script>
/*

// bind method
const  multiply=function (x,y){
	console.log(x*y)
}

const  multiplyBy2=multiply.bind(this,2);
multiplyBy2(3);

const  multiplyBy3=multiply.bind(this,3);
multiplyBy3(5);

*/

// clouser method 

const  multiply=function (x){
	 return function (y){
        return function (z){
            console.log(x*y*z)
        }
    }
}

/////1. Call Via create constant and then call 
const  multiplyBy2=multiply(2);
const  multiplyBy3=multiplyBy2(3);
multiplyBy3(5)

/////2. Directelly Calling 
//multiply(2)(3)(5)


/*
const  multiplyBy3=multiply.bind(this,3);
multiplyBy3(5);
*/


</script>



### Curring Interview Question 
https://www.youtube.com/watch?v=D5ENjfSkHY4&t=408s&ab_channel=AkshaySaini

# Javascript Currying :- 
Add(1)(2)(3)...(n)() in Javascript | Sum(1,2)(3,4) | Currying | Javascript Interview | Walmart - FE / JS (javascriptinterviewquestions.com)
https://javascriptinterviewquestions.com/2020/04/add123-in-javascript-currying-interview.html

# What is currying in Javascript?
A technique using partial evaluation. Currying refers to the process of transforming a function with multiple arity into the same function with less arity. The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation.Oct 11, 2013

Currying: Currying is basically transforming sum(1,2,3) into sum(1)(2)(3). I will be covering currying in details in another post. Let’s look at the code:

# Case 1: add(1)(2)(3)
It’s basically a sequence of functions with single argument. So our approach is to return a function which in turn returns another function to accept next argument.
   <script>
function add(a){
 return function(b){
  return function(c){
   return a+b+c
  }
 }
}
   </script>

# Case 2: add(1)(2)(3)…(n)()
It’s basically a sequence of n+1 functions with single argument except the last one. So our approach is to return a function which in turn returns another function to accept next argument and so on till the last argument doesn’t exist.
   <script>
function add(a) {
  return function(b){
    if(b){
      return add(a+b)
    }
    return a
  }
}
   </script>
# Case 3: sum(1,2)(3,4)
So, this is similar as above just that we are accepting two arguments in single call. So, we need to add the arguments. Let’s look at the code:

   <script>

function sum(a,b) {
  return function(c,d){
    return a+b+c+d
  }
}
   </script>
 
So, it’s making sense now. Now let’s raise the complexity.

# Case 4: add(1,2..n)(5,6…n)…(n)()
Now in this case, everything is infinite. We already know infinite currying, let’s focus on infinite arguments.
   <script>

function add(...args) {
  let a = args.reduce((a, b) => a + b, 0)
  return function(...args){
    let b = args.reduce((a, b) => a + b, 0)
    if(b){
      return add(a+b)
    }
    return a
  }
}
   </script>
So this is complex, right? You won’t be asked this question during your initial years of Javascript Interview but you never know. So, what’s happening here is, we are using inbuilt rest operators to take infinite arguments and then calculating the sum of all arguments. Rest remains the same as case 2.