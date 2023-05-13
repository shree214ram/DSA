### Cluser :- 
1. innerFunc Access To UseOuter Function Variable Or Global variable .
2. when we reurn a function in a function then it remember all the laxical scope variable 

# What is a closure in Javascript?
A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: 
1. it has access to its own scope (variables defined between its curly brackets), 
2. it has access to the outer function's variables, and 
3. it has access to the global variables.Feb 2, 2013
Understand JavaScript Closures With Ease | JavaScript is Sexy
javascriptissexy.com/understand-javascript-closures-with-ease/
Search for: What is a closure in Javascript?


### That Means closer says that a child function has access to its laxical scope . 
<script>
function x (){
    const a =7
    function y(){
        console.log(a)
    }
    return y;
}

const z = x()
console.log(z) 
//this will print below function 
ƒ y(){
        console.log(a)
    }
// but once we z() it will print 7 why ?? JS engin already invoked const a =7 and there no existence of a . But still its printing 7 . Because this z is not normal function its closer function which holds Laxical Scope . 
z() //will print 7 
</script>


### For loop in Scope  . 
https://www.javascripttutorial.net/javascript-closure/

Consider the following example:

<script>
for (var index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}
</script>
Output

after 4 second(s):4
after 4 second(s):4
after 4 second(s):4

###### Why its printing "after 4 second(s):4" ???
for loop is micro task and setTimeout is "Macro Task Or CallBack Queue task" 
So Event Loop will send first all Micro task in Call Stack and Global Excecution context will excecute all Micro task first and then "Macro Task Or CallBack Queue task" will perform so that why index values reach to 4 

###### Solution 

1. change var i to let i // Hoisting , jab var fol loo me har ek ittration ke sath last var 4 ko hi le kar jata he jabki let inner scope he vo current value 1, 2, 3, 4 ko hi lekar jata 

2. convert setTimeout to Closer function 
    1. IIFE 
    2. Normal Function 

<script>
for (var index = 1; index <= 3; index++) {
    // 1. IIFE 
    /*(function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);*/
    
    // 2. Normal Function 
    function test(index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    }
    test(index);
}
</script>
-----------------------------------------------------------------------------------------------------------


# Problem 2 :- 
<script>

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
</script>


(a) What gets logged to the console when the user clicks on “Button 4” and why?

(b) Provide one or more alternate implementations that will work as expected.

### addEventListener is also a Asynchronous method same like setTimeout 

// Method 1.  ya to var ko let bana do 

//Mathod 2 ya fir conver kardo Clouser me 
<script>
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  (function (i) {
    btn.addEventListener('click', function() { console.log(i); });
  })(i);
  document.body.appendChild(btn);
}
</script>
