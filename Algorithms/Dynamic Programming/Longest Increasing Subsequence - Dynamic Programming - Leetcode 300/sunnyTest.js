function lis(Arr, n) {
    if (n == 1) return 1;
    let oldIndexMax = 1;
    for (let i = 1; i < n; i++) {
        console.log("i = ", i)
        let currentIndexMax = lis(Arr, i)
        console.log("currentIndexMax = ", currentIndexMax)
        console.log("oldIndexMax = ", oldIndexMax)
        if (Arr[i] < Arr[Arr.length - 1] && currentIndexMax + 1 > oldIndexMax) {
            oldIndexMax = currentIndexMax + 1
        }
    }
    console.log("finalMax = ", finalMax)
    console.log("oldIndexMax = ", oldIndexMax)
    finalMax = Math.max(oldIndexMax, finalMax)
    console.log("finalMax updated = ", finalMax)
    return oldIndexMax
}

let Arr = [10, 22, 9, 33, 21, 50, 41, 60]
let finalMax = 1

lis(Arr, Arr.length)
console.log("Longest Increasing Order Length is = ", finalMax)


