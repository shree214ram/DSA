//4:50
const A = [7, 3, 2, 4, 9, 12, 56], m = 3
// We need to findout the m elements in which Maximum and minimum elements Different should be final minimum 
//Output: Minimum Difference is 2 
let finalMinDif = Number.MAX_VALUE;
//outer for loop
for (let i = 0; i < A.length; i++) {
    let fix = A[i]
    let min = A[i]
    let max = A[i]
    //for loop for comparation 
    console.log(fix, "fix")
    //************why we are going to A.length-m+1 because ulte se m kam chalna padega  */
    for (let j = i + 1; j < A.length - m + 1;) {
        console.log(j, "j")
        console.log(A[j], "A[j]")
        let k = j
        while (k < j + m - 1) {
            min = Math.min(A[k], fix)
            min = Math.min(fix, min)

            max = Math.max(A[k], fix)
            max = Math.max(fix, max)
            k++
            //break;
        }
        console.log(min, "min")
        console.log(max, "max")

        finalMinDif = Math.min(finalMinDif, max - min)
        console.log(finalMinDif, "finalMinDif")
        j = j + m - 1;
    }

}
console.log(finalMinDif, "finalMinDif")