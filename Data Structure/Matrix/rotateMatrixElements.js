
var $Row = 4; 
var $Column = 4; 
  
// A function to rotate a matrix  
// mat[][] of size R x C. Initially, 
// m = R and n = C 
function rotatematrix($m, $n, $mat) 
{ 
    var  $Row, $Column; 
    $row = 0; 
    $col = 0; 
    $prev = 0; 
    $curr = 0; 
  
    /* 
    row - Staring row index 
    m - ending row index 
    col - starting column index 
    n - ending column index 
    i - iterator 
    */
    while ($row < $m && $col < $n) 
    { 
  
        if ($row + 1 == $m ||  
            $col + 1 == $n) 
            break; 
  
        // Store the first element  
        // of next row, this element  
        // will replace first element  
        // of current row 
        $prev = $mat[$row + 1][$col]; 
  
        /* Move elements of first row  
           from the remaining rows */
        for ($i = $col; $i < $n; $i++) 
        { 
            $curr = $mat[$row][$i]; 
            $mat[$row][$i] = $prev; 
            $prev = $curr; 
        } 
        $row++; 
  
        /* Move elements of last column 
           from the remaining columns */
        for ($i = $row; $i < $m; $i++) 
        { 
            $curr = $mat[$i][$n - 1]; 
            $mat[$i][$n - 1] = $prev; 
            $prev = $curr; 
        } 
        $n--; 
  
        /* Move elements of last row 
           from the remaining rows */
        if ($row < $m) 
        { 
            for ($i = $n - 1; 
                 $i >= $col; $i--) 
            { 
                $curr = $mat[$m - 1][$i]; 
                $mat[$m - 1][$i] = $prev; 
                $prev = $curr; 
            } 
        } 
        $m--; 
  
        /* Move elements of first column 
           from the remaining rows */
        if ($col < $n) 
        { 
            for ($i = $m - 1;  
                 $i >= $row; $i--) 
            { 
                $curr = $mat[$i][$col]; 
                $mat[$i][$col] = $prev; 
                $prev = $curr; 
            } 
        } 
        $col++; 
    } 
  
    // Print rotated matrix 
    for ($i = 0; $i < $Row; $i++) 
    { 
        for ($j = 0; $j < $Column; $j++) 
        document.write($mat[$i][$j] +" "); 
        document.write("\n"); 
    } 
} 
  
// Driver code 
  
// Test Case 1 

$a = [[1, 2, 3, 4], 
           [5,6 , 7, 8], 
           [ 9, 10, 11, 12], 
           [ 13, 14, 15, 16]];
// Tese Case 2 
/* int $a = array(array(1, 2, 3), 
                  array(4, 5, 6), 
                  array(7, 8, 9)); 
*/ rotatematrix($Row, $Column, $a); 
    return 0;  