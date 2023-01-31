// 792. https://leetcode.com/problems/number-of-matching-subsequences/
// Given string S and a dictionary of words words, find the number of words[i] that is a 
// subsequence of S.

// Example :
// Input: 
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// Output: 3
// Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".



const  S = "abcde" //Str2
const  words = ["a", "bb", "acd", "ace"] //str1
// Output: 3

const result =[]
for (let i = 0 ; i< words.length ; i++){
    const word = words[i];
    let k = 0; //match hone wale bando ki sankhya 

    for (let j = 0 ; j< S.length && k< word.length  ; j++){
        /*string ka ek value ko pakad kar , word me check karo yadi current element "a" 
        work me he to word ka index k increment 
        */
        if(word[k] == S[j]){
            k++; // match hone wale bando ki sankhya 
        }
    }
    /*"a" word me ek bar aya and string me bhi ek bar aya matlab : 
    word ki length and match hone wale bado ki sankhya ek ho gayi matlab 
    */
    if(word.length==k){ 
        // k ki length agar word ki length ke barabar ho to matlab ye word string S me moujud he 
        result.push(word)
    }
}

console.log(result)
console.log(result.length)