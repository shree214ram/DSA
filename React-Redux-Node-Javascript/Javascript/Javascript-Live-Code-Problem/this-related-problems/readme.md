
### Testing your this knowledge in JavaScript: What is the output of the following code?

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);


Output:

10
2
Why isn’t it 10 and 5?

In the first place, as fn is passed as a parameter to the function method, the scope (this) of the function fn is window. var length = 10; is declared at the window level. It also can be accessed as window.length or length or this.length (when this === window.)

method is bound to Object obj, and obj.method is called with parameters fn and 1. Though method is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

When fn() is called inside method, which was passed the function as a parameter at the global level, this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.

Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.

Hence arguments[0]() is nothing but calling fn(). Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.

Hence the output will be as above.

### First time jab fn call hua to vo var length window Ya lexical scope ke length ko samajh raha tha to usne 10 print kiya
1. window.length OR this.length // us time apr ye this jo he vo window object ki tarah tha 
2. only lenth  

### Second time fn jo ki argument array me se nikalagaya first parameter he to us time par  
1. this us argument array ko apna lexical scope man raha he  // to this.length matlab ki argument array ka this and uski length 2 . because argument array me 2 element he [fn,1]