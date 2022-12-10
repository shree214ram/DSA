<script>
//4:13
//4:37
const A = [1,2,3, 5]
const target = 6
const Value = [1,2,3,4,5,6]
const DP = new Array(A.length+1)
for(let i=0;i<=A.length;i++){
	DP[i] = new Array(target+1).fill(Number.MAX_VALUE)
}
 for(let i=0;i<=A.length;i++){
 	for(let j=0;j<=target;j++){
 	//Base case 
     if(i==0){
    	DP[i][j] = Number.MAX_VALUE
    }
    if(j==0){
    	DP[i][j] = 0
    }
    //coin is greater than amount 
    if(A[i]>j){
    	DP[i][j]= DP[i-1][j] //copy the upper cell value
    }if(A[i]<=j){
    	DP[i][j]= Math.min(DP[i-1][j],1+DP[i][j-A[i-1]])
    }
    // 
 }
 }
 console.log(DP,"DP")
</script>