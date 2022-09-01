// Javascript program for above approach

//const str =  "aacaba"
const str = "abcd"

let count = 0
for (let i = 0; i < str.length; i++) {
    const left = str.substring(0, i + 1)
    const right = str.substring(i + 1)
    const leftHashMap = new Map()
    const rightHashMap = new Map()
    for (let l = 0; l < left.length; l++) {
        if (leftHashMap.get(left[l])) {
            leftHashMap.set(left[l], leftHashMap.get(left[l]) + 1)
        } else {
            leftHashMap.set(left[l], 1)
        }
    }

    for (let r = 0; r < right.length; r++) {
        if (rightHashMap.get(right[r])) {
            rightHashMap.set(right[r], rightHashMap.get(right[r]) + 1)
        } else {
            rightHashMap.set(right[r], 1)
        }
    }
    if (leftHashMap.size == rightHashMap.size) {
        count++
    }

}
console.log("count", count)

