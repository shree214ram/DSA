Here is the complete JavaScript solution for **LeetCode 1834: Single-Threaded CPU**:

```javascript
/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    const n = tasks.length;
    
    // 1. Store task metadata: [enqueueTime, processingTime, originalIndex]
    const sortedTasks = tasks.map((task, index) => [...task, index]);
    
    // 2. Sort initial tasks strictly by enqueueTime ascending
    sortedTasks.sort((a, b) => a[0] - b[0]);
    
    // 3. Min-Heap for available tasks: ordered by processingTime, then originalIndex
    const minHeap = new MinPriorityQueue({
        priority: (task) => task[1] * 1000000 + task[2] // tie-breaker encoding
    });
    
    const result = [];
    let currentTime = 0;
    let taskIdx = 0;
    
    while (result.length < n) {
        // Step A: Push all tasks that have arrived by `currentTime` into Min-Heap
        while (taskIdx < n && sortedTasks[taskIdx][0] <= currentTime) {
            minHeap.enqueue(sortedTasks[taskIdx]);
            taskIdx++;
        }
        
        // Step B: If CPU is idle, jump time forward to the next arriving task
        if (minHeap.isEmpty()) {
            currentTime = sortedTasks[taskIdx][0];
            continue;
        }
        
        // Step C: Process task with shortest processing time (or smallest index on tie)
        const [enqueueTime, processingTime, originalIndex] = minHeap.dequeue().element;
        result.push(originalIndex);
        currentTime += processingTime; // Advance clock by executed work
    }
    
    return result;
};

```

---

### Complexity Analysis

* **Time Complexity:** $\mathcal{O}(N \log N)$ — Sorting the $N$ tasks takes $\mathcal{O}(N \log N)$, and each task is enqueued and dequeued from the Min-Heap once ($\mathcal{O}(\log N)$ per task).
* **Space Complexity:** $\mathcal{O}(N)$ — To store task indices and maintain the heap state.


Here is the step-by-step trace of how the algorithm processes **`tasks = [[1,2],[2,4],[3,2],[4,1]]`**:

---

### Initial Setup

* **`sortedTasks` with indices:** `[[1,2, 0], [2,4, 1], [3,2, 2], [4,1, 3]]` (already ordered by `enqueueTime`)
* **`currentTime = 0`**, **`minHeap = []`**, **`result = []`**

---

### Step-by-Step Execution

* **Step 1: Time = 0 (CPU Idle)**
* No tasks have `enqueueTime <= 0`.
* Heap is empty, so jump `currentTime` to the first task's enqueue time $\rightarrow$ **`currentTime = 1`**.


* **Step 2: Time = 1**
* Push task `[1,2, index 0]` into Min-Heap (since `enqueueTime` $1 \le 1$).
* **Heap:** `[ (procTime: 2, idx: 0) ]`
* Dequeue top task $\rightarrow$ **Index 0**.
* Add **`0`** to `result` $\rightarrow$ `result = [0]`.
* Advance clock: `currentTime = 1 + 2` $\rightarrow$ **`currentTime = 3`**.


* **Step 3: Time = 3**
* Push all tasks arrived by `currentTime = 3`:
* Task `[2,4, index 1]` (`enqueueTime` $2 \le 3$)
* Task `[3,2, index 2]` (`enqueueTime` $3 \le 3$)


* **Heap:** `[ (procTime: 2, idx: 2), (procTime: 4, idx: 1) ]` *(Shortest processing time `2` sits at top)*.
* Dequeue top task $\rightarrow$ **Index 2**.
* Add **`2`** to `result` $\rightarrow$ `result = [0, 2]`.
* Advance clock: `currentTime = 3 + 2` $\rightarrow$ **`currentTime = 5`**.


* **Step 4: Time = 5**
* Push all remaining tasks arrived by `currentTime = 5`:
* Task `[4,1, index 3]` (`enqueueTime` $4 \le 5$)


* **Heap:** `[ (procTime: 1, idx: 3), (procTime: 4, idx: 1) ]` *(Shortest processing time `1` sits at top)*.
* Dequeue top task $\rightarrow$ **Index 3**.
* Add **`3`** to `result` $\rightarrow$ `result = [0, 2, 3]`.
* Advance clock: `currentTime = 5 + 1` $\rightarrow$ **`currentTime = 6`**.


* **Step 5: Time = 6**
* **Heap:** `[ (procTime: 4, idx: 1) ]`
* Dequeue top task $\rightarrow$ **Index 1**.
* Add **`1`** to `result` $\rightarrow$ `result = [0, 2, 3, 1]`.



---

**Final Output:** `[0, 2, 3, 1]`