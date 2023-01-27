https://www.youtube.com/watch?v=75W8UPQ5l7k

1. Call :-
    1. Call a method by self reference 
        const myObj = {fullName:()=>{console.log("test")}}
        myObj.fullName.call(myObj)
    2. Borrow function from one object and call in another object 
        const myObj = {fullName:()=>{console.log("test")}}
        const myObj2 = {}
        myObj.fullName.call(myObj2)


2. Apply :-
    Apply same to same like Call only difference is that the Argument comes in [] Array format 

3. Bind :-
    const myObj = {fullName:()=>{console.log("test")}}
    const myObj2 = {}
    const res = myObj.fullName.bind(myObj2) 
    console.log(res) // this will not call method , it will print fullName function 
    res(); // this will print test in console 
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
//call , apply bind
const myobject = {
	name:"kamaini",
    surname: "parmar",
    //...args Apply Method :- rest operater for getting so many argument as array 
    fullname : function (...args){
    	console.log(this.name,this.surname,args)
    }
}
//*****normal call 
//myobject.fullname(990)

//*****self reference 
//myobject.fullname.call(myobject,990)

//*****Reuse Method by another Object OR Borrowing function from one object and use in another object 
const myNewobject = {
	name:"Sunny",
    surname: "Parmar",
    
}
//myobject.fullname.call(myNewobject,789)

// call , bind , borrowing 

//*****Apply Method {its same like call only difference is that , pass so many argument in Array} 
//myobject.fullname.apply(myNewobject,[789,"indore","MP"])
</script>

</body>
</html>
