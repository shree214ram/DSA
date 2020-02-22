$rowLength = 3; 
$colLength = 3; 
  
// function to rotate 
// matrix by k times 
function rotateMatrix($matrix, $numberOfRotation)  
{ 
      
    // temporary array  
    // of size M 
    $temp = []; 
      
    // within the size 
    // of matrix 
    $numberOfRotation = $numberOfRotation % $rowLength; 
      
    for ($i = 0; $i < $colLength; $i++) 
    { 
        // copy first M-k elements 
        // to temporary array 
        for ($t = 0;  $t < $rowLength - $numberOfRotation; $t++) 
        $temp[$t] = $matrix[$i][$t]; 
      
        // copy the elements from  
        // k to end to starting 
        for ($j = $rowLength - $numberOfRotation;  $j < $rowLength; $j++) 
        $matrix[$i][$j - $rowLength + $numberOfRotation] = $matrix[$i][$j]; 
      
        // copy elements from  
        // temporary array to end 
        for ($j = $numberOfRotation; $j < $rowLength; $j++) 
        $matrix[$i][$j] = $temp[$j - $numberOfRotation]; 
    } 
} 
  
// function to display 
// the matrix 
function displayMatrix($matrix)  
{ 
    for ($i = 0; $i < $colLength; $i++)  
    { 
        for ($j = 0; $j < $rowLength; $j++) 
        console.log($matrix[$i][$j]+" "); 
        console.log ("\n"); 
    } 
} 
  
// Driver code 
$matrix = [[12, 23, 34], 
                [45, 56, 67],  
                [78, 89, 91]]; 
$numberOfRotation = 2; 
  
  // display rotated matrix 
displayMatrix($matrix);
// rotate matrix by k 
rotateMatrix($matrix, $numberOfRotation); 
  console.log ("\n");console.log ("\n");
  console.log ("CONVERTED MATRIX IS");
// display rotated matrix 
displayMatrix($matrix); 

// 12 23 34 

// 45 56 67 

// 78 89 91 

// CONVERTED MATRIX IS

// 23 34 12 

// 56 67 45 

// 89 91 78 