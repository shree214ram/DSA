
// JavaScript program to search all anagrams
// of a pattern in a text
const MAX = 26;

// This function returns true if
// contents of arr1[] and arr2[]
// are same, otherwise false.
function compare(arr1, arr2) {
    for (var i = 0; i < MAX; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// This function search for all
// permutations of pat[] in txt[]
function search(pat, txt) {
    var M = pat.length;
    var N = txt.length;

    // countP[]: Store count of all
    // characters of pattern
    // countTW[]: Store count of current
    // window of text
    var countP = new Array(MAX).fill(0);
    var countTW = new Array(MAX).fill(0);
    console.log(countP, "countP")
    console.log(countTW, "countTW")
    for (var i = 0; i < M; i++) {
        console.log(i, "i in initial")
        countP[(pat.charCodeAt(i) - "A".charCodeAt(0))]++;
        countTW[(txt.charCodeAt(i) - "A".charCodeAt(0))]++;
    }
    //str.charCodeAt(i) - 'A'.charCodeAt(0)
    console.log(countP, "countPAfter")
    console.log(countTW, "countTWAfter")
    // Traverse through remaining
    // characters of pattern
    for (var i = M; i < N; i++) {
        // Compare counts of current window
        // of text with counts of pattern[]
        if (compare(countP, countTW)) {
            document.write("Found at Index " + (i - M) + "<br>");
        }

        // Add current character to
        // current window
        countTW[(txt.charCodeAt(i) - "A".charCodeAt(0))]++;

        // Remove the first character of
        // previous window
        countTW[(txt.charCodeAt(i - M) - "A".charCodeAt(0))]--;
    }

    // Check for the last window in text
    if (compare(countP, countTW)) {
        document.write("Found at Index " + (N - M) + "<br>");
    }
}

// Driver Code
var txt = "BACDGABCDA";
var pat = "ABCD";
search(pat, txt);

