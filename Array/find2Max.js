// Function to print the  
// second largest elements 
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
        if ($arr[$i] > $first) 
        { 
            $second = $first; 
            $first = $arr[$i]; 
        } 
  
        // If arr[i] is in  
        // between first and  
        // second then update  
        // second  
        else if ($arr[$i] > $second && 
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