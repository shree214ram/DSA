//3:35
//7min
const A = [1, 2, 3, 4, 5, 6, 4, 45, 8, 9, 10, 11, 100, 101, 102, 103, 104]
const hash = new Set()
for (let i = 0; i < A.length; i++) {
    if (!hash.has(A[i])) {
        hash.add(A[i])
    }
}
let maxLength = 0
for (let i = 0; i < A.length; i++) {
    if (!hash.has(A[i] - 1)) {
        let max = 1
        let k = i
        while (A[k + 1] == A[k] + 1) {
            max++
            k++
        }
        maxLength = Math.max(maxLength, max)
    }
}
console.log("maxLength= ", maxLength)
