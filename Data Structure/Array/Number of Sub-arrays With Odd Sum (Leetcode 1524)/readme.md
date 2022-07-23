Given an array of integers arr, return the number of subarrays with an odd sum.

Since the answer can be very large, return it modulo 109 + 7.

 

Example 1:

Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.

Navie Approach :-

resultOdd 
for()
    let temp = i
    if((i)%2)
    resultOdd.push(i)
 for(j=i){
     if((temp+j)%2)
    resultOdd.push(temp+j)
    temp = temp+j
     
 }
3 2 5 
 https://www.youtube.com/watch?v=kK7eiqMwmjc
 1. comulative sum array
 2. subtract the ith current sum and Add current value 

 https://www.youtube.com/watch?v=svvIB5pPc2E
 1. even odd formula 
 2. odd = even - odd 
 3. 