
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
	//Make a DP 
	var DP = new Array(m + 1);
	for(var i = 0; i < DP.length; i++)
	{
		DP[i] = new Array(n + 1);
	}
	var i, j;
	
	/* Following steps build DP[m+1][n+1] in
	bottom up fashion. Note that DP[i][j]
	contains length of LCS of X[0..i-1]
	and Y[0..j-1] */
	for(i = 0; i <= m; i++)
	{
		for(j = 0; j <= n; j++)
		{
			//If row and column value is 0 then 0
			if (i == 0 || j == 0)
				DP[i][j] = 0;
			//If left and upper values are equal than 1+ Digonal
			else if (X[i - 1] == Y[j - 1])
				DP[i][j] = DP[i - 1][j - 1] + 1;
			//If left and upper values are not equal Max(left,upper)
			else
				DP[i][j] = max(DP[i - 1][j], DP[i][j - 1]);
		}
	}
	
	/* DP[m][n] contains length of LCS
	for X[0..n-1] and Y[0..m-1] */
	return DP[m][n]; // Last element of this table will be the Longest common subsequence 
}

// Driver code
var x = "AGGTAB";
var y = "GXTXAYB";

var m = x.length;
var n = y.length;

document.write("Length of LCS is " + lcs(x, y, m, n));

// This code is contributed by akshitsaxenaa09

