Is this Prefix sum + hashmap what i used for Longest subarray whose sum equal to target ?

On LeetCode, this exact problem is split into two popular variations:
# 974: Subarray Sums Divisible by K * 
Goal: Return the count of all such subarrays.
Difference: Instead of storing the first index, you store the frequency of each remainder.

# 523: Continuous Subarray Sum * 
Goal: Return true if there is a subarray of length >=2 divisible by k.
Difference: You check if (i - hash[mod] >= 2).

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function longestSubarrWthSumDivByK(arr, k) {
    let maxLen = 0;
    let currSum = 0;
    
    // Using Map is generally faster/better than an Object in JS for frequent lookups
    const remainderMap = new Map();
    
    // PRO TIP: Initialize with {Remainder 0 : Index -1}
    // This handles subarrays starting from index 0 without needing an 'if' block.
    remainderMap.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        // Robust modulo for negative numbers
        let mod = ((currSum % k) + k) % k;

        if (remainderMap.has(mod)) {
            // We've seen this remainder before. 
            // The distance between these indices is divisible by k.
            maxLen = Math.max(maxLen, i - remainderMap.get(mod));
        } else {
            // Only store the FIRST occurrence to keep the subarray as long as possible.
            remainderMap.set(mod, i);
        }
    }

    return maxLen;
}