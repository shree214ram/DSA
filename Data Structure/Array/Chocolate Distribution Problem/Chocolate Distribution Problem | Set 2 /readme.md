https://www.geeksforgeeks.org/chocolate-distribution-problem-set-2/?ref=rp

Given an array A[] consisting of N integers, where each value represents the marks of the ith student, the task is to find the minimum number of chocolates required to be distributed such that:

Each student should be awarded with at least one chocolate
A student with higher marks should be awarded more chocolates than his adjacent students.
Examples:

Input: A[] = {10, 30, 20}
Output: 4
Explanation : Since, 30 is larger than its adjacent, so the second student must get more chocolates. Therefore, the minimum chocolates can be distributed as {1, 2, 1} = 1 + 2 + 1 = 4

Input: A[] = {23, 14, 15, 14, 56, 29, 14}
Output: 12