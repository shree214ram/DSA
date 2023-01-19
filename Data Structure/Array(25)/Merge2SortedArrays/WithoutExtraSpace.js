// Javascript program to merge two
// sorted arrays with O(1) extra space.

	let arr1=[1, 5, 9, 10, 15, 20];
	let arr2=[2, 3, 8, 13];
	
	function merge(m,n)
	{
		// Iterate through all elements of ar2[] starting from
		// the last element
		for (let i=n-1; i>=0; i--)
		{
			/* Find the smallest element greater than ar2[i]. Move all
			elements one position ahead till the smallest greater
			element is not found */
			let j, last = arr1[m-1];
			for (j=m-2; j >= 0 && arr1[j] > arr2[i]; j--)
				arr1[j+1] = arr1[j];
	
			// If there was a greater element
			if (last > arr2[i])
			{
				arr1[j+1] = arr2[i];
				arr2[i] = last;
			}
		}
	}
	
	// Driver method to test the above function
	merge(arr1.length,arr2.length);
	document.write("After Merging <br>First Array: ");
	for(let i=0;i<arr1.length;i++)
	{
		document.write(arr1[i]+" ");
	}
	document.write("<br>Second Array: ");
	for(let i=0;i<arr2.length;i++)
	{
		document.write(arr2[i]+" ");
	}
	
	