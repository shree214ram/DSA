/* Javascript program for Merge Sort */
class MergeSort {
	// Merges two subarrays of arr. 
	// First subarray is arr[l..m] 
	// Second subarray is arr[m+1..r] 
	merge(arr, l, m, r) {
		// Find sizes of two subarrays to be merged 
		const n1 = m - l + 1;
		const n2 = r - m;

		/* Create temp arrays */
		const L = [];
		const R = [];

		/*Copy data to temp arrays*/
		for (let i = 0; i < n1; ++i)
			L[i] = arr[l + i];
		for (let j = 0; j < n2; ++j)
			R[j] = arr[m + 1 + j];

		/* Merge the temp arrays */

		// Initial indexes of first and second subarrays 
		let i = 0;
    let j = 0;

		// Initial index of merged subarry array 
		let k = l;
		while (i < n1 && j < n2) {
			if (L[i] <= R[j]) {
				arr[k] = L[i];
				i++;
			}
			else {
				arr[k] = R[j];
				j++;
			}
			k++;
		}

		/* Copy remaining elements of L if any */
		while (i < n1) {
			arr[k] = L[i];
			i++;
			k++;
		}

		/* Copy remaining elements of R if any */
		while (j < n2) {
			arr[k] = R[j];
			j++;
			k++;
		}
	}

	// Main function that sorts arr[l..r] using 
	// merge() 
	sort(arr, l, r) {
		if (l < r) {
			// Find the middle po
			const m = (l + r) / 2;

			// Sort first and second halves 
			this.sort(arr, l, m);
			this.sort(arr, m + 1, r);

			// Merge the sorted halves 
			this.merge(arr, l, m, r);
		}
	}

	/* A utility function to prarray of size n */
	printArray(arr) {
		const n = arr.length;
		for (let i = 0; i < n; ++i)
			console.log(arr[i] + " ");
		console.log();
	}
}

// Driver method 
const ob = new MergeSort();

const arr = [12, 11, 13, 5, 6, 7];

console.log("Given Array");
ob.printArray(arr);

ob.sort(arr, 0, arr.length - 1);

console.log("Sorted array");
ob.printArray(arr); 
