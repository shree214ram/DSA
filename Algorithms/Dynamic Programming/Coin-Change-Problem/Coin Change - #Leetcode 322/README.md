Jenney's Lectures :- 
https://www.youtube.com/watch?v=J2eoCvk59Rc


https://www.youtube.com/watch?v=-NTaXJ7BBXs

Coin Change - Dynamic Programming Bottom Up - Leetcode 322

https://www.youtube.com/watch?v=ZI17bgz07EE&list=RDCMUCnxhETjJtTPs37hOZ7vQ88g&index=2


https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/


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




