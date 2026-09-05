/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    /*

        1. 1 max heap , 1 min heap to findout the median 
        2. 1 hash map to store for Lazy Deletion 
        3. Balance the heaps in n/2+1 , n/2  

    */

    const maxH = new MaxPriorityQueue()
    const minH = new MinPriorityQueue()
    const map = new Map() //map for store top and delete once it comes on top
    const res = []


    const balance = () => {
        minH.enqueue(maxH.dequeue())
        if (minH.size() > maxH.size() + 1) {
            maxH.enqueue(minH.dequeue())
        }
    }
    const pruneMaxH = () => {
        while (maxH.size() > 0 && map.get(maxH.front()) > 0) {
            maxH.dequeue()
            map.set(maxH.front(), map.get(maxH.front()) - 1)
        }
    }
    const pruneMinH = () => {
        while (minH.size() > 0 && map.get(minH.front()) > 0) {
            minH.dequeue()
            map.set(minH.front(), map.get(minH.front()) - 1)
        }
    }
    // First K element
    for (let i = 0; i < k; i++) {
        if (maxH.size == 0) {
            maxH.enqueue(nums[i])
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)//setting the first element which will remove from left in next window 
        } else {
            maxH.enqueue(nums[i])
            balance()
        }
    }
    const setResult = () => {
        if (k % 2 == 0) {
            res.push((maxH.front() + minH.front()) / 2)
        } else {
            res.push(maxH.front())
        }
    }

    // remaining  element
    for (let i = k; i < nums.length; i++) {
        pruneMinH()
        pruneMaxH()
        maxH.enqueue(nums[i])
        balance()
        setResult()
    }
    return res;
};