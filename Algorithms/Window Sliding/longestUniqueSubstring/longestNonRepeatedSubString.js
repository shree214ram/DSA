// https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/

// Program for findout the longest non repeated character sub string 
const myString = "GEEKSFORGEEKS"

let res = 0;
for (let i=0; i< myString.length; i++){
    const vector = {};

    for(let j= i ; j< myString.length; j++){
        if(vector[myString[j]] == true){
            break;
        } else {
            res+= Math.max(res, j-i+1) 
            vector[myString[j]] == true
        }
    }
    vector[myString[i]] == false

}

console.log("result", res)

