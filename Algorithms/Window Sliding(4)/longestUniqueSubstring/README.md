// https://www.geeksforgeeks.org/window-sliding-technique/
//https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/

// Program for findout the longest non repeated character sub string 

https://www.youtube.com/watch?v=wiGpQwVHdE0 
Neetcode 


https://www.youtube.com/watch?v=L6cffskouPQ


Set map with current window 


k = size of sub sequent 
n = size of array

Basically there are 3 methods 
1. Itrate 3 times loop:-
    It takes o(n ^3) time compaxity
    ##### 2 for loop and one hash map for check duplicate
2. Window Sliding Method :- 
    It takes o(n2) time compaxity 
    1. varibale type of window 
    2. if duplicate found 
    ##### 2 for loop and inside second loop one hash map for check duplicate, if found repeated Break inner loop 
<script>
    //O(N2) O(N) , Sliding Window and hash map
    const myString = "GEEKSFORGEEKS"

    let res = 0;
    for (let i = 0; i < myString.length; i++) {
        const vector = {};

        for (let j = i; j < myString.length; j++) {
            if (vector[myString[j]] == true) {
                break;
            } else {
                res += Math.max(res, j - i + 1)
                vector[myString[j]] == true
            }
        }
        vector[myString[i]] == false

    }

    console.log("result", res)
    </script>
3. Window Sliding and Two Pointer Method o(n):- 
    It takes o(n) time compaxity 
    1. varibale type of window 
    2. if duplicate found
    3. remove from left untill repaeted indwx not found 
    4. A B C D D E F
    5. we will remove Till First D  and update max nonRepeating is 4 {A B C D}
    ##### 1 for loop and 1 test string {if test string contains current element so remove all the elements from start to till current charactrer like ABCD and new element id D so we will remove ABCD and new test string will start by D But max = Math.max(Test.length,max) already 4 updated he ABCD ke time so it will remain same and result will be 1 . 
 
<script>
 
    //O(N) O(1) only one loop and without hash map , Sliding Window with predefined function {taking unnecesory some extra time compaxity }
    let maximumLength = -1
    const str = "geeksfrgeeks"
    let test = ""
    for (let i = 0; i < str.length; i++) {
        if (test.includes(str[i])) {
            console.log(str[i], "str[i] matched")
            test = test.substring(test.indexOf(str[i]) + 1)
            test+=str[i]
            console.log(test, "test afrer sliding window ")
        } else {
            test += str[i];
            console.log(str[i], "str[i] not matched")
            maximumLength = Math.max(maximumLength, test.length)
        }
    }
    console.log(maximumLength, "maximumLength");
    console.log(test, "test");

    ==
    //O(N) O(1) only one loop and with hash map , Sliding Window with Two Pointer {taking unnecesory time }
    const A = "GEEKSFORGEEKS"
    //2:25 //2:34 36
    let maxLength = Number.MIN_VALUE;
    let start = 0 
    const hash = new Map()
    for(let i=0;i<A.length;i++){
        if(!hash.get(A[i])){
            hash.set(A[i],1)
        }else {
            maxLength = Math.max(maxLength,i-start)
            while(start<i){
                //twist
                if(hash.get(A[start]) != hash.get(A[i])){
                    hash.set(A[start],hash.get(A[start])-1)
                }else {
                    start++
                    break;
                }
                start++
            }
        }
    }

    console.log("maxLength", maxLength);
    </script>
