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
        //Left Part[] Right Part[12, 35, 1, 10, 37, 1]
        // while loop chalega jab tak ki A[i] chota hua back array elemets se 
        //Left Part[12] Right Part[35, 1, 10, 37, 1]
        // shuruat me A[j] {j=0} will be 12 and A[i] {i=1} will be 35 so no needt to replace 
        //Left Part[12,35] Right Part[1, 10, 37, 1]
        // second  me A[j] will be 12,35 {j= 0 to 1} and A[i] {i=2} will be 1 so 
            //1. needt to replace 35 with 1 
            //2. again 1 with 12 
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