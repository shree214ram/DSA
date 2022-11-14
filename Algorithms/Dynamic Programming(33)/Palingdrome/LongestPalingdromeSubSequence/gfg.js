// A Dynamic Programming based Javascript
// Program for the Egg Dropping Puzzle

// A utility function to get max of two integers
function max(x, y) {
    return (x > y) ? x : y;
}

// Returns the length of the longest
// palindromic subsequence in str
function lps(str) {
    let n = str.length;
    let i, j, gap;
    // Create a table to store results of subproblems
    let DP = new Array(n);
    for (let x = 0; x < n; x++) {
        DP[x] = new Array(n);
        for (let y = 0; y < n; y++)
            DP[x][y] = 0;
    }

    // Strings of length 1 are palindrome of length 1
    for (i = 0; i < n; i++)
        DP[i][i] = 1;

    // Build the table. Note that the lower
    // diagonal values of table are
    // useless and not filled in the process.
    // The values are filled in a manner similar
    // to Matrix Chain Multiplication DP solution (See
    // https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/).
    // gap is length of substring
    for (gap = 2; gap <= n; gap++) {
        for (i = 0; i <= n - gap; i++) {
            j = i + gap - 1;
            if (str[i] == str[j] && gap == 2)
                DP[i][j] = 2;
            else if (str[i] == str[j])
                DP[i][j] = DP[i + 1][j - 1] + 2;
            else
                DP[i][j] = max(DP[i][j - 1], DP[i + 1][j]);
        }
    }

    return DP[0][n - 1];
}

/* Driver program to test above functions */
let str = "GEEKSFORGEEKS";
let n = str.length;
document.write("The length of the lps is " + lps(str));

// This code is contributed by rag2127
