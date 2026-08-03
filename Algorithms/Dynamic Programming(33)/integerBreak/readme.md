/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    /*
    Partition Dp 

    1. max sum partition from index to k 


                        n=   10 
                        for loop
        1,        2,            3,      4,5,6,7,8,9
    9           8(reuse memo)   7(Reuse Memo)   ....
  8  7    
    */
    const DP=Array(n).fill(-1)
    const fn = (num) => {
        //base 
        if (num == 0) {
            return 
        }
        if(DP[num]!=-1) return DP[num]
        for (let i = 1; i < num-1; i++) {
            current = i+
            fn(num-i)
        }
    }
};