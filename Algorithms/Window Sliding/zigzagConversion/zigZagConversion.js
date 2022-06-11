// https://www.geeksforgeeks.org/print-concatenation-of-zig-zag-string-form-in-n-rows/
// https://leetcode.com/problems/zigzag-conversion/ (6. Zigzag Conversion)
// Program for zig zag conversion 

// Input: s = "PAYPALISHIRING", numRows = 3

// P  A   H     N
// A P L S I  I   G
// Y    I   R

// Output: "PAHNAPLSIIGYIR"


const myString = "PAYPALISHIRING"
const n = 3;
const len = 3;
let row = 0;
let down = true;
if (n == 1) {
    console.log(myString);
    // return; 
}
const arr = []
for (let i = 0; i < myString.length; i++) {
    if (arr[row]) {
        arr[row] += (myString[i]);
    } else {
        arr[row] = (myString[i]);
    }


    if (row == len - 1) {
        down = false
    }

    else if (row == 0) {
        down = true
    }
    // increment, else decrement 
    if (down) {
        row++;
    }
    else {
        row--;
    }

}

for (let i = 0; i < n; ++i) {
    console.log(arr[i]);
}

