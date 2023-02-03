//9:59
//find the shortest substring who is having all character of pattern 
var str = "mghabca";
var pat = "abca";

const pHash = new Map();
const sHash = new Map()


for (let i = 0; i < pat.length; i++) {
    if (pHash.get(pat[i].charCodeAt(0))) {
        pHash.set(pat[i].charCodeAt(0), pHash.get(pat[i].charCodeAt(0)) + 1)
    } else {
        pHash.set(pat[i].charCodeAt(0), 1)
    }
}
console.log(pHash, "pHash")
let count = 0;
let start = 0;
let startIndex = -1;
let minLength = Number.MAX_VALUE;

for (let i = 0; i < str.length; i++) {
    if (sHash.get(str[i].charCodeAt(0))) {
        sHash.set(str[i].charCodeAt(0), sHash.get(str[i].charCodeAt(0)) + 1)
    } else {
        sHash.set(str[i].charCodeAt(0), 1)
    }
    console.log(sHash, "sHash")
    if (sHash.get(str[i].charCodeAt(0)) <= pHash.get(str[i].charCodeAt(0))) {
        //@mistake 1 dono taraf str[i] hona chahiye
        count++
    }

    if (count == pat.length) {
        while (sHash.get(str[start].charCodeAt(0)) > pHash.get(str[start].charCodeAt(0))
            //@mistake 2 dono taraf str[start] hona chahiye pHash me bhi 
            ||
            !pHash.get(str[start].charCodeAt(0))
            //@mistake 3  str[start] hona chahiye ,pHash me bhi 
        ) {
            console.log("---")
            sHash.set(str[start].charCodeAt(0), sHash.get(str[start].charCodeAt(0)) - 1);
            start++
        }

        console.log(start, "start");
        const currentLength = i - start + 1;
        console.log(currentLength, "currentLength");
        console.log(minLength, "minLength");
        if (minLength > currentLength) {
            console.log("inner condition ====");
            minLength = currentLength;
            startIndex = start
        }
    } //mistake 4 minlength should be change only at count == pat.length
}

if (startIndex == -1) {
    console.log("Not possible")
} else {
    console.log("Possible minimum length is = " + minLength)
    console.log("string is = " + str.substring(startIndex, startIndex + minLength))//mistake 5 startIndex+minLength hona chahiye mene keval minLength de diya tha
    //another way to use 
    console.log("string is = " + str.substr(startIndex, minLength))//mistake 5 startIndex+minLength hona chahiye mene keval minLength de diya tha
}

