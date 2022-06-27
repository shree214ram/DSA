
// Dynamic Programming Javascript implementation
// of LIS problem

// lis() returns the length of the longest
// increasing subsequence in arr[] of size n
function lis(arr, n)
{
	let lis = Array(n).fill(0);
	let i, j, max = 0;

	// Initialize LIS values for all indexes
	for(i = 0; i < n; i++)
		lis[i] = 1;

	// Compute optimized LIS values in
	// bottom up manner
	for(i = 1; i < n; i++)
		for(j = 0; j < i; j++)
			if (arr[i] > arr[j] && lis[i] < lis[j] + 1)
				lis[i] = lis[j] + 1;

	// Pick maximum of all LIS values
	for(i = 0; i < n; i++)
		if (max < lis[i])
			max = lis[i];

	return max;
}

// Driver code
let arr = [ 10, 22, 9, 33, 21, 50, 41, 60 ];
let n = arr.length;
document.write("Length of lis is " + lis(arr, n) + "\n");

// This code is contributed by avijitmondal1998

