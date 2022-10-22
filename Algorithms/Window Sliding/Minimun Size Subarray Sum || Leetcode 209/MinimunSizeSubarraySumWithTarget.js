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
         shortest = Math.min(shortest, currentShortest)
      }
      right++
   }
   const result = shortest === 10000 ? 0 : shortest
   console.log("Result =, ",result)
}

const target = 7
const Arr = [2, 3, 1, 2, 4, 3] // output 2
//const Arr = [2, 3, 1,0, 2, 2, 4,2,1] // output 3
const n = Arr.length
find_minimumsize(Arr, n, target)







