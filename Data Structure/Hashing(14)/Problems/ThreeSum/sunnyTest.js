//2:27 2:37
//2 loop with Hash
//O(N*N),O(N)
const Target = 12
const A = [1, 2, 6, 4, 3, 8, 9]
// find 3 elements whose sum is equal to 12 
const hash = new Set()
for (let i = 0; i < A.length; i++) {
    const first = A[i]
    for (let j = i + 1; j < A.length; j++) {
        const second = A[j]
        if (hash.has(Target - (first + second))) {
            console.log("Three elements are =", first, ",", second, ",", Target - (first + second), ",")
            break;
        }
        hash.add(second)
    }
}

//2:27 2:37
//1 loop , sorting and 2 pointer 
//O(NlogN)
const Target = 12
const A = [1, 2, 6, 4, 3, 8, 9]
//sort in ASC becuase Two pointer methods will work at sorted array only 
A.sort((a, b) => a - b)
// find 3 elements whose sum is equal to 12 

for (let i = 0; i < A.length; i++) {
    let left = i + 1

    let right = A.length - 1
    while (left < right)
        if (A[i] + A[left] + A[right] == Target) {
            console.log("Three elements are =", A[i], ",", A[left], ",", A[right])
            break;
        } else if (A[i] + A[left] + A[right] > Target) {
            right--
        } else if (A[i] + A[left] + A[right] < Target) {
            left++
        }
}


