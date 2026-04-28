function lenOfLongSubarr(arr, n, k)
{

	// unordered_map 'um' implemented
	// as hash table
	var um = new Map();
	var sum = 0, maxLen = 0;

	// traverse the given array
	for (var i = 0; i < n; i++) {

		// accumulate sum
		sum += arr[i];

		// when subarray starts from index '0'
		if (sum == k)
			maxLen = i + 1;

		// check if 'sum-k' is present in 'um'
		// or not
		if (um.has(sum - k)) {

			// update maxLength
			
            maxLen = Math.max(maxLen,(i - um.get(sum - k)))  
                
		}
        
        // make an entry for 'sum' if it is
		// not present in 'um'
		if (!um.has(sum))
			um.set(sum, i);
	}

	
	// required maximum length
	return maxLen;
}

// Driver Code
var arr = [10, 5, 2, 6, 1,0,1,9];
var n = arr.length;
var k = 15;
console.log( "Length = "
	+ lenOfLongSubarr(arr, n, k));

