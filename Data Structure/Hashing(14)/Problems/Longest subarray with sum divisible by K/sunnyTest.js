
//7:06
var A = [2, 7, 6, 1, 4, 5];
const k= 3;
//longest array divisal by k 
const modArray = new Array(A.length);
let currentSum = 0;
const hash = new Map();
let Max = 0
for(let i=0;i<A.length;i++){
//1.find currentSum array
currentSum+= A[i]
//2.find mod array  
	modArray[i]= ((currentSum%k)+k)%k
 
    if(modArray[i]==0){
    	Max = i+1
    }else if(!hash.has(modArray[i])){ 
        //I had mistake here hash.get(modArray[i]) i have used .get at place of .has but it was failing once the value of modArray[i] =0 because it was returning false even this is true 
    	hash.set(modArray[i],i)
    }else {
    	Max = Math.max(Max,i-hash.get(modArray[i]))
    }
}
console.log("Maximum Array Length= ", Max )

