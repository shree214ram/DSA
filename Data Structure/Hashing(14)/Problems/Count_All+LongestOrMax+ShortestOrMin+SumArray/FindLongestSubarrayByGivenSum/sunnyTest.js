//11:4
//11:15
var A = [10, 5, 2, 6, 1,0,1,9];
const Target = 15
let current = 0
let start = 0

let maxLength = Number.MIN_VALUE

for (let i=0;i<A.length;i++){
    current+=A[i]
	if(current == Target){
    	maxLength = Math.max(maxLength,i-start+1)
        start++
        current = A[i]
    }
}
console.log("Res=>",maxLength)