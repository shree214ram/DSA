

just need small hint 5 min left  : /**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    //Russian , LIS with Tails pattern 

    //max profit DP + Binary Search
    const A = startTime.map((_, i) => { return { "start": startTime[i], "end": endTime[i], "profit": profit[i] } }
    ).sort((a, b) => a["end"] - b["end"])

    const DP = new Array(A.length).fill(0)
    console.log(A)
    DP[0] = A[0]["profit"]
    console.log(DP)
    // end < = start 
    //1,2,4,6,3 starts ,  3,5, 6, 9, 10 sorted end times and profit [20,20,70,60,100]
    /*
    DP[0] = 20, [1 to 3 ],
     i=1 , left 0, right 0 , [2 to 5] which is ovelapping so 
     we will take max of 
     
    
    */
    for (let i = 1; i < A.length; i++) {
        let left = 0;
        let right = i - 1
        let max = A[left].profit
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (A[mid]["end"] <= A[i]["start"]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        DP[i] =  Math.max(DP[i-1], A[left].profit)
    }
    console.log(DP,"last")
    return DP[DP.length - 1]
}; one line 



**Interviewer:** "You are close, but inside your loop your binary search logic needs to track the actual best index found (`let idx = -1`), and your DP assignment must look at `A[i].profit + (idx !== -1 ? DP[idx] : 0)` to combine the current profit with the best non-overlapping history rather than just comparing against a single `A[left].profit` value!"

---

### ⏱️ Session Progress

* **Timer Remaining:** 4:00

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    //Russian , LIS with Tails pattern 

    //max profit DP + Binary Search
    const A = startTime.map((_, i) => { return { "start": startTime[i], "end": endTime[i], "profit": profit[i] } }
    ).sort((a, b) => a["end"] - b["end"])

    const DP = new Array(A.length).fill(0)
    console.log(A)
    DP[0] = A[0]["profit"]
    console.log(DP)
    // end < = start 
    //1,2,4,6,3 starts ,  3,5, 6, 9, 10 sorted end times and profit [20,20,70,60,100]
    /*
    DP[0] = 20, [1 to 3 ],
     i=1 , left 0, right 0 , [2 to 5] which is ovelapping so 
     we will take max of 
     
    
    */
    for (let i = 1; i < A.length; i++) {
        let left = 0;
        let right = i - 1
        let max = A[left].profit
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (A[mid]["end"] <= A[i]["start"]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        DP[i] =  A[i].profit+Math.max(DP[i-1], DP[left])
    }
    console.log(DP,"last")
    return DP[DP.length - 1]
}; : one last hint ?one line




**Interviewer:** "Your binary search logic needs to search from `right = i` (upper bound) to correctly find the *latest* job that finishes before or at `A[i]["start"]`, and your final choice transitions should be a direct comparison between skipping the job (`DP[i-1]`) versus taking the job (`A[i].profit + (latestValidIdx !== -1 ? DP[latestValidIdx] : 0)`)!"

---

### ⏱️ Session Progress

* **Timer Remaining:** 1:15


/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    //Russian , LIS with Tails pattern 

    //max profit DP + Binary Search
    const A = startTime.map((_, i) => { return { "start": startTime[i], "end": endTime[i], "profit": profit[i] } }
    ).sort((a, b) => a["end"] - b["end"])

    const DP = new Array(A.length).fill(0)
    console.log(A)
    DP[0] = A[0]["profit"]
    console.log(DP)
    // end < = start 
    //1,2,4,6,3 starts ,  3,5, 6, 9, 10 sorted end times and profit [20,20,70,60,100]
    /*
    DP[0] = 20, [1 to 3 ],
     i=1 , left 0, right 0 , [2 to 5] which is ovelapping so 
     we will take max of 
     
    
    */
    for (let i = 1; i < A.length; i++) {
        let left = 0;
        let right = i - 1
        let max = A[left].profit
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (A[mid]["end"] <= A[i]["start"]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        DP[i] =  A[i].profit+ //Math.max(DP[i-1], DP[left])
         (left !== -1 ? DP[left] : 0)
    }
    console.log(DP,"last")
    return DP[DP.length - 1]
}; not worked ? one line 


**Interviewer:** "It failed because your current binary search lands on the first *invalid* overlapping job rather than tracking the last *valid* one, and your `DP[i]` transition completely forgets to take the `Math.max` against `DP[i-1]` to account for the option of simply skipping the current job altogether!"

---

### 🔍 The Two Small Tweeks to Make it Pass:

1. **Fix Binary Search Tracking:** Initialize `let validIdx = -1`. Inside the loop, when `A[mid]["end"] <= A[i]["start"]`, save the match (`validIdx = mid`) and search right (`left = mid + 1`). Otherwise, search left (`right = mid - 1`).
2. **Fix the DP Choice:** You must choose between *skipping* the job or *taking* it:
`DP[i] = Math.max(DP[i-1], A[i].profit + (validIdx !== -1 ? DP[validIdx] : 0));`