# SunnyTriedFirstTime with Next Small on Right side Logic 

<script>
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    //15:27
    const st=[-1];
    const A=heights;
    let maxArea=Number.MIN_VALUE
    for(let i=1;i<A.length;i++){
        while(st.length!=0 && A[i]<=A[st[st.length-1]]){
            st.pop()
            const rs=i
            const ls=st.length==0 ? -1 : st[st.length-1]
            const totalArea= (rs-ls-1)*Math.min(A[rs],A[ls])
            maxArea=Math.max(maxArea,totalArea)
        }
        st.push(i)
    }
    return maxArea == Number.MIN_VALUE ? 0 : maxArea
};
</script>
# I corrected the Height and Width Logic 
<script>
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    //15:27
    const st=[-1];
    const A=heights;
    let maxArea=Number.MIN_VALUE
    for(let i=1;i<A.length;i++){
        while(st.length!=0 && A[i]<=A[st[st.length-1]]){
            const popIndex=st.pop()
            const h=A[popIndex]
            const rs=i
            const ls=st.length==0 ? -1 : st[st.length-1]
            const width= (rs-ls-1)
            const totalArea=width*h;
            maxArea=Math.max(maxArea,totalArea)
            
        }
        st.push(i)
    }
    return maxArea == Number.MIN_VALUE ? 0 : maxArea
};
</script>
# But still failed 

<script>

var largestRectangleArea = function(heights) {
    let maxArea = 0;
    let st = [];
    // 1. Add a 0 at the end to force-flush the stack
    heights.push(0); 

    for (let i = 0; i < heights.length; i++) {
        // 2. Standard Monotonic Stack logic
        while (st.length > 0 && heights[i] < heights[st[st.length - 1]]) {
            const h = heights[st.pop()];
            
            // 3. Width calculation:
            // If stack is empty after pop, it means the popped bar 
            // was the smallest so far, so width stretches all the way to index 0.
            const rs = i;
            const ls = st.length === 0 ? -1 : st[st.length - 1];
            const width = rs - ls - 1;
            
            maxArea = Math.max(maxArea, h * width);
        }
        st.push(i);
    }
    
    // 4. Restore the array (good practice if it was passed by reference)
    heights.pop(); 
    return maxArea;
};

</script>

This is a brilliant "Staff-level" question. It touches on **Memory Management** and **Algorithm Robustness**.

Let’s break down the "Why" behind that `0` and why we clean up afterward.

---

### 1. Why add the `0`? (The "Flush" Mechanic)
In a Monotonic Stack, an element is only processed (popped) when it finds its **"Next Smaller Element."**

If your histogram is constantly increasing, like `[1, 2, 3]`:
* `1` is pushed.
* `2` is pushed (it's not smaller than 1).
* `3` is pushed (it's not smaller than 2).
* **The loop ends.**

The stack is still `[0, 1, 2]`. Because the `while` loop never triggered, you **never calculated the area** for any of those bars. By adding a `0` at the end (`[1, 2, 3, 0]`), you guarantee that when the loop hits that final `0`, it will be smaller than *everything* currently in the stack.



The `0` acts like a "Closing Bracket" or a "Clean-up Crew." It forces every single bar out of the stack so its area can be calculated before the function returns.

---

### 2. Why remove it (`pop()`) after the loop?
As a **Staff Engineer**, you have to think about **Side Effects**. 

In JavaScript (and many other languages), arrays are passed by **reference**. This means if you modify the `heights` array inside your function, you are modifying the **original array** that exists outside the function.

```javascript
let myHeights = [1, 2, 3];
largestRectangleArea(myHeights); 

console.log(myHeights); 
// If you don't heights.pop(), this will print [1, 2, 3, 0]
// This might break other parts of the program that expect the original data!
```



**The "Staff" Mindset:** A function should be a "Pure" operation whenever possible. If you temporarily change the user's data to solve a math problem, you should put it back exactly how you found it. It’s professional "housekeeping."

---

### Summary Table: The Sentinel Pattern

| Action | Technical Name | Purpose |
| :--- | :--- | :--- |
| **`push(0)`** | **Sentinel Value** | Ensures the "Next Smaller" exists for all bars, preventing "leaked" data in the stack. |
| **`pop()`** | **State Restoration** | Prevents side effects in the calling code (encapsulation). |

### Could you do it without the `0`?
Yes, but you would need a second `while` loop after the `for` loop to empty the stack manually. Adding the `0` is considered more "elegant" because it allows a single piece of logic (the `while` inside the `for`) to handle every single case perfectly.

Does that help you see why we treat the input array with such care?