https://www.youtube.com/watch?v=o-YDQzHoaKM
Find K Closest Elements - Leetcode 658 - Python

https://www.youtube.com/watch?v=Jv5ZB5EXRFw
Find K Closest Elements 🔥🔥 | 3 approaches | Brute + Better + Optimal | Leetcode 658 | C++ | Python

https://www.geeksforgeeks.org/find-k-closest-elements-given-value/

2. Heap Max (nlogn)
        Max at top {Target-current (diff) , currentElement}
    low 

    1. insert ke first element with  {Target-current (diff) , currentElement}
    2. if after k element diff is small then top remove top and insert latest 
    3. 
1. Two Pointer (n)
    |                      |
    left                 right

    if(x-A[l] < A[r]-x){
        j--
    }else{
        i++
    }
3. Binary Search (logn)
    1. find crossoverpoint : recursive function which is using ninary search 
    2. l = crossover , 
        r = l+1 , 
        while(l>=0 && r<n && count < k) {
            if(x-A[l]<A[r]-x){
                print A[l]
                l--
            }else{
                print A[r]
                r++
            }
            count++
        }