// Implement a max heap:

// https://www.youtube.com/watch?v=NEtwJASLU8Q&t=448s

/*
1. Heap is a complete binary tree and max heap is a heap tree on which root always be greater than its childs .
2. Insert , a new element will be added always at last 
3. Delete an element always from top
*/

/*
Insert an single element :-
1. insert into last 
2. apply hepify method till we reach root (i=1)
3. if current value is greater than its parent than swap and Again Repeat step 3 till we reach i ==1  
*/

function insert_max_heap(A, no, value) {
    A[no] = value //Insert , a new element will be added always at last 
    const n = no
    let i = n

    //apply hepify method till we reach root (i=1)
    while (i >= 1) {
        const parent = Math.floor((i - 1) / 2)
        if (A[parent] < A[i]) {
            swap(A, parent, i)
            i = parent
        } else {
            i = parent
            //return ;
        }
    }
}

/*
Delete an single element :-
1. delete from root element 
2. Replace root with last element 
3. Decrese Array size one 
4. Heapify for remaining Element 
*/

//  [23 , 56 , 12, 1, 3, 78, 9] ==> [78, 56, 23, 12, 9, 3, 1]
/*
          78
      56      23
    12   9   3   1
*/
//Important Note Delete always be from first node and replace last element with root 
//extractMax 
function delete_from_root(A, n, currentIndex) {
    const root = A[0]
    // replace root to last element
    A[0] = A[n - 1]
    A[n - 1] = root
    const remainingElement = n - 2
    let i = currentIndex
    let largest = i
    while (i < remainingElement) {

        const left = 2 * i
        const right = 2 * i

        if (A[left] > A[largest]) {
            largest = left
        }
        if (A[right] > A[largest]) {
            largest = right
        }
        if (largest !== i) {
            swap(A, largest, i)
        } else {
            i++
        }
    }
}


function swap(A, parent, i) {
    let temp = A[parent]
    A[parent] = A[i]
    A[i] = temp
}

// const Arr = [23, 56, 12, 1, 3, 78, 9]
/*
          23
      56      12
    1   3   78   9

*/

//Build A MAx Heap O(n)
const Arr = [78, 56, 23, 12, 9, 3, 1]
console.log("Given Array==>", Arr)
/*
          23
      56      12
    1   3   78   9

*/

//Insert an item into Heap O(logn)
insert_max_heap(Arr, Arr.length, 5)
console.log("Result After Insert==>", Arr)


//Delete an item from Heap O(logn)
delete_from_root(Arr, Arr.length, 0)
console.log("Result After Delete ==>", Arr)