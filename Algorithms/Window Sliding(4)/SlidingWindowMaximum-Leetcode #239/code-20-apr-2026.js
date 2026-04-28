/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const A = nums

    //Explanation: 
    const result = []
    for (let i = 0; i < A.length - k + 1; i++) {
        let left = i + 1;
        let right = i + k
        let max = A[i]
        while (left < right && right <= A.length) {
            max = Math.max(A[left], max);
            left++
        }
        result.push(max)
    }
    return result
};