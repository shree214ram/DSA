// javascript program to find closest smaller value for
// every array elementclass TreeSetDemo {
	function closestSmaller(arr)
	{
	
		// Insert all array elements into a TreeSet
		var ts = new Set();
		for (i = 0; i < arr.length; i++)
			ts.add(arr[i]);

		// Find largest smaller element for every
		// array element
		for (i = 0; i < arr.length; i++) {
			var smaller = upper_bound(ts, arr[i]);
			if (smaller == null)
				document.write(-1 + " ");
			else
				document.write(smaller + " ");
		}
	}
	function upper_bound(s, val)
	{
		let temp = [...s];
		temp.sort((a, b) => b - a); // sort in desc order 
		return temp[temp.indexOf(val) + 1];
	}

		var arr = [ 10, 5, 11, 6, 20, 12 ];
		closestSmaller(arr);
		
// This code is contributed by Rajput-Ji
