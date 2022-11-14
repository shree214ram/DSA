/*
Recursion 
*/
function solve(Arr,n){
	//base case 
    if(n<0){
    	return 
    }
    if(n==0){
    	return Arr[0]
    }
    
    //take current 
    let takeCurrent = Arr[n] + solve(Arr,n-2)
    let leaveCurrent = solve(Arr,n-1)
    return Math.max(takeCurrent,leaveCurrent)
}
const Arr = [2,7,9,3,1]
solve(Arr,Arr.length)
//Output: 12

/*
DP  
*/  

function solve(Arr,n,DP){
	//base case 
    if(n<0){
    	return 0
    }
    if(n==0){
    	return Arr[0]
    }
    if(DP[n] !== -1){
    	return DP[n]
    }
    //take current 
    let takeCurrent = Arr[n] + solve(Arr,n-2,DP)
    let leaveCurrent = solve(Arr,n-1,DP)
    return Math.max(takeCurrent,leaveCurrent)
}

//const Arr = [6, 7, 1, 3, 8, 2, 4]
const Arr = [2,7,9,3,1]
const DP = new Array(Arr.length).fill(-1)
const res=solve(Arr,Arr.length-1,DP)
console.log(res)
//Output: 12