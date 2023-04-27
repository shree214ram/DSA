//10:59 11:15
const A = [2,8,1,9,3,7];
for (let i = 1; i < A.length; i++) {
    let temp = i
    let j = i - 1
    while (j >= 0 && A[j] >= A[temp]) {
        A[j + 1] = A[j];
        temp = j;
        j--;
    }
}