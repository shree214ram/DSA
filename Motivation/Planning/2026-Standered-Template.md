can u please design a good template for me to recall in every mock like 2 min problem read , next 5 min then Speak Load if u know the solution broute then optimised and then time and space then next coding and then dry run whichever required for Standered Faang .If not able to recall the the solution but something something coming in mind related to that then how Smartly explain and ask hint for correct the approach and then qickly convert into code and then dry run .  Just short template . If u remeber in couple of days I am doing in 45 min but might be not following the standered Template , might be missed to explain the Time /Space ,might be some thing i misseed which actually required in  RealFAANG . Please make very short , standered Template so i would follow that . 

Here is your definitive, high-velocity FAANG interview blueprint designed to maximize communication and protect your 45-minute clock:

### ⏱️ The 45-Minute FAANG Execution Timeline

```text
[00-02m] Read & Clarify ──► [02-07m] The Strategy Pitch ──► [07-35m] Silent, Fast Coding ──► [35-45m] Dry Run & Verify

```

---

### 🟩 Phase 1: The First 2 Minutes — Read & Deconstruct

* **Action:** Read the problem carefully.
* **The "Must-Say" Verbal Check:** Ask about constraints and edge cases immediately.
* *"To ensure my bounds are correct, what is the maximum constraint on $N$? Can the input contain negative values or duplicates?"*



---

### 🟦 Phase 2: Minutes 2 to 7 — The Strategy Pitch (Choose Route A or B)

#### Route A: You Know the Solution

1. **One-Sentence Brute Force:** *"The naive approach would be to nested-loop and check all pairs in $O(N^2)$ time, which will likely TLE given our constraints."*
2. **The Optimal Pivot:** *"To optimize this, I can use a Monotonic Deque / Two-Pointer approach to process the array in a single linear pass."*
3. **Lock the Complexities:** *"This optimized approach will run in **$O(N)$ Time** because each element is pushed/popped once, and **$O(N)$ Space** to store the indices. Does this strategy look good to you before I jump into the code?"*

#### Route B: You Are Stuck or Trapped in "Fuzzy" Recall

1. **Think Out Loud (Data Structure First):** Talk about the linear timeline or the properties of the data. *"Because the array isn't sorted but we need to track local minimums, a standard sorting step won't work. I am thinking a structure like a Stack or Heap might help us look backward dynamically."*
2. **The Smart Hint Bait:** Explicitly state the roadblock you are trying to solve to force a high-level nudge from the interviewer.
* *"I know I need to eliminate invalid subarrays from the left, but because we have negative values, a normal sliding window sum breaks. I am trying to determine the best way to track the prefix boundaries dynamically without re-scanning. Is my intuition of using a monotonic structure on the right path?"*


3. **Lock Complexities Immediately:** Once they give a high-level nod, state your target goals: *"Perfect. I will target an **$O(N)$ Time** and **$O(N)$ Space** profile using that structure."*

---

### 🟨 Phase 3: Minutes 7 to 35 — Clean, Non-Stop Coding

* **Action:** Go completely silent or use low-overhead commentary. Do not narrate every syntax element (e.g., don't say *"now I am writing a for loop"*).
* **Focus:** Translate the logic you just pitched directly into clean code. If you hit a small bug, fix it quickly without breaking your execution flow.

---

### 🟥 Phase 4: Minutes 35 to 45 — Dry Run & Verify

* **Action:** Never say *"I'm done."* Instead, say: *"The code is complete. Let me dry-run this with a small trace example to verify the pointer movements."*
* **The Execution:**
1. Pick a small, meaningful test case (like `[84, -37, 32]`).
2. Write down your variable states explicitly in a comment block.
3. Step through your conditional blocks line-by-line to prove to the interviewer that the logic evaluates perfectly.