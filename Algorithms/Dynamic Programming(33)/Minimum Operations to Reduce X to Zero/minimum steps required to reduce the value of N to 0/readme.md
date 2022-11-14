

Given an integer N, the task is to count the minimum steps required to reduce the value of N to 0 by performing the following two operations:

Consider integers A and B where N = A * B (A != 1 and B != 1), reduce N to min(A, B)
Decrease the value of N by 1
Examples :

Input: N = 3
Output: 3
Explanation:
Steps involved are 3 -> 2 -> 1 -> 0
Therefore, the minimum steps required is 3.
 
Input: N = 4
Output: 3
Explanation:
Steps involved are 4->2->1->0.
Therefore, the minimum steps required is 3.
 

 5 

 5->4->3