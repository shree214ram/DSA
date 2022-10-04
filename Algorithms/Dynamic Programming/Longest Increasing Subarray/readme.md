https://www.geeksforgeeks.org/longest-increasing-subarray/

Given an array containing n numbers. The problem is to find the length of the longest contiguous subarray such that every element in the subarray is strictly greater than its previous element in the same subarray. Time Complexity should be O(n).

Examples:  

Input : arr[] = {5, 6, 3, 5, 7, 8, 9, 1, 2}
Output : 5
The subarray is {3, 5, 7, 8, 9}

Input : arr[] = {12, 13, 1, 5, 4, 7, 8, 10, 10, 11}
Output : 4
The subarray is {4, 7, 8, 10} 

Approach :- 
    currentMax = 1 
    finalMax = 1 
    last = A[0]
    start = 0
    for(let i=1;i<A.length;i++){
        if(current>last){
            currentMax++
        } else {
            currentMax=0
            start = i
        }
        last = A[i]
    }
    finalMax = Math.max(currentMax,finalMax)

For Print :- 
{5, 6, 3, 5, 7, 8, 9, 1, 2}
    |              |
    2              5
      start = 7 - finalMax(5)
      start = i+1-currentMax {i+1 because i starting from 0 and total distance currentMax coming counter starts from 1  }
                  jese hi is place par current Max > final max then we will change start 
                  to start = i- finalMax karenge kyonk hume ye pata lagana he ki ye wala max length kitna chala 


