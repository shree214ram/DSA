Basically Heap Sort work on 
1. Build a Max Heap.
2. Delete a node one by one at root and heapify recurcively . 

Add / delete both basically work at heapify method And 

Inser :- Always at the end of Tree and then arrange heap property
Delete :- Always at Root and then Heapify 

heapify methos is same like min heap only difference is that Left > HeapArray[larger] OR Right > HeapArray[larger], even in meanheap Left < HeapArray[smaller] OR Right < HeapArray[smaller]