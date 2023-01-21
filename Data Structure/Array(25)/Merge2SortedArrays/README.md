https://leetcode.com/problems/merge-two-sorted-lists/
21. Merge Two Sorted Lists

https://www.geeksforgeeks.org/merge-two-sorted-arrays/?ref=gcse

### Merge with some extra space 

1. It is the brute force method to do the same. Take all the elements of arr1 and arr2 in arr3. Then simply sort the arr3.
    Time Complexity : O((m+n) log(m+n)) , the whole size of arr3 is m+n
    Auxiliary Space: O(1), No extra space is used
2. Insersion sort O(n^2)
    Arr3 
   (O(n1 * n2) Time and O(n1+n2) Extra Space) 

    1. Create an array arr3[] of size n1 + n2.
    2. Copy all n1 elements of arr1[] to arr3[]
    3. Traverse arr2[] and one by one insert elements (like insertion sort) of arr3[] to arr1[]. This step take O(n1 * n2) time.
3. Merge Sort O(mlogm+nlogn)
    Method 3 (O(n1 + n2) Time and O(n1 + n2) Extra Space) 
    ###### The idea is to use Merge function of Merge sort. 
4. Hash map O(m+n)
    Method 4: Using Maps (O(nlog(n) + mlog(m)) Time and O(N) Extra Space) 

### Merge without any extra space VVVVVV Important 
Brocade,Goldman-Sachs,Juniper,Linkedin,Microsoft,Quikr,Snapdeal,Synopsys,Zoho,Amdocs,Adobe

https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/

Input: ar1[] = {10}, ar2[] = {2, 3}
Output: ar1[] = {2}, ar2[] = {3, 10}  

Input: ar1[] = {1, 5, 9, 10, 15, 20}, ar2[] = {2, 3, 8, 13}
Output: ar1[] = {1, 2, 3, 5, 8, 9}, ar2[] = {10, 13, 15, 20}


The idea is to begin from the last element of ar2[] and search for it in ar1[]. If there is a greater element in ar1[], then we move the last element of ar1[] to ar2[]. To keep ar1[] and ar2[] sorted, we need to place the last element of ar2[] at the correct place in ar1[]. We can use the Insertion Sort for this

Follow the below steps to solve the problem:

Iterate through every element of ar2[] starting from the last element
Do the following for every element ar2[i]
Store last element of ar1[]: last = ar1[m-1]
Loop from the second last element of ar1[] while element ar1[j] is greater than ar2[i].
ar1[j+1] = ar1[j] Move element one position ahead, then j–
If last element of ar1[] is greater than ar2[i], then ar1[j+1] = ar2[i] and ar2[i] = last
Print the arrays
Note: In the above loop, elements in ar1[] and ar2[] are always kept sorted.

Below is the implementation of the above approach: