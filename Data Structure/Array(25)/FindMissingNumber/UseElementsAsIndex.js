// Javascript code to implement the approach

// Function to find the missing number
function findMissing(arr, size) {
    let i;
    for (i = 0; i < size; i++) {
        if (Math.abs(arr[i]) - 1 == size) {
            continue;
        }
        let ind = Math.abs(arr[i]) - 1;
        arr[ind] *= -1;
    }

    let ans = size + 1;
    for (i = 0; i < size; i++) {
        if (arr[i] > 0)
            ans = i + 1;
    }

    console.log(ans);
}

// Driver code
let arr = [1, 3, 7, 5, 6, 2];
let n = arr.length;

// Function call
findMissing(arr, n);

// This code is contributed by aarohirai2616.
