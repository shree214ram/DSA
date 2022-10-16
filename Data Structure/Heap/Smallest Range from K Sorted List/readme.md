# Smallest Range from K Sorted List

### Approach1 :- 
1. compare all the element one by one in k array and update smallest range 

### Approach2 :- 
1. Make a data structure 
2. put all the arrays first element 
3. findout min and max O(k)
3. update smallest difference range O(n*k)

### Approach 3:- 
https://www.geeksforgeeks.org/find-smallest-range-containing-elements-from-k-lists/
1. Make a minHeap 
2. put all the arrays first element 
3. findout min and max O(1)
4. update smallest difference range O(n*k)
    if current[small,max] difference is smaller than old then update 
5. Add New Element of Same Array (jisme se humne smallest value nikali he)
6. while loop chalta rahega jab tak ki heap not equal empty
    while(heap != empty){
    1. let temp = heap.top, row = temp.row, col = temp.col
    2. pop top element 
    3.  if((currentMax-currentMin) < (oldMax-oldMin)){
        Update answer ;
    }
    4. Update  Max and push in min Heap 

        max = Math.max(max,A[row][col++])
        heap.push(A[row][col++],row, col++)
    }
