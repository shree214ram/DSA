
// Javascript implementation to find the
// minimum and maximum amount
	
// Function to find the minimum
// amount to buy all candies
function findMinimum(arr,n,k)
{
	let res = 0;
	
	for(let i = 0; i < n; i++)
	{
		
		// Buy current candy
		res += arr[i];

		// And take k candies for free
		// from the last
		n = n - k;
	}
	return res;
}

// Function to find the maximum
// amount to buy all candies
function findMaximum(arr,n,k)
{
	let res = 0, index = 0;

	for(let i = n - 1; i >= index; i--)
	{
		
		// Buy candy with maximum amount
		res += arr[i];

		// And get k candies for free from
		// the starting
		index += k;
	}
	return res;
}

// Driver code
let arr = [ 3, 2, 1, 4 ];
let n = arr.length;
let k = 2;
arr.sort(function(a, b){return a - b;});

// Function call
document.write(findMinimum(arr, n, k) + " " +
			findMaximum(arr, n, k));

// This code is contributed by patel2127

