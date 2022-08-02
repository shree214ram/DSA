// JavaScript implementation of the approach
// Function that returns true if a and b
// are anagarams of each other

function isAnagram(a, b)
{
	
	// Check if length of both strings is same or not
		if (a.length != b.length) {
			return false;
		}
		// Create a HashMap containing Character as Key and
		// Integer as Value. We will be storing character as
		// Key and count of character as Value.
		let map = new Map();
		// Loop over all character of String a and put in
		// HashMap.
		for (let i = 0; i < a.length; i++) {
			// Check if HashMap already contain current
			// character or not
			if (map.has(a[i])) {
				// If contains increase count by 1 for that
				// character
				map.set(a[i],
						map.get(a[i]) + 1);
			}
			else {
				// else set that character in map and set
				// count to 1 as character is encountered
				// first time
				map.set(a[i], 1);
			}
		}
		// Now loop over String b
		for (let i = 0; i < b.length; i++) {
			// Check if current character already exists in
			// HashMap/map
			if (map.has(b[i])) {
				// If contains reduce count of that
				// character by 1 to indicate that current
				// character has been already counted as
				// idea here is to check if in last count of
				// all characters in last is zero which
				// means all characters in String a are
				// present in String b.
				map.set(b[i],
						map.get(b[i]) - 1);
			}
			else {
				return false;
			}
		}
		// Extract all keys of HashMap/map
		let keys = map.keys();
		// Loop over all keys and check if all keys are 0.
		// If so it means it is anagram.
		for (let key of keys) {
			if (map.get(key) != 0) {
				return false;
			}
		}
		// Returning True as all keys are zero
		return true;
	}

// Driver code
let str1 = "geeksforgeeks";
let str2 = "forgeeksgeeks";

// Function call
if (isAnagram(str1, str2))
	document.write("The two strings are anagram of each other");
else
	document.write("The two strings are not anagram of each other");


// This code is contributed by shinjanpatra

