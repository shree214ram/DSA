
// Dynamic Programming Java implementation of LCS problem

// Utility function to get max of 2 integers
function max(a, b)
{
	if (a > b)
		return a;
	else
		return b;
}

// Returns length of LCS for X[0..m-1], Y[0..n-1]
function lcs(X, Y, m, n)
{
	var L = new Array(m + 1);
	for(var i = 0; i < L.length; i++)
	{
		L[i] = new Array(n + 1);
	}
	var i, j;
	
	/* Following steps build L[m+1][n+1] in
	bottom up fashion. Note that L[i][j]
	contains length of LCS of X[0..i-1]
	and Y[0..j-1] */
	for(i = 0; i <= m; i++)
	{
		for(j = 0; j <= n; j++)
		{
			if (i == 0 || j == 0)
				L[i][j] = 0;
			else if (X[i - 1] == Y[j - 1])
				L[i][j] = L[i - 1][j - 1] + 1;
			else
				L[i][j] = max(L[i - 1][j], L[i][j - 1]);
		}
	}
	
	/* L[m][n] contains length of LCS
	for X[0..n-1] and Y[0..m-1] */
	return L[m][n];
}

// Driver code
var x = "AGGTAB";
var y = "GXTXAYB";

var m = x.length;
var n = y.length;

document.write("Length of LCS is " + lcs(x, y, m, n));

// This code is contributed by akshitsaxenaa09

