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
  
