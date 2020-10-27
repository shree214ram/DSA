// https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/

// Java code to find 
// duplicates in O(n) time 

class FindDuplicate 
{ 
// Function to prduplicates 
	 printRepeating(arr, size) 
	{ 
		i; 
		console.log("The repeating elements are : "); 
	
		for (i = 0; i < size; i++) 
		{ 
			if (arr[ Math.abs(arr[i])] >= 0) 
				arr[ Math.abs(arr[i])] = -arr[ Math.abs(arr[i])]; 
			else
				console.log(Math.abs(arr[i]) + " "); 
		}		 
	} 
	
} 
// Driver program 

  const duplicate = new FindDuplicate(); 
  arr= [1, 2, 3, 1, 3, 6, 6]; 
  arr_size = arr.length; 

  duplicate.printRepeating(arr, arr_size); 
// This code has been contributed by Mayank Jaiswal 
