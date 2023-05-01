//https://www.geeksforgeeks.org/quick-sort/
// Javascript program for implementation of QuickSort 
/* This function takes last element as pivot, 
places the pivot element at its correct 
position in sorted array, and places all 
smaller (smaller than pivot) to left of 
pivot and all greater elements to right 
of pivot */
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1); // index of smaller element 
    for (let j = low; j < high; j++) {
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) {
            i++;

            // swap arr[i] and arr[j] 
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // swap arr[i+1] and arr[high] (or pivot) 
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}


/* The main function that implements QuickSort() 
arr[] --> Array to be sorted, 
low --> Starting index, 
high --> Ending index */
function sort(arr, low, high) {
    if (low < high) {
        /* pi is partitioning index, arr[pi] is 
        now at right place */
        let pi = partition(arr, low, high);

        // Recursively sort elements before 
        // partition and after partition 
        sort(arr, low, pi - 1);
        sort(arr, pi + 1, high);
    }
}

/* A utility function to print array of size n */
function printArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n; ++i)
        console.log(arr[i] + " ");
    console.log();
}

// Driver program 

let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;

sort(arr, 0, n - 1);

console.log("sorted array");
printArray(arr);

/*This code is contributed by Rajat Mishra */



