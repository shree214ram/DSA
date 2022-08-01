// 1. https://www.geeksforgeeks.org/find-number-times-string-occurs-given-string/
// 2. https://www.geeksforgeeks.org/count-gfg-subsequences-given-string/?ref=lbp

 Input:  
string a = "GeeksforGeeks"
string b = "Gks"

Output: 4

Explanation:  
The four strings are - (Check characters marked in bold)
GeeksforGeeks
GeeksforGeeks
GeeksforGeeks
GeeksforGeeks


Basically there is only  1 methods 
1. Itrate 1 times loop:-
    
2. Window Sliding Method :- 
    1. After Increase the number Add perticular character in Old respected number rows string 
    
    2. if(down == ture ) then increase the row number by 1 row ++ 
       if current row < k(size of required rows ) { down == true }
       
    2. decrese the row number if rows lenth reches to the k(size of required rows )
 
3. Dynamic Programming :-

https://www.youtube.com/watch?v=YbanXpPqW1g

   1. set a DP String As Row and pattern as column 
   2. check if A[i] == P[j]{
      DP[i][j] = DP[i-1][j] + DP[i-1][j-1]
   } else {
      DP[i][j] = DP[i-1][j]
   }