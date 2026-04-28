The problem statement for LeetCode #325: Maximum Size Subarray Sum Equals k is:

Given an array of integers nums and an integer k, return the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Example
Input: nums = [1, -1, 5, -2, 3], k = 3

Output: 4

Explanation: The subarray [1, -1, 5, -2] sums to 3 and has a length of 4, which is the maximum possible.
<script>
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let prefixSum = 0;
    let maxLen = 0;
    
    // Map stores: { PrefixSum : First_Index_It_Occurred }
    const firstOccurrence = new Map();
    
    // PRO TIP: Initialize with 0 at index -1 to handle 
    // subarrays that start from index 0.
    firstOccurrence.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        
        // We are looking for: prefixSum - x = k
        // Which means: x = prefixSum - k
        const target = prefixSum - k;
        
        if (firstOccurrence.has(target)) {
            // Calculate length: current index - earliest index found
            maxLen = Math.max(maxLen, i - firstOccurrence.get(target));
        }
        
        // ONLY add the sum to the map if it doesn't exist.
        // We want to keep the EARLIEST index to maximize the length.
        if (!firstOccurrence.has(prefixSum)) {
            firstOccurrence.set(prefixSum, i);
        }
    }
    
    return maxLen;
};