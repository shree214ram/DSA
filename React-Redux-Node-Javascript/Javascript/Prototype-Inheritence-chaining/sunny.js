
// Prototype 

 const myObj = {
    name: "sunny",
    surname: "permar"
 }
//add new method 
 myObj.prototype.fullName = function () {
    return this.name + "," +this.surname
 }

 // inherit property 

 const newObj = {

 }

 newObj.__proto__ = myObj

 console.log(newObj.fullName())

