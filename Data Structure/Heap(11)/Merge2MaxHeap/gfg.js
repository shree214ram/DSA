// javascript program to merge two max heaps.


	// Standard heapify function to heapify a
	// subtree rooted under idx. It assumes
	// that subtrees of node are already heapified.
	function maxHeapify(arr , n , i)
	{
	
		// Find largest of node and its children
		if (i >= n) {
			return;
		}
		var l = i * 2 + 1;
		var r = i * 2 + 2;
		var max;
		if (l < n && arr[l] > arr[i]) {
			max = l;
		} else
			max = i;
		if (r < n && arr[r] > arr[max]) {
			max = r;
		}

		// Put maximum value at root and
		// recur for the child with the
		// maximum value
		if (max != i) {
			var temp = arr[max];
			arr[max] = arr[i];
			arr[i] = temp;
			maxHeapify(arr, n, max);
		}
	}

	// Merges max heaps a and b into merged
	function mergeHeaps(arr, a, b , n , m) {
		for (var i = 0; i < n; i++) {
			arr[i] = a[i];
		}
		for (var i = 0; i < m; i++) {
			arr[n + i] = b[i];
		}
		n = n + m;

		// Builds a max heap of given arr[0..n-1]
		for (var i = parseInt(n / 2 - 1); i >= 0; i--) {
			maxHeapify(arr, n, i);
		}
	}

	// Driver Code
		var a = [ 10, 5, 6, 2 ];
		var b = [ 12, 7, 9 ];
		var n = a.length;
		var m = b.length;

		var merged = Array(m + n).fill(0);

		mergeHeaps(merged, a, b, n, m);

		for (var i = 0; i < m + n; i++)
			document.write(merged[i] + " ");

// This code is contributed by umadevi9616
