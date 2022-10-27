
// Javascript code for Max
// Water Container
function maxArea(A, len)
{
	let l = 0;
	let r = len -1;
	let area = 0;

	while (l < r)
	{
		
		// Calculating the max area
		area = Math.max(area, Math.min(A[l],
						A[r]) * (r - l));
		
		if (A[l] < A[r])
			l += 1;
		else
			r -= 1;
	}
	return area;
}

// Driver code
let a = [ 1, 5, 4, 3 ];
let b = [ 3, 1, 2, 4, 5 ];

let len1 = a.length;
document.write(maxArea(a, len1) + "</br>");

let len2 = b.length;
document.write(maxArea(b, len2));

// This code is contributed by rameshtravel07

