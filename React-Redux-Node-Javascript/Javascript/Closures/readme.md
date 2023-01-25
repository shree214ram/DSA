### Cluser :- 
1. innerFunc Access To UseOuter Function Variable Or Global variable .
2. when we reurn a function in a function then it remember all the laxical scope variable 


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

1. change var i to let 

2. convert setTimeout to Closer function 
    1. IIFE 
    2. Normal Function 

<script>
for (var index = 1; index <= 3; index++) {
    /*(function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);*/
    
    function test(index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    }
    test(index);
}
</script>


