// Recursive implementation of
// word break problem in java

	// set to hold dictionary values
	var dictionary = new Set();
	

		// array of strings to be added in dictionary set.
		var temp_dictionary = [ "mobile", "samsung", "sam", "sung", "man", "mango", "icecream", "and", "go", "i",
				"like", "ice", "cream" ];

		// loop to add all strings in dictionary set
		for (var temp of temp_dictionary) {
			dictionary.add(temp);
		}

		// sample input cases
		document.write(((wordBreak("ilikesamsung"))?"Yes":"No")+"<br/>");
		document.write(((wordBreak("iiiiiiii"))?"Yes":"No")+"<br/>");
		document.write(((wordBreak(""))?"Yes":"No")+"<br/>");
		document.write(((wordBreak("ilikelikeimangoiii"))?"Yes":"No")+"<br/>");
		document.write(((wordBreak("samsungandmango"))?"Yes":"No")+"<br/>");
		document.write(((wordBreak("samsungandmangok"))?"Yes":"No")+"<br/>");


	// returns true if the word can be segmented into parts such
	// that each part is contained in dictionary
	function wordBreak( word) {
		var size = word.length;

		// base case
		if (size == 0)
			return true;

		// else check for all words
		for (var i = 1; i <= size; i++) {
			// Now we will first divide the word into two parts ,
			// the prefix will have a length of i and check if it is
			// present in dictionary ,if yes then we will check for
			// suffix of length size-i recursively. if both prefix and
			// suffix are present the word is found in dictionary.

			if (dictionary.has(word.substring(0, i)) && wordBreak(word.substring(i, size)))
				return true;
		}

		// if all cases failed then return false
		return false;
}

// This code is contributed by Rajput-Ji
