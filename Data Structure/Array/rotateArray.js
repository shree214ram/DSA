/************ Using temp array Method ***************/
// Time complexity : O(n)
// Auxiliary Space : O(d)

/*
Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
1) Store d elements in a temp array
   temp[] = [1, 2]
2) Shift rest of the arr[]
   arr[] = [3, 4, 5, 6, 7, 6, 7]
3) Store back the d elements
   arr[] = [3, 4, 5, 6, 7, 1, 2]
*/


/************ Rotate one by one Method ***************/
// Time complexity : O(n * d)
// Auxiliary Space : O(1)

/*Function to left Rotate arr[]   
of size n by 1*/
function leftRotatebyOne($arr, $n) {
    $temp = $arr[0];
    let $i = 0
    for ($i = 0; $i < $n - 1; $i++)
        $arr[$i] = $arr[$i + 1];
    $arr[$i] = $temp;
}

/*Function to left rotate arr[]  
  of size n by d*/
function leftRotateRotateOneByOne($arr, $d, $n) {
    for (let $i = 0; $i < $d; $i++)
        leftRotatebyOne($arr, $n);
}

/* utility function to print  
   an array */
function printArray($arr, $n) {
    for (let $i = 0; $i < $n; $i++)
        console.log($arr[$i] + " ");
}

// Driver Code 

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log("Array =>")
printArray(arr, 7);
leftRotateRotateOneByOne(arr, 2, 7);
console.log("Rotated Array =>")
printArray(arr, 7);






/************ Juggling Method ***************/
// Time complexity : O(n)
// Auxiliary Space : O(1)

// https://www.youtube.com/watch?v=utE_1ppU5DY

/*Function to left rotate arr of siz n by d*/
function leftRotateJugglingMethod(arr, d, n) {
    let i, j, k, temp;
    const g_c_d = gcd(d, n);
    for (i = 0; i < g_c_d; i++) {
        /* move i-th values of blocks */
        temp = arr[i];
        j = i;
        while (true) {
            k = j + d;
            if (k >= n)
                k = k - n;
            if (k == i)
                break;
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }
}

/*UTILITY FUNCTIONS*/

/* function to print an array */
function printArray(arr, size) {
    let i;
    for (i = 0; i < size; i++)
        console.log(arr[i] + " ");
}

/*Fuction to get gcd of a and b*/
function gcd(a, b) {
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}

// Driver program to test above functions 

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log("Array =>")
printArray(arr, 7);
leftRotateJugglingMethod(arr, 2, 7);
console.log("Rotated Array =>")
printArray(arr, 7);




/************ Reversal Method ***************/
// Time complexity : O(n)


// algorithm of array rotation 

/* Function to left rotate 
   arr of size n by d */
function leftRotateReversalMethod($arr, $d, $n) {

    if ($d == 0)
        return;
    rvereseArray($arr, 0, $d - 1);
    rvereseArray($arr, $d, $n - 1);
    rvereseArray($arr, 0, $n - 1);
}

/*Function to reverse $arr 
  from index start to end*/
function rvereseArray($arr,
    $start, $end) {
    while ($start < $end) {
        $temp = $arr[$start];
        $arr[$start] = $arr[$end];
        $arr[$end] = $temp;
        $start++;
        $end--;
    }
}

// Function to  
// print an array  
function printArray($arr, $size) {
    for ($i = 0; $i < $size; $i++)
        console.log($arr[$i] + " ");
}

// Driver code 



const arr = [1, 2, 3, 4, 5, 6, 7];
console.log("Array =>")
printArray(arr, 7);
leftRotateReversalMethod(arr, 2, 7);
console.log("Rotated Array =>")
printArray(arr, 7);






