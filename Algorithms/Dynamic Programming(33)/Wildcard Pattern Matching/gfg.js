
// JavaScript program to implement wildcard
// pattern matching algorithm

// Function that matches input str with
// given wildcard pattern
let dp = [];
function finding(s, p, n, m)
{
	// return 1 if n and m are negative
	if (n < 0 && m < 0)
		return 1;

	// return 0 if m is negative
	if (m < 0)
		return 0;

	// return n if n is negative
	if (n < 0)
	{
		// while m is positive
		while (m >= 0)
		{
			if (p[m] != '*')
				return 0;
			m--;
		}
		return 1;
	}
	
	// if dp state is not visited
	if (dp[n][m] == -1)
	{
		if (p[m] == '*')
		{
			return dp[n][m] = finding(s, p, n - 1, m)
							|| finding(s, p, n, m - 1);
		}
		else
		{
			if (p[m] != s[n] && p[m] != '?')
				return dp[n][m] = 0;
			else
				return dp[n][m]
					= finding(s, p, n - 1, m - 1);
		}
	}

	// return dp[n][m] if dp state is previsited
	return dp[n][m];
}


function isMatch(s, p)
{
	dp = [];
	
	// resize the dp array
	dp = new Array(s.length+1).fill(1).map(()=>new Array(p.length+1).fill(-1));
	return dp[s.length][p.length]
		= finding(s, p, s.length - 1, p.length - 1);
}

// Driver code

let str = "baaabab";
let pattern = "*****ba*****ab";
// char pattern[] = "ba*****ab";
// char pattern[] = "ba*ab";
// char pattern[] = "a*ab";
// char pattern[] = "a*****ab";
// char pattern[] = "*a*****ab";
// char pattern[] = "ba*ab****";
// char pattern[] = "****";
// char pattern[] = "*";
// char pattern[] = "aa?ab";
// char pattern[] = "b*b";
// char pattern[] = "a*a";
// char pattern[] = "baaabab";
// char pattern[] = "?baaabab";
// char pattern[] = "*baaaba*";

if (isMatch(str, pattern))
	console.log("Yes")
else
	console.log("No")

// This code is contributed by shinjanpatra

