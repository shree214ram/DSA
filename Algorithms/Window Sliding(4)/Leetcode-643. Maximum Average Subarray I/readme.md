/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const A=nums
    //first k 
    let sum=0
    let max=-Infinity
    for(let i=0;i<k;i++){
        sum+=A[i]
    }
    max=Math.max(max,sum/k)
    for(let i=k;i<A.length;i++){
        sum=sum-A[i-k]+A[i]
        max=Math.max(max,sum/k)
    }
    return max
};


**Interviewer:** *"Based on image_fc9280.jpg, submitting an optimal $O(N)$ sliding window solution that passes all 128 test cases in a blazing 6 minutes and 45 seconds earns you an absolute **Strong Hire** for flawless speed, precision, and peak execution efficiency!"*