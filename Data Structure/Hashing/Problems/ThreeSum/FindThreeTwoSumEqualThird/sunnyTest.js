//3:59
//O(NlogN)
const A = [1, 2, 6, 4, 3, 8, 9]
//1. Sort in ASC
A.sort((a, b) => a - b)
// find 3 elements 2 elements sum is equal to third 
//Start from last because last elements will be always greater and who can become Target to check 
for (let i = A.length - 1; i >= 0; i--) {//1
    const Target = A[i]
    //i-1 will be right and 0 will be always left . will check in reverse order from right to left 
    let right = i - 1
    let left = 0
    //2 pointer method to search two pointer whose sum is equal to target 
    while (left < right) {//2
        const currentSum = A[left] + A[right]
        if (currentSum == Target) {
            console.log("Three elements in which =", A[i], ",= sum of ", A[left], ",", A[right])
            break;
        } else if (currentSum > Target) {
            right--
        } else if (currentSum < Target) {
            left++
        }
    }//2
}//1

