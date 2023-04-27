
### Solution1. Simple 2 for loop O(n*n):- 
1. ittrate 2 for loop n times and check for each candidate count  
2. if current candidate count is greater than previous maximum count so we will update the maxCount with current max .

    let maxCount = 0;
    let index = -1; 
     
    for(let i = 0; i < n; i++)
    {
        let count = 0;
        for(let j = 0; j < n; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
 
        // Update maxCount if count of
        // current element is greater
        if (count > maxCount)
        {
            maxCount = count;
            index = i;
        }
    }
 
    // If maxCount is greater than n/2
    // return the corresponding element
    if (maxCount > n / 2)
        document.write(arr[index]);
    else
        document.write("No Majority Element");

### Solution2. Binary Search Tree O(n*n):- 
1. insert each element in BST 
2. If current element is already present increase the counter 
3. If counter is greater than N/2 return the element 

### Solution3. Balanced Binary Search Tree (AVL Tree) O(nlogn):- 
1. We can optimised in BST if BST is AVL Tree 



### Solution4. Using Moore’s Voting Algorithm: O(n)/O(1):- 

1. Maintain 2 variable count=1 and mejority index maj_index=0.
2. ittrate 1 for loop i=1 to n times and  
3. if array of last mejority index value == a[i] increment count by 1 else decrement count by 1
4. if count is 0 then replace maj_index with i and count by 1 
5. in last we will check mejority value is greater than N/2 or not with the help of function isMajority

<script>
	
	/* Function to print Majority Element */
	function printMajority(a, size)
	{
		/* Find the candidate for Majority*/
		let cand = findCandidate(a, size);

		/* Print the candidate if it is Majority*/
		if (isMajority(a, size, cand))
			document.write(" " + cand + " ");
		else
			document.write("No Majority Element");
	}

	/* Function to find the candidate for Majority */
	function findCandidate(a, size)
	{
		let maj_index = 0, count = 1;
		let i;
		for (i = 1; i < size; i++) {
			if (a[maj_index] == a[i])
				count++;
			else
				count--;

			if (count == 0) {
				maj_index = i;
				count = 1;
			}
		}
		return a[maj_index];
	}

	// Function to check if the candidate
	// occurs more than n/2 times
	function isMajority(a, size, cand)
	{
		let i, count = 0;
		for (i = 0; i < size; i++) {
			if (a[i] == cand)
				count++;
		}
		if (count > parseInt(size / 2, 10))
			return true;
		else
			return false;
	}
	
	let a = [ 1, 3, 3, 1, 2 ];
	let size = a.length;

	// Function call
	printMajority(a, size);

</script>
