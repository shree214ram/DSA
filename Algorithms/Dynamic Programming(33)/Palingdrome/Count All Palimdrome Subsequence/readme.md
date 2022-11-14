https://www.geeksforgeeks.org/count-palindromic-subsequence-given-string/

### Recursion Solution  :- 
1. function solve
2. set for single character 
3. set for 2 length
4. set for more than 2 length
    1. if corners are same s[i] == s[j]
      DP[i][j] = 1 + solve(i+1,j) + solve(i,j-1)
    2. If corners are not same 
        DP[i][j] =  solve(i+1,j) + solve(i,j-1) - solve(i+1,j-1)

### DP Solution  :- 
Time Complexity : O(N2), Auxiliary Space: O(N2)
1. create DP 
2. set for single character 
3. set for 2 length
4. set for more than 2 length
    1. if corners are same s[i] == s[j]
      DP[i][j] = 1 + DP[i+1][j] + DP[i][j-1]
    2. If corners are not same 
        DP[i][j] =  DP[i+1][j] + DP[i][j-1] - DP[i+1][j-1]

5. DP[0][N-1] will be the final Answer