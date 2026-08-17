/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    /*
    Interval DP

    Sequence DP 

    DP + Binary Search

    DP plus Partition :
        Integer Break 
        Traingle 
        Metrix Chain Multiplication 
        Edit Distance 
    */
    /*
    //this problem is for DP + Partition
    1. DP 

    2. rec func (index){
        //base case 

        //DP visited check 

        //partition 
        for(let i=index;i<Array.length)
    }

    3. call rec(0)

    Q1: two thing i am having in my mind partiton is required but 
        Burst Ballon (start from last and fill array with [1,...arr,1], then partitiate with i-1+k+i+1) , 
        Traingle (first index , last index send in recursion and take k=i+1 to j-1 and totaltrangle would be n-2), 
        Integer Break (num=10 param in recursion with then check current + rec(num-i) ) ,
        Maximum sum of (find max in each partion and then sum of each partion for maximum calculation )

        I think that Maximum sum of will work here because we were doing the Partition there and finding the Max and then doing into to the length pf that Partition 


        Just give me one hint Am I thinking correct ?

                                            [4,3,2,3,5,2,1]
                                            Index 0 value 4

                        4                                                     3              

        4+3 failed     4+2= 6 failed   .... 4+1=5 true means first Buket filled with [4,1]


Similar to 4 we will do for next index 1 for value 3 

if any of sub tree filled with 4 bucket with all equal sum bucket ten its true other wise failed 
*/
    const targetSum = nums.reduce((obj, sum) => sum + obj)
    const target = targetSum / k
    const defaultA = Array(k).fill(0)
    const visited = Array(nums.length).fill(false)
    const rec = (index, trey) => {

        if (index > nums.length) return true

        //visited 
        if (visited[index]) return visited[index]

        const sum = trey.reduce((obj, sum) => sum + obj)
        if (sum > targetSum){
            return false
        }

        //ckecking each egg trey block filled with exact egg or not 
        const filledTrey = trey.filter((_, obj) => obj != target)
        if (filledTrey.length == 0) {
            return true
        }
        for (let i = 0; i < k; i++) {
            visited[index + 1] = true
            //calcuation 
            trey[i] += nums[index]
            if (trey[i] <= target) {
                if(rec(index + 1, trey)) return true
            }
            //backtrack
            visited[index + 1] = false
            trey[i] -= nums[index]
        }
        return false

    }
    return rec(0, defaultA)
};