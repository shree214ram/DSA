// https://www.geeksforgeeks.org/find-maximum-product-of-a-triplet-in-array/
// A  program to find a 
// maximum product of a 
// triplet in array of integers 

// Function to find a maximum 
// product of a triplet 
// in array of integers of  
// size n  
// ****************** (Naive, O(n3) time, O(1) Space) ****************** //
function maxProductApproach1($arr, $n) {
    $INT_MIN = 0;

    // if size is less than  
    // 3, no triplet exists 
    if ($n < 3)
        return -1;

    // will contain max product 
    $max_product = $INT_MIN;

    for (let $i = 0; $i < $n - 2; $i++)
        for (let $j = $i + 1; $j < $n - 1; $j++)
            for (let $k = $j + 1; $k < $n; $k++)
                $max_product = Math.max($max_product,
                    $arr[$i] * $arr[$j] * $arr[$k]);

    return $max_product;
}

// Driver Code 
var $arr = [10, 3, 5, 6, 20];
var $n = $arr.length;
var $max = maxProductApproach1($arr, $n);
if ($max == -1)
    console.log("No Triplet Exists");
else
    console.log("Maximum product is =" + $max);






// ****************** (O(n) Time, O(n) Space) ****************** //

function maxProductApproach2($arr, $n) {
    // if size is less than 3, no triplet exists 
    if ($n < 3)
        return -1;

    // Construct four auxiliary vectors 
    // of size n and initailize them by -1 
    const newArray = [];
    let $leftMin = newArray.fill(0, $n, -1);
    let $rightMin = newArray.fill(0, $n, -1);
    let $leftMax = newArray.fill(0, $n, -1);
    let $rightMax = newArray.fill(0, $n, -1);

    // will contain max product 
    let $max_product = 0;

    // to store maximum element on left of array 
    let $max_sum = $arr[0];

    // to store minimum element on left of array 
    let $min_sum = $arr[0];

    // leftMax[i] will contain max element 
    // on left of arr[i] excluding arr[i]. 
    // leftMin[i] will contain min element 
    // on left of arr[i] excluding arr[i]. 
    for (let $i = 1; $i < $n; $i++) {
        $leftMax[$i] = $max_sum;
        if ($arr[$i] > $max_sum)
            $max_sum = $arr[$i];

        $leftMin[$i] = $min_sum;
        if ($arr[$i] < $min_sum)
            $min_sum = $arr[$i];
    }

    // reset max_sum to store maximum element on 
    // right of array 
    $max_sum = $arr[$n - 1];

    // reset min_sum to store minimum element on 
    // right of array 
    $min_sum = $arr[$n - 1];

    // rightMax[i] will contain max element 
    // on right of arr[i] excluding arr[i]. 
    // rightMin[i] will contain min element 
    // on right of arr[i] excluding arr[i]. 
    for (let $j = $n - 2; $j >= 0; $j--) {
        $rightMax[$j] = $max_sum;
        if ($arr[$j] > $max_sum)
            $max_sum = $arr[$j];

        $rightMin[$j] = $min_sum;
        if ($arr[$j] < $min_sum)
            $min_sum = $arr[$j];
    }

    // For all array indexes i except first and 
    // last, compute maximum of arr[i]*x*y where 
    // x can be leftMax[i] or leftMin[i] and 
    // y can be rightMax[i] or rightMin[i]. 
    for (let $i = 1; $i < $n - 1; $i++) {
        let $max1 = Math.max($arr[$i] * $leftMax[$i] * $rightMax[$i],
            $arr[$i] * $leftMin[$i] * $rightMin[$i]);

        let $max2 = Math.max($arr[$i] * $leftMax[$i] * $rightMin[$i],
            $arr[$i] * $leftMin[$i] * $rightMax[$i]);

        $max_product = Math.max($max_product, Math.max($max1, $max2));
    }

    return $max_product;
}

// Driver program to test above functions 
var $arr = [1, 4, 3, -6, -7, 0];
var $n = $arr.length;

var $max = maxProductApproach2($arr, $n);

if ($max == -1)
    console.log("No Triplet Exists");
else
    console.log("Maximum product is " + $max);




// ****************** (O(nlogn) Time, O(1) Space) ****************** //

function maxProductApproach3($arr, $n)

// if size is less than 3, no triplet exists 
{
    if ($n < 3) {
        return -1;
    }

    // Sort the array in ascending order 
    $arr.sort();
    // Return the maximum of product of last three 
    // elements and product of first two elements 
    // and last element 
    return Math.max($arr[0] * $arr[1] * $arr[$n - 1],
        $arr[$n - 1] * $arr[$n - 2] * $arr[$n - 3]);
}

// Driver code 
$arr = [-10, -3, 5, 6, -20];
$n = $arr.length;

$max = maxProductApproach3($arr, $n);

if ($max == -1) {
    console.log("No Triplet Exists");
}
else {
    console.log("Maximum product is => " + $max);
}



// ****************** (O(n) Time, O(1) Space) ****************** //

/* Function to find a maximum product of a triplet 
   in array of integers of size n */
function maxProductApproach4(arr,  n) 
{ 
    // if size is less than 3, no triplet exists 
    if (n < 3) 
        return -1; 
  
    // Initialize Maximum, second maximum and third 
    // maximum element 
    let maxA = 0, maxB = 0, maxC = 0; 
  
    // Initialize Minimum and second mimimum element 
    let minA = 1, minB = 1; 
  
    for (let i = 0; i < n; i++) 
    { 
        // Update Maximum, second maximum and third 
        // maximum element 
        if (arr[i] > maxA) 
        { 
            maxC = maxB; 
            maxB = maxA; 
            maxA = arr[i]; 
        } 
  
        // Update second maximum and third maximum element 
        else if (arr[i] > maxB) 
        { 
            maxC = maxB; 
            maxB = arr[i]; 
        } 
  
        // Update third maximum element 
        else if (arr[i] > maxC) 
            maxC = arr[i]; 
  
        // Update Minimum and second mimimum element 
        if (arr[i] < minA) 
        { 
            minB = minA; 
            minA = arr[i]; 
        } 
  
        // Update second mimimum element 
        else if(arr[i] < minB) 
            minB = arr[i]; 
    } 
  
    return Math.max(minA * minB * maxA, 
               maxA * maxB * maxC); 
} 
  
// Driver program to test above function 
    const arr = [ 1, -4, 3, -6, 7, 0 ]; 
    let n = arr.length; 
  
    const max = maxProductApproach4(arr, n); 
  
    if (max == -1) 
        console.log(  "No Triplet Exists" ); 
    else
        console.log( "Maximum product is => " + max ); 
  



