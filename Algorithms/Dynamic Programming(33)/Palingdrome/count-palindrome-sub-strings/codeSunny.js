// Javascript program to find palindromic substrings of a string

// Returns total number of palindrome substring of
// length greater than equal to 2
function CountPS(str, n) {
	// create empty 2-D matrix that counts all
	// palindrome substring. dp[i][j] stores counts of
	// palindromic substrings in st[i..j]
	let dp = new Array(n);

	// P[i][j] = true if substring str[i..j] is
	// palindrome, else false
	let P = new Array(n);

	for (let i = 0; i < n; i++) {
		dp[i] = new Array(n);
		P[i] = new Array(n);
		for (let j = 0; j < n; j++) {
			dp[i][j] = 0;
			P[i][j] = false;
		}
	}

	// palindrome of single length
	for (let i = 0; i < n; i++)
		P[i][i] = true;

	// palindrome of length 2
	for (let i = 0; i < n - 1; i++) {
		if (str[i] == str[i + 1]) {
			P[i][i + 1] = true;
			dp[i][i + 1] = 1;
		}
	}

	// Palindromes of length more than 2. This loop is
	// similar to Matrix Chain Multiplication. We start
	// with a gap of length 2 and fill the DP table in a
	// way that gap between starting and ending indexes
	// increases one by one by outer loop.
	for (let gap = 2; gap <= n; gap++) {
		// Pick starting point for current gap
		for (let i = 0; i <= n - gap; i++) {
			// Set ending point
			let j = gap + i - 1;

			// If current string is palindrome
			if (str[i] == str[j] && P[i + 1][j - 1])
				P[i][j] = true;
 
			// Add current palindrome substring ( + 1)
			// and rest palindrome substring (dp[i][j-1]
			// + dp[i+1][j]) remove common palindrome
			// substrings (- dp[i+1][j-1])
			if (P[i][j] == true)
				dp[i][j] = 1 + dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
			else 
				dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
		}
	}
	console.log("dp[0][n - 1]", dp[0][n - 1])
	// return total palindromic substrings
	return dp[0][n - 1];
}

// Driver code
let str = "abaaba";
document.write(
	CountPS(str.split(""), str.length));


// This code is contributed by avanitrachhadiya2155


/*
	Recursion code 
*/

var dp = Array(1001).fill().map(() => Array(1001).fill(-1)); // 2D matrix

function isPal(s, i, j) {

	// Base condition
	if (i > j)
		return 1;

	// check if the recursive tree
	// for given i, j
	// has already been executed
	if (dp[i][j] != -1)
		return dp[i][j];

	// If first and last characters of
	// substring are unequal
	if (s.charAt(i) != s.charAt(j))
		return dp[i][j] = 0;

	// memoization
	return dp[i][j] = isPal(s, i + 1, j - 1);
}

function countSubstrings(s) {

	var n = s.length;
	var count = 0;

	// 2 for loops are required to check for
	// all the palindromes in the string.
	for (i = 0; i < n; i++) {
		for (j = i + 1; j < n; j++) {
			// Increment count for every palindrome
			if (isPal(s, i, j) != 0)
				count++;
		}
	}

	// return total palindromic substrings
	return count;
}

// Driver code
var s = "abbaeae";
document.write(countSubstrings(s));

// This code is contributed by Rajput-Ji
