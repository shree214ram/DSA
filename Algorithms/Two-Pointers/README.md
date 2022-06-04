// https://www.geeksforgeeks.org/two-pointers-technique/
<!-- https://www.youtube.com/watch?v=jnoVtCKECmQ -->

Find the two number pairs in Sorted Array whose total is equal to Given Sum X

Basically there are 2 methods 
1. Itrate 2 loop:-
    The naive method is to run two loops. The outer loop picks the beginning element, the inner loop finds the  sum with first element picked by outer loop . Finally return the sum. The time complexity of the Naive method is O(n^2).
2. Two Pointers :- 
    Using Two Pointer approach, we can find the  subarray sum in O(n) time. Following is the Two Pointers algorithm.

    1) We take 2 pointers 
    2) First Pointer will be first Element of Array and Second pointer will be last Element
    3) We will check if sum of two pointer value is smaller than X  then we will shift left pointer to right . If Sum of two pointer in less than X then shift right pointer to left 
    4) We will repeat 3 rd step until we will not reach the Sum is equal to X .

    The time complexity of this method is O(n).
    


function find2Sum(A,X){
    let i = 0
    let j = A.length -1 
    while(i<j){
        const currentSum = A[i] + A[j]
        if(currentSum < X){
            i++
        } else if(currentSum > X){
            j--
        } else if(currentSum == X){
            console.log("Elements are at "+i+", And "+j+" Index And Values are "+A[i]+" and "+A[j]+".")
            return;
        }
    } 
}

const Arr = [2,8, 9, 11, 23, 34]
const X = 11
find2Sum(Arr,X)

More problems based on two pointer technique. 

1. Find the closest pair from two sorted arrays
2. Find the pair in array whose sum is closest to x
3. Find all triplets with zero sum
4. Find a triplet that sum to a given value
5. Find a triplet such that sum of two equals to third element
6. Find four elements that sum to a given value