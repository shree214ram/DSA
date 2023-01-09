https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b

https://www.youtube.com/watch?v=wstwjQ1yqWQ&ab_channel=AkshaySaini

### 1. We can add any new property in object with the help of prototype 
    function myObj() {}

    myObj.prototype.firstName = "sunny"

	const newl = new myObj()
    console.log(newl.firstName)

  ##### Polifil is the best example of prototype and inheritence 
   #### 1. we simply add a new custom map method in Array library 
            Array.prototype.myCustomMap = function(callback){
                let result = []
                for(let i=0;i<this.length;i++){
                    result.push(callback(this[i],i,this))
                }
                return result
            }
            const A= [1,2,3]
       ### 2. And We can simply use like other array's method 
        const result = A.myCustomMap((currentObject,index,Array)=>{
            return currentObject*2;
        })
        console.log(result) //[2,4,6]

   #### 2. We can Inherit (Copy of Object)any property from any Object in another object with the help of "__proto__"
    
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
