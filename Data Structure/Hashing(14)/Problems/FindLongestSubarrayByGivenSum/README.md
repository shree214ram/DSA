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
    Time Complexity: O(N), where N is the length of the given array.
    Auxiliary Space: O(N), for storing the maxLength in the HashMap.

    MaxLength = 0
    sum = 0
    for(){
        sum = sum + A[i]
        if(sum==Target){
            MaxLength= i+ 1 //set MaxLength with current Index + 1 
        }
        if((Sum-Target) exist in Hash){
            update maxLen :- 
            if (Value of i-Sum-Target in hash is greater than MaxLength){
                maxLength= Math.max(MaxLength,hash.get(sum -Target)
            }
        }
        if(notExist Sum In Hash){
            Add Sum in Hash with value currentIndex
        }
    }
3. Variable window slide and Two pointer {This approach won’t work for negative numbers}
    Time Complexity: O(N), where N is the length of the given array.
    Auxiliary Space: O(1), as constant extra space is required.

    const A = [ 10, 5, 2, 7, 1, 9 ]
    let left=right=0
    let currentSum = 0
    const Target = 15
    let maxLength = Number.MIN_VALUE
    while(right<A.length){
        currentSum+= A[right]
        if(currentSum == Target){
            left++
            right++
            maxLength = Math.max(maxLength,right-left+1)
        }else if(currentSum > Target){
            while(currentSum > Target){
                currentSum-=A[left]
                left++
            }
            if(currentSum == Target){
                maxLength = Math.max(maxLength,right-left+1)
            }
            right++
        }else if(currentSum < Target) {
            right++
        }
    }
    console.log( "Length = "
        + maxLength);