

// matrix in spiral form 
 
  
function spiralPrint($Row, $Column, $a) 
{ 
    $startingRowIndex = 0; 
    $startingColumnIndex = 0; 
  
    /* $startingRowIndex - starting row index 
        $Row - ending row index 
        $startingColumnIndex - starting column index 
        $Column - ending column index 
        $i - iterator 
    */
  
    while ($startingRowIndex < $Row && $startingColumnIndex < $Column) 
    { 
        /* Print the first row from 
           the remaining rows */
        for ($i = $startingColumnIndex; $i < $Column; ++$i) 
        { 
            console.log($a[$startingRowIndex][$i] + " "); 
        } 
        $startingRowIndex++; 
  
        /* Print the last column  
        from the remaining columns */
        for ($i = $startingRowIndex; $i < $Row; ++$i) 
        { 
            console.log($a[$i][$Column - 1] + " "); 
        } 
        $Column--; 
  
        /* Print the last row from 
           the remaining rows */
        if ($startingRowIndex < $Row) 
        { 
            for ($i = $Column - 1; $i >= $startingColumnIndex; --$i) 
            { 
                console.log($a[$Row - 1][$i] + " "); 
            } 
            $Row--; 
        } 
  
        /* Print the first column from 
           the remaining columns */
        if ($startingColumnIndex < $Column) 
        { 
            for ($i = $Row - 1; $i >= $startingRowIndex; --$i) 
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
$Row = 3; 
$Column = 6;
spiralPrint($Row, $Column, $a); 

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