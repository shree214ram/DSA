// Javascript program for the above approach

// Function for finding the first
// missing positive number
function firstMissingPositive(arr, n)
{
	let ptr = 0;
	
	// Check if 1 is present in array or not
	for(let i = 0; i < n; i++)
	{
		if (arr[i] == 1)
		{
			ptr = 1;
			break;
		}
	}

	// If 1 is not present
	if (ptr == 0)
		return 1;

	// Changing values to 1
	for(let i = 0; i < n; i++)
		if (arr[i] <= 0 || arr[i] > n)
			arr[i] = 1;

	// Updating indices according to values
	for(let i = 0; i < n; i++)
		arr[(arr[i] - 1) % n] += n;

	// Finding which index has value less than n
	for(let i = 0; i < n; i++)
		if (arr[i] <= n)
			return i + 1;

	// If array has values from 1 to n
	return n + 1;
}

// Driver code
let arr = [ 0, 10, 2, -10, -20 ];
let n = arr.length;
let ans = firstMissingPositive(arr, n);

document.write(ans);

// This code is contributed by telimayur

