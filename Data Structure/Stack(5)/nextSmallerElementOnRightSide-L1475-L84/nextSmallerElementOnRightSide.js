var nextSmallerElement = function(nums) {
    // 1. Initialize result with -1 (default for elements with no smaller neighbor)
    const res = new Array(nums.length).fill(-1);
    const st = []; // Using an empty stack and starting loop at 0 is cleaner
    
    for (let i = 0; i < nums.length; i++) {
        // 2. While the current number is smaller than the number at the stack's top index
        while (st.length > 0 && nums[i] < nums[st[st.length - 1]]) {
            const indexToUpdate = st.pop();
            
            // 3. The current number is the "Next Smaller" for the element we just popped
            res[indexToUpdate] = nums[i];
        }
        
        // 4. Push current index to wait for its own next smaller element
        st.push(i);
    }
    
    return res;
};

/*
Why this is different from your 1475 code:
The Result Array: In 1475, you modified the input prices directly. In a standard NSE problem, you usually return a new array so you don't lose the original values.

Pre-filling with -1: By using .fill(-1), you don't need a second while loop at the end to clean up the stack. Any index left in the stack simply keeps its default -1.

The Comparison (< vs <=): * In 1475, the problem said "if j > i and prices[j] <= prices[i]".

In a standard "Next Smaller" problem, it usually means strictly smaller (<). Always check the problem description!
*/