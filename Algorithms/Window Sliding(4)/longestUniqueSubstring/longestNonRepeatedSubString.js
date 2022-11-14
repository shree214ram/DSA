// https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/

// Program for findout the longest non repeated character sub string 

//O(N2) O(N) , Sliding Window 
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

//O(N) O(1) only one loop and without hash map , Sliding Window 
let maximumLength = -1
const str = "geeksfrgeeks"
let test = ""
for(let i=0;i<str.length;i++){
    if(test.includes(str[i])){
    console.log(str[i],"str[i] matched")
    	test = test.substring(test.indexOf(str[i])+1)
    console.log(test,"test afrer sliding window ")
    }else {
    	test+=str[i];
    console.log(str[i],"str[i] not matched")
        maximumLength = Math.max(maximumLength,test.length)
    }
}
console.log(maximumLength,"maximumLength");
console.log(test,"test");

