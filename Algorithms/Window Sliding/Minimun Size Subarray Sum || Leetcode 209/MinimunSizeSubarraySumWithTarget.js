

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
