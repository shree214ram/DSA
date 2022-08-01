1. https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/ :- 
Time Complexity: O(n), only one traversal is needed, so time complexity is O(n)
Auxiliary Space: O(1), no extra space is required, so space complexity is constant.

****But there is a problem in the above approach. It prints the repeated number more than once.****

2. https://www.geeksforgeeks.org/duplicates-array-using-o1-extra-space-set-2/ :- perfect solution which takes o(1) space 

The basic idea is to use a HashMap to solve the problem. But there is a catch, the numbers in the array are from 0 to n-1, and the input array has length n. So, the input array can be used as a HashMap. While traversing the array, if an element a is encountered then increase the value of a%n‘th element by n. The frequency can be retrieved by dividing the a%n‘th element by n.

Traverse the given array from start to end.
For every element in the array increment the arr[i]%n‘th element by n.
Now traverse the array again and print all those indices i for which arr[i]/n is greater than 1. Which guarantees that the number n has been added to that index.
Note: This approach works because all elements are in the range from 0 to n-1 and arr[i]/n would be greater than 1 only if a value “i” has appeared more than once.