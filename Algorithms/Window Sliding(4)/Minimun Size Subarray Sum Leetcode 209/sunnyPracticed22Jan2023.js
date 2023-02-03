
//3:59 //4:04
//const A = [2, 3, 1, 2, 4, 3] // output 2
const A = [2, 3, 1, 0, 2, 2, 4, 2, 1] // output 3

const Target = 7

let left = right = 0;
let min = Number.MAX_VALUE;
let currentSum = 0
while (right < A.length) {
    currentSum += A[right]
    if (currentSum >= Target) { //I did mistaken forget to add this if condition 
        while (currentSum >= Target) {
            currentSum -= A[left]
            left++

        }
        min = Math.min(min, right - left + 2)
    }
    right++
}
console.log("min= ", min)

