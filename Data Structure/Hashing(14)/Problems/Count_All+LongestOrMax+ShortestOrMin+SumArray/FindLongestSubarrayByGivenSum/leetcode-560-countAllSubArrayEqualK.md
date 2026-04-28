Subarray sum equals K | Number of subarrays with sum equals K | Leetcode #560

The problem statement for LeetCode #560: Subarray Sum Equals K is:

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.


Tried Own :- 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    //1053
    if(nums.length==1){
        if(nums[0]==k){
            return 1
        }else{
            return 0
        }

    }
    let curSum=0;
    const hash = new Map();
    let res=0
    for(let i=0;i<nums.length;i++){
        curSum+=nums[i];
        if(curSum==k){
            res++;
        }
        if(hash.get(curSum-k)){
            res+=hash.get(curSum-k);
        }
        if(hash.get(curSum)){
            hash.set(curSum,hash.get(curSum)+1);
        }else{
            hash.set(curSum,1);
        }
    }
    return res;
};


# Batter optimized code 

<script>
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let curSum = 0;
    let res = 0;
    const hash = new Map();

    // The "Dummy Entry": We have seen a sum of 0 exactly 1 time
    hash.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];

        // 1. Check: Does a previous prefix sum exist such that (curSum - prevSum = k)?
        // This replaces your "if (curSum == k)" and "if (hash.get(curSum-k))"
        if (hash.has(curSum - k)) {
            res += hash.get(curSum - k);
        }

        // 2. Update: Increment the count of the current prefix sum in the map
        // (hash.get(curSum) || 0) handles the case where the sum is new
        hash.set(curSum, (hash.get(curSum) || 0) + 1);
    }

    return res;
};