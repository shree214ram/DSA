/*
[3:38 PM] Shubham Chahar
    address.city is Bangalor
​[3:38 PM] Shubham Chahar
    address.pinCode is 234324

*/
const response = {
  user: {
    username: "sunnny",
    address: { city: "Bangalore", pinCode: 514234 },
    email: "sunny@gmail.com"
  }
};

function printValues(obj, isCheck = 0) {
  // DO
  if (typeof obj === "object") {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        printValues(obj[key], [key]);
      } else {
        if (isCheck !== 0) {
          console.log(`${isCheck}.${key} is ${obj[key]}`);
        } else {
          console.log(`${key} is ${obj[key]}`);
        }
      }
    }
  } else {
    console.log("Invalis response");
  }
  return true;
}
printValues(response, 0);

/*
user.username is sunnny 
address.city is Bangalore 
address.pinCode is 514234 
user.email is sunny@gmail.com 

I had archived that one But Required result is below :- 

user.username is sunnny 
user.address.city is Bangalore 
user.address.pinCode is 514234 
user.email is sunny@gmail.com 
*/ 

// Correct Code 
//10:54
const A = {user:{
	name:"sunny",
    addres:{
    	city:{city1:"Bangalore",city2:"Indore"},
        pin:1234
    }
}}
sol(A,0)
function sol(obj,keyInitial){
	if(typeof(obj) === "object"){
    	for(let key in obj){
    	if(typeof(obj[key]) === "object"){
        	sol(obj[key],keyInitial !== 0 ? `${keyInitial}.${key}` : key);
        }else{
            console.log(`${keyInitial !== 0 ? `${keyInitial}.${key}` : obj[key]} is ${obj[key]}`)
        }
        }
    }else{
    	console.log("Invalid Object")
    }
    return true ;
}