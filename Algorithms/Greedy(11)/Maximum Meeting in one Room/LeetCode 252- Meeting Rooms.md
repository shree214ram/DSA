
## LeetCode 252: Meeting Rooms (Easy)
**Problem:** Given an array of meeting time intervals where `intervals[i] = [starti, endi]`, determine if a person could attend all meetings.

*   **Example 1:**
    *   **Input:** `intervals = [[0,30],[5,10],[15,20]]`
    *   **Output:** `false`
*   **Example 2:**
    *   **Input:** `intervals = [[7,10],[2,4]]`
    *   **Output:** `true`
*   **Constraints:**
    *   $0 \le intervals.length \le 10^4$
    *   $intervals[i].length == 2$
    *   $0 \le start_i < end_i \le 10^6$

---


<script>
/*
## LeetCode 252: Meeting Rooms (Easy)
**Problem:** Given an array of meeting time intervals where `intervals[i] = [starti, endi]`, determine if a person could attend all meetings.

*   **Example 1:**
    *   **Input:** `intervals = [[0,30],[5,10],[15,20]]`
    *   **Output:** `false`
*   **Example 2:**
    *   **Input:** `intervals = [[7,10],[2,4]]`
    *   **Output:** `true`
*   **Constraints:**
    *   $0 \le intervals.length \le 10^4$
    *   $intervals[i].length == 2$
    *   $0 \le start_i < end_i \le 10^6$

*/

//starts at 11:12 ends at 11:26

// Broute force first i would use 2 for loop i,j and 1 result array . In 2 for loop i would compare jth start if greater than ith end time then push in res and in the last check res.length==Array.length then true other wise false 

//Otimal 

//1. sort 
const check=(intervals)=>{

  if(intervals.length==0){return []}
  const A=intervals.sort((a,b)=>a[0]-b[0]);
  const res=[A[0]]
  for(let i=1;i<A.length;i++){
      const current=A[i]
      const currentStart=current[0]
      const last=A[i-1]
      const lastEnd=last[1]
      if(currentStart>=lastEnd){
          res.push(current);
      }
  }
  return res.length==A.length
} Give Me Real FAANG Interviewer Feedback , I wrote Broute force + optimised Onlogn , On space and tested bith the Example 

const intervals =  [[0,30],[5,10],[15,20]]; //false 
const intervals =  [[7,10],[2,4]]// true
//console.log(check(intervals))
</script>

Congratulations on finishing **Meeting Rooms I** in 14 minutes! That is a very solid pace for an Easy-level problem, especially since you provided both the brute force logic and a working optimized solution.

Here is your **Real FAANG Interviewer Feedback**:

### 1. Technical Evaluation
*   **Time Complexity ($O(N \log N)$):** Correctly identified. The sorting step dominates the linear scan.
*   **Space Complexity ($O(N)$ or $O(1)$):** You used a `res` array, which makes it $O(N)$. 
    *   **Staff-Level Tip:** In a real interview, once you sort, you don't actually need the `res` array. You only need to compare the current meeting's start with the previous meeting's end. This would bring your space complexity down to $O(1)$ (ignoring the sort space).
*   **Logical Soundness:** Your comparison `currentStart >= lastEnd` is the exact condition needed to determine if meetings are non-overlapping.

---

### 2. The "Staff-Engineer" Polish
To move from a "Standard Hire" to a "Strong Hire," here are the small refinements that FAANG interviewers look for:

#### A. Input Validation
You returned `[]` for an empty input. Since the problem asks for a boolean (`true`/`false`), returning an empty array might cause a type error in the calling function. 
*   **Correction:** `if (intervals.length === 0) return true;` (If there are no meetings, you can attend all of them!).

#### B. Early Exit (Efficiency)
Your code currently finishes the entire loop before returning.
*   **Refinement:** The moment you find *one* overlap, you can return `false` immediately. This is more efficient than checking the rest of the array.

---

### 3. Optimized "Clean Code" Version
Here is how I would expect a Senior/Staff candidate to write this to show maximum efficiency:

```javascript
const canAttendMeetings = (intervals) => {
  if (intervals.length <= 1) return true;

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    // If current starts before previous ends, it's an overlap
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false; // Early exit
    }
  }

  return true;
};
```

---

### 4. Interviewer Verdict: **Hire**
*   **Problem Solving:** 5/5 (Immediately knew sorting was the key).
*   **Coding Speed:** 5/5 (14 minutes is perfect).
*   **Communication:** 4/5 (Good job explaining the brute force before jumping into code).

### Your Tracking Sheet Update
You can mark **L252** as **Mastered**. 

**Next Challenge:** Move straight to **L253: Meeting Rooms II**. 
This is the one where you need to count the **number of rooms**. Since you just finished this one, your brain is already primed for it. Use the "Separate Sort" (Arrivals vs. Departures) or a **Min-Heap** approach. 

Which strategy are you going to try for Meeting Rooms II?