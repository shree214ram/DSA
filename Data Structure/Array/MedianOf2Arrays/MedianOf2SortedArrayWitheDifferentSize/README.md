// https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/

Basically there are 2 methods 
1. Merge Sort Method:-
    Time Complexity: O(m + n).
    To merge both the arrays O(m+n) time is needed.
    Space Complexity: O(1).
    No extra space is required.
    1. i
2. By comparing the medians of two arrays Method (Divide and Conquer) :- 
    Time Complexity: O(min(log m, log n)).
    In each step one half of each array is discarded. So the algorithm takes O(min(log m, log n)) time to reach the median value.
    Space Complexity: O(1).
    No extra space is required.
    1. 
    

