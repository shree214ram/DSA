https://www.youtube.com/watch?v=cFd4-Dz8l4g

https://www.youtube.com/watch?v=cFd4-Dz8l4g

L15 is also similar to FindThreeTwoSumEqualThird only we need to 
1. avoid the repeated value in outer for loop 
2. And also need to increase the left pointer if current left == next left and decrease the right pointer if current right == next right 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const A = nums;
    if (A.length == 0 || A.length < 3) {
        return []
    }
    A.sort((a, b) => a - b);

    let res = []
    for (let i = 0; i < A.length - 2; i++) {
        if(i>0 && A[i]==A[i-1]){
            continue;
        }
        const target = -A[i];
        let left = i + 1;
        let right = A.length - 1;
        while (left < right) {
            if (A[left] + A[right] === target) {
                res.push([A[i], A[left], A[right]])
                left++
                right--
                while (left < right && A[left] === A[left - 1]) {
                    left++
                }
                while (left < right && A[right] === A[right + 1]) {
                    right--
                }
            } else if (A[left] + A[right] < target) {
                left++
            } else if (A[left] + A[right] > target) {
                right--
            }
        }
    }
    console.log(res);
    return res;

};