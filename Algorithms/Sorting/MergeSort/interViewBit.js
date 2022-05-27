function merge(Arr, start, mid, end) {

	// create a temp array
	let temp=[] 

	// crawlers for both intervals and for temp
	let i = start, j = mid+1, k = 0;

	// traverse both arrays and in each iteration add smaller of both elements in temp 
	while(i <= mid && j <= end) {
		if(Arr[i] <= Arr[j]) {
			temp[k] = Arr[i];
			k += 1; i += 1;
		}
		else {
			temp[k] = Arr[j];
			k += 1; j += 1;
		}
	}

	// add elements left in the first interval 
	while(i <= mid) {
		temp[k] = Arr[i];
		k += 1; i += 1;
	}

	// add elements left in the second interval 
	while(j <= end) {
		temp[k] = Arr[j];
		k += 1; j += 1;
	}

	// copy temp to original interval
	for(i = start; i <= end; i += 1) {
		Arr[i] = temp[i - start]
	}
}

// Arr is an array of integer type
// start and end are the starting and ending index of current interval of Arr

function  mergeSort(Arr, start, end) {

	if(start < end) {
		let mid = (start + end) / 2;
		mergeSort(Arr, start, mid);
		mergeSort(Arr, mid+1, end);
		merge(Arr, start, mid, end);
	}
}

const arr = [33, 78, 9, 2, 78, 11, 1]
console.log(arr.length)
mergeSort(arr, 0, arr.length - 1)
document.write("Result=>", arr);

https://leetcode.com/problems/merge-two-sorted-lists/solution/
https://leetcode.com/problems/merge-two-sorted-lists/
https://leetcode.com/problems/sort-an-array/
https://leetcode.com/problems/sort-list/
https://leetcode.com/tag/merge-sort/
https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/?ref=gcse
https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/?ref=gcse
https://www.interviewbit.com/tutorial/merge-sort-algorithm/#:~:text=Merge%20sort%20is%20one%20of,results%20into%20a%20sorted%20list.