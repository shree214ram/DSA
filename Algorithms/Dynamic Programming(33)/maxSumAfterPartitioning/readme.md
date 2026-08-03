/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const memo = Array.from({length:arr.length},()=>Array(arr.length).fill(false))
    const solve=(index)=>{
        //base case 
        if(index>arr.length){
            return 
        }
        //memo
        if(memo[index]){
            return memo[index]
        }
        //calculation 
        // devide array into k parts 
        for(let i=0;i<k;i++){
            //find max of each part 
            let max=-Infinity
            max=Math.max(max,)
            //Q1 how to devide into k part 
            //Q2 How to know from which index to which index the sub array would be there [0 to 2] , [3 to 4] , [5 to 7]
        }
        return 
    }
    return solve(0)
};