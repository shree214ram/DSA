

// matrix in spiral form 
 
  
function spiralPrint($RowLength, $ColumnLength, $a) 
{ 
    $startingRowIndex = 0; 
    $startingColumnIndex = 0; 
  
    /* $startingRowIndex - starting row index 
        $RowLength - ending row index 
        $startingColumnIndex - starting column index 
        $ColumnLength - ending column index 
        $i - iterator 
    */
  
    while ($startingRowIndex < $RowLength && $startingColumnIndex < $ColumnLength) 
    { 
        /* Print the first row from 
           the remaining rows */
        for ($i = $startingColumnIndex; $i < $ColumnLength; ++$i) 
        { 
            console.log($a[$startingRowIndex][$i] + " "); 
        } 
        $startingRowIndex++; 
  
        /* Print the last column  
        from the remaining columns */
        for ($i = $startingRowIndex; $i < $RowLength; ++$i) 
        { 
            console.log($a[$i][$ColumnLength - 1] + " "); 
        } 
        $ColumnLength--; 
  
        /* Print the last row from 
           the remaining rows */
        if ($startingRowIndex < $RowLength) 
        { 
            for ($i = $ColumnLength - 1; $i >= $startingColumnIndex; --$i) 
            { 
                console.log($a[$RowLength - 1][$i] + " "); 
            } 
            $RowLength--; 
        } 
  
        /* Print the first column from 
           the remaining columns */
        if ($startingColumnIndex < $ColumnLength) 
        { 
            for ($i = $RowLength - 1; $i >= $startingRowIndex; --$i) 
            { 
                console.log($a[$i][$startingColumnIndex] + " "); 
            } 
            $startingColumnIndex++;  
        }      
    } 
} 
  
// Driver code 
$a = [[1, 2, 3, 4, 5, 6], 
           [7, 8, 9, 10, 11, 12], 
           [13, 14, 15, 16, 17, 18]]; 
$RowLength = 3; 
$ColumnLength = 6;
spiralPrint($RowLength, $ColumnLength, $a); 

// Output Will be :- 
1
2
3
4
5
6
12
18
17
16
15
14
13
7
8
9
10
11 