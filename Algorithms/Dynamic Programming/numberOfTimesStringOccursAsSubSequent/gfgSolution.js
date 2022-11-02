
// A Dynamic Programming based
// Javascript program to find the
// number of times the second
// string occurs in the first
// string, whether continuous
// or discontinuous

// Iterative DP function to
// find the number of times
// the second string occurs
// in the first string, whether
// continuous or discontinuous
function count(a, b)
{
	var m = a.length;
	var n = b.length;

	// Create a table to store
	// results of sub-problems
	var lookup = Array(m + 1);
	for(var i = 0; i < m + 1; i++)
		lookup[i] = Array(n + 1).fill(0);

	// If first string is empty
	for(i = 0; i <= n; ++i)
		lookup[0][i] = 0;

	// If second string is empty
	for(i = 0; i <= m; ++i)
		lookup[i][0] = 1;

	// Fill lookup in
	// bottom up manner
	for(i = 1; i <= m; i++)
	{
		for(j = 1; j <= n; j++)
		{
			
			// If last characters are
			// same, we have two options -
			// 1. consider last characters
			// of both strings in solution
			// 2. ignore last character
			// of first string
			if (a.charAt(i - 1) == b.charAt(j - 1))
				lookup[i][j] = lookup[i - 1][j - 1] +
							lookup[i - 1][j];
			else
			
				// If last character are
				// different, ignore last
				// character of first string
				lookup[i][j] = lookup[i - 1][j];
		}
	}
	return lookup[m][n];
}

// Driver Code
var a = "GeeksforGeeks";
var b = "Gks";

document.write(count(a, b));

// This code is contributed by gauravrajput1

