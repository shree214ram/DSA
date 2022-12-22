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
// let start=end=0;
// let minLength = Integer.Max_Value;
// let currentSum = A[0]
// for(let i=1;i<A.length;i++){
//     if(currentSum >= Target){
//         minLength = Math.min(minLength,(end-start+1))
//     }else{
//         currentSum+=A[i];
//         end=i
//     }
// }
