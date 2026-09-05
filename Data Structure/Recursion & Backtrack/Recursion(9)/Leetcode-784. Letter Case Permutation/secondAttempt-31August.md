last time when i was working /**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    // "1??0?101"

    const small = { "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J", "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T", "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z" }

    const caps = {}
    for ([key, value] of Object.entries(small)) {
        caps[value] = key
    }

    // console.log(s.length)
    if (s.length == 1) {
        if (isNaN(Number(s[0]))) {
            // console.log("hay");
            let r = [];
            if (small[s[0]]) {
                r = [small[s[0]], caps[small[s[0]]]]

            } else {
                r = [caps[s[0]], small[caps[s[0]]]]
            }
            return r
        } else {
            return [s[0]]
        }
    }

    const indexes = []
    const A = s.split("").map((obj, index) => {
        if (isNaN(Number(obj))) {
            indexes.push(index)
        }
    })
    // console.log(indexes, "indexes")
    const res = []
    const rec = (index, str) => {
        if (index > s.length) return
        if (index == s.length) {
            res.push(str)
            return
        }
        // [0,2] indexes 
        if (indexes.includes(index)) {
            const sm = small[s[index]]
            if (sm) {
                rec(index + 1, str + sm)
                rec(index + 1, str + caps[sm])
            } else {
                const ca = caps[s[index]]
                rec(index + 1, str + ca)
                rec(index + 1, str + small[ca])
            }

        } else {
            rec(index + 1, str + s[index])
        }
    }
    rec(0, "")
    return res;
}; Then Today I tried : /**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    // const alfS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))
    // const alfC = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
    // console.log(alfS)
    // console.log(alfC)
    // 32
    const res = [s]
    const rec = (index) => {
        // base 
        if (index >= s.length) {
            return
        }
        const currentChar = s[index]
        if (typeof currentChar !== 'number') {
            //calculation 
            //1.  replace 
            const current = currentChar.charCodeAt(0)
            if (current >= 97) { //small
                const upper = current - 32;
                const next = String.fromCharCode(upper)
                s.replace(currentChar, next)
                res.push(s)
                s.replace(next, currentChar)//Backtrack
            } else {
                const lower = current + 32;
                const next = String.fromCharCode(lower)
                s.replace(currentChar, next)
                res.push(s)
                s.replace(next, currentChar)//Backtrack
            }
        }
        //recursion
        rec(index + 1)
    }
    rec(0)
    return res
}; first hr then i changed new ===/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const res = [s]
    const rec = (index) => {
        // base 
        if (index >= s.length) {
            return
        }
        const currentChar = s[index]
        if (typeof currentChar !== 'number') {
            //calculation 
            //1.  replace 
            const current = currentChar.charCodeAt(0)
            if (current >= 97) { //small
                const upper = current - 32;
                const next = String.fromCharCode(upper)
                const newE=s.slice(0,index)+next+s.slice(index+1,s.length)
                res.push(newE)
            } else {
                const lower = current + 32;
                const next = String.fromCharCode(lower)
                const newE=s.slice(0,index)+next+s.slice(index+1,s.length)
                res.push(newE)
            }
        }
        //recursion
        rec(index + 1)
    }
    rec(0)
    return res
}; my todays both the solution not working . When I was comparing with my 29June first Solution on top So thats too long in my second i tried to use Backtrack but in last i though I should not use backtrack and no need to change the Orignal String But It failed . Please Help me one thing From First Solution to second or third My approach which one is correct ? one line . Do not give me solution or code First I want to evaluate Which Apprach is correct ? one line 