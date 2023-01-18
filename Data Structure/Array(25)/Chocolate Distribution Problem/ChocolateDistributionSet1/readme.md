https://www.geeksforgeeks.org/chocolate-distribution-problem/

Given an array of N integers where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 

Each student gets one packet.
The difference between the number of chocolates in the packet with maximum chocolates and the packet with minimum chocolates given to the students is minimum.
Examples:

Input : arr[] = {7, 3, 2, 4, 9, 12, 56} , m = 3 
Output: Minimum Difference is 2 
Explanation:
We have seven packets of chocolates and we need to pick three packets for 3 students 
If we pick 2, 3 and 4, we get the minimum difference between maximum and minimum packet sizes.

Input : arr[] = {3, 4, 1, 9, 56, 7, 9, 12} , m = 5 
Output: Minimum Difference is 6 


Input : arr[] = {12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50} , m = 7 
Output: Minimum Difference is 10 

### Solution :- 

We need to findout the m elements in which Maximum and minimum elements Different should be final minimum 

1. sunnyBrouteForce.js is N + mn
    we are traversing 2  times , 
    1 for each value and 
    2 for m size window for find min and max 
2. gfg.js Sort and traverse 1 only 
    all the program will be same like sunnyBroute force only we will have sorted array so we dont need to 
    find min and max 

    min will be currect ith {A[i]} index value and max will be A[i+m-1]
