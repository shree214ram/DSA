
	// Javascript program to find
	// the maximum stolen value
	
	// Function to calculate the
	// maximum stolen value
	function maxLoot(hval, n)
	{
		if (n == 0)
			return 0;
		if (n == 1)
			return hval[0];
		if (n == 2)
			return Math.max(hval[0], hval[1]);

		// dp[i] represent the maximum value stolen
		// so far after reaching house i.
		let dp = new Array(n);

		// Initialize the dp[0] and dp[1]
		dp[0] = hval[0];
		dp[1] = Math.max(hval[0], hval[1]);

		// Fill remaining positions
		for (let i = 2; i<n; i++)
			dp[i] = Math.max(hval[i]+dp[i-2], dp[i-1]);

		return dp[n-1];
	}
	
	let hval = [6, 7, 1, 3, 8, 2, 4];
	let n = hval.length;
	document.write(
	"Maximum loot possible : " + maxLoot(hval, n)
	);
