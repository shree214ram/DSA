<script>
  //6:46
/*
Given an array of integers, 
return indices of the two numbers 
such that they add up to a 
specific target. 
We can’t use the same element twice. Example : 
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

const A = [2, 7, 11, 15];
const target = 9;

const hash = new Map();
const res = []
for(let i=0;i<A.length;i++){
  const diff = target-A[i]
  if(hash.get(diff)){
    res.push(A.indexOf(A[i]))
    res.push(A.indexOf(diff))
  }else{
    hash.set(A[i],A[i])
  }
}
console.log(res,"result")
</script>

-------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
let a = 3;
let b = new Number(3); 
let c = 3;
console.log(a == b); //true
console.log(a === b); //false 
console.log(b === c); //false
</script>

</body>
</html>

------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};
const name = 'Lydia';
console.log(name.giveLydiaPizza())
</script>

</body>
</html>

-------------------------------------------------

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
//curring and clouser
function add(a){
	return function(b){
    	if(b){
        	return add(a+b)
        }
        return a
    }
}

console.log(add(1)(2)())

/*

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);  
  //3 3 3 why
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
  //0,1,2
}
-----------------------
 for (var i = 0; i < 3; i++) {
  convert into IIFE 
(function(i){
  setTimeout(() => console.log(i), 1);  
  })(i)
  
}
for (let i = 0; i < 3; i++) {

  setTimeout(() => console.log(i), 1);
  
}
*/

</script>

</body>
</html>

-------------------------------------

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); 
myFunction("Hello Mr.");


//Welcome John
//Welcome Hello Mr. John

const myPromise = new Promise((resolve,reject)=>{
	fetch("myAPI")
    .then(res=>res.json())
    .then(data=>{
    	resolve(data)
    })
    .catch(error=>{
    	console.log(error)
    })
})

myPromise.then(data=>{
	console.log("result",data)
})

</script>

</body>
</html>

--------------------------

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
Rewrite the following Promise-based function to async await :     

async function asyncTask() {
    return await functionA()
        .then((valueA) => await functionB(valueA))
        .then((valueB) => await functionC(valueB))
        .then((valueC) => await functionD(valueC))
        .catch((err) => logger.error(err))
}

async function asyncTask() {
	let response = null
     try{
       const [valueA,errA] = await functionA()
       const [valueB,errB] = await functionB(valueA)
        const [valueC,errC] = await functionC(valueB)
        const [valueD,errD] =  await functionD(valueC)
        return 
     }
    catch(error){logger.error(error)}
}

-------------------------
// Write the Post API 
const express = require("express");
const app = express()

app.post("/user",(req,res)=>{
	if(req.post){
      fetch("liveAPI")
      .then(res=>res.json())   
      .then(data=>{
          res.send(data)
      })
      .catch(err=>{console.log(err)})
    } else{
    	console.log("payload is missing")
    }
})

var response = app.listen("8000",(req,res)=>{
	const host = response.address().adress;	
    const port = response.address().port;

    console.log(`Server started at http://127.0.0.1:${port}`)
})

</script>

</body>
</html>

