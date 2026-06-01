/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //brute force method 2 for 
    if(s.length==1&&p.length==1 && s[0]!=p[0]){
        return []
    }
    const hp={}
    for(let i=0;i<p.length;i++){
        hp[p[i]]= hp[p[i]] ? hp[p[i]]+1 : 1
    }
    let start=0;
    const res=[]
    for(let end=0;end<s.length;end++){
        let currentWindowSize = end-start+1;
        let check=p.length;
        let startingPoint=start;
        if(currentWindowSize == p.length){
            while(start<=end){
                if(hp[s[start]]){
                    check--
                }
                start++
            }
            if(check==0){
                res.push(startingPoint)
            }
        }
    }
    return res;
};

Here is a realistic evaluation from a **Staff Engineer/FAANG Interviewer** perspective. Taking 45 minutes to get to this stage is a common experience, but here is how the feedback would break down:

### 1. The "Good" (What you did right)
*   **The Pattern Identification:** You correctly identified that a **Hash Map** is needed for frequencies and that a **Sliding Window** (Two Pointers) is the most efficient way to traverse the string.
*   **Logical Notes:** Your notes in the tracking sheet show you understand the "Fixed Window" concept.
*   **Communication:** Explaining the Brute Force first is a standard "Senior" move. It shows you don't just memorize code; you understand why the optimized version is necessary.

### 2. The "Real Feedback" (The Interviewer's Concern)
In a FAANG interview, if your code fails on simple cases like `s="aa", p="a"` or `s="pwwkew", p="p"`, the interviewer would look at these two areas:

*   **Pointer Management (The "Red Flag"):** Your `while` loop inside the `for` loop is a major logical error. By moving `start` all the way to `end`, you are essentially "resetting" the search instead of "sliding" it. An interviewer would see this as a sign that you haven't fully internalized the **Sliding Window** mechanism yet.
*   **Data Integrity:** Your current logic "exists" but doesn't "count." In FAANG, they test your attention to detail regarding **frequency counts**. Checking if a letter *exists* is Step 1; checking if it exists *the right amount of times* is Step 2.

### 3. The Interviewer's Verdict
If the 45 minutes ended right now:
> **Result:** *Lean No / Follow-up required.*
> **Reasoning:** Candidate has the right intuition and knows the data structures (HashMap/Pointers), but struggled with the implementation details of the "Slide." The candidate didn't reach a "Dry Run" phase where they could catch the pointer increment error themselves.

---

### How to turn this into a "Strong Hire" (The fix)

To fix your program while keeping your current structure, you need to change how you "Check" the window. 

**The "Standard" Sliding Window Pattern:**
Instead of a `while` loop that destroys your pointers, you should:
1.  **Expand:** Add `s[end]` to a *second* hash map (current window map).
2.  **Contract:** If the window is too big (`end - start + 1 > p.length`), remove `s[start]` from the second map and do `start++`.
3.  **Compare:** If the window is exactly `p.length`, compare the two maps.



### Your Homework Challenge:
Don't write the optimized version yet. **Try to fix your "Brute Force" code by replacing that `while` loop with a helper function.** 
*   Create a function `isAnagram(subStr, pMap)`. 
*   Call it inside your `for` loop whenever `currentWindowSize == p.length`.

**Interviewer Tip:** If you can't get the "Sliding" logic right, a working $O(N \times K)$ solution is 100x better than a broken $O(N)$ solution.

How do you feel about the "Two Map" comparison idea? Does that feel easier to code than trying to manage the `check` variable?


====

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //brute force method 2 for 
    if(s.length==1&&p.length==1 && s[0]!=p[0]){
        return []
    }
    const hp={}
    const hs={}
    //first p length elements 
    for(let i=0;i<p.length;i++){
        hp[p[i]]= hp[p[i]] ? hp[p[i]]+1 : 1
        hs[s[i]]= hs[s[i]] ? hs[s[i]]+1 : 1
    }
    let start=0;
    const res=[]
    let count = 0
    for(let i=0;i<p.length;i++){
        if(hp[p[i]]==hs[s[i]]){
            count++
        }
    }
    if(p.length==count){
        res.push(0)
    }
    //0 1 2 3 4

    for(let end=p.length;end<s.length;end++){
        let start=end-p.length+1 //4-3+1=2
        let currentWindowLastIndex = end+p.length;

        for(let j=end;j<currentWindowLastIndex;j++){
            if(hp[p[i]]==hs[s[i]]){
                count++
            }
        }
        let check=p.length;
        let startingPoint=start;
        if(currentWindowSize == p.length){
            while(start<=end){
                if(hp[s[start]]){
                    check--;
                    // start++
                }
               start++
            }
            
            if(check==0){
                res.push(startingPoint);
                // start=startingPoint+1
            }
        }
    }
    return res;
};

# Again Tried 1 May 
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //broute force 
    const k=p.length;
    const res=[];
    const ph=new Array(26).fill(0);
    const sh=new Array(26).fill(0);
    //first ke element 
    for(let i=0;i<p.length;i++){
        
        ph[p.charCodeAt(i)-"a".charCodeAt(0)]++
        sh[s.charCodeAt(i)-"a".charCodeAt(0)]++
    }
    const compare=(sh,ph)=>{
         let count=0;
        for(let i=0;i<26;i++){
            if(sh[i]!=ph[i]){
                return false;
            }
        }
        return true
    }

    if(compare(sh,ph)){
        res.push(0)
    }

    //next window 
    for(let i=k;i<s.length;i++){
        sh[s.charCodeAt(i-k)-"a".charCodeAt(0)]-- //remve first 
        sh[s.charCodeAt(i)-"a".charCodeAt(0)]++ //add in last new element

        if(compare(sh,ph)){
            res.push(i-k+1)
        }
    }
    return res;
};

L152 , 239 , 