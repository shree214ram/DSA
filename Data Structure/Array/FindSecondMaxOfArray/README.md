
// https://www.geeksforgeeks.org/find-second-largest-element-array/

Basically there are 3 methods 
1. Sort array in DESC:-
    The idea is to sort the array in descending order and then return the second element which is not equal to the largest element from the sorted array..
    Time Complexity: O(n log n). 
    Time required to sort the array is O(n log n).
    Auxiliary space: O(1). 
    As no extra space is required.
2. Better Solution: 
    Approach: The approach is to traverse the array twice. In the first traversal find the maximum element. In the second traversal find the greatest element less than the element obtained in the first traversal.
    Time Complexity: O(n). 
    Two traversals of the array is needed.
    Auxiliary space: O(1). 
    As no extra space is required.
3. Efficient Solution 
    Approach: Find the second largest element in a single traversal. 
    Below is the complete algorithm for doing this:  

    1) Initialize two variables first and second to INT_MIN as
    first = second = INT_MIN
    2) Start traversing the array,
    a) If the current element in array say arr[i] is greater
        than first. Then update first and second as,
        second = first
        first = arr[i]
    b) If the current element is in between first and second,
        then update second to store the value of current variable as
        second = arr[i]
    3) Return the value stored in second.
    
