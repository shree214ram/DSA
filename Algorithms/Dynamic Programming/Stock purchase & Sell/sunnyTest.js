
//Sunny Solution 
//const A = [33, 18, 8, 2]
//const A = [1, 2, 3, 4, 5]
const A = [4, 5, 2, 1, 6, 10, 4, 9, 11]
let min = A[0]
let minIndex = 0
let max = A[A.length - 1]
let maxIndex = 0
for (let i = 1; i < A.length - 1; i++) {
    if (min < A[i]) {
        min = min
    } else {
        minIndex = i
        min = A[i]
    }
}
let j = A.length - 1;
while (j > minIndex) {
    max = Math.max(max, A[j])
    j--
}
console.log("Total Profit is ", max - min)


//GFG Solution 

// Javascript code to find Maximum difference
// between two elements such that larger
// element appears after the smaller number

// The function assumes that there
// are at least two elements in array.
// The function returns a negative
// value if the array is sorted in
// decreasing order.Returns 0 if
// elements are equal
function maxDiff(arr, arr_size) {
    let max_diff = arr[1] - arr[0];
    let min_element = arr[0];
    let i;
    for (i = 1; i < arr_size; i++) {
        if (arr[i] - min_element > max_diff)
            max_diff = arr[i] - min_element;
        if (arr[i] < min_element)
            min_element = arr[i];
    }
    return max_diff;
}

const arr = [4, 5, 2, 1, 6, 10, 4, 9, 11]
// let arr = [ 1, 2, 90, 10, 110 ];
let size = arr.length;
document.write("Maximum difference is " + maxDiff(arr, size));

// Sunny Code
const A = [4, 5, 2, 1, 6, 10, 4, 9, 11]
let oldMin = A[0]
let maxDiff = A[1] - A[0]
for (let i = 1; i < A.length; i++) {
    if (A[i] - oldMin > maxDiff) {
        maxDiff = A[i] - oldMin
    }
    if (A[i] < oldMin) {
        oldMin = A[i]
    }
}
console.log(maxDiff)

