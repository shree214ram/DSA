 //https://leetcode.com/problems/move-zeroes/
//10:04 //10:06 

const A= [0,1,0,3,12]
//Output: [1,3,12,0,0]
let start = 0
for(let i=0;i<A.length;i++){
	if(A[i]!==0){
    	let temp = A[i]
    	A[start] = temp
        A[i] = 0
        start++
    }
}
console.log(A)
