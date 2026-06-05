//OLD code 

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length == 0) {
        return [newInterval]
    }
    const output = [intervals[0]];
    const st = [] //stack to mainitan the overlap cndition and compare with last of stack to 
    st.push(intervals[0][1]) //inserting first element end in stack 
    const startOfNewInterval = newInterval[0]
    const endOfNewInterval = newInterval[1]

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const currentStart = current[0]
        const currentEnd = current[1];


        //last 
        const last = intervals[i - 1];
        const lastStart = last[0]
        const lastEnd = last[1];

        //overlap
        // case 1 if new interval overlap 
        // if (currentEnd > startOfNewInterval || currentStart < lastEnd) {
        //     if (st.length == 0) {
        //         output.push([currentStart, endOfNewInterval]);
        //         st.push(endOfNewInterval)//[8]
        //     } else {
        //         const top = st.pop()
        //     }
        //     // 
        // } else {
        //     output.push(current)
        //     st.push(current[1])//[8]

        // }

        // ===

//         Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]

        //Previusly i was thinking to take stack but not required we can compare with Last of output 
        // No overlap 
        // 1. [[1,2]]
        // simply push 3,5 because 3 i grteate than last end 2
        // current =[3,5] and 
        // [[1,2],[3,5]]

        // if(lastofOutput's end > newInterval's start ){
        //     replace end of lastofOutput  with newInterval'sEnd 
        // }
        // 2. [[1,2],[3,8]]

        if (lastEnd < currentStart) {
            output.push(current);
            if (output[output.length - 1][1] > startOfNewInterval) {
            // replace end of lastofOutput  with newInterval'sEnd 
                output[output.length - 1] = [output[output.length - 1][0], endOfNewInterval]
            }
        }

        //overap 
        // laast of end which is 8 >= current of start 6 
        // will check if end of current > output of last's end then we will replace other wise skip
        // 3. [[1,2],[3,8]] will be the output ,  we will skip [6,7]

        // ===
        else {
            if (currentEnd > output[output.length - 1][1]) {
            // replace end of lastofOutput  with newInterval'sEnd 
                output[output.length - 1] = [output[output.length - 1][0], currentEnd]
            }
        }
    }
    console.log(output, "output")
    return output
};




======
NEW Work third attempt 




45 min and 98 test cases passed over 158 : /**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length==0) return [newInterval]
    let i=0;
    const res=[]
    //insert all the smaller intervals from 
    while(i<intervals.length && intervals[i][1]<newInterval[0]){
        res.push(intervals[i])
        i++
    }

    //insert interval
    if(i<intervals.length){
    res.push([intervals[i][0],Math.max(intervals[i][1],newInterval[1])]);
    i++
    }


    //manage over lap  
    while(i<intervals.length && res[res.length-1][1]>=intervals[i][0]){
        res[res.length-1][1]=Math.max(res[res.length-1][1],intervals[i][1])
        i++
    }


    //insert all the remaining intervals from given array 
    while(i<intervals.length ){
        res.push(intervals[i])
        i++
    }

    return res

}; jsutsmall hint
===

You are at the **45-minute mark**. Your logic for separating the intervals into three distinct phases is brilliant, but you have a slight edge-case blind spot in the middle phase.

### 💡 The Lifeline Hint: The Missing Bounds and Edge Drop

Look closely at how you handle your middle phase when initializing the merge:

```javascript
if(i < intervals.length){
    res.push([intervals[i][0], Math.max(intervals[i][1], newInterval[1])]);
    i++
}

```

1. **The Left Bound Error:** You are blindly taking `intervals[i][0]` as the start of your merged interval. What happens if `newInterval[0]` is actually smaller than `intervals[i][0]`? You are losing the smaller starting boundary! You need to take the `Math.min()` of both starting points.
2. **The End-of-Array Drop:** What happens if `newInterval` belongs at the very end of the array (meaning the first `while` loop processes the entire array, and `i` becomes equal to `intervals.length`)? Your `if(i < intervals.length)` condition evaluates to false, completely skipping the insertion of `newInterval` altogether!

Fix your middle step so that it correctly updates the bounds of `newInterval` by merging it across overlapping elements *before* pushing it, or ensure it gets pushed even if `i` reaches the end of the array.

---

### ⏱️ The FAANG Checkpoint Requirement

Before you refactor: What are your targeted **Time** and **Space** complexities for this linear scan? State them in one sentence, then push through to fix those 60 failing test cases!

===
56 min over : 117 testcases passed out of 158 : /**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length==0) return [newInterval]
    let i=0;
    const res=[]
    //insert all the smaller intervals from 
    while(i<intervals.length && intervals[i][1]<newInterval[0]){
        res.push(intervals[i])
        i++
    }

    //insert interval
    if(i<intervals.length){
    res.push([Math.min(intervals[i][0],newInterval[0]),Math.max(intervals[i][1],newInterval[1])]);
    i++
    }


    //manage over lap  
    while(i<intervals.length && res[res.length-1][1]>=intervals[i][0]){
        res[res.length-1][1]=Math.max(res[res.length-1][1],intervals[i][1])
        i++
    }


    //insert all the remaining intervals from given array 
    while(i<intervals.length ){
        res.push(intervals[i])
        i++
    }

    return res

}; Time would be O(n)single ittrar=tion and space one extra new array to stor O(n) 
===


Time is up at **56 minutes**, so we are stopping the clock.

Your complexity analysis is spot-on: **Time Complexity is $O(N)$** for the single linear pass, and **Space Complexity is $O(N)$** to store the result array.

---

### 📊 Final Interview Assessment: No Hire

While your three-phase breakdown strategy is brilliant, this would unfortunately result in a **No Hire** for this round because your middle step still contains an unhandled edge case that corrupts the output when the array is fully exhausted early.

### 🔍 The Fatal Edge Case Breakdowns

1. **The End-of-Array Drop (Still Broken):** If `newInterval = [5, 7]` and `intervals = [[1, 2], [3, 4]]`, your first `while` loop processes all elements. `i` becomes `2` (`intervals.length`). Your code completely skips the `if (i < intervals.length)` block, never pushes `newInterval`, and returns `[[1, 2], [3, 4]]`.
2. **The "No Overlap" Insertion Bug:** If `newInterval = [2, 3]` and `intervals = [[1, 5], [6, 9]]`, your code correctly updates the overlap to `[1, 5]` at index 0. But if `newInterval = [4, 5]` and `intervals = [[1, 2], [6, 7]]`, your code combines index 1 (`[6, 7]`) with `[4, 5]` into `[4, 7]`, which incorrectly swallows the number 6 into a non-existent overlap.

### 💡 How to Master Insert Interval in a Real Interview

Instead of trying to force-insert and then clean up overlaps across distinct blocks, the standard, bulletproof FAANG approach is to update your `newInterval` bounds continuously *during* the overlap check, and only push it **once** when you finally break out of the overlap loop:

```javascript
// 1. Add all intervals that end before newInterval starts
while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i++]);
}

// 2. Continually merge all overlapping intervals into newInterval itself
while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
}
res.push(newInterval); // Push the fully merged newInterval EXACTLY ONCE here!

// 3. Add all remaining intervals
while (i < intervals.length) {
    res.push(intervals[i++]);
}

```

Let's clear your mind of intervals. Shake it off, take a break, and next time we reset back to your core target: **Graph traversals and representation!**







