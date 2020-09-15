// https://www.geeksforgeeks.org/print-concatenation-of-zig-zag-string-form-in-n-rows/

 Program for zig zag conversion 

 Input: s = "PAYPALISHIRING", numRows = 3

 P  A   H     N
 A P L S I  I   G
 Y    I   R

 Output: "PAHNAPLSIIGYIR"

k = size of rows which is target 
n = size of array

Basically there is only  1 methods 
1. Itrate 1 times loop:-
    
2. Window Sliding Method :- 
    1. After Increase the number Add perticular character in Old respected number rows string 
    
    2. if(down == ture ) then increase the row number by 1 row ++ 
       if current row < k(size of required rows ) { down == true }
       
    2. decrese the row number if rows lenth reches to the k(size of required rows )
    

