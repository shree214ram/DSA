
### What is an object in JavaScript?
    JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
    Apr 6, 2018
    Working with objects - JavaScript | MDN
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/.../Working_with_Objects
    Search for: What is an object in JavaScript?

    https://www.programiz.com/javascript/examples/create-object


### Different ways of creating an Object in javascript
    https://coderwall.com/p/p5cf5w/different-ways-of-creating-an-object-in-javascript

   ##### Using the Object() constructor:
        var d = new Object();
        This is the simplest way to create an empty object. I believe it is now discouraged.

   ##### Using Object.create() method:
        var a = Object.create(null);
        This method creates a new object extending the prototype object passed as a parameter.

   ##### Using the bracket's syntactig sugar: {Using object literal} 
        var b = {};
        This is equivalent to Object.create(null) method, using a null prototype as an argument.

   ##### Using a function constructor
   <script>
        var Obj = function(name) {
        this.name = name
        }
        var c = new Obj("hello"); 
        // What the new operator does is call a function and setting this of the function to a fresh new Object, and binding the prototype of that new Object to the function's prototype. As is:

        function f {};

        new f(a, b, c);

        // Would be equivalent to: 

        // Create a new instance using f's prototype.
        var newInstance = Object.create(f.prototype)
        var result;

        // Call the function
        result = f.call(newInstance, a, b, c),

        // If the result is a non-null object, use it, otherwise use the new instance.
        result && typeof result === 'object' ? result : newInstance
   </script>
   ##### Using the function constructor + prototype:
   <script>
        function myObj(){};
        myObj.prototype.name = "hello";
        var k = new myObj();
   </script>
   ##### Using ES6 class syntax:
   <script>
        class myObject  {
        constructor(name) {
            this.name = name;
        }
        }
        var e = new myObject("hello");
   </script>
   ##### Singleton pattern:
   <script>
        var l = new function(){
        this.name = "hello";
        }
        Related protips:
   </script>



creating an Object constructor,prototype,factory method
https://www.youtube.com/watch?v=xizFJHKHdHw

https://coderwall.com/p/p5cf5w/different-ways-of-creating-an-object-in-javascript

https://hackernoon.com/create-objects-in-javascript-10924cfa9fc7




### difference between object.create and new Keyword object create 
    http://frontendnotes.net/what-the-difference-between-object-create-and-new-keyword/
    https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358

   ###### Object created via new Kewards call the constructor function But object.create never call constructor 
   <script>
    function Dog(){
        this.pupper = 'Pupper';
    };

    //Using Object.create()
    Dog.prototype.pupperino = 'Pups.';
    var buddy = Object.create(Dog.prototype);
    console.log(buddy.pupper); //Output is undefined
    console.log(buddy.pupperino); //Output is Pups.


    //Using New Keyword
    var maddie = new Dog();
    console.log(maddie.pupper); //Output is Pupper
    console.log(maddie.pupperino); //Output is Pups.

   </script>

   ###### Notice the output of buddy.pupper is undefined. Even though Object.create() sets its prototype to Dog, buddy does not have access to this.pupper in the constructor. This is due to the important difference that new Dog actually runs constructor code, whereas Object.create will not execute the constructor code.