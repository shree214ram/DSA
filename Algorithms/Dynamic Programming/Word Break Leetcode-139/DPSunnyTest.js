function solve(s, wordDict, DP) {
    if (s.length == 0) {
        return true;
    }
    for (let i = 1; i <= s.length; i++) {
        const lString = s.slice(0, i)
        if (DP[i] == false && wordDict.includes(lString)) {
            DP[i] = true //set i in DP 
        }
        if (DP[i] == true) {
        	if (s.length == i) {
                return true;
            }
            for (let j = i + 1; j <= s.length; j++) {
                const rString = s.slice(i, j)
                if (DP[j] == false && wordDict.includes(rString)) {
                    DP[j] = true;
                }
                if (j == s.length && DP[j] == true) {
                    return true
                }
            }
        }
    }
}

const str = "leetcode";
const wordDict = ["leet", "code"];
const DP = new Array(str.length+1).fill(false);
console.log("result=>", solve(str, wordDict, DP));
//var coins = [1, 2, 3];