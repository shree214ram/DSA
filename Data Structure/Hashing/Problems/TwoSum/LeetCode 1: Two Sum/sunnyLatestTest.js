//2:27 2:37
//
const Target = 12
const A = [1, 2, 6, 4, 3, 8, 9]
// find 2 elements whose sum is equal to 12 
const hash = new Set()
for (let i = 0; i < A.length; i++) {
    const first = A[i]
    console.log(hash, "hash before")
    if (hash.has(Target - first)) {
        console.log("Three elements are =", first, ",", Target - first)
    }
    hash.add(first)
    console.log(hash, "hash after")
}



