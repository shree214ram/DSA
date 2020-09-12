// https://www.geeksforgeeks.org/window-sliding-technique/



// Returns maximum sum in a  
// subarray of size k. 
function maxSum( $arr, $n, $k) 
{ 
    // n must be greater 
    if ($n < $k) 
    { 
        console.log ("Invalid"); 
        return -1; 
    } 
  
    // Compute sum of first 
    // window of size k 
    $max_sum = 0; 
    for($i = 0; $i < $k; $i++) 
    $max_sum += $arr[$i]; 
  
    // Compute sums of remaining windows by 
    // removing first element of previous 
    // window and adding last element of 
    // current window. 
    $window_sum = $max_sum; 
    for ($i = $k; $i < $n; $i++) 
    { 
        $window_sum += $arr[$i] - $arr[$i - $k]; 
        $max_sum = max($max_sum, $window_sum); 
    } 
  
    return $max_sum; 
} 
  
    // Driver code 
    $arr = array(1, 4, 2, 10, 2, 3, 1, 0, 20); 
    $k = 4; 
    $n = count($arr); 
    console.log ( maxSum($arr, $n, $k) ); 