<script>
//8:2
/*
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
*/
//const A =  [2,3,1,1,4]
//output true

const A =  [3,2,1,0,4]
//output false

//const A =  [2,1,1,0,4]
//output false
if(solve(0,A[A.length-1],A)){
	console.log("True")
}else{
	console.log("False")
}
function solve(index,target,A){
	console.log(index,A[index],target,A)
	if(A[index]==target){
    	return true
    }
    let currentIndexValue = A[index]
    while(currentIndexValue>0){
    	if(solve(index+currentIndexValue,target-currentIndexValue,A)){
        	return true ;
        }
        currentIndexValue--
    }
    return false
}
</script>