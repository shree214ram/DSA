
https://www.youtube.com/watch?v=QN9hnmAgmOc

# Quick Sort 

```
Pivot
|
7   6   10  5   9   2   1   15  7
|                               |
start                           end

if(current element is less than or equal to  pivot than Increment the Index from 0 to 1, 1 to 2 ......)
--------->
else stop and change start at that point 
     |
      10  (start)

if(current element is greater than or equal to  pivot than Decrement the Index from last to last-1, last-1 to last-2 ......)
<----------
else stop and change start at that point 
                               |
                               7(end)
                               if(start < end){
                                    if start is not crossed to end variable then 
                                    
                                    swap (start and end)
                               }

                               if(start > end){
                               if start is crossed to end variable then 

                               swap (pivot and end)
```