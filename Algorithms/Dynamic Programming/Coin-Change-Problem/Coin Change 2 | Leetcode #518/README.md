Jenney's Lectures :- 
https://www.youtube.com/watch?v=L27_JpN6Z1Q

https://www.youtube.com/watch?v=ruMqWViJ2_U

Coin Change 2 | Dynamic programming | Leetcode #518

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the "number of combinations" that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

https://www.geeksforgeeks.org/coin-change-dp-7/



Coin Change Problem using Recursion:
Solve the Coin Change is to traverse the array by applying the recursive solution and keep finding the possible ways to find the occurrence.

Illustration: 

It should be noted that the above function computes the same subproblems again and again. See the following recursion tree for coins[] = {1, 2, 3} and n = 5. 

The function C({1}, 3) is called two times. If we draw the complete tree, then we can see that there are many subproblems being called more than once.  

C() –> count()

                              C({1,2,3}, 5)                     

                           /                     \    
                         /                         \                  
            {3 liya Renaining 2}                {3 Nahi liya Remaining 5}
             C({1,2,3}, 2)                      C({1,2}, 5)  

                 /       \                          /    \         
             /              \                   /            \   
    {2 liya            {2 Nahi liya 
    Remaining -1}       Remaining 2}
    C({1,2,3}, -1)          C({1,2}, 2)        C({1,2}, 3)    C({1}, 5)
                            /    \                  /     \           /     \
                           /       \                /       \         /        \
                    {2 liya       {2 liya
                    Remaining 0} Remaining 2}
                    C({1,2},0)  C({1},2)   C({1,2},1) C({1},3)    C({1}, 4)  C({}, 5)

                        / \           / \          /\           /     \         
                     /      \      /     \       /   \        /        \  

                .      .  .     .   .     .              C({1}, 3)      C({}, 4)

                                                           / \  
                                                          /   \                                                 .      

Follow the below steps to Implement the idea:

We have 2 choices for a coin of a particular denomination, either i) to include, or ii) to exclude.
If we are at coins[n-1], we can take as many instances of that coin ( unbounded inclusion ) i.e count(coins, n, sum – coins[n-1] ); then we move to coins[n-2]. 
After moving to coins[n-2], we can’t move back and can’t make choices for coins[n-1] i.e count(coins, n-1, sum).     
Finally, as we have to find the total number of ways, so we will add these 2 possible choices, i.e count(coins, n, sum – coins[n-1] ) + count(coins, n-1, sum );

Note :- 
    1. If we will Include so => count(coins, n, sum – coins[n-1] )
        if we are at coin[n-1] choosing and we are moving to n-2 
    2. If we will not Include so => count(coins, n-1, sum )
        if we are not choosing then , and if we will move to n-2 so we cant move back to choose n-1 so we will 