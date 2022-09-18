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
console.log("result=>",solve(s,wordDict))