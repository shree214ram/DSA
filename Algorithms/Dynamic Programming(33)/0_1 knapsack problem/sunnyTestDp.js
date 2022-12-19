//https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
//1:52
const Value = [60, 100, 120];
const Weight = [10, 20, 30]
const Target = 50;
//Prepare DP 
const DP = new Array(Weight.length + 1)
for (let i = 0; i < DP.length; i++) {
    DP[i] = new Array(Target).fill(0)
}
console.log(DP, "DP")
/*

Longest Subsequence 2^n1

                    0           1,          2,              3,          4,      5,      6...........50
                ------------------------------------------------------------------------ 
                |    0      | 0         | 0           | 0         |  0    |   0   |     0 |
           0    |           |           |             |           |       |       |       |
                |           |           |             |           |       |       |       |
                ------------------------------------------------------------------------
                |    0      | 0         | 0           | 0         |  0    |   0   |     0 |
    (60) 10     |           |           |             |           |       |       |       |
                |           |           |             |           |       |       |       |
                -------------------------------------------------------------------- 
                | 0         | i=A,j=A   |  i=A,j=E    |           |       |       |       |
    (100) 20    |           | Are Same  |  Are        |   1       |  1    |  1    |  1    |
                |           | "A" so    | Different   |           |       |       |       |
                |           |1+(0)Digona| max(left(1),|           |       |       |       |
                |           | =1        | upper(0))=1 |           |       |       |       |
                --------------------------------------------------------------------- 
                | 0         |           |             |           |       |       | 1     |
    (120) 30    |           |      1    |   1         |    1      |  1    |  1    |       |
                |           |           |             |           |       |       |       |
                ---------------------------------------------------------------------    
               


Total Time complaxity => 2^n1 * 2^n2 = 2^n1+n2
*/
//row
for (let i = 0; i <= Weight.length; i++) {
    //collumn 
    for (let j = 0; j <= Target; j++) {
        //Base Case 
        if (i == 0 || j == 0) {
            if (DP[i][j]) {
                DP[i][j] = 0
            }
        }
        //
        // = Need to check with gfg solution
        // else if (wt[i - 1] <= w)
        // K[i][w] = max(val[i - 1] +
        //                 K[i - 1][w - wt[i - 1]],
        //                 K[i - 1][w]);
        // ==
        else if (j >= Weight[i]) { //Weight[i] should be Weight[i-1] 
            //upper wali row me se DP[i-1][w-Weight[i]] 
            DP[i][j] = Math.max(Value[i - 1] + DP[i - 1][j - Weight[i]], DP[i - 1][j]) // Weight[i] should be Weight[i-1]
        } else {
            //if weight hi bada he target se to Copy upper values as it is 
            DP[i][j] = DP[i - 1][j]
        }
    }
}
console.log(Weight.length, "Weight.length")
console.log(DP[Weight.length][Target - 1])