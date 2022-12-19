//Recursion 
function lis(Arr, n) {
    if (n == 1) return 1;
    let oldIndexMax = 1;
    //loop start by one for compare with previous one 0th index to n (means current Index)
    //let say i=1 then comparation will start like A[0] < A[1] 0 to 1 
    //let say i=2 then comparation will start like A[0] < A[2] 0 to 2   {0,1,2} 
    //let say i=3 then comparation will start like A[0] < A[2] 0 to 3   {0,1,2,3} 
    for (let i = 1; i < n; i++) {
        let currentIndexMax = lis(Arr, i)
        if (Arr[i - 1] < Arr[n - 1] && currentIndexMax + 1 > oldIndexMax) {
            oldIndexMax = currentIndexMax + 1
        }
    }
    finalMax = Math.max(oldIndexMax, finalMax)
    return oldIndexMax
}

let Arr = [10, 22, 9, 33, 21, 50, 41, 60]
let finalMax = 1


finalMax = lis(Arr, Arr.length)
console.log("Longest Increasing Order Length is = ", finalMax)



//DP Solution 

const A = [5, 8, 7, 1, 9, 10]
const n = A.length
//Step 1 :-Make DP 

const DP = new Array(n).fill(0)
for (let i = 0; i < n; i++) {
    DP[i] = 1
}
//Step 2 :- Main logic is that 

//loop start i from 1 and 
for (let i = 1; i < n; i++) {
    //second loop from 0 to i 
    for (let j = 0; j < i; j++) {
        //compare if (current element means 
        if (A[i] > A[j] && DP[j] + 1 > DP[i]) {
            DP[i] = DP[j] + 1
        }
    }
}
//Step 3 :- return max value 
let max = 0
for (let i = 0; i < n; i++) {
    max = Math.max(DP[i], max)
}

console.log("Longest Increasing Subsequence is ", max)
