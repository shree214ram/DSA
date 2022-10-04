// JavaScript implementation to find the length
// of longest subarray having sum k

// function to find the length of longest
// subarray having sum k
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

		// make an entry for 'sum' if it is
		// not present in 'um'
		if (!um.has(sum))
			um.set(sum, i);

		// check if 'sum-k' is present in 'um'
		// or not
		if (um.has(sum - k)) {

			// update maxLength
			if (maxLen < (i - um.get(sum - k)))
				maxLen = i - um.get(sum - k);
		}
	}

	// required maximum length
	return maxLen;
}

// Driver Code
var arr = [10, 5, 2, 7, 1, 9];
var n = arr.length;
var k = 15;
document.write( "Length = "
	+ lenOfLongSubarr(arr, n, k));


