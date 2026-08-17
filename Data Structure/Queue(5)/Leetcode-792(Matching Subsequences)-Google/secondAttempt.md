/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq  = function (s, words) {
    /*
        Queue Bucket plus hash map 
        Drain the bucket and immidietelly fill again respective bucket after moving idex 

        main thing is that indices 
    */
    const map = Array.from({ length: 26 }, () => [])
    //0: 97(a) , 1: 98(b)

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i]

        const firstChar = currentWord[0]
        const index = firstChar.charCodeAt(0) - 97
        map[index].push([currentWord,0])
    } debugger;
   
    let count=0
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i]
        const index = currentChar.charCodeAt(0) - 97
        const back = map[index] //[[a,0],[acd,0],[ace,0]]
        
        map[index] = [] //Drain 
        //working at each words to check which one sting remans empty so counter would increase other wise inser reining string 
        for (let j = 0; j < back.length; j++) {
            const currentBucket = back[j] //[a,0]
            const currentWord=currentBucket[0]
            const lastIndex = currentBucket[1] //mis1

            debugger;
            if(lastIndex+1==currentWord.length){
                debugger;
                count++
            }else{
                const firstCharOfWord = currentBucket[0][1] 
            

                //a has been skipped and cd or ce would remains then it will be inserted into their respective buckets 
                const indexNew = firstCharOfWord.charCodeAt(0) - 97
            
                map[indexNew].push([currentBucket[0].substring(lastIndex+1),lastIndex+1])//mis2
               
debugger;
            }
        }
    }
    return count;
};  numMatchingSubseq("dsahjpjauf",["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]);





/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq  = function (s, words) {
    /*
        Queue Bucket plus hash map 
        Drain the bucket and immidietelly fill again respective bucket after moving idex 

        main thing is that indices 
    */
    const map = Array.from({ length: 26 }, () => [])
    //0: 97(a) , 1: 98(b)

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i]

        const firstChar = currentWord[0]
        const index = firstChar.charCodeAt(0) - 97
        map[index].push([currentWord,0])
    } 
   
    let count=0
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i]
        const index = currentChar.charCodeAt(0) - 97
        const back = map[index] //[[a,0],[acd,0],[ace,0]]
        
        map[index] = [] //Drain 
        //working at each words to check which one sting remans empty so counter would increase other wise inser reining string 
        for (let j = 0; j < back.length; j++) { //if we write const[word,index] of back so next 3 line code no need to write 
            const currentBucket = back[j] //[a,0]
            const currentWord=currentBucket[0]
            const nextIndex = currentBucket[1]+1 //mis1

            if(nextIndex==currentWord.length){
                count++
            }else{
                //a has been skipped and cd or ce would remains then it will be inserted into their respective buckets 
                const indexNew = currentWord.charCodeAt(nextIndex) - 97
                map[indexNew].push([currentWord,nextIndex])//mis2 mis3 i was spliting the string and removing the first caharacter and then sending to rmaining to next ittration so wordlength check was failing 
               //one thing i got to know we dont need to substr find and it will save the time compaxity and only NextIndex is the Main Game here 
            }
        }
    }
    return count;
};