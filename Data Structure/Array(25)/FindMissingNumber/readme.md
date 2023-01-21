# Find Missing number In O(n) O(1) :-
Time, Space :-

1. Traverse two for loop O(n2) ( Sorted/Unsorted and +ve/-ve number)
    N^2 , N :- Two loop
    1. Sorted and +ve number
    2. Unsorted and -ve number (first we have to saperate +ve and work only on it)
2. Sort array Traverse one for loop O(nlogn)
    nlogn , nlogn
    1. Sorted and +ve number
    2. Unsorted and -ve number (first we have to saperate +ve and work only on it)
3. XOR Method  O(n) (Only in Sorted and +ve number)

4. Hash Map (n, n):- O(n) time on average, but it requires O(n) extra space
    1. Sorted and +ve number
    2. Unsorted and -ve number (insert in hash map only +ve number)
5. Advance (n,1) :-

    https://www.geeksforgeeks.org/find-the-missing-number/

    ### Use elements as Index and mark the visited places as negative

    Approach 5 (Use elements as Index and mark the visited places as negative): Use the below idea to get the approach

    Traverse the array. While traversing, use the absolute value of every element as an index and make the value at this index as negative to mark it visited. To find missing, traverse the array again and look for a positive value.

    Follow the steps to solve the problem:

    Traverse the given array
    If the absolute value of current element is greater than size of the array, then continue.
    else multiply the (absolute value of (current element) – 1)th index with -1.
    Initialize a variable ans = size + 1.
    Traverse the array and follow the steps:
    if the value is positive assign ans = index + 1
    Print ans as the missing value.