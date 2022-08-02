	// Javascript program to find the longest repeating
	// subsequence
	
	// This function mainly returns LCS(str, str)
	// with a condition that same characters at
	// same index are not considered.
	function findLongestRepeatingSubSeq(str)
	{
		var n = str.length;
	
		// Create and initialize DP table
		var dp = new Array(n + 1);
		
		for (var i=0; i<=n; i++)
		{
			dp[i] = new Array(n + 1);
			for (var j=0; j<=n; j++)
			{
				dp[i][j] = 0;
			}
		}
			
		// Fill dp table (similar to LCS loops)
		for (var i=1; i<=n; i++)
		{
			for (var j=1; j<=n; j++)
			{
				// If characters match and indexes are
				// not same
				if ((str[i-1] == str[j-1]) && (i != j))
					dp[i][j] = 1 + dp[i-1][j-1];		
						
				// If characters do not match
				else
					dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
			}
		}
		return dp[n][n];
	}
	// Driver Code
	
	var str = "aabb";
	document.write("The length of the largest subsequence that repeats itself is : " + findLongestRepeatingSubSeq(str));

