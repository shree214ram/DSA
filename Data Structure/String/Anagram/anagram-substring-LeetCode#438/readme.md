https://www.geeksforgeeks.org/anagram-substring-search-search-permutations/

https://www.youtube.com/watch?v=fYgU6Bi2fRg

Find All Anagrams in a String | Sliding window | Leetcode #438

Broute Force :-
1. 2 For Loop
2. add new word in final starting , sort and then compare 
```
<script>

// JavaScript code for the approach

function search(pat, txt)
{
	/*finding lengths of strings pat and txt*/
	let n = txt.length, m = pat.length;
	/*string sortedpat stores the sorted version of pat*/
	let sortedpat = pat;
	sortedpat = sortedpat.split("").sort().join("");
	/*temp for storing the substring of length equal to
	* pat*/
	let temp;
	for (let i = 0; i <= n - m; i++) {
		temp = "";
		for (let k = i; k <br m + i; k++)
			temp += txt[k];
		temp = temp.split("").sort().join("");
		/*checking whether sorted versions are equal or
		* not*/
		if (sortedpat == temp)
			document.write("Found at Index ",i,"</br>");
	}
}

// driver code

let txt = "BACDGABCDA";
let pat = "ABCD";
search(pat, txt);


// This code is contributed by shinjanpatra

</script>

```

Optimised :- 
Sliding Window and charCodeAt(0)