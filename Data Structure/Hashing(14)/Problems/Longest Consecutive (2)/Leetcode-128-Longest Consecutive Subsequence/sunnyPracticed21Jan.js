
//3:50
const A = [7, 1, 9, 3, 6, 2, 11, 3, 8, 4, 10]
// 1. add all in hash table 
const hash = new Map()
for (let i = 0; i < A.length; i++) {
    hash.set(A[i], 1)
}

//2. 
let maximumLength = Number.MIN_VALUE
//3. 
for (let i = 0; i < A.length; i++) {
    // 1. 
    let current = A[i], currentLength = 1
    //2. if current-1 not present in hash table means we can start from here 
    //if()
    //3. 
    while (hash.get(current + 1)) {
        currentLength++
        current = current + 1
    }
    //4. 
    maximumLength = Math.max(maximumLength, currentLength)
}
console.log(maximumLength, "maximumLength")

