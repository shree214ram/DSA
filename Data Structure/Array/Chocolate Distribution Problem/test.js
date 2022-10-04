//4:50
const A = [7, 3, 2, 4, 9, 12, 56], m = 3
//Output: Minimum Difference is 2 
let finalMinDif = Number.MAX_VALUE;
//outer for loop
for (let i = 0; i < A.length; i++) {
    let fix = A[i]
    let min = A[i]
    let max = A[i]
    //for loop for comparation 
    for (let j = i + 1; j <= A.length - m + 1;) {
        min = Math.min(A[j], A[j + 1])
        min = Math.min(fix, min)

        max = Math.max(A[j], A[j + 1])
        max = Math.max(fix, max)
        finalMinDif = Math.min(finalMinDif, max - min)
        j = j + m-1;
    }

}
console.log(finalMinDif, "finalMinDif")