//1:27
const A = [2,7,9,3,1]
const DP = new Array(A.length).fill(-1)
let maxSum = Number.MIN_VALUE
const res= solve(0,A.length-1)
console.log(res,"res")
function solve(temp,index){
	//base case 
    if(index<0){
    	return 0
    }
     if(index==0){
    	return A[index]
    }
    if(DP[index]!= -1){
    console.log("hy")
    	return DP[index]
    }
    
    //include 
    const include =  A[index] +solve(temp,index-2)
    //exclude 
    const exclude = solve(temp,index-1)

	return DP[index]=  Math.max(include,exclude)
}
