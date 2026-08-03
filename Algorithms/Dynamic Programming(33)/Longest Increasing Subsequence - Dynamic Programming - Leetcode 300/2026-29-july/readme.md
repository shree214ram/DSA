/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    /*
        DP 1 Dd array 

        and 2 for loop but that wuld take ON*N time and ON space 

        we need to think for onlogn
        so the tail method coming in my mind but how to use that i just forget need small hint
    */
    if(nums.length==1){
        return 1
    }
    const tail=[nums[0]]
    for(let i=1;i<nums.length;i++){
        let left=0
        let right=tails.length-1
        while(left<right){
            const mid=Math.floor((left+right)/2)
            if(nums[i]>=tails[mid]){
                left=mid
            }else{
                right=mid
            }
        }
        tails[left]=nums[i]
    }
    return tails.length
};