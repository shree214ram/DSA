
// Javascript program to check if a sentence
// can be formed from a given set of words.

// Function to check if the word
// is in the dictionary or not
function match_words(dictionary, sentence, n, m)
{
	
	// map to store all words in
	// dictionary with their count
	let mp = new Map();
	
	// Adding all words in map
	for(let i = 0; i < n; i++)
	{
		if(mp.has(dictionary[i]))
		{
			mp.set(dictionary[i],
			mp.get(dictionary[i]) + 1);
		}
		else
		{
			mp.set(dictionary[i], 1);
		}
	}
	
	// Search in map for all
	// words in the sentence
	for(let i = 0; i < m; i++)
	{
		if (mp.has(sentence[i]))
			mp.set(sentence[i],mp.get(sentence[i]) - 1);
		else
			return false;
	}
	
	// All words of sentence are present
	return true;
}

// Driver code
let dictionary = [ "find", "a", "geeks",
				"all", "for", "on",
				"geeks", "answers", "inter" ];

let n = dictionary.length;

let sentence = [ "find", "all", "answers", "on",
				"geeks", "for", "geeks" ];

let m = sentence.length;

// Calling function to check if words are
// present in the dictionary or not
if (match_words(dictionary, sentence, n, m))
	document.write("YES");
else
	document.write("NO");

// This code is contributed by patel2127

