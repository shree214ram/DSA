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
