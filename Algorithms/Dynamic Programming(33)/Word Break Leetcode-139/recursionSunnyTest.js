function solve(s, wordDict) {

    if (s.length == 0) {
        return true;
    }

    for (let i = 1; i <= s.length; i++) {
        const lString = s.substring(0, i)
        const rString = s.substring(i, s.length)
        //left wala bhi match ho jaye and right wala bhi Include ho jaye to return true 
        if (wordDict.includes(lString) && solve(rString, wordDict)) {
            return true;
        }
    }
    return false
}

const s = "leetcode"
const wordDict = ["leet", "code"]

console.log("result=>", solve(s, wordDict))