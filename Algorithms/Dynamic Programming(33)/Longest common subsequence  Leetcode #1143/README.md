https://www.youtube.com/watch?v=jHGgXV27qtk
Longest Common Subsequence- Dynamic Programming | Data structures and algorithms
Jenny's Lectures 

https://www.youtube.com/watch?v=LAKWWDX3sGw
Longest common subsequence | Leetcode #1143
TECH DOSE
44K views
2 years ago

S1-> A, B, C, D, G, H


Substring :- A,B,C contigious All the element should be adjecent each other . Can not skip any element . 
Subsequence :- A, D, H Move only one direction -----------> skip elements between .

S1-> A, B, C, D, G, H
S2-> A, E, D, F, H, R

Output -> A, D, H 

#### Broute Force Approach (2^n1+n2):- 

1. we will pickup all the character from first string S1 and compare to second string S2 check which is Longest Subsequence 2^n1 (2 to the power n1)
   A
   A, E, D, F, H, R
2. we will pickup all the character from second string S2 and compare to first S1 string check which is Longest Subsequence 2^n2 (2 to the power n2)
    A, B, C, D, G, H
    A
Total Time complaxity => 2^n1 * 2^n2 = 2^n1+n2

#### Dynamic Problem Method (M*N) :- 

1. Arrange S1 as ith Index in 2D Array and S2 as jth index
2. we will pickup all the character from second string S2 and compare to first S1 string check which is Longest Subsequence 2^n1

                    0           A,          E,              D,          F,      H,      R
                ------------------------------------------------------------------------ 
                |    0      | 0         | 0           | 0         |  0    |   0   |     0 |
          0     |           |           |             |           |       |       |       |
                |           |           |             |           |       |       |       |
                -------------------------------------------------------------------- 
                | 0         | i=A,j=A   |  i=A,j=E    |           |       |       |       |
          A     |           | Are Same  |  Are        |   1       |  1    |  1    |  1    |
                |           | "A" so    | Different   |           |       |       |       |
                |           |1+(0)Digona| max(left(1),|           |       |       |       |
                |           | =1        | upper(0))=1 |           |       |       |       |
                --------------------------------------------------------------------- 
                | 0         |           |             |           |       |       | 1     |
          B     |           |      1    |   1         |    1      |  1    |  1    |       |
                |           |           |             |           |       |       |       |
                ---------------------------------------------------------------------    
                | 0         |           |             |           |       |       |   1   |
          C     |           |    1      |    1        |   1       |  1    |  1    |       |
                |           |           |             |           |       |       |       |
                --------------------------------------------------------------------    
                | 0         |           |             |           |       |       |  2    |
          D     |           |     1     |    1        |    2      |   2   |  2    |       |
                |           |           |             |           |       |       |       |
                --------------------------------------------------------------------    
                | 0         |           |             |           |       |       |  2    |
          G     |           |    1      |    1        |   2       |  2    |  2    |       |
                |           |           |             |           |       |       |       |
                --------------------------------------------------------------------    
                | 0         |           |             |           |       |       |  3    |
          H     |           |    1      |    1        |   2       |  2    |  3    |       |
                |           |           |             |           |       |       |       |
                --------------------------------------------------------------------   


Total Time complaxity => 2^n1 * 2^n2 = 2^n1+n2

if(same){
    DP[i][j]= 1+ DP[i-1][j-1] Digonal Value
} else {
     DP[i][j]=Max(DP[i-1][j],DP[i][j-1])
}

# Code :- 
### Count Of Longest Common Subsequence :-
https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/
1. Recursion 
2. DP 
### Printing of Longest Common Subsequence :-
https://www.geeksforgeeks.org/printing-longest-common-subsequence/

if(str1[i-1] == str2[j-1]){
      result += str2[j-1]
      i--
      j--
} else if(DP[i][j-1]>DP[i-1][j]){
      j--
} else {
      i--
}
