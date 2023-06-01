
<script>
/*Given an array of integers nums and 
an integer target, return indices of 
the two numbers such that they add up to target.
   You may assume that each input would have exactly 
   one solution, and you may not use the same element
    twice.
   You can return the answer in any order.
   Input: nums = [2,7,11,15], target = 9
   Output: [0,1]
   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

//1. Two O(N2)
// 2. We has map O(N) O(N) {key : 2, value : Index Of Array}
// const A = [2,7,11,15];
// const hash = new Map();
// const target = 9;
// const result = []
// for(let i=0;i<A.length;i++){
//   if(hash.has(target-A[i])){
//     result.push(i)
//     result.push(hash.get(target-A[i]))
//   }
//   hash.set(A[i],i)
// } 
// console.log(result)




// ======

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

*/
// 4 
// -6 + 4 + -2 3 -2
const A = [7,1,5,3,6,4]
let min = A[0];
let finalProfit = 0
for(let i=1;i<A.length;i++){
  if(A[i]>min){
  finalProfit =Math.max(A[i]-min,finalProfit) 
  }else{
    min = A[i]
  }
}

console.log(finalProfit,"finalProfit")

</script>