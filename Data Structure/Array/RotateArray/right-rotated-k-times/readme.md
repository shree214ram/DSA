https://www.geeksforgeeks.org/print-array-after-it-is-right-rotated-k-times/

https://www.geeksforgeeks.org/javascript-program-to-print-array-after-it-is-right-rotated-k-times/
k = no of rotation , n= no of item 
### Navie Approach :-
1. take mod , mod will give exect count of rotation if k > n , if n= 5 and rotation is 7 then k % n = 2 
    because till k =n will give us same array again 
2. if (i< k ){current index i chota ke K no of Rotation} then print k element from right most [N+i-k]
```
    {
        1, 2, 3 , 4 , 5  n =5 k =2 
        
                ----- [N+i-k] {indexes => 3 , 4}
        4 , 5 
    }
```
3.  else [i-k]
```
    {
        1, 2, 3 , 4 , 5  n =5 k =2 
        
        ------- [i-k] {indexes => 0, 1, 2}
        1, 2, 3
    }
```
### Reverse Approach :-
[1,2,3,4,5]
##### One way :- 
1. Reverse last k element [1,2,3,5,4]
2. Reverse first [N-k] element [3,2,1,5,4]
3. Reverse All Array [4,5,1,2,3]
##### Second way :- 
1. Reverse All Array [5,4,3,2,1]
2. Reverse first [k] element [4,5,3,2,1]
3. Reverse last [N-k] Array [4,5,1,2,3]
https://www.geeksforgeeks.org/print-left-rotation-array/