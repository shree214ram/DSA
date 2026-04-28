The Challenge: LeetCode #1004 - Max Consecutive Ones III
Problem Statement:
Given a binary array nums (containing only 0s and 1s) and an integer k, return the maximum number of consecutive 1s in the array if you can flip at most k 0s.

Example:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

Output: 6

Explanation: [1,1,1,0,0,1,1,1,1,1,1] (The bold part is length 6 after flipping two 0s).

Why this fits your current progress:
Sliding Window: You need to maintain a "window" of numbers.

Net Count: Instead of "Gas vs. Cost," you are tracking "Zeroes vs. K."

The "Pop" Moment: Just like you reset your curNet in the Gas Station problem, here you have to "shrink" your window when your "Zero count" exceeds k.


Broute force :- 

2Loop 

if A[j] == 0 then we will increase the 0Th counter amd of 0th counter more than Targetthen we will come out from secnd loop that means we will break that window and start New window from Next Ith Index 

for(let i=0;i<nums.length;i++){
    let count=0;
    for(let j=i;j<nums.length;j++){
        if(nums[j]==0){
            count++
        }
        if(count>k){
            break;
        }
        maxLen=Math.max(maxLen,j-i+1)
    }
}
-------

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    //2:38
    let A=nums;
    let l=0;
    let bud=k; //(flip count that can we convert from 0 to 1)
    let maxLen=Number.MIN_VALUE
    for(let r=l;r<A.length;r++){
        if(A[r]==0){
            bud--
        }
        while(bud<0){ //if we have used all flips and we reached bud in minus then we would shrink window from left side and refill the budget 
           if(A[l]==0) {bud++;}
           l++
        }
        maxLen= Math.max(maxLen,r-l+1)
    }
    return maxLen == Number.MIN_VALUE ? 0 : maxLen;
};