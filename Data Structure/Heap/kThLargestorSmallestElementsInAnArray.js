//https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/?ref=rp

// https://www.youtube.com/watch?v=aXJ-p3Qa4TY

// Find the Kth smallest element from an array 
[8,3,4,5,1,9, 2] => [1,2, 3,4,5,8,9]
k=3
Solutions :-

1. using bubble sort o(n*n)  :-
   1. first sort an array 
   2. then find the kth smalest element like A[k-1]

1. using merge sort o(nlogn)  :-
   1. first sort an array 
   2. then find the kth smalest element like A[k-1]

2. using Heap :-
   
   1. Min Heap :-
      1. Insert element O(n)
      2. Hepify 
      3. Delete from root 

   2. Max Heap :-
      1. Insert element O(n)
      2. Delete from root 



      smallest Max 

            9 8 5 4 3 2 1

      lergest  Min 


                Kth Largest Element 
    Max Heap ------------------------>   O(n       +       k            log n )
                                             |               |              |
                                             Build          Taking Out     Hepify 
                                             Heap          (Delete)        Method
                Kth Largest Element
    Min Heap ------------------------>   O(n       +       n-k+1            log n-k+1 )
                                             |               |              |
                                             Build          Taking Out     Hepify 
                                             Heap          (Delete)        Method


    For example we have 100 element and we need 97th largest element 

    max heap se 97 times we have to Out element
    but from Min Hip only 3 times we have to out the element 
