function twoStrings(s1, s2) {
	// vector for storing character occurrences 
  
	var a = 97;
	var charArray = [];
	for (var i = 0; i < 26; i++)
	  charArray[i+1] = false;
  
	console.log(charArray);
	// increment vector index for every 
	// character of str1 
	for (let i = 0; i < s1.length; i++) {
     console.log(s1[i].charCodeAt(0),"hay")
	  console.log(s1[i].charCodeAt(0)-"A".charCodeAt(0),"current")
  
	  charArray[s1[i].charCodeAt(0)-"A".charCodeAt(0)] = true;
  
	}
	console.log(charArray)
	// checking common sub of str2 in str1 
	for (let i = 0; i < s2.length; i++) {
	  if (charArray[s2[i].charCodeAt(0)-"A".charCodeAt(0)]) {
		return true;
	  }
	}
	return false;
  }
  
  // Driver code 
  const str1 = "hello";
  const str2 = "word";
  if (twoStrings(str1, str2))
	console.log("Yes");
  else
	console.log("No");