
// A function to check if a string str is palindrome
function isPalindrome(str)
{
	// Start from leftmost and rightmost corners of str
	let l = 0;
	let h = str.length - 1;

	// Keep comparing characters while they are same
	while (h > l)
	{
		if (str[l++] != str[h--])
		{
			console.log("String is not a palindrome\n", str);
			return;
		}
	}
	console.log("String is a palindrome\n", str);
}

// Driver program to test above function

	isPalindrome("abba");
	isPalindrome("abbccbba");
	isPalindrome("geeks");
	return 0;