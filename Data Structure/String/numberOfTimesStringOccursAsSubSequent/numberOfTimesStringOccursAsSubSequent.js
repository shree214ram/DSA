// https://www.geeksforgeeks.org/find-number-times-string-occurs-given-string/


// Example :
// Input:  
// string a = "GeeksforGeeks"
// string b = "Gks"

// Output: 4

// Explanation:  
// The four strings are - (Check characters marked in bold)
// GeeksforGeeks
// GeeksforGeeks
// GeeksforGeeks
// GeeksforGeeks


const  S = "abcde" //Str2
const  words = ["a", "bb", "acd", "ace"] //str1
// Output: 3

const result =[]
for (let i = 0 ; i< words.length ; i++){
    const word = words[i];
    let k = 0;

    for (let j = 0 ; j< S.length && k< word.length  ; j++){
        if(word[k] == S[j]){
            k++;
        }
    }
    if(word.length==k){
        result.push(word)
    }
}

console.log(result)
console.log(result.length)