$M = 3; 
$N = 3; 
  
// function to rotate 
// matrix by k times 
function rotateMatrix($matrix, $k)  
{ 
      
    // temporary array  
    // of size M 
    $temp = []; 
      
    // within the size 
    // of matrix 
    $k = $k % $M; 
      
    for ($i = 0; $i < $N; $i++) 
    { 
      
        // copy first M-k elements 
        // to temporary array 
        for ($t = 0;  
             $t < $M - $k; $t++) 
        $temp[$t] = $matrix[$i][$t]; 
      
        // copy the elements from  
        // k to end to starting 
        for ($j = $M - $k;  
             $j < $M; $j++) 
        $matrix[$i][$j - $M + $k] = 
                    $matrix[$i][$j]; 
      
        // copy elements from  
        // temporary array to end 
        for ($j = $k; $j < $M; $j++) 
        $matrix[$i][$j] = $temp[$j - $k]; 
    } 
} 
  
// function to display 
// the matrix 
function displayMatrix($matrix)  
{ 
    for ($i = 0; $i < $N; $i++)  
    { 
        for ($j = 0; $j < $M; $j++) 
        console.log($matrix[$i][$j]+" "); 
        console.log ("\n"); 
    } 
} 
  
// Driver code 
$matrix = [[12, 23, 34], 
                [45, 56, 67],  
                [78, 89, 91]]; 
$k = 2; 
  
  // display rotated matrix 
displayMatrix($matrix);
// rotate matrix by k 
rotateMatrix($matrix, $k); 
  console.log ("\n");console.log ("\n");
  console.log ("CONVERTED MATRIX IS");
// display rotated matrix 
displayMatrix($matrix); 