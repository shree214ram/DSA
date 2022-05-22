//https://www.youtube.com/watch?v=jlHkDBEumP0
/*
1. Find Middle
2. Devide first Half
3. Devide Second Half
4. Merge first and second half
*/

// 15 5 24 8 1 3 16 10 20 
// |                    |
// 0                    8
//                                                                         (0,8) Merge Sort
//                                         ------------------------------------------------------------------------
//                                         |                                      |                               |
//                                         (0,4)Merge Sort                         (5,8)Merge Sort                 Merge(0,4,8)
//                                                 |                                      
//                         --------------------------------------------------
//                         |                      |                         |
//                 (0,2)Merge Sort          (3,4)Merge Sort                 Merge(0,2,4)
// ------------------------------------------
// |                    |                   |
// (0,1)Merge Sort     (2)Merge Sort     Merge
// ----------------
// |     |        |
// (0)   (1)
// Merge Merge   Merge
// Sort  Sort      

function mergeSort(A, lb, up) {
    if (lb < up) {
        mid = (lb + up) / 2
        mergeSort(A, lb, mid)
        mergeSort(A, mid + 1, up)
        merge(A, lb, mid, up)
    }
}

/*
Merge :-

1. loop for merging (from lower bound to upper bound)
2. if 


*/

function merge(A, lb, mid, up) {
    let i = lb
    let j = mid + 1
    let k = lb
    const B = [] //temp array
    //loop start(i) from left array 0 index to max of first devided array(mid) && end (j) up to Heigher (up)  
    while (i <= mid && j <= up) {
        if (A[i] <= A[j]) {
            B[k] = A[i]
            i++
        } else {
            B[k] = A[j]
            j++
        }
        k++
    }
    //copy remaining item 
    if (i > mid) {
        while (j <= up) {
            B[k] = A[j];
            j++;
            k++
        }
    } else {
        while (i <= mid) {
            B[k] = A[i];
            i++;
            k++
        }
    }
    for(let m=0 ; m<B.length-1;m++){
        A[m]=B[m]
    }
}


// Driver method 

const arr = [12, 11, 13, 5, 6, 7];



mergeSort(arr, 0, arr.length - 1);

console.log("Sorted array==>");
console.log(arr); 