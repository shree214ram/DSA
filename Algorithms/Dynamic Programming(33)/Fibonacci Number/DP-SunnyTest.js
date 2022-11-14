
//feboneci serios 

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

/*Input  : n = 2
Output : 1

Input  : n = 9
Output : 34*/

const n = 9;
const DP = new Array(n).fill(0)
//Set initial 3 values as we know it will be 0,1,1
DP[0]=0;
DP[1]=1
DP[2]=1
for(let i=3;i<=n;i++){
	//set of urrent index febonecy value by addition of previous 2 indexes DP Values 
	DP[i] = DP[i-1]+DP[i-2]
    
}
console.log(DP,"dp")
const output = DP[n]
console.log("Febonecy serious output is ", output)