
function merge(A, lb, mid, up) {
    let i = k = lb
    let j = mid + 1
    const newMergedArray = []
    while (i <= mid && j <= up) {//1
        if (A[i] <= A[j]) {
            newMergedArray[k] = A[i] // 2
            i++
        } else {
            newMergedArray[k] = A[j]
            j++
        }
        k++
    }
    if ((i > mid)) {
        while (j <= up) {
            newMergedArray[k] = A[j]
            k++
            j++
        }
    }
    else {
        while (i <= mid) {
            newMergedArray[k] = A[i]
            k++
            i++
        }
    }

    for (let m = 0; m < newMergedArray.lenth; m++) {
        A[m] = newMergedArray[m]
    }
    document.write("A=>", A);
}
function mergeSort(Arr, lb, up) {
    console.log("shree", Arr, lb, up)
    if (lb < up) {
        console.log("hay")
        const mid = (lb + up) / 2
        mergeSort(Arr, lb, mid)
        mergeSort(Arr, mid + 1, up)
        merge(Arr, lb, mid, up)
    }

}

const arr = [33, 78, 9, 2, 78, 11, 1]


console.log(arr.length)
mergeSort(arr, 0, (arr.length - 1))
document.write("Result=>", arr);
