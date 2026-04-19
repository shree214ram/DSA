/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let ml = Number.MAX_VALUE;
    let sum = 0;
    let start =0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum>=target){
            while(sum>=target && sum-nums[start]>=target && start<i){
                sum-=nums[start];
                start++
            }
            if(sum>=target){
                ml=Math.min(ml,i-start+1);
            }
        }
    }
    return (ml===Number.MAX_VALUE)? 0 :ml
};

//console.log(minSubArrayLen(11,[1,2,3,4,5]));

//console.log(minSubArrayLen(7,[2,3,1,2,4,3]));

console.log(minSubArrayLen(11,[1,1,1,1,1,1,1,1]));
//console.log(minSubArrayLen(4,[1,4,4]));

//expected 3