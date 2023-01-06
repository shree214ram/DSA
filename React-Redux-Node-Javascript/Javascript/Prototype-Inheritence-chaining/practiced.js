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