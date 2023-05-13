
// Javascript implementation of the approach
function maxWater(arr, n)
{
	
	// indices to traverse the array
	let left = 0;
	let right = n - 1;
	
	// To store Left max and right max
	// for two pointers left and right
	let l_max = 0;
	let r_max = 0;
	
	// To store the total amount
	// of rain water trapped
	let result = 0;
	while (left <= right)
	{
		
		// We need check for minimum of left
		// and right max for each element
		if(r_max <= l_max)
		{
			
			// Add the difference between
			// current value and right max at index r
			result += Math.max(0, r_max - arr[right]);
			
			// Update right max
			r_max = Math.max(r_max, arr[right]);
			
			// Update right pointer
			right -= 1;
		}
		else
		{ 
		
			// Add the difference between
			// current value and left max at index l
			result += Math.max(0, l_max - arr[left]);
			
			// Update left max
			l_max = Math.max(l_max, arr[left]);
			
			// Update left pointer
			left += 1;
		}
	}
	return result;
}

// Driver code
let arr = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];
let N = arr.length;

document.write(maxWater(arr, N));

// This code is contributed by suresh07

