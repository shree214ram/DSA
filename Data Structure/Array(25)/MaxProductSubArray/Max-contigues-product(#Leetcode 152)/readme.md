

https://www.youtube.com/watch?v=lXVy6YWFcRM
Maximum Product Subarray - Dynamic Programming - Leetcode 152

https://leetcode.com/problems/maximum-product-subarray/

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.
A subarray is a contiguous subsequence of the array.


Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

# Solution :- 

https://www.youtube.com/watch?v=cNLHESv_XPc :-


take some variable 
A = [6,-3,-10,0,2]
min = A[0]
max = A[0]
result = A[0]

for(i=1){
    //jab bhi 0 ayega humko set karna he 1 to min and max 
    if(A[i]==0){
        min=max=1
        continiue;
    }else {
        let currentMin = min*A[i]
        let currentMax = max*A[i]
        min=Math.min(currentMin,currentMax)
        min=Math.min(min,A[i])//Ho sakta he ki currunt value khud bhi sabse choti ho sakti he 
        max=Math.max(currentMin,currentMax)
        max=Math.min(max,A[i])
        result = max
    }
}