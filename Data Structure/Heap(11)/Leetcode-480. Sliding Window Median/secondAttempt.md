/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    /*
        1. window 
        2. 1 Max and 1 Min Heap 
        3. Dont delete immidietelly we need to store in Map and once that would come on up we would remove 
        4. Balance max: half+1 min half 
        5. 

    */
    const maxH = new MaxHeapPriority()
    const minH = new MinHeapPriority()
    const map = new Map()
    const maxPrune = () => {
        while (maxH.size() > 0 && map.get(maxH.front()) > 0) {
            map.set(maxH.front(), map.get(maxH.front()) - 1)
        }
    }
    const minPrune = () => {
        while (minH.size() > 0 && map.get(minH.front()) > 0) {
            map.set(minH.front(), map.get(minH.front()) - 1)
        }
    }
    const rebalance = () => {
        if (minH.size() + 1 > maxH.size()) {
            maxH.enqueue(minH.dequeue())
        }
    }
    //first k element window 
    for (let i = 0; i < k; i++) {
        maxPrune()
        minPrune()
        maxH.enqueue(nums[i])
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        rebalance()
    }

    //other starts from k element window 
    for (let i = k; i < nums.length; i++) {
        maxPrune()
        minPrune()
        maxH.enqueue(nums[i])
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        rebalance()
    }
};