

// matrix in spiral form 
$R = 3; 
$C = 6; 
  
function spiralPrint($m, $n, $a) 
{ 
    $k = 0; 
    $l = 0; 
  
    /* $k - starting row index 
        $m - ending row index 
        $l - starting column index 
        $n - ending column index 
        $i - iterator 
    */
  
    while ($k < $m && $l < $n) 
    { 
        /* Print the first row from 
           the remaining rows */
        for ($i = $l; $i < $n; ++$i) 
        { 
            console.log($a[$k][$i] + " "); 
        } 
        $k++; 
  
        /* Print the last column  
        from the remaining columns */
        for ($i = $k; $i < $m; ++$i) 
        { 
            console.log($a[$i][$n - 1] + " "); 
        } 
        $n--; 
  
        /* Print the last row from 
           the remaining rows */
        if ($k < $m) 
        { 
            for ($i = $n - 1; $i >= $l; --$i) 
            { 
                console.log($a[$m - 1][$i] + " "); 
            } 
            $m--; 
        } 
  
        /* Print the first column from 
           the remaining columns */
        if ($l < $n) 
        { 
            for ($i = $m - 1; $i >= $k; --$i) 
            { 
                console.log($a[$i][$l] + " "); 
            } 
            $l++;  
        }      
    } 
} 
  
// Driver code 
$a = [[1, 2, 3, 4, 5, 6], 
           [7, 8, 9, 10, 11, 12], 
           [13, 14, 15, 16, 17, 18]]; 
  
spiralPrint($R, $C, $a); 

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