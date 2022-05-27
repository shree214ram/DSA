//https://www.geeksforgeeks.org/heap-sort/
//https://www.youtube.com/watch?v=Q_eia3jC9Ts

Basically Heap Sort work on 
1. Build a Max Heap.
2. Delete a node one by one at root and heapify recurcively . 

Add / delete both basically work at heapify method And 

Inser :- Always at the end of Tree and then arrange heap property
Delete :- Always at Root and then Heapify 

Max heap heapify methos is same like min heap only difference is that Left > HeapArray[larger] OR Right > HeapArray[larger], even in meanheap Left < HeapArray[smaller] OR Right < HeapArray[smaller]

Max Heap :- means root element will be heigher than its child 

1. Build a max heap at every element of array will take o(nlogn) time complaxity 
2. So , till which is having Leave element (dont call on non leave lement) that process called Hepify method .will take O(n) time 
3. Delete a element from top and then call hepify method recurcivly .




function hepify(A,n,i){
    let largest = i //we make larget on which index we are 
    let left = 2i
    let right = 2i +1 

    //Loop should work only left child not more than Total No of elemnt 
    // And current index value A[largest] if smaller than its Left child Or Left child A[left] is greater than  current index then we will replace larget with left child 
    while(left < n && A[left] > A[largest]){
        larget = left
    }

    //Loop should work only right child not more than Total No of elemnt 
    // And current index value A[largest] if smaller than its Left child Or Left child A[left] is greater than  current index then we will replace larget with right child 
    while(right < n && A[right] > A[largest]){
        larget = right
    }
    //If current largent value is not equal to which is defined in the first line of this function  That means we need to swap this two index values and for maintened Max heap again call hepify
    if(lergest != i){
        swap(A[larget],A[i])
        //for maintened Max heap again call hepify if after swap below some more  condition might be possible that "current value less then to its child "
        hepify(A,n,larget)
    }

}

function heap_sort(A,n){
    //build max heap

    //why we start n/2 because there is not required to start loop for "Non Leave" element for saving time complaxity
    for(i=n/2; i>=1; i--){
        hepify(A,n,i)
    }

    //delete last element
    for(i=n;i>=1;i--){
        swap(A[i],A[1])
        hepify(A,n,1) // for replace last element with first element 
    }


}



