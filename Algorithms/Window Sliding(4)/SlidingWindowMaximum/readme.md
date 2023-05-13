https://leetcode.com/problems/sliding-window-maximum/
//Leetcode #239. Sliding Window Maximum
<script>
//11:26 , 11:31
const A = [1,3,-1,-3,5,3,6,7], k = 3
//Output: [3,3,5,5,6,7]


//Explanation: 
const result = []
for(let i=0;i<A.length-k+1;i++){
	let left = i+1;
    let right = i+3
    let max = A[i]
	while(left<right && right <= A.length){
    	max= Math.max(A[left],max);
        left++
    }
    result.push(max)
}
console.log(result,"result")
</script>

