//Sunny Tried :- 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    //15:21 15:33
    const dq=[]
    let sum=0;
    let shortest=Number.MAX_VALUE;
    let current = {sum:Number.MAX_VALUE,index:Number.MAX_VALUE};
    for(let i=0;i<nums;i++){
        sum+=nums[i]
        //1. sum check 
        if(sum==k){
            shortest=Math.min(shortest,i+1)
        }
        //2. left shrinking 
        while(dq.length!=0 && sum-dq[0].sum>=k){
            current=dq[0]
            dq.shift()
        }
        //3. check shortest 
        if(shortest!=Number.MAX_VALUE){
            shortest=Math.min(shortest,i-current.index)
        };

        //4. shrink from right 
        while(dq.length!=0 && sum<=dq[dq.length-1].sum){
            dq.pop()
        }
        //5. push latest current 
        dq.push({sum:sum,index:i})
    }
    return shortest==Number.MAX_VALUE ? -1  : shortest
};




// Correct optimized code 


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const dq = []
    let sum = 0;
    let shortest = Number.MAX_VALUE;
    
    // MISTAKE 1: current should start empty, not with MAX_VALUE
    // We only use 'current' when we actually find a valid window.
    
    // MISTAKE 2: You missed a starting point for the prefix sum.
    // We must push {sum: 0, index: -1} to handle subarrays starting at index 0.
    dq.push({sum: 0, index: -1});

    // MISTAKE 3: i < nums should be i < nums.length
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        
        // MISTAKE 4: You tried to do "sum == k" manually.
        // In this problem, the deque handles ALL cases (including sum >= k)
        // so we can jump straight to the left shrinking logic.

        // 2. left shrinking 
        while (dq.length !== 0 && sum - dq[0].sum >= k) {
            // MISTAKE 5: shortest update must happen INSIDE the while loop.
            // This ensures we check every possible valid starting point.
            shortest = Math.min(shortest, i - dq[0].index);
            dq.shift();
        }

        // 4. shrink from right (Maintain Monotonicity)
        while (dq.length !== 0 && sum <= dq[dq.length - 1].sum) {
            dq.pop()
        }
        
        // 5. push latest current 
        dq.push({sum: sum, index: i})
    }
    
    return shortest === Number.MAX_VALUE ? -1 : shortest
};