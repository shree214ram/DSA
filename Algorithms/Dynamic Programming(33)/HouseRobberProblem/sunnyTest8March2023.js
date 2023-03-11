
//11:47 //11;53 //11:54
const A = [1,2,3,1]
const res = solve(Number.MIN_VALUE,A.length-1)
console.log(res,"res");
function solve(A,i){
	//base case 
	if(i<0){
    	return 
    }
    if(i==0){
    	return A[0]
    }
    //recursion 
    
   return Math.max(A[i]+solve(A,i-1),solve(A,i-1))
}
