https://www.geeksforgeeks.org/anagram-substring-search-search-permutations/


https://www.youtube.com/watch?v=fYgU6Bi2fRg

# Find All Anagrams in a String | Sliding window | Leetcode #438

### Broute Force :-
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
		for (let k = i; k < m + i; k++)
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
Time Complexity : O(mlogm) + O( (n-m+1)(m + mlogm + m) ) 

mlogm for sorting pat. So O(mlogm)

The for loop runs for n-m+1 times in each iteration we build string temp, which takes O(m) time, and sorting temp, which takes O(mlogm) time, and comparing sorted pat and sorted substring, which takes O(m). So time complexity is O( (n-m+1)*(m+mlogm+m) ) 

Total Time complexity :  O(mlogm) + O( (n-m+1)(m + mlogm + m) ) 

Space Complexity : O(m) As we are using Extra space for strings temp and sortedpat



### Approach 2 (Optimised):

#### We can not use directly "Rabin Karp Algorithm" because, we have to "modification" in it . 

1. please Read Rabin Carp First then comes again here to solve this 

2. We can use Normal Hash function because we are checking for "Anagram" Not Excectly matched "Pattern"

3. In Exectely matched pattern required a special Hash Function 

4. But Program wil be same to same


##### Sliding Window and 2 Array {Vector Array} counter 

1. two hash table CountP and CountS with length of 26 character 
2. take window with pattern length 
   1. for loop with first window with M length (o to M-1)
   2. fill CountS Array from current slide window character code 0 to M 
   3. fill CountP with pattern character code length M
3. for loop start from M , why because in upper loop we have already checked for 0 to M  
	1. Compare CountS and CountP if true then Add (i-M) index to result array
	2. move one by one sliding window in given string 
	3. Add current i'th index value to next window and Remove (i-M) from previous window (Window Sliding Concept)
	3. fill CountS Array from current slide window character code 
	4. Compare CountS and CountP Array 

SunnyPracticedLatest.js see this file for correct code 


https://gist.github.com/SuryaPratapK/93905c88c3e23477e4c3451d0db90a82