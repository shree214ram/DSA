// Function to print the  
// second largest elements 
function printMax($arr, $arr_size) {
    // There should be atleast  1 elements  
    if ($arr_size < 1) {
        console.log(" Invalid Input ");
        return;
    }
    else if ($arr_size === 1) {
        console.log(" Max Value = " + $arr[0]);
        return;
    }
    $max = $arr[0];
    for (let $i = 1; $i < $arr_size; $i++) {
        if ($arr[$i] > $max) {
            $max = $arr[$i];
        }
    }
    console.log("The maximaul  element is " + $max + "\n");
}
// Driver Code 
var arr = [12, 35, 1, 10, 37, 1];
var n = arr.length;
printMax(arr, n);
