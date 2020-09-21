// https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/

// Java Solution 
class LongestPalinSubstring {
    // A utility function to pr
    // a substring str[low..high] 
    printSubStr(str, low, high) {
        console.log(
            str.substring(
                low, high + 1));
    }

    // This function prints the longest 
    // palindrome substring of str[]. 
    // It also returns the length of the 
    // longest palindrome 
    longestPalSubstr(str) {
        // get length of input string 
        let n = str.length;

        // table[i][j] will be false if 
        // substring str[i..j] is not palindrome. 
        // Else table[i][j] will be true 
        const table = [];

        // All substrings of length 1 are palindromes 
        let maxLength = 1;
        for (let i = 0; i < n; ++i) {
            table[i] = [];
            table[i][i] = true;
        }

        // check for sub-string of length 2. 
        let start = 0;
        for (let i = 0; i < n - 1; ++i) {
            if (str.charAt(i) == str.charAt(i + 1)) {
                table[i][i + 1] = true;
                start = i;
                maxLength = 2;
            }
        }

        // Check for lengths greater than 2. 
        // k is length of substring 
        for (let k = 3; k <= n; ++k) {

            // Fix the starting index 
            for (let i = 0; i < n - k + 1; ++i) {
                // Get the ending index of substring from 
                // starting index i and length k 
                let j = i + k - 1; //{first time i=0 and j=2, then i=1 and j=3}

                // checking for sub-string from ith index to 
                // jth index iff str.charAt(i+1) to 
                // str.charAt(j-1) is a palindrome 
                if (table[i + 1][j - 1] && str.charAt(i) == str.charAt(j)) {
                    table[i][j] = true;

                    if (k > maxLength) {
                        start = i;
                        maxLength = k;
                    }
                }
            }
        }
        console.log("Longest palindrome substring is; ");
        this.printSubStr(str, start,
            start + maxLength - 1);

        // return length of LPS 
        return maxLength;
    }
}
// Driver program to test above functions 
const obj = new LongestPalinSubstring()
const str = "forgeeksskeegfor";
console.log("Length is: " + obj.longestPalSubstr(str));

// This code is contributed by Sumit Ghosh 


