// A Dynamic Programming based program to test whether a given String can
// be segmented into space separated words in dictionary

	/*
	* A utility function to check whether a word is present in dictionary or not.
	* An array of Strings is used for dictionary. Using array of Strings for
	* dictionary is definitely not a good idea. We have used for simplicity of the
	* program
	*/
	function dictionaryContains( word) {
		var dictionary = [ "mobile", "samsung", "sam", "sung", "man", "mango", "icecream", "and", "go", "i",
				"like", "ice", "cream" ];
		var size = dictionary.length;
		for (var i = 0; i < size; i++)
			if (dictionary[i]===(word))
				return true;
		return false;
	}

	// Returns true if String can be segmented into space separated
	// words, otherwise returns false
	function wordBreak( str) {
		var size = str.length;
		if (size == 0)
			return true;

		// Create the DP table to store results of subproblems. The value wb[i]
		// will be true if str[0..i-1] can be segmented into dictionary words,
		// otherwise false.
		var wb = Array(size + 1).fill(false);

		for (var i = 1; i <= size; i++) {
			// if wb[i] is false, then check if current prefix can make it true.
			// Current prefix is "str.substring(0, i)"
			if (wb[i] == false && dictionaryContains(str.substring(0, i)))
				wb[i] = true;

			// wb[i] is true, then check for all subStrings starting from
			// (i+1)th character and store their results.
			if (wb[i] == true) {
				// If we reached the last prefix
				if (i == size)
					return true;

				for (j = i + 1; j <= size; j++) {
					// Update wb[j] if it is false and can be updated
					// Note the parameter passed to dictionaryContains() is
					// subString starting from index 'i' and length 'j-i'
					if (wb[j] == false && dictionaryContains(str.substring(i, j)))
						wb[j] = true;

					// If we reached the last character
					if (j == size && wb[j] == true)
						return true;
				}
			}
		}

		/*
		* Uncomment these lines to print DP table "wb" for (i = 1; i <= size;
		* i++) document.write(" " + wb[i];
		*/

		// If we have tried all prefixes and none of them worked
		return false;
	}

	// Driver program to test above functions
	
		if (wordBreak("ilikesamsung"))
			document.write("Yes<br/>");
		else
			document.write("No<br/>");
		if (wordBreak("iiiiiiii"))
			document.write("Yes<br/>");
		else
			document.write("No<br/>");
		if (wordBreak(""))
			document.write("Yes<br/>");
		else
			document.write("No<br/>");
		if (wordBreak("ilikelikeimangoiii"))
			document.write("Yes<br/>");
		else
			document.write("No<br/>");
		if (wordBreak("samsungandmango"))
			document.write("Yes<br/>");
		else
			document.write("No<br/>");
		if (wordBreak("samsungandmangok"))
			document.write("Yes<br/>");
		else
			document.write("No<br/>");

// This code contributed by Rajput-Ji
