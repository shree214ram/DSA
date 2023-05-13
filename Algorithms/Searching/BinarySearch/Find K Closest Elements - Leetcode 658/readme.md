https://www.youtube.com/watch?v=o-YDQzHoaKM
Find K Closest Elements - Leetcode 658 - Python

https://www.youtube.com/watch?v=Jv5ZB5EXRFw
Find K Closest Elements 🔥🔥 | 3 approaches | Brute + Better + Optimal | Leetcode 658 | C++ | Python

https://www.geeksforgeeks.org/find-k-closest-elements-given-value/

1. Heap Max O(n log k)
        Max at top {Target-current (diff) , currentElement}
    low 

    1. insert ke first element with  {Target-current (diff) , currentElement}
    2. if after k element diff is small then top remove top and insert latest 
    3. 

    ### Time Complexity: O(n log k), where n is the size of the array and k is the number of elements to be returned. The priority queue takes O(log k) time to insert an element and O(log k) time to remove the top element. Therefore, traversing through the array and inserting elements into the priority queue takes O(n log k) time. Popping elements from the priority queue and pushing them into the result vector takes O(k log k) time. Therefore, the total time complexity is O(n log k + k log k) which is equivalent to O(n log k).

    ### Space Complexity: O(k), as we are using a priority queue of size k+1 and a vector of size k to store the result.

2. Binary Search O(Logn + k) {Batter and efficient Solution}
    1. find crossoverpoint : recursive function which is using binary search 
    2. l = crossover , 
        r = l+1 , 
        while(l>=0 && r<n && count < k) {
            if(x-A[l]<A[r]-x) {
                print A[l]
                l--
            }else{
                print A[r]
                r++
            }
            count++
        
        }