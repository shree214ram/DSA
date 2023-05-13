//1:44

const A = ["eat", "ate", "tea", "man"];
const Already = []
const finalResult = []
for (let i = 0; i < A.length; i++) {
    if (!Already.includes(i)) {
        let current = [A[i]]
        const pHash = new Map();
        A[i].split("").forEach(obj => {
            if (pHash.get(obj)) {
                pHash.set(obj, pHash.get(obj) + 1)
            } else {
                pHash.set(obj, 1)
            }
        })

        for (let j = i + 1; j < A.length; j++) {
            if (!Already.includes(j)) {
                const sHash = new Map()
                A[j].split("").forEach(obj => {
                    if (sHash.get(obj)) {
                        sHash.set(obj, sHash.get(obj) + 1)
                    } else {
                        sHash.set(obj, 1)
                    }
                })
                if (compare(pHash, sHash)) {
                    current.push(A[j]);
                    Already.push(j)
                }
            }
        }//2
        finalResult.push(current)
    }
}//1
function compare(pHash, sHash) {
    for (let key of pHash.keys()) {
        if (!sHash.get(key) || sHash.get(key) == 0) {
            return false
        }
    }
    return true
}
console.log(finalResult)