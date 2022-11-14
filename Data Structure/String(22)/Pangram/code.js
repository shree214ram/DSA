// A JavaScript Program to check if the given
// string is a pangram or not


// Returns true if the string is pangram else false
function checkPangram(str)
{
	// Create a hash table to mark the characters
	// present in the string
	mark = new Array(26).fill(false);

	// For indexing in mark[]
	let index;

	// Traverse all characters
	for (let i = 0; i < str.length; i++) {

		// If uppercase character, subtract 'A'
		// to find index.
		if ('A' <= str[i] && str[i] <= 'Z')
			index = str.charCodeAt(i) - 'A'.charCodeAt(0);

		// If lowercase character, subtract 'a'
		// to find index.
		else if ('a' <= str[i] && str[i] <= 'z')
			index = str.charCodeAt(i) - 'a'.charCodeAt(0);

		// If this character is other than english
		// lowercase and uppercase characters.
		else continue;

		mark[index] = true;
	}

	// Return false if any character is unmarked
	for (let i = 0; i <= 25; i++)
		if (mark[i] == false)
			return false;

	// If all characters were present
	return true;
}

// Driver Program to test above functions

let str = "The quick brown fox jumps over the lazy dog";

document.write(str,"</br>")

if (checkPangram(str) == true)
	document.write("is a pangram");
else
	document.write("is not a pangram");

// This code is contributed by shinjanpatra.