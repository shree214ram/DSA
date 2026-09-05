/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    // 
    const maxH = new MaxPriorityQueue()
    const minH = new MinPriorityQueue()
    const res = []
    
    const fn = (val) => {
        maxH.enqueue(val)
        const top = maxH.dequeue()
        minH.enqueue(top)
        if (minH.size() > maxH.size()) {
            const topM = minH.dequeue()
            maxH.enqueue(topM)
        }
        if (k % 2 == 0) {
            res.push((maxH.front() + minH.front()) / 2) //even
        } else {
            res.push(maxH.front()) //even
        }
    }
    //first K element
    for (let i = 0; i < k; i++) {
        //Add 
        fn(nums[i])
    }
    //remining element 
    for (let i = k; i < nums.length; i++) {
        const top = maxH.dequeue() //remove from left 
        fn(nums[i]) //insert into right
    }
    return res
};