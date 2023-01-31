
//5:25 5:30
//const A = [1,2,0,4]
const A = [5, 8, 7, 1, 9, 10]

//create DP
const DP = new Array(A.length).fill(0);
DP[0] = 1
let finalMax = 0
for(let i=1;i<A.length;i++){
	let current = 0
	if(A[i]>A[i-1]){
    	current=DP[i-1]+1
    }else{
        current=DP[i-1]
    }
    DP[i] = current
    finalMax= Math.max(finalMax,current)
}
console.log(DP)
console.log(finalMax,"finalMax")
