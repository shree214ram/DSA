// Function to print the  
// second largest elements 
function insertionSort($arr, $arr_size) 
{ 
    // There should be atleast  1 elements  
    if ($arr_size < 1) 
    { 
        console.log(" Invalid Input "); 
        return; 
    } else if ($arr_size === 1) 
    { 
        console.log(" Insertion Sort = "+ $arr); 
        return; 
    } 
    for (let $i = 0; $i < $arr_size-1 ; $i++) 
    { 
    	let min = $arr[$i];
        for (let $j = $i+1; $j < $arr_size ; $j++) {
        	if ($j > min) 
        	{ 
            	min = $j
        	} 
        }
        if($arr[$i] > min){
            const $tmp = $arr[$i]; 
            $arr[$i] = $arr[$min]; 
            $arr[$min] = $tmp; 
            }
    } 
    console.log("The Insertion Sort = " + $arr + "\n"); 
} 
// Driver Code 
var arr = [12, 35, 1, 10, 37, 1]; 
var n = arr.length; 
insertionSort(arr, n); 

            
            
function selection_sort($arr, $n)  
{ 
    for(let $i = 0; $i < $n ; $i++) 
    { 
        let $low = $i; 
        for(let $j = $i + 1; $j < $n ; $j++) 
        { 
            if ($arr[$j] < $arr[$low]) 
            { 
                $low = $j; 
            } 
        } 
          
        // swap the minimum value to $ith node 
        if ($arr[$i] > $arr[$low]) 
        { 
            let $tmp = $arr[$i]; 
            $arr[$i] = $arr[$low]; 
            $arr[$low] = $tmp; 
        } 
    } 
} 
  
// Driver Code 
const $arr = [64, 25, 12, 22, 11]; 
$len = $arr.length; 
selection_sort($arr, $len); 
console.log( "Sorted array : \n");  
  
for (let $i = 0; $i < $len; $i++)  
    console.log( $arr[$i] + " ");  
  
