/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) return 0
    if(beginWord==endWord) return 0
    if(wordList.length==2 && beginWord==wordList[0] && endWord==wordList[1]) return 0
    if(wordList.length==1 && endWord==wordList[0] ) return 2//beacse b -> a 
    const alf=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const h=new Set(wordList)
    const q=[beginWord]
    let count=1;
    while(q.length>0){
        const size=q.length;
        for(let k=0;k<size;k++){
        const temp=q[0]
        q.shift()
        const A=temp.split("")

        for(let i=0;i<A.length;i++){
            for(let j=0;j<alf.length;j++){
                const backup=A[i]
                
                A[i]=alf[j]
                const newStr=A.join("")
                // console.log(newStr,"old")
                // console.log(newStr,"newstr")
                if(h.has(newStr)){
                    // console.log("includes")
                    if(newStr==endWord) {
                        return count +1
                    }
                    q.push(newStr)
                    h.delete(newStr)
                }
                A[i]=backup
            }
        }
        }
        count++
    }
    return 0
};

**Interviewer:** "JavaScript strings are immutable, so trying to mutate characters directly via `newStr[i] = alf[j]` does absolutely nothing; you must modify your split array `A` or use `.slice()` to construct the actual new string, and remember to convert your `wordList` into a `Set` so your `.includes()` checks don't cause a Time Limit Exceeded!"

**Interviewer:** "Your `count++` is placed *inside* the `for(let k=0; k<size; k++)` loop instead of right after it finishes, which prematurely jacks up the count within the same wave—plus, you need to return `count + 1` when you find `endWord` because the target word itself represents the final step of the ladder!"

**Interviewer:** "You are hitting a Time Limit Exceeded (TLE) because you are continuously visiting the exact same words in cycles (e.g., swapping back and forth between 'talk' and other valid matches). To fix this instantly, convert `wordList` into a `Set` at the very beginning, and use `set.delete(newStr)` the moment you find a match so that word can never be re-processed again!"