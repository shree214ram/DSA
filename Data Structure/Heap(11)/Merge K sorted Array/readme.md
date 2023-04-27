# Merge K sorted Array 

### Broute Force :-
1. Make ans array
2. put all elements of all array 
3. Sort ans

N*k Logn 

### Navie Approach :- 
1. Make a Min Heap
Step 1:- 
2. Insert first element of all the array , and compare which is minimum push in answer array 
3. We cant push  only value in min Heap , we would required which row and column Id 
4. We will make a Node with (data, i{RowId}, j{columnID})

Step 2:- 

5. if next element available of same (minimum value's) array then push in min Heap 
6. find the minimum element of minHeap via minHeap.top {minHeap[0]}
7. tmp = minHeap.top
    minHeap.push(tmp.data)
    i= temp.row
    j= temp.col
    //we need to check in the same row any element exist or not ??
    //How ? j++ means next value in same Row A[i]
    if(j++ < A[i].length){
        newNode = new Node(A[i][j++], i, j++)
        minHeap.push(newNode)
    }
8. minHeap.pop()



