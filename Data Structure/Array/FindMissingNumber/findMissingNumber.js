
//******************* Find the Missing Number  //Find the one missing number in range *******************//
// 1. Traverse two for loop O(n2)
// 2. Sort array Traverse one for loop O(nlogn)
// 3. XOR Method  O(n)

//METHOD 1(Use sum formula) O(n)
//It works for Short and Unsort Array Both
// https://www.geeksforgeeks.org/find-the-missing-number/
function getMissingNo ($a, $n) 
{ 
    $total = ($n + 1) * ($n + 2) / 2;  
    for ( $i = 0; $i < $n; $i++) 
        $total -= $a[$i]; 
    return $total; 
} 
  
// Driver Code 
$a = [1, 2, 4, 5, 6]; 
$miss = getMissingNo($a, 5); 
console.log($miss); 



//METHOD 2(Use XOR)
//It works for Short and Unsort Array Both
// https://www.geeksforgeeks.org/find-one-missing-number-range/

function getMissingNo($a, $n) 
{ 
    // For xor of all the 
    // elements in array  
    $x1 = $a[0];  
      
    // For xor of all the  
    // elements from 1 to n + 1 
    $x2 = 1;  
      
    for ($i = 1; $i < $n; $i++) {
      console.log('Old X1 =' , $x1)
      console.log('Old $a[$i] =' , $a[$i])
        $x1 = $x1 ^ $a[$i]; 
      console.log('New X1 =' , $x1)

    }
              
    for ($i = 2; $i <= $n + 1; $i++) 
    {
      console.log('Old X2 =' , $x2)
      console.log('Old $i =' , $i)
        $x2 = $x2 ^ $i;      
      console.log('New X2 =' , $x2)

    }
      
      console.log($x1,'x1')
      console.log($x2,'x2')
    return ($x1 ^ $x2); 
} 
  
// Driver Code 
$a = [1, 2, 4, 5, 6, 7]; 
$miss = getMissingNo($a, 6); 
console.log($miss); 






//******************** Find the smallest missing number in sorted array **************************//

// Method 1 (Use Binary Search)
    // For i = 0 to m-1, do binary search for i in the array. If i is not present in the array then return i.

    // Time Complexity: O(m log n)

// Method 2 (Linear Search)
    // If arr[0] is not 0, return 0. Otherwise traverse the input array starting from index 0, 
    // and for each pair of elements a[i] and a[i+1], find the difference between them.
    // if the difference is greater than 1 then a[i]+1 is the missing number.

    // Time Complexity: O(n)

// Method 3 (Use Modified Binary Search)
    // Time Complexity: O(Logn)
function findFirstMissing($array, $start, $end) 
{ 
    if ($start > $end) 
        return $end + 1; 
  
    if ($start != $array[$start]) 
        return $start; 
  
    $mid = ($start + $end) / 2; 
  
    // Left half has all  
    // elements from 0 to mid 
    if ($array[$mid] == $mid) 
        return findFirstMissing($array,  
                                $mid + 1,  
                                $end); 
  
    return findFirstMissing($array,  
                            $start,  
                            $mid); 
} 
  
    // Driver Code 
    $arr = [0, 1, 2, 3, 4, 5, 6, 7, 10]; 
    $n = $arr.length; 
    console.log( "Smallest missing element is " , 
          findFirstMissing($arr, 2, $n - 1) );





// Find the smallest positive number missing from an unsorted array | Set 1
//TimeO(n) SpaceO(1)
// You are given an unsorted array with both positive and negative elements. 
// You have to find the smallest positive number missing from the array in O(n) time 
// using constant extra space. You can modify the original array.