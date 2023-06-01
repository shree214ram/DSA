https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/

Given two strings, string and pattern, the task is to find the smallest substring in string containing all characters of pattern. 

Examples: 

Input: string = “this is a test string”, pattern = “tist” 
Output: “t stri” 
Explanation: “t stri” contains all the characters of pattern.

Input: string = “geeksforgeeks”, pattern = “ork” 
Output: “ksfor”

https://www.youtube.com/watch?v=GZjW14vX2Ps&ab_channel=CodingSimplified 

1. Naview Approach 3 loop
2. Hasing and two loop as sunny written 
3. Two pointer and sliding window 
    This Idea is some how similar like DSA\Algorithms\Window Sliding(4)\Minimun Size Subarray Sum Leetcode 209\readme.md

   ### Need mor understanding on it 
    https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/
    see this and video again 
    https://www.youtube.com/watch?v=GZjW14vX2Ps&ab_channel=CodingSimplified 
    
   ### @sunny Analysis 
    1. make 1 hash map of  Pattern pHash
    2. ittrate over string and push each element of string in sHash 
    3. if current element of array A[i]'s value is low Or Equal to Pattern pHash same A[i]'s value then increment conter 
    4. if counter and pattern length are same {that means anagram present in sHash}
    5. then we will decrese the window size from left{start} untill 
        1. start candidate does not exist in pHash OR 
        2. start candidate count in sHash is greater than pHash  
        3. start++
    6. replace the min Window sise with final minWindow Length
    7. Print the substr (start , minWindow)

   ### I have understood the Approach but i have done 2 times big mistake step 3 in sunnyTest23May.js and sunnytest20March2023.js
    
