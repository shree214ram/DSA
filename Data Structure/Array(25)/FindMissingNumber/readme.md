# Find Missing number In O(n) O(1) :-
Time, Space :-

1. Traverse two for loop O(n2) ( Sorted/Unsorted and +ve/-ve number)
    N^2 , N :- Two loop
    1. Sorted and +ve number
    2. Unsorted and -ve number (first we have to saperate +ve and work only on it)
2. Sort array Traverse one for loop O(nlogn)
    nlogn , nlogn
    1. Sorted and +ve number
    2. Unsorted and -ve number (first we have to saperate +ve and work only on it)
3. XOR Method  O(n) (Only in Sorted and +ve number)

4. Hash Map (n, n):- O(n) time on average, but it requires O(n) extra space
    1. Sorted and +ve number
    2. Unsorted and -ve number (insert in hash map only +ve number)
5. Advance (n,1) :-

    https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/?ref=gcse


    <!-- // Find the smallest positive number missing from an unsorted array | Set 1
    TimeO(n) SpaceO(1)
    You are given an unsorted array with both positive and negative elements. 
    You have to find the smallest positive number missing from the array in O(n) time 
    using constant extra space. You can modify the original array. -->

    ### using the logic of update the array via frequency value "Arr[(Arr[i]-1)%N]+=N" :-
    =>Arr[(Arr[i]-1)%N]+=N

    Same like "Find Duplicate O(n)" frequency update logic , only small difference is there we were using 

    Arr[Arr[i] % N] += N but here Arr[(Arr[i]-1)%N]+=N

    