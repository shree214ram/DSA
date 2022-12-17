//10:48
//10:54
const A = [10, 2, -2, -20, 10];

let res = 0;
let currentSum = 0;
const hash = new Map();
const Target = -10;
for(let i=0;i<A.length;i++){

	currentSum+= A[i];

	if(currentSum == Target){
    	res++
    }
    
    if(hash.get(currentSum - Target)){
    	res+= hash.get(currentSum - Target)
    }
    
    if(!hash.get(currentSum)){
    	hash.set(currentSum , 1)
    }else{
    	hash.set(currentSum , hash.get(currentSum)+1)

    }
}
console.log("Result", res)