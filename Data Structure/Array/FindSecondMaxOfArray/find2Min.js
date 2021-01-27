// find-smallest-and-second-smallest-element-in-an-array 
// https://www.geeksforgeeks.org/to-find-smallest-and-second-smallest-element-in-an-array/
// This is same as second max Only the difference is at place of > we will have to use < in If Else Condition . 
// second mininum elements 

//******Method 1 *******//
function print2largest($arr, $arr_size) 
{ 
  
    // There should be atleast  
    // two elements  
    if ($arr_size < 2) 
    { 
        console.log(" Invalid Input "); 
        return; 
    } 
  
    $first = $second = null; 
    for (let $i = 0; $i < $arr_size ; $i++) 
    { 
          
        // If current element is 
        // smaller than first 
        // then update both  
        // first and second  
        if ($arr[$i] < $first) 
        { 
            $second = $first; 
            $first = $arr[$i]; 
        } 
  
        // If arr[i] is in  
        // between first and  
        // second then update  
        // second  
        else if ($arr[$i] < $second && 
                 $arr[$i] != $first) 
            $second = $arr[$i]; 
    } 
    if ($second == null) 
        console.log("There is no second largest element\n"); 
    else
        console.log("The second largest element is " + $second + "\n"); 
} 

// Driver Code 
var arr = [12, 35, 1, 10, 37, 1]; 
var n = arr.length; 
print2largest(arr, n); 
  
// This code is contributed by Ajit.




//******Method 2 *******//

// Function to find second-minimum-element-using-minimum-comparisons

// ****************** (Naive, O(n3) time, O(1) Space) ****************** //

// https://www.geeksforgeeks.org/second-minimum-element-using-minimum-comparisons/?ref=rp