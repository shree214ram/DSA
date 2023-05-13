// https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

Write a C function to return minimum and maximum in an array. 
Your program should make the "minimum" number of comparisons.

1. Ittrative Method {Maximum and minimum of an array using Linear search:}
    1. Initiallized min and max variable 
    2. compare from 1st and 2nd element and      
    3. starts from 3 rd and compare repetiadly 
    4. And finalised the minimum and maximum

    ```
    min = 999999,  max=-1
    Arr = [12,3,34,90,2,1]
 
    if(A[0]<A[1]){
        min = A[0]
    } else {
        max = A[1]
    }

    for(i=2;i<Arr.length-1;i++){
        if(A[i]<min){
            min = A[i]
        } else {
            max = A[i]
        }
    }
    ```
    Time Complexity: O(n)

    Auxiliary Space: O(1) as no extra space was needed.

    In this method, the total number of comparisons is 1 + 2(n-2) in the worst case and 1 + n – 2 in the best case. 
    In the above implementation, the worst case occurs when elements are sorted in descending order and the best case occurs when elements are sorted in ascending order.

2. Devide And Concure Method (Tournament Method) 

    ```
    Pair MaxMin(array, array_size)
    if array_size = 1
        return element as both max and min
    else if arry_size = 2
        one comparison to determine max and min
        return that pair
    else    /* array_size  > 2 */
        recur for max and min of left half
        recur for max and min of right half
        one comparison determines true max of the two candidates
        one comparison determines true min of the two candidates
        return the pair of max and min
    ```

    Time Complexity: O(n)
    Auxiliary Space: O(log n) as the stack space will be filled for the maximum height of the tree formed during recursive calls same as a binary tree.
3. Compare in Pairs {Maximum and minimum of an array by comparing in pairs:}:-

https://www.youtube.com/watch?v=p_Gvzo0iNPE

    ```
    
    if array_size = 1
        return element as both max and min
    else if arry_size = 2
        one comparison to determine max and min
        return that pair
    else    /* array_size  > 2 */
        1. if Array size is odd then min and max value as A[0] , loop start from 1
        2. if Array size is Even then min min(A[0] ,A[1] )and max max(A[0] ,A[1] )value, loop start from 2
        3. Most important point is we are compairing in pair so Increment i+2 not i++ 
         
         0 , 1 , 2 , 3 , 4 , 5
         |---|
              

         Let say even so we compared from A[0] and A[1] And Next itteration should start from A[2] So we will give i =2 

         while(i<Arr.length-1){
             i is 2 so 
             1. (Jo bada hoga usko max se compare and jo chota hoga usko min se compare )
                check if A[i] < A[i+1]
                {
                    min = Math.Min(min,A[i])
                    max = Math.Min(max,A[i+1])
                } else {
                     min = Math.Min(min,A[i+1])
                    max = Math.Min(max,A[i])
                }
            2. Increment by 2 i+2 for skip i+1 which is already encountered .
         }
    ```

    Time Complexity: O(n)
    Auxiliary Space: O(1) as no extra space was needed.

    The total number of comparisons: Different for even and odd n, see below: 

        If n is odd:    3*(n-1)/2  
        If n is even:   1 Initial comparison for initializing min and max, 
                            and 3(n-2)/2 comparisons for rest of the elements  
                        =  1 + 3*(n-2)/2 = 3n/2 -2
    The second and third approaches make an equal number of comparisons when n is a power of 2. 
    In general, method 3 seems to be the best.
    Please write comments if you find any bug in the above programs/algorithms or a better way to solve the same problem.