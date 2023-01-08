//asynchronous
/*console.log("Hay")
setTimeout(()=>{
console.log("shree");
	setTimeout(()=>{
    	console.log("Ji")
    },500)
},1000)
setTimeout(()=>{
console.log("Ram")
},1000)
setTimeout(()=>{
console.log("Heoolo")
},200)*/


//Call back Hell
/*setTimeout(()=>{
	console.log("shree");
	setTimeout(()=>{
		console.log("Ram")
        setTimeout(()=>{
          console.log("Ji")          
          setTimeout(()=>{
            console.log("Heoolo")
          },200)
        },1000)
    },500)
},1000)*/
const isShopOpne = false
const result = new Promise((Resolve,Reject)=>{
	if(isShopOpne){
    
    	Resolve(
        //(res)=>{
        	setTimeout(()=>{
            console.log("Strabery is selected")
          },2000)
        	
       // }
        )
    }else{
    	Reject(
        //error=>{
        	console.log("Error=",error)
            //return "Error is not found "
       // }
        )
    }
})
/*.then(()=>{
	setTimeout(()=>{
	console.log("Production started")
          },2000)
})*/

.then((suc)=>{
	setTimeout(()=>{
    	console.log("Water Include")
   },2000)},
   (err)=>{
   		console.log(err,"err")
   }
)
result()


////////////////////////29 Dec Practiced at Promise


console.log("Test1")
setTimeout(()=>{
	console.log("test2");
},3000)
console.log("Test3")

const myPromise = new Promise((resolve,reject)=>{
	fetch("https://jsonplaceholder.typicode.com/posts/1")
  
  .then((res)=>res.json())
    .then((data)=>resolve(data))
    .catch((err)=>reject("error he"))
    
})


/////////8Jan2022 Practiced 
const myPromis = new Promise((resolve,reject)=>{
	fetch("https://jsonplaceholder.typicode.com/posts/1")
  
  .then((res)=>res.json())
    .then((data)=>resolve(data))
    .catch((err)=>reject("error he"))
    
})
myPromis.then(data=>{
	console.log(data,"data")
})
