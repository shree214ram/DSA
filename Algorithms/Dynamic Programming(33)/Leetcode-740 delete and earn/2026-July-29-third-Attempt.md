/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    if (nums.length == 1) return nums[0]
    const h = new Map()
    for (let i = 0; i < nums.length; i++) {
        h.set(nums[i], h.get(nums[i]) ? h.get(nums[i]) + nums[i] : nums[i])
    }

    // const DP=
    let max = -Infinity
    for ([key, val] of h.entries()) {
        max = Math.max(max, key)
    }

    const DP = Array(max + 1).fill(0)
    DP[0] = 0
    DP[1] = h.get(1) ? h.get(1) : 0
    for (let i = 2; i <= max; i++) {
        DP[i] = Math.max(DP[i - 1], (h.get(i) ? h.get(i) : 0) + DP[i - 2])
    }
    return DP[DP.length - 1]
};