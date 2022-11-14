//https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/


// Javascript program to find the k-th largest sum
// of subarray

// function to calculate kth largest element
// in contiguous subarray sum
function kthLargestSum(arr, n, k)
{
	// array to store prefix sums
	var sum = new Array(n + 1);
	sum[0] = 0;
	sum[1] = arr[0];
	for (var i = 2; i <= n; i++)
		sum[i] = sum[i - 1] + arr[i - 1];

	// priority_queue of min heap
	var Q = [];

	// loop to calculate the contiguous subarray
	// sum position-wise
	for (var i = 1; i <= n; i++)
	{

		// loop to traverse all positions that
		// form contiguous subarray
		for (var j = i; j <= n; j++)
		{
			// calculates the contiguous subarray
			// sum from j to i index
			var x = sum[j] - sum[i - 1];

			// if queue has less then k elements,
			// then simply push it
			if (Q.length < k)
				Q.push(x);

			else
			{
				// it the min heap has equal to
				// k elements then just check
				// if the largest kth element is
				// smaller than x then insert
				// else its of no use
				Q.sort();
				if (Q[0] < x)
				{
					Q.pop();
					Q.push(x);
				}
			}
			
			Q.sort();
		}
	}

	// the top element will be then kth
	// largest element
	return Q[0];
}

// Driver program to test above function
var a = [ 1,9,3,7,6,5 ];
var n = a.length;
var k = 4;

// calls the function to find out the
// k-th largest sum
document.write(kthLargestSum(a, n, k));
