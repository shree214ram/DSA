//https://www.geeksforgeeks.org/insertion-sort/?ref=gcse
//https://www.youtube.com/watch?v=yCxV0kBpA6M
/*
Insertion Sorting work upon an array divided into two parts , one is sorted sub array and another one is unsorted subarray.
we trace unsorted array and we pickup an element from unsorted array and we insert into sorted sub array .
Steps :- 
1. Pick one value from unsorted array .
2. We are going to findout appropriate place to insert into sorted sub array
3. after finding appropriate place we insert into sorted subarray 
*/
function insertionSort(arr, arr_size) {
    // There should be atleast  1 elements  
    if (arr_size < 1) {
        console.log(" Invalid Input ");
        return;
    } else if (arr_size === 1) {
        console.log(" Insertion Sort = " + arr);
        return;
    }
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = temp;
    }
    console.log("The Insertion Sort = " + arr + "\n");
}
// Driver Code 
var arr = [12, 35, 1, 10, 37, 1];
var n = arr.length;
insertionSort(arr, n);