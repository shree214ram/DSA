Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Neet Code :- 
https://www.youtube.com/watch?v=Sx9NNgInc3A



Tech Dose:- 
https://www.youtube.com/watch?v=th4OnoGasMU&list=RDCMUCnxhETjJtTPs37hOZ7vQ88g&start_radio=1&rv=th4OnoGasMU&t=355


https://www.youtube.com/watch?v=_iIK7Gu7MNo


https://www.youtube.com/watch?v=XtIGGdrF67E&list=PLDdcY4olLQk3Z2Gyo3-VN8gvi7DRKK-YY&index=4
Word Break Problem | Love Babbar DSA Sheet | Microsoft 🔥 | Leetcode | GFG | DP Solution


https://www.geeksforgeeks.org/word-break-problem-dp-32/

<script>

function solve(s,wordDict){
    if(s.lenght==0 || s.lenght==null){
        return true;
    }
    if(DP[s]==true){
        return true;
    }
    for(let i=0;i<s.length;i++){
        const lString = s.slice(0,i)
        const rString = s.slice(index,s.length)
        if(wordDict.includes(lString)){
            if(solve(rString,wordDict)){
                return DP[s]=true;
            }
        } else{
            return DP[s]=false;
        }
    }
}

const s = "leetcode" 
const wordDict = ["leet","code"]
solve(s,wordDict)
</script>