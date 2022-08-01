//https://www.youtube.com/watch?v=XFPHg5KjHoo

// https://www.geeksforgeeks.org/longest-sub-array-sum-k/

Basically there are 2 methods same 
1. Itrate 2 loop:-
     The time complexity of the Naive method is O(n^2).
     maxLength = 0 
     Ittrate all the value in 2 loops and 
     for(i){
         sum = Array[i]
         for(j=i+1){
             sum +=Array[j]
         }
         if(sum==target){
             //update maxLength
             maxLength = Math.max(sum.length,maxLength)
         }
     }
     calculate the sum of all the element one by one in Sub Array and update the maximum Array Size and print the maxLength
2. Hash Map  :- 
    MaxLength = 0
    sum = 0
    for(){
        sum = sum + A[i]
        if(sum==Target){
            MaxLength= i+ 1
        }

        if(notExist In Hash){
            Add in Hash
        }
        if((Sum-Target) exist in Hash){
            update maxLen :- 
            if (Value of i-Sum-Target in hash is greater than MaxLength){
                maxLength= i - i-Sum-Target
            }
        }
    }
    
    
