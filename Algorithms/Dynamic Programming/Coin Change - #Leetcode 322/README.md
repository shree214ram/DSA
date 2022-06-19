https://www.youtube.com/watch?v=J2eoCvk59Rc

https://www.youtube.com/watch?v=-NTaXJ7BBXs

Coin Change - Dynamic Programming Bottom Up - Leetcode 322

https://www.youtube.com/watch?v=ZI17bgz07EE&list=RDCMUCnxhETjJtTPs37hOZ7vQ88g&index=2

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the "fewest number of coins" that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

{1,5,6,9} Target is 11

possible combinations are :- {9,1,1},{5,6},{5,5,1}, {1,1,1,1,1,6}, {1,1,1,1,1,1,5}

Greedy Solution is :- Most element coins will be choosen first then remaining like (9,1,1) but this is not Optimal Solution 
We can Use Dynamic Programming for below 

1. broke problem into sub problem 
2. store in memory (Memoization )
3. if already exist in memory dont call the function just reuse 

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
|               |               |               |
|               |               |               |   

f(9)
-----------------------
            {1, 5,  6,  9}
Steps:-

1. 