/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 class minHeap{


 }
var smallestRange = function(nums) {
    //Bruteforce : k whch is length of nums , k loops and check each and every combnation and in each combination find Min,Max and then find the ramge like Max-Min and comare with Final Min and we can create one Object like {minRange:,min:,max} so we will replace with Minimum Range every time after each combinatina and also we would know what was the Min and Max for that MimRange Combination 
    // Optimised : 1. we will use Heap and store each num first element , 2. we will increase the row when all col finished ther wise we will increase col and then we would compare like first time [4,0,5] then 0 is Min 5 is Max and range is 5-0 which is 5 . Now we will check first in the first row it self like 10 is the next number of 0th num so we would check if rootTop of Heap is 
    // Doubt what should I store in Heap range or elemet it self ?
    // If I should Store Range then How I should check ?

    const hp=new minHeap();
    // push first element of each num
    let currentMax=Number.MIN_VALUE
    for(let i=0;i<nums.length;i++){
        hp.add({val:nums[i][0],row:i,col:0})
        currentMax=Math.max(currentMax,nums[i][0])
    }
    const lastMin=hp.data[0] //last removed element 
    let i=lastMin['row'],j=lastMin['col']
    while(i<nums.length && nums[i][j]){
        if(nums[i][j]){
            const top=hp.removeTop();
            hp.add({val:nums[i][0],row:i,col:0})
            currentMax=Math.max(currentMax,nums[i][0])
        }
    }
    //sorry not able to write 40 min over 

};