
// Javascript program to delete elements from array.

// Function for deleting k elements
function checkPalindromes(str) {
	// d is the number of characters in
	// input alphabet

	var d = 256;

	// q is a prime number used for
	// evaluating Rabin Karp's Rolling hash
	var q = 103

	var n = str.length;

	document.write(str.charAt(0) + " Yes");
	document.write("\n");

	if (n == 1) {
		return;
	}
	// Initialize first half reverse and second
	// half for as firstr and second characters
	var firstr = str.charAt(0) % q;
	var second = str.charAt(1) % q;

	var h = 1, i, j;

	// Now check for palindromes from second
	// character onward
	for (var i = 1; i < n; i++) {
		// If the hash values of 'firstr' and
		// 'second' match, then only check
		// individual characters
		if (firstr == second) {
			/* Check if str[0..i] is palindrome
			using simple character by character
			match */
			for (j = 0; j < i / 2; j++) {
				if (str.charAt(j) != str.charAt(i- j))
					break;
			}
			document.write((j == i / 2) ?
				str.charAt(i) + " Yes" : str.charAt(i) +
				" No");
			document.write("\n");
		}
		else document.write(str.charAt(i) + " No");
		document.write("\n");

		// Calculate hash values for next iteration.
		// Don't calculate hash for next characters
		// if this is the last character of string
		if (i != n - 1) {
			// If i is even (next i is odd)
			//@sp 0 , 1 , 2 {next i will be odd 3}
			if (i % 2 == 0) {
				// Add next character after first
				// half at beginning of 'firstr'
				h = (h * d) % q;
				//@sp 0 , 1 , 2 {next i will be odd 3 , so we will add next i th character Hash value to old firstr}
				firstr = (firstr + h * str.charAt(i /2)) % q;

				// Add next character after second
				// half at the end of second half.
				second = (second * d + str.charAt(i +1)) % q;
			}
			else {
				// If next i is odd (next i is even)
				// then we need not to change firstr,
				// we need to remove first character
				// of second and append a character
				// to it.
				second = (d * (second + q - str.charAt((i + 1) / 2) * h) % q +str.charAt(i + 1)) % q;
			}
		}
	}
}

// Driver code

var txt = "aabaacaabaa";
checkPalindromes(txt);

// This code is contributed by Aarti_Rathi

