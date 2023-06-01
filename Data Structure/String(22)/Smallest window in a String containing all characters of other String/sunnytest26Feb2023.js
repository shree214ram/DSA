
//1;21 //1;39 //1:48
const pat = "abca"
const str = "mnoaacb99abca"
const map = new Map()
const mapS = new Map();
let start = 0;

for (let i = 0; i < pat.length; i++) {
    if (map.get(pat[i].charCodeAt(0))) {
        map.set(pat[i].charCodeAt(0), map.get(pat[i].charCodeAt(0)) + 1)
    } else {
        map.set(pat[i].charCodeAt(0), 1)
    }
}
let count = 0;
let minlength = Number.MAX_VALUE;
for (let i = 0; i < str.length; i++) {
    if (mapS.get(str[i].charCodeAt(0))) {
        mapS.set(str[i].charCodeAt(0), mapS.get(str[i].charCodeAt(0)) + 1)
    } else {
        mapS.set(str[i].charCodeAt(0), 1)
    }

    if (map.get(str[i].charCodeAt(0))) {
        count++
    }
    if (count == pat.length) {
        while (mapS.get(str[start].charCodeAt(0)) > map.get(str[start].charCodeAt(0))
            ||
            !map.get(str[start].charCodeAt(0)
            )) {
            start++;
            if (start >= str.length) break

        }
        minlength = Math.min(minlength, i - start + 1)
    }
}


console.log(str.substr(start, minlength));

