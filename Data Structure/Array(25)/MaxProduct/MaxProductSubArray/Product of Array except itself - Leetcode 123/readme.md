https://www.geeksforgeeks.org/a-product-array-puzzle/

Very important asked in below companies 
Flipkart
Morgan Stanley
Accolite
Amazon
Microsoft
D-E-Shaw
Intuit
Opera

### Navie Solution 1 {O(N+N) time and O(1) space}
1. ittrate given array  and calculate the total product of all the elements O(n)
2. Make output array output []
3. ittrate given array again and replace the iTh Index value with totalProduct/Arr[i]{self}
4. NOTE :- This will work only if 0 is not present  O(N+N) time O(1) space 
    1. O(N) time to calculate the total product array 
    2. O(N) time to replace the ith value with divisible  

Arr = [1,2,3,4]
totalProduct = 24
[24/1,24/2,24/3,24/4] output will be [24,12,8,6]

### Efficient Solution 2 {O(N) time and O(N) space}
1. Make 3 arrays prefix,suffix and output array 
2. ittrate given array  and 
    1. calculate the prefix total product by while loop (i=0 to less then current Ith Index)
    2. calculate the suffix total product by while loop (i=end to greater then current Ith Index)
3. ittrate given array again and push in Output Array at the iTh Index  with value = Prefix[i]*suffix[i]
4. NOTE :- O(N) time and O(N) space to store the prefix/suffix array

Arr = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

### Optimal Solution 3 {O(N) time and O(1) space}
1. Make 1 arrays  output array 
2. ittrate given array  and temp = 1
    1. temp*A[j] by while loop (i=0 to less then current Ith Index)
    2. temp*A[k] by while loop (i=end to greater then current Ith Index)
3. push in Output Array at the iTh Index  with value = temp
4. NOTE :- O(N) time and O(1) space to store the prefix/suffix array

Arr = [-1,1,0,-3,3]
Output: [0,0,9,0,0]