
var $Row = 4; 
var $Column = 4; 
  
// A function to rotate a matrix  
// mat[][] of size R x C. Initially, 
// m = R and n = C 
function rotatematrix($RowLength, $ColumnLength, $array) 
{ 
    var $Row = 4; 
    var $Column = 4;
    $startingRowIndex = 0; 
    $startingColumnIndex = 0; 
    $prev = 0; 
    $curr = 0; 
  
    /* 
    row - Staring row index 
    m - ending row index 
    col - starting column index 
    n - ending column index 
    i - iterator 
    */
    while ($startingRowIndex < $RowLength && $startingColumnIndex < $ColumnLength) 
    { 
  
        if ($startingRowIndex + 1 == $RowLength ||  
            $startingColumnIndex + 1 == $ColumnLength) 
            break; 
  
        // Store the first element  
        // of next row, this element  
        // will replace first element  
        // of current row 
        $prev = $array[$startingRowIndex + 1][$startingColumnIndex]; 
  
        /* Move elements of first row  
           from the remaining rows */
        for ($i = $startingColumnIndex; $i < $ColumnLength; $i++) 
        { 
            $curr = $array[$startingRowIndex][$i]; 
            $array[$startingRowIndex][$i] = $prev; 
            $prev = $curr; 
        } 
        $startingRowIndex++; 
  
        /* Move elements of last column 
           from the remaining columns */
        for ($i = $startingRowIndex; $i < $RowLength; $i++) 
        { 
            $curr = $array[$i][$ColumnLength - 1]; 
            $array[$i][$ColumnLength - 1] = $prev; 
            $prev = $curr; 
        } 
        $ColumnLength--; 
  
        /* Move elements of last row 
           from the remaining rows */
        if ($startingRowIndex < $RowLength) 
        { 
            for ($i = $ColumnLength - 1; 
                 $i >= $startingColumnIndex; $i--) 
            { 
                $curr = $array[$RowLength - 1][$i]; 
                $array[$RowLength - 1][$i] = $prev; 
                $prev = $curr; 
            } 
        } 
        $RowLength--; 
  
        /* Move elements of first column 
           from the remaining rows */
        if ($startingColumnIndex < $ColumnLength) 
        { 
            for ($i = $RowLength - 1;  
                 $i >= $startingRowIndex; $i--) 
            { 
                $curr = $array[$i][$startingColumnIndex]; 
                $array[$i][$startingColumnIndex] = $prev; 
                $prev = $curr; 
            } 
        } 
        $startingColumnIndex++; 
    } 
  
    // Print rotated matrix 
    for ($i = 0; $i < $Row; $i++) 
    { 
        for ($j = 0; $j < $Column; $j++) 
        document.write($array[$i][$j] +" "); 
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

    // input is :-
    // 1   2   3    4
    // 5   6   7    8 
    // 9   10  11   12 
    // 13  14  15   16

    // output is :-
    // 5   1   2   3 
    // 9   10  6   4 
    // 13  11  7   8 
    // 14  15  16  12