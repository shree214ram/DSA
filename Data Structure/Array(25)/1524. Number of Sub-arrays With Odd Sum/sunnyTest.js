
const A = [1,2,3]
const comSum = [];
let counter = 0
//1. create commulative sum Array
for(let i=0;i<A.length;i++){
	//2. if self is odd then add in counter
	if(A[i] %2 != 0){
    	counter++
    }
    if(i==0){
    	  comSum.push(A[i])
    }else{
    	const currentSum = A[i]+comSum[i-1]
    	comSum.push(currentSum)
        if(currentSum %2 != 0){
            counter++
        }
    }
}
//3. check  
for(let i=1;i<A.length;i++){
	for(let j=i+1;j<A.length;j++){
    	if((comSum[j]-comSum[i]+A[i])%2!=0){
        	counter++
        }
    }
}
console.log(comSum);
console.log(counter)

