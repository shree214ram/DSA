// javascript program to check if two strings have
// common substring

var MAX_CHAR = 26;

// function to return true if strings have
// common substring and no if strings have
// no common substring
function twoStrings(s1, s2) {

// vector for storing character occurrences
var v = Array(MAX_CHAR).fill(0);

// increment vector index for every
// character of str1
for (var i = 0; i < s1.length; i++)
	v[s1[i] - 'a'] = true;

// checking common substring of str2 in str1
for (var i = 0; i < s2.length; i++)
	if (v[s2[i] - 'a'])
	return true;

return false;	
}

// driver program
var str1 = "hello";
var str2 = "world";
if (twoStrings(str1, str2))
document.write( "Yes");
else
document.write("No");

// This code is contributed by rutvik_56.
