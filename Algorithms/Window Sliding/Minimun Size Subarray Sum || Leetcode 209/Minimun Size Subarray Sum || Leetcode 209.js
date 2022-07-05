// Minimun Size Subarray Sum || Leetcode 209
https://www.youtube.com/watch?v=S6Xg-0uaODc

// 1. Two Pointer
// 2. Sliding Window with variable size of window

// target = 7

// 2, 3, 1, 2, 4 3

// left = 0
// right = 0
// sum = 0
// n = Arr.lenght


// 1. First Loop for keep all element of array one by one
// while (right < n) {
//    2. we will add elements in sum keep going on until sum <= Target(Add next element)

//    sum = sum + Array[right](New Upcoming New Element)
//    2 = 2
//    2 + 3             =  5
//    2 + 3 + 1        =  6
//    2 + 3 + 1 + 2    =  8(we will stop because 8 > 7)


//    3. Once Second condition not proved we will remove  elements from left of window untill(sum >= Target) of window and
//    if (sum >= target) {
//       while (sum >= target) {
//          sum = sum - Arr[left]
//          left++
//       }
//    }
//    right++
// }

function find_minimumsize(Arr, n, target) {
   let left = 0
   let right = 0
   let sum = 0
   let shortest = 10000
   while (right < n) {
      sum = sum + Arr[right]
      if (sum >= target) {
         while (sum >= target) {
            sum = sum - Arr[left]
            left++
         }
         const currentShortest = right - left + 2
         shortest = Math.min(sum, currentShortest)
      }
      right++
   }
   const result = shortest === 10000 ? 0 : shortest
}

const target = 7
const Arr = [2, 3, 1, 2, 4, 3]
const n = Arr.length
find_minimumsize(Arr, n, target)
