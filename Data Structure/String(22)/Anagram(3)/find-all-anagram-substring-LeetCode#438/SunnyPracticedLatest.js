function compare(A, B) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] != B[i]) {
            return false
        }
    }
    return true
}
let txt = "BACDGABCDA";
let pat = "ABCD";

let res = 0
let cp1 = new Array(26).fill(0)
let cp2 = new Array(26).fill(0)

for (let i = 0; i < pat.length; i++) {
    cp1[pat[i].charCodeAt(0) - "A".charCodeAt(0)] = 1
    cp2[txt[i].charCodeAt(0) - "A".charCodeAt(0)] = 1
}


//window sliding first default

for (let i = pat.length; i <= txt.length; i++) {
    if (compare(cp1, cp2)) {
        res++
        console.log("Found at index ,", i - pat.length)
    }
    cp2[txt[i - pat.length].charCodeAt(0) - "A".charCodeAt(0)] = 0
    cp2[txt[i]?.charCodeAt(0) - "A".charCodeAt(0)] = 1
}

console.log(res, "count of total anagram");