# Dynamic Programming 


What is Dynamic Programming :- 

Dynamic Programming with "Coin Change Minimum coins"

============================

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the "fewest number of coins" that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

{1,5,6,9} Target is 11

possible combinations are :- {9,1,1},{5,6},{5,5,1}, {1,1,1,1,1,6}, {1,1,1,1,1,1,5}

Greedy Solution is :- 
1) Most element coins will be choosen first then remaining like (9,1,1) but this is not Optimal Solution 
2) Some time solution does not exist (One more drawback of Greedy)

We can Use Dynamic Programming for below benifites 

1. broke problem into sub problem 
2. store in memory (Memoization )
3. if already exist in memory(DP) dont call the function just reuse 
4. solution 100% comes if exist 
```
if i will use 1 then remaining will be 11-1 = 10 

                                                                                        f(11)
                                                        -----------------------------------------------------------------  
                                                        | (1)                   | (5)               | (6)               |(9)
                                                        |                       |                   |                   |
                                                        |                       |                   |                   |
                                                        f(10)
                                    ---------------------------------------------    
                                    | (1)           | (5)           | (6)       |(9)
                                    |               |               |           |  
                                    |               |               |           |
                                    f(9)           
                    -----------------------   
                    | (1)  | (5)   | (6)  |(9)
                    |      |       |      |
                    |      |  (1)  |      |   
                    f(8)   f(4)--(we can reuse F4 From DP)
    -----------------------      |
    | (1)  | (5)   | (6)  |(9)   |
    |      |       |      |      |
    |      |       |      |      |
f(7)                             |
.f(6)                            |
.f(5)                            |
.f(4)     <-----------------------
.
.
.
Untill we will reach 
f(1) Or F(0)
```
Steps:-

1. we will Memoize the already exist value in DP and we will reuse and save the time compaxity 
2. We will use Bottom Up Approach so we can resuse the already solved sub problem 
2. For example :-


function coinChangeProblem(givenCoins,Target){


}

const givenCoins = [1,5,6,9]
const Target = 11
coinChangeProblem(givenCoins,Target)

============================

https://www.youtube.com/watch?v=-NTaXJ7BBXs

Dynamic Programming with "fibonacci series"
https://www.youtube.com/watch?v=lVR2u9lsxl8

1. broke problem into sub problem 
2. store in memory (Memoization )
3. if already exist in memory dont call the function just reuse 

O(M*N) rather than n*n 


# How to Start and Complete Rodmap for DP :-
https://www.youtube.com/watch?v=Zwp6M5sl36Q
Yogesh & Shailesh 

https://www.youtube.com/watch?v=Lw4_BOwSOcA&list=PLDdcY4olLQk3Z2Gyo3-VN8gvi7DRKK-YY
Yogesh & Shailesh  : DP Questions 


word break problem :-
https://www.youtube.com/watch?v=th4OnoGasMU


Uncrossed Lines Leetcode 1035
https://www.youtube.com/watch?v=duCx_62nMOA

Road Cutting problem Unbounded Knapsack
https://www.youtube.com/watch?v=nYJDp0Hj7M4




https://www.youtube.com/watch?v=Y0lT9Fck7qI
Climbing Stairs - Dynamic Programming - Leetcode 70 - Python


###Important Topics for cover Dynamic Programming :- 

0:00 - Intro
1:11 - 1. Fibonacci Numbers
7:36 - 2. Zero One Knapsack
13:57 - 3. Unbounded Knapsack
17:41 - 4. Longest Common Subsequence
24:21 - 5. Palindromes


#dynamic #programming #python
Disclosure: Some of the links above may be affiliate links, from which I may earn a small commission.

1. Fibonacci Numbers	            Solution Link	                            Problem Link
Climbing Stairs	                    https://youtu.be/Y0lT9Fck7qI	            https://leetcode.com/problems/climbing-stairs/
House Robber	                    https://youtu.be/73r3KWiEvyk	            https://leetcode.com/problems/house-robber/
Fibonacci Number		            https://www.youtube.com/watch?v=mBNrRy2_hVs https://leetcode.com/problems/fibonacci-number/
Maximum Alternating Subsequence Sum	https://youtu.be/4v42XOuU1XA	            https://leetcode.com/problems/maximum-alternating-subsequence-sum/
		
2. Zero / One Knapsack		
Partition Equal Subset Sum	        https://youtu.be/IsvocB5BJhw	            https://leetcode.com/problems/partition-equal-subset-sum/
Target Sum	                        https://www.youtube.com/watch?v=g0npyaQtAQM	https://leetcode.com/problems/target-sum/
		
3. Unbounded Knapsack		
Coin Change	                        https://youtu.be/H9bfqozjoqs	            https://leetcode.com/problems/coin-change/
Coin Change II	                    https://www.youtube.com/watch?v=Mjy4hd2xgrs	https://leetcode.com/problems/coin-change-2/
Minimum Cost for Tickets	        https://www.youtube.com/watch?v=4pY1bsBpIY4	https://leetcode.com/problems/minimum-cost-for-tickets/
		
4. Longest Common Subsequence		
Longest Common Subsequence	        https://youtu.be/Ua0GhsJSlWM	            https://leetcode.com/problems/longest-common-subsequence/
Longest Increasing Subsequence	    https://youtu.be/cjWnW0hdF1Y	            https://leetcode.com/problems/longest-increasing-subsequence/
Edit Distance	                    https://youtu.be/XYi2-LPrwm4	            https://leetcode.com/problems/edit-distance/
Distinct Subsequences	            https://youtu.be/-RDzMJ33nx8	            https://leetcode.com/problems/distinct-subsequences/
		
5. Palindromes		
Longest Palindromic Substring	    https://youtu.be/XYQecbcd6_c	            https://leetcode.com/problems/longest-palindromic-substring
Palindromic Substrings	            https://youtu.be/4RACzI5-du8	            https://leetcode.com/problems/palindromic-substrings/
Longest Palindromic Subsequence		                                            https://leetcode.com/problems/longest-palindromic-subsequence/






