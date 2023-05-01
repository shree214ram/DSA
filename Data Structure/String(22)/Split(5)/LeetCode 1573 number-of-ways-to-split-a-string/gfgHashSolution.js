// Javascript implementation for the above approach

// Function to return ways to split
// a string into three parts
// with the equal number of 0
function count(s)
{
	
	// Store total count of 0s
	var cnt = 0;

	// Count total no. of 0s
	// character in given string
	s.split('').forEach(c => {
	
		cnt += (c == '0') ? 1 : 0;
	});

	// If total count of 0
	// character is not
	// divisible by 3
	if (cnt % 3 != 0)
		return 0;

	var res = 0, k = parseInt(cnt / 3), sum = 0;

	// Initialize mp to store
	// frequency of k
	var mp = new Map();

	// Traverse string to find
	// ways to split string
	for(var i = 0; i < s.length; i++)
	{
		 
		// Increment count if 0 appears
		sum += (s[i] == '0') ? 1 : 0;

		// Increment result if sum equal to
		// 2*k and k exists in mp
		if (sum == 2 * k && mp.has(k) && i < s.length - 1 && i > 0)
		{
			res += mp.get(k);
		}
		
		// Insert sum in mp
		if(mp.has(sum))
			mp.set(sum, mp.get(sum)+1)
		else
			mp.set(sum, 1);
	}
	
	// Return result
	return res;
}

// Driver Code
// Given string
var str = "01010";

// Function call
document.write( count(str));

