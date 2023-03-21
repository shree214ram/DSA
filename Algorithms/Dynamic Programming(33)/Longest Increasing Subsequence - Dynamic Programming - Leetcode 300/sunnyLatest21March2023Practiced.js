
//10:58 //11:03
const A = [1,2,0,3,7]

const DP = new Array(A.length).fill(1)
let max = Number.MIN_VALUE
for(let i=1;i<A.length;i++){
	for(let j=0;j<i;j++){
		DP[i] = A[i]>A[j] && DP[i] < DP[j]+1 ? DP[j]+1 : DP[i]
    	max= Math.max(max,DP[i])
    }
}
console.log(DP,"DP")
console.log("Maximum Length = ", max)

