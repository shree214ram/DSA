/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    /*
        1. We can use Heap solution NLOGN
        2. Quick select 
        3. we have given sorted array Binary Search and Two pointer , ksize sliding window 
    */
    //first find the first closest element 
    let l = 0, r = arr.length - 1
    while (l <= r) { //mis1
        const mid = Math.floor((l + r) / 2)
        if (arr[mid] < x) {//mis2
            l = mid + 1
        } else {
            r = mid  //mis3 
        }
    }

    let left = l - 1, right = l
    while (right - left - 1 < k ) {//mis4
        if (left < 0) {
            right++
        } else if (right >= arr.length) {
            left--
        } else if (Math.abs(x - arr[left]) <= Math.abs(x - arr[right])) {//mis4
            left--
        } else {
            right++
        }
    }
    console.log(left,right)
    return arr.splice(left+1,right)//mis5
};