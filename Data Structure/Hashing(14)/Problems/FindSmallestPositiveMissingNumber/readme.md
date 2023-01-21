https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/?ref=gcse


###    <!-- // Find the smallest positive number missing from an unsorted array | Set 1
    TimeO(n) SpaceO(1)
    You are given an unsorted array with both positive and negative elements. 
    You have to find the smallest positive number missing from the array in O(n) time 
    using constant extra space. You can modify the original array. -->

### using the logic of update the array via frequency value "Arr[(Arr[i]-1)%N]+=N" :-
    =>Arr[(Arr[i]-1)%N]+=N

    Same like "Find Duplicate O(n)" frequency update logic , only small difference is there we were using 

    Arr[Arr[i] % N] += N but here Arr[(Arr[i]-1)%N]+=N