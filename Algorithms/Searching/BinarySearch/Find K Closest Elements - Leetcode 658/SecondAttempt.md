/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    /*
        As array its already sorted so we can use Binary Search and Sliding window 
    */
    // 1. Find the first closest element by two pointer 
    let l = 0, r = arr.length - 1
    while (l < r) {//mis0
        const mid = Math.floor((l + r) / 2)
        if (arr[mid] < x) { //mis1
            l = mid+1
        } else {
            r = mid 
        }
    }

    //2. prepare the k element window 
    let left = l-1, right = l //mis2 main mistake
    while (right - left - 1 < k) { //mis3
        if (left < 0) {
            right++
        } else if (right >= arr.length) {
            left--
        } else if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {//mis3
            left--
        } else {
            right++
        }
    }
    return arr.slice(left+1,right)//mis4
};