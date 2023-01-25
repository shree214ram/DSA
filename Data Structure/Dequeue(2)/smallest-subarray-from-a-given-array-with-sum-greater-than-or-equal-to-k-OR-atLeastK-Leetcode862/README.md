//Sortest Sub array with sum at least K || Leetcode 862
// https://www.youtube.com/watch?v=K0NgGYEAkA4

// Monotenically 


// Cumulative :- becuase of -ve number exists in array so we can not use 2 pointer and sliding window we may have to use a different Data Structure 

// Deqeue : Need to understand if (-ve) elements exist for Monotenically Graph 

// https://ttzztt.gitbooks.io/lc/content/combination/shortest-subarray-with-sum-at-least-k.html

https://www.javatpoint.com/ds-deque 

Dequeue is a special type of queue in which Insertion and deletion can be perform from both the end . 

https://www.geeksforgeeks.org/smallest-subarray-from-a-given-array-with-sum-greater-than-or-equal-to-k/?ref=gcse

// const A = [2, 1, 1, -4, 3, 1, -1, 2], Target = 5 
//Output: 4
### we have to use a Deque 

1. prepare current sum 
    currentSum+=A[i]
2. current sum if equals to target 
    if(currentSum>=Target){
        minLength=Math.min(minLength,i+1)
    }
3. let current = {first:Number.MAX_VALUE,second:Number.MAX_VALUE}
4. Delete front for reduce the window size till //if currentSum > Target
    while(!dq.empty() && (currentSum - dq.front.second) >= Target){
        current = dq.deleteFront()
    }
5. change min Length 
        minLength=Math.min(minLength,i-current.first)
6. Maintain Monotonically Order {Delete rear if currentSum > Target}
    while(!dq.empty() && ( dq.rear.second) >= currentSum){ // mistake only ( dq.rear.second) >= currentSum will come at place of (currentSum - dq.rear.second) >= currentSum
        current = dq.deleteRear()
    }
7. Add front in dequeue
    dq.addFront({first:i,second:sum})
