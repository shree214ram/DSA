//first non repeating 
const S = "geeksforgeeks" //Str2
const Result = new Map()
for (i = 0; i < S.length; i++) {
    const current = S[i].charCodeAt(0) - "A".charCodeAt(0);
    if (Result.get(current)) {
        Result.set(current, Result.get(current) + 1)
    } else {
        Result.set(current, 1)
    }
}

console.log(Result, "Result")
for (const it of Result.entries()) {
    if (Result.get(it[0]) == 1) {
        const str = String.fromCharCode(it[0] + "A".charCodeAt(0))
        console.log("Matched Character is=>", str )
    }
}