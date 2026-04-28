// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function(s, t) {
//     if(t.length>s.length){
//         return ""
//     }
//     //14:45 
//     const pHash=new Map();
//     let count=0
//     for(let i=0;i<t.length;i++){
//         if(pHash.get(t[i].charCodeAt(0))){
//         pHash.set(t[i].charCodeAt(0),pHash.get(t[i].charCodeAt(0))+1)
//         }else{
//         pHash.set(t[i].charCodeAt(0),1)
//         }
//         count++
//     }
//      counts=0;
//     const sHash=new Map();
//     let start =0;
//     let minLength=Number.MAX_VALUE;
//      for(let i=0;i<s.length;i++){
//         if(sHash.get(s[i].charCodeAt(0))){
//             sHash.set(s[i].charCodeAt(0),sHash.get(s[i].charCodeAt(0))+1)
//         }else{
//             sHash.set(s[i].charCodeAt(0),1)
//         }

//         if(sHash.get(s[i].charCodeAt(0))<=pHash.get(s[i].charCodeAt(0))){
//             counts++
//         }

//         if(counts==t.length){
//             while(sHash.get(s[start].charCodeAt(0))>pHash.get(s[start].charCodeAt(0))){
//                 sHash.set(s[start].charCodeAt(0),sHash.get(s[start].charCodeAt(0))-1)
//                 start++
//                 if(start>t.length){
//                     break;
//                 }
//             }
//             minLength=Math.min(minLength,i-start+1)
//         }
//     }
//     return s.substring(start,start+minLength)
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length>s.length ){
        return ""
    }
    if(t.length==1 && s.length==1){
        if(t[0]!=s[0]){
            return ""
        }
    }
const sMap = new Map();
const pMap = new Map();
const p=t;
for (let i = 0; i < p.length; i++) {
    if (pMap.get(p[i].charCodeAt(0))) {
        pMap.set(p[i].charCodeAt(0), pMap.get(p[i].charCodeAt(0)) + 1)
    } else {
        pMap.set(p[i].charCodeAt(0), 1)
    }
}

let start = 0;
let count = 0;
let minLength = Number.MAX_VALUE;

for (let i = 0; i < s.length; i++) {
    //@mistake 1 , i was just checking , pMap.get(s[i].charCodeAt(0))
    if (sMap.get(s[i].charCodeAt(0)) <= pMap.get(s[i].charCodeAt(0))) {
        count++
    }
    if (sMap.get(s[i].charCodeAt(0))) {
        sMap.set(s[i].charCodeAt(0), sMap.get(s[i].charCodeAt(0)) + 1)
    } else {
        sMap.set(s[i].charCodeAt(0), 1)
    }
    if (count == p.length) {
        while (!pMap.get(s[start].charCodeAt(0)) ||
            pMap.get(s[start].charCodeAt(0)) < sMap.get(s[start].charCodeAt(0))) {
            //@mistake 2 forget to reduce 
            if (pMap.get(s[start].charCodeAt(0)) < sMap.get(s[start].charCodeAt(0))) {
                sMap.set(s[start].charCodeAt(0), sMap.get(s[start].charCodeAt(0)) - 1)
            }
            start++
        }
        minLength = Math.min(minLength, i - start + 1)
    }
}
console.log(minLength);
console.log(s.substr(start, minLength));
    return s.substr(start, minLength)
}