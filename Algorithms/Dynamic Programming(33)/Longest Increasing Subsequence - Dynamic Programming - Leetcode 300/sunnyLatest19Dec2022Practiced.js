//12:2
const A = [5, 8, 7, 1, 9, 10]
//answer is 4 
let max = Number.MIN_VALUE

const DP = new Array(A.length+1)

for(let i=0;i<DP.length;i++){
	DP[i] = 1
}
solution(A,DP);
function solution(A,DP){
	for(let i=1;i<A.length;i++){
    	for(let j=0;j<=i;j++){
          if(DP[j]+1>DP[i] && A[i]>A[j]){
              DP[i] = DP[j]+1
          }
        }
    }
}

for(let i=0;i<DP.length;i++){
	max = Math.max(max,DP[i])
}
console.log("Maximum Length=",max)

