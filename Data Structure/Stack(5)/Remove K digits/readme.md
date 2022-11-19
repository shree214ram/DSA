
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

 

Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 

Constraints:

1 <= k <= num.length <= 105
num consists of only digits.
num does not have any leading zeros except for the zero itself.
Accepted
289,054
Submissions


 
###### Sunny Approach Recursion

let A = "1432219", k = 3
A= A.spit("")
Output: "1219"
const startIndex=0,lastIndex=A.length-k,Res=[],Target=A.length-k
console.log("Result=",solve(startIndex,lastIndex,Res,Target,A))

function solve(startIndex,lastIndex,Res,Target,A){
    const Remaining = Target - Res.length
    if(Remaining == 0){
        return Res.join(",")
    }
    let foundMinIndex = -1, minValue=Number.MAX_VALUE,i=startIndex
    while(i<lastIndex){
        if(A[i]<minValue){
            minValue = A[i]
            foundMinIndex=i
        }
        i++
    }
    Res.push(minValue)
    solve(foundMinIndex+1,A.length-(Target-res.length)+1,Res,Target,A)

}

###### Stack Approach Surya Pratap Approach :-

https://www.youtube.com/watch?v=3QJzHqNAEXs
Remove K digits | Build lowest number | Leetcode #402

1. We knows that if we want to find minimun value , so we have to findout minimum element from left 
2. for example 19 is smaller so 91 is greater because at left----->right . If on left minimum value is there that means Minimim result will be there 
3. We have to remove the top hill Value for finding the minimum result .
4.we will use stack and will remove the 

###### https://www.geeksforgeeks.org/largest-number-possible-after-removal-of-k-digits/ Please look it also 
