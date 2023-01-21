// Javascript implementation to find the longest subarray
// with sum divisible by k

// function to find the longest subarray
// with sum divisible by k
function longestSubarrWthSumDivByK(arr, n, k)
{
	// unordered map 'um' implemented as
	// hash table
	var um = new Map();
	
	// 'mod_arr[i]' stores (sum[0..i] % k)
	var mod_arr = Array(n), max_len = 0;
	var curr_sum = 0;
	
	// traverse arr[] and build up the
	// array 'mod_arr[]'
	for (var i = 0; i < n; i++)
	{
		curr_sum += arr[i];
		
		// as the sum can be negative, taking modulo twice
		mod_arr[i] = ((curr_sum % k) + k) % k;	

		// if true then sum(0..i) is divisible
		// by k
		if (mod_arr[i] == 0)
			// update 'max_len'
			max_len = i + 1;
		
		// if value 'mod_arr[i]' not present in 'um'
		// then store it in 'um' with index of its
		// first occurrence	
		else if (!um.has(mod_arr[i]))
			um.set(mod_arr[i] , i);
			
		else
			// if true, then update 'max_len'
			if (max_len < (i - um.get(mod_arr[i])))
				max_len = i - um.get(mod_arr[i]);		
	}
	
	// return the required length of longest subarray with
	// sum divisible by 'k'
	return max_len;
}						

// Driver program to test above
var arr = [2, 7, 6, 1, 4, 5];
var n = arr.length;
var k = 3;

document.write( "Length = "
	+ longestSubarrWthSumDivByK(arr, n, k));
	
// This code is contributed by rrrtnx, and updated by Kshitij Dwivedi
