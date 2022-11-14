$N = 4; 
  
// An Inplace function to  
// rotate a N x N matrix 
// by 90 degrees in  
// anti-clockwise direction 
function rotateMatrix($mat) 
{ 
    // input is :-
    // 1   2   3    4
    // 5   6   7    8 
    // 9   10  11   12 
    // 13  14  15   16

    // output is :-
    // 4   8  12  16 
    // 3   7  11  15 
    // 2   6  10  14 
    // 1   5   9  13 
      
    // Consider all  
    // squares one by one 
    for ($x = 0; $x < $N / 2; $x++) 
    { 
        // Consider elements  
        // in group of 4 in  
        // current square 
        for ($y = $x; $y < $N - $x - 1; $y++) 
        { 
            // store current cell 
            // in temp variable 
            $temp = $mat[$x][$y]; 
  
            // move values from 
            // right to top 
            $mat[$x][$y] = $mat[$y][$N - 1 - $x]; 
  
            // move values from 
            // bottom to right 
            $mat[$y][$N - 1 - $x] = $mat[$N - 1 - $x][$N - 1 - $y]; 
  
            // move values from  
            // left to bottom 
            $mat[$N - 1 - $x][$N - 1 - $y] = $mat[$N - 1 - $y][$x]; 
  
            // assign temp to left 
            $mat[$N - 1 - $y][$x] = $temp; 
        } 
    } 
} 
  
// Function to  
// print the matrix 
function displayMatrix($mat) 
{ 
    for ($i = 0; $i < $N; $i++) 
    { 
        for ($j = 0; $j < $N; $j++) 
            console.log ( $mat[$i][$j] + " "); 
  
        console.log ("\n"); 
    } 
    console.log ("\n"); 
} 
  
// Driver code 
  
// Test Case 1 
$mat =  [[1, 2, 3, 4], 
              [5, 6, 7, 8], 
              [9, 10, 11, 12], 
              [13, 14, 15, 16]]; 
  
// Tese Case 2 
/* $mat = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9)); 
*/
  
// Tese Case 3 
/*$mat = [[1, 2], 
               [4, 5));*/
  
// displayMatrix($mat); 
rotateMatrix($mat); 
  
// Print rotated matrix 
displayMatrix($mat); 

 // input is :-
    // 1   2   3    4
    // 5   6   7    8 
    // 9   10  11   12 
    // 13  14  15   16

// output is :-
    // 4 8 12 16 

    // 3 7 11 15 

    // 2 6 10 14 

    // 1 5 9 13 