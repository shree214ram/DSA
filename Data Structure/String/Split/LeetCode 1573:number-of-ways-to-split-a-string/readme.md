https://www.geeksforgeeks.org/count-ways-to-split-a-binary-string-into-three-substrings-having-equal-count-of-zeros/

https://leetcode.com/problems/number-of-ways-to-split-a-string/

https://www.youtube.com/watch?v=ptBH9EdxjrY

Number of Ways to Split a String | LeetCode 1573 | Explained and Java Code

https://leetcode.com/problems/number-of-ways-to-split-a-string/

--------------------------------------------------------------------------------------
https://www.youtube.com/watch?v=TSX__xdfOM8

number of ways to split a string leetcode | leetcode 1573 | string java


1. NoOfSubString = 3 
2. TotalNoOfZero = count no of zeo 
3. ZeroInEachSubstring = TotalNoOfZero/NoOfSubString 
4. modOfTotalNoOfZero = TotalNoOfZero %  NoOfSubString
5. if(TotalNoOfZero == 0) return  (n-1)(n-2)/2
6. if(modOfTotalNoOfZero != 0) = return 0 
7. for(i=0;i<n){
    sum+=A[i]
    if(sum == ZeroInEachSubstring){
        firstCut++
    }
    if(sum == 2 * ZeroInEachSubstring){
        secondCut++
    }
}
8. return firstCut * secondCut
