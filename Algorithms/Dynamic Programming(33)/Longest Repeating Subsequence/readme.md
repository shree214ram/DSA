https://www.geeksforgeeks.org/longest-repeating-subsequence/

### This is same like LCS :- Longest common subsequence 

```
only a minor change will be in LCS .We were checking 

A[i-1] == A[j-1] are equal then fill the DP[i][j] = 1+ Digonal {A[i-1][j-1]}

Here we have to check A[i-1] == A[j-1] are equal and indexes are Different Means :-

if ((str[i-1] == str[j-1]) && (i != j))

```

Algorithm:

Step 1: Initialize the input string, which is to be checked.

Step 2: Initialize the length of string to the variable.

Step 3: Create a DP table using 2D matrix and set each element to 0.

Step 4: Fill the table if  characters are same and indexes are different.

Step 5: Return the values inside the table

Step 6: Print the String.