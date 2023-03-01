//11:52 //12:07 //12:19

const A = [33, 78, 9, 2, 78, 11, 1]
mergeSort(A, 0, A.length - 1)
function mergeSort(A, left, right) {
    if (left < right) {
        const mid = (left + right) / 2
        mergeSort(A, left, mid);
        mergeSort(A, mid + 1, right);
        merge(A, left, mid, right)
    }
}

function merge(A, left, mid, right) {
    const L = [];
    const R = [];

    var i = left;
    var j = mid + 1;
    let k = left;
    const m = []
    while (i <= mid) {
        L.push(A[i]);
        i++
    }
    while (j <= right) {
        R.push(A[j]);
        j++
    }
    var i, j = 0//mistake 1
    while (i <= mid && j <= right) {//mistake 2
        if (L[i] < R[j]) {//mistake 3
            m[k] = L[i]
            i++
        } else {
            m[k] = R[j]
            j++
        }
        k++
    }

    while (i <= mid) {
        m[k] = L[i]
        i++
        k++
    }

    while (j <= right) {
        m[k] = R[j]
        j++
        k++
    }

    for (let i = 0; i < m.length; i++) {
        A[i] = m[i]
    }
    console.log(A, "sorted array")
}
