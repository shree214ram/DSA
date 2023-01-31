
// Javascript code to Count Palindromic Subsequence
// in a given String


// Function return the total palindromic
// subsequence
function countPS(str) {
	let N = str.length;

	// create a 2D array to store the count
	// of palindromic subsequence
	let dp = new Array(N);
	for (let i = 0; i < N; i++) {
		dp[i] = new Array(N);
		for (let j = 0; j < N; j++) {
			dp[i][j] = 0;
		}
	}

	// palindromic subsequence of length 1
	for (let i = 0; i < N; i++)
		dp[i][i] = 1;
 
	// check subsequence of length L is
	// palindrome or not
	for (let gap = 2; gap <= N; gap++) {
		for (let i = 0; i <= N - gap; i++) {
			let j = gap + i - 1;
			if (str[i] == str[j]) {
				dp[i][j] = dp[i][j - 1] + dp[i + 1][j] + 1;
			} else {
				dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
			}
		}
	}

	// return total palindromic subsequence
	return dp[0][N - 1];
}

// Driver program
let str = "abcb";
document.write("Total palindromic "
	+ "subsequence are : "
	+ countPS(str));

// This code is contributed by avanitrachhadiya2155


/*
	Using Recursion 
*/
// Javascript program to counts Palindromic Subsequence
// in a given String using recursion

let n;
let dp = new Array(1000);
for (let i = 0; i < 1000; i++) {
	dp[i] = new Array(1000);
	for (let j = 0; j < 1000; j++) {
		dp[i][j] = -1;
	}
}


let str = "abcb";

// Function return the total
// palindromic subsequence
function countPS(i, j) {
	if (i > j)
		return 0;

	if (dp[i][j] != -1)
		return dp[i][j];

	if (i == j)
		return dp[i][j] = 1;

	else if (str[i] == str[j])
		return dp[i][j] = countPS(i + 1, j) + countPS(i, j - 1) + 1;

	else
		return dp[i][j] = countPS(i + 1, j) + countPS(i, j - 1) - countPS(i + 1, j - 1);
}

// Driver code
n = str.length;
document.write("Total palindromic subsequence"
	+ "are : " + countPS(0, n - 1));

	// This code is contributed by rag2127

