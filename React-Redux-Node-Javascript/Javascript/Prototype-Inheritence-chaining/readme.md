https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b

https://www.youtube.com/watch?v=wstwjQ1yqWQ&ab_channel=AkshaySaini

### 1. We can add any new property in object with the help of prototype 
   <script>
    function myObj() {}

    myObj.prototype.firstName = "sunny"

	const newl = new myObj()
    console.log(newl.firstName)
   </script>

  ##### Polifil is the best example of prototype and inheritence 
   #### 1. we simply add a new custom map method in Array library 
   <script>
            Array.prototype.myCustomMap = function(callback){
                let result = []
                for(let i=0;i<this.length;i++){
                    result.push(callback(this[i],i,this))
                }
                return result
            }
            const A= [1,2,3]
   </script>
   ### 2. And We can simply use like other array's method 
   <script>
        const result = A.myCustomMap((currentObject,index,Array)=>{
            return currentObject*2;
        })
        console.log(result) //[2,4,6]
   </script>

   #### 2. We can Inherit (Copy of Object)any property from any Object in another object with the help of "__proto__"
    
   <script>
    const myObj = {
    name:"sunny",
    surname:"parmar",
    fullname:function (){
            return this.name+" "+this.surname
        }
    }

    const obj2 = {} ;
    obj2.__proto__ = myObj

    console.log(obj2.fullname())
   </script>




Javascript-Inheritance
https://hackernoon.com/inheritance-in-javascript-21d2b82ffa6f
https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2

Javascript-prototypes

https://hackernoon.com/prototypes-in-javascript-5bba2990e04b
https://www.w3schools.com/js/js_object_prototypes.asp
https://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/

https://www.youtube.com/watch?v=fBpPfPjxOhc&list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u



Prototype Inheritance and Chaining 2022:- 
https://javascript.info/prototype-inheritance
https://medium.com/@kevincennis/prototypal-inheritance-781bccc97edb
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
https://codeburst.io/javascript-inheritance-25fe61ab9f85
