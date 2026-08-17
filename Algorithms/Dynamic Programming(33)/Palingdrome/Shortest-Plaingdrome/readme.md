/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    /*
if(s.length==0) return ""
    if(s.length==1) return s[0]
    */
    if(s.length<=0) return s
    let max=0
    const rec=(l,r)=>{
        while(l>=0 && r<s.length && s[l]==s[r]){
            l--
            r++
        }
        if(l==-1){
            max=Math.max(max,r)
        }
    }
    for(let i=0;i<=Math.floor(s.length/2);i++){
        rec(i,i)
        rec(i,i+1)
    }
    const suffix=s.slice(max)
    return suffix.split("").reverse().join("")+s
};