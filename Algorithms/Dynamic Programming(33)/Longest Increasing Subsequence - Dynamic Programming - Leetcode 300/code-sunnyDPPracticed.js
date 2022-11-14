//4:38
//LIS
const A= [1,3,5,4,0,2,11]
//output =4 {1,3,5,11}
const n = A.length
const DP = new Array(A.length).fill(1)
console.log("Max Length is",solve(A,n,DP));
function solve(A,n,DP){//5
  if(n==0) return 0
  if(n==1) return 1
  let finalMaxLength = 0
  for(let i=1;i<n;i++){//4
      for(let j=0;j<i;j++){//3
          if( A[i]> A[j]){//2
            const latest=  1+DP[j]
            if(latest>DP[i]){//1
                DP[i] = latest
                finalMaxLength = Math.max(DP[i],latest)
            }//1
          }//2
      }//3
  }//4
  return finalMaxLength
}//5

/*
arr [1, 3, 5, 4, 0, 2, 11]
DP  [1, 2, 3, 3, 1, 2, 4]
Hum Loop i start karenge 1 se 
and j 0 to i for compare 

A[i]>A[j] And Latest {means j ka DP value +1 } > i ke DP Value {
  hum i ke Dp ki value change karenge ={j ka DP value +1}
}
*/
