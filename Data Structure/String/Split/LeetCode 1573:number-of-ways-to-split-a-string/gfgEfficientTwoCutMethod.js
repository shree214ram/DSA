	// Javascript program for above approach
	
	// Function to calculate
	// the number of ways to split
	function splitstring(s)
	{
		let n = s.length;

		// Calculating the total
		// number of zeros
		let zeros = 0;
		for(let i = 0; i < n; i++)
			if (s[i] == '0')
				zeros++;

		// Case1
		// If total count of zeros is not
		// divisible by 3
		if (zeros % 3 != 0)
			return 0;

		// Case2
		// if total count of zeros
		// is zero
		if (zeros == 0)
			return parseInt(((n - 1) * (n - 2)) / 2, 10);

		// Case3
		// General case

		// Number of zeros in each substring
		let zerosInEachSubstring = parseInt(zeros / 3, 10);

		// Initialising zero to the number of ways
		// for first and second cut
		let waysOfFirstCut = 0;
		let waysOfSecondCut = 0;

		// Initializing the count
		let count = 0;

		// Traversing from the beginning
		for(let i = 0; i < n; i++)
		{

			// Incrementing the count
			// if the element is '0'
			if (s[i] == '0')
				count++;

			// Incrementing the ways for the
			// 1st cut if count is equal to
			// zeros required in each substring
			if (count == zerosInEachSubstring)
				waysOfFirstCut++;

			// Incrementing the ways for the
			// 2nd cut if count is equal to
			// 2*(zeros required in each substring)
			else if (count == 2 * zerosInEachSubstring)
				waysOfSecondCut++;
		}

		// Total number of ways to split is
		// multiplication of ways for the 1st
		// and 2nd cut
		return waysOfFirstCut * waysOfSecondCut;
	}
	
	let s = "01010";

	// Function call
	document.write("The number of ways " +
					"to split is " +
					splitstring(s));

