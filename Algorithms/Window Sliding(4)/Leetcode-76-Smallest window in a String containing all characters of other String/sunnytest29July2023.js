const s = "abmndcprqabcidwqfgd";
const p = "abcd";
//4:07 4:28 4:32

const sMap = new Map();
const pMap = new Map();

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


