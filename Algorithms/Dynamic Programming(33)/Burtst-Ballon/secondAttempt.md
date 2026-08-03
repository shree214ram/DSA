/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {

    /*
        3,      1,      5,      8
        i                       j
                k1      k2

                3*1*8     

    */
    const inputs = [1, ...nums, 1]
    const DP = Array.from({ length: inputs.length }, () => Array(inputs.length).fill(-1)) //mistake 5 length i was checking for nums.length at place of inputs 

    const rec = (i, j) => {
        //base 
        // if (i < 0 || i > nums.length || j < 0 || j > nums.length) return 1
        // mistake1 i>j return 0 
        if(i>j) return 0
        //visited 
        if (DP[i][j] !== -1) return DP[i][j]
        //calculation 
    let max = 0 //misatke 3 setupped outer and i was givinf -Infinity
        //mistake2 k from i to j 
        for (let k = i ; k <= j ; k++) {
            //recursion 
            const currentMul = inputs[i - 1] * inputs[k] * inputs[j + 1]
            const currentSum = rec(i, k - 1) + currentMul + rec(k+1, j) //mistake 2 rec(k+1,j) because k is the Ballon which is going to be Burst
            max = Math.max(max, currentSum)
        }
        return DP[i][j]=max
    }
    return rec(1,nums.length) //mistake 4 at place of 0 to length-1 , 1 to length becaue it will check from left and right sider 
};