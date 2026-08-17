i was talking about this is my last solution : /**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    // if (m == 1 && n == 1) return grid[0][0] == 1 ? 1 : -1
    let fresh = 0;
    let total = 0;
    const q = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                fresh++
            }
            if (grid[i][j] == 2) {
                q.push([i, j, 0])
            }
        }
    }
    const xnext = [0, 0, -1, 1]
    const ynext = [1, -1, 0, 0]
    let temp = [0, 0, 0]
    const visited = Array.from({ length: m+1 }, () => Array(n+1).fill(false))
    while (q.length !== 0) {
        const size = q.length;
        for (let i = 0; i < size; i++) {
            temp = q.shift();
            // [vx, vy, time] = temp
            const vx = temp[0]
            const vy = temp[1]
            const time = temp[2]
            for (let j = 0; j < xnext.length; j++) {
                // console.log("hi")
                const xN = vx + xnext[j]
                const yN = vy + ynext[j]
                if (
                    xN < m && xN >= 0 && yN < n && yN >= 0 &&
                    !visited[xN][yN] &&
                    grid[xN][yN] == 1
                ) {
                    // console.log("jiii")
                    q.push([xN, yN, time + 1])
                    visited[xN][yN] = true
                    grid[xN][yN] = 2
                    fresh--
                }
            }
        }
    }
    // console.log(temp, "temp")
    // console.log(fresh, "fresh")
    

    return fresh==0 ? temp[2] : -1
}; where i guess I forget some optimization as like last time u suggested : 
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    const q = [];
    let freshOrange = 0;
    let min = 0;

    // 1. Find initial states (Your exact scan logic, optimized)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) { 
            if (grid[i][j] === 2) {
                q.push([i, j]); // Push coordinates [row, col], not just the value!
            } else if (grid[i][j] === 1) {
                freshOrange++;
            }
        }
    }

    // If there are no fresh oranges to begin with, it takes 0 minutes
    if (freshOrange === 0) return 0;

    // Direction arrays for clean 4-way movement: [rowShift, colShift]
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    // 2. Pure BFS Wave Loop
    while (q.length > 0 && freshOrange > 0) {
        let size = q.length; // Snapshot of current level (oranges rotting at this exact minute)
         
        for (let k = 0; k < size; k++) {
            const [r, c] = q.shift(); // Dequeue the front rotten orange coordinates

            // Check all 4 neighbors
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                // If neighbor is out of bounds or NOT a fresh orange, skip it
                if (nr < 0 || nr >= m || nc < 0 || nc >= n || grid[nr][nc] !== 1) {
                    continue;
                }

                // Infect the fresh orange!
                grid[nr][nc] = 2;
                freshOrange--;
                q.push([nr, nc]); // Push new rotten orange to be processed next minute
            }
        }
        min++; // One entire wave/layer finished expanding, increment time
    }

    // 3. Return check (Your exact final thought)
    return freshOrange === 0 ? min : -1;
};
1.  // If there are no fresh oranges to begin with, it takes 0 minutes
    if (freshOrange === 0) return 0; 2. while (q.length > 0 && freshOrange > 0) { i was simply chacking only for queue length even i should check also freshorange remaining then only i should go inside . Aprt from this 2 optimization u think any more optimization ? one line 


====

No worries at all! Let's optimize **Rotting Oranges (LeetCode 994)** specifically for FAANG performance.

In a FAANG interview, the standard BFS solution using JS arrays with `.shift()` runs into a subtle performance bottleneck: **`Array.prototype.shift()` is an $O(N)$ operation in JavaScript**, which turns a standard $O(M \times N)$ BFS into an $O(M \times N \cdot Q)$ runtime.

To get a **top 5% performance submission**, we make two critical FAANG-grade optimizations:

1. **Pointer-based Queue (O(1) Pop):** Use an array with a `head` pointer instead of `.shift()`.
2. **In-place Mutation:** Mark fresh oranges as rotten (`2`) immediately when pushing to the queue to prevent duplicate processing.

---

### Optimized FAANG BFS Implementation

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    let freshCount = 0;
    const queue = [];
    
    // 1. Single pass: Collect initial rotten oranges & count total fresh oranges
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }
    
    // Base Case: No fresh oranges from the start
    if (freshCount === 0) return 0;
    
    let minutes = 0;
    let head = 0; // Pointer for O(1) dequeue operations
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // 2. Multi-source BFS
    while (head < queue.length && freshCount > 0) {
        const levelSize = queue.length - head; // Process current minute level batch
        
        for (let i = 0; i < levelSize; i++) {
            const [r, c] = queue[head++]; // O(1) read & move head pointer forward
            
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                
                // If neighbor is valid and a FRESH orange
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;  // Mark rotten immediately to avoid re-queueing
                    freshCount--;       // Decrement target count
                    queue.push([nr, nc]);
                }
            }
        }
        
        minutes++; // Increment time after processing the current level batch
    }
    
    // If fresh oranges remain unreachable, return -1
    return freshCount === 0 ? minutes : -1;
};

```

---

### Key Takeaways for FAANG Interviewers

* **Time Complexity:** $\mathcal{O}(M \times N)$ — Every cell is visited at most twice (once during initial scan, once during BFS).
* **Space Complexity:** $\mathcal{O}(M \times N)$ — Queue size bounded by the maximum number of grid cells.
* **Why the Pointer Matters:** Replacing `queue.shift()` with `head++` drops runtime from $O(V^2)$ worst-case queue performance down to true native $O(V)$ speed in JavaScript V8.



Hi, good evening. I hope you're doing good. So, I have analyzed from my solution and your last approach as well as the today's approach. Yes, you are right. Basically, in JavaScript, V8 engine for shift is taking unnecessary time complexity. It is increasing from m * n to + q times, wherever the q times we are iterating into the while loop, it's taking extra time complexity. If we will reduce this shift function and use a simple head variable, head is nothing like just a increment. Actually, we are not removing from the queue, we are increasing the pointer, head pointer from 0, 0 to 1, 1 to 2, and it is reducing our time complexity and in the queue of head++, we are using the operator. So, before incrementing the pointer, we are using first queue of head, not queue of head++. It is initially taking queue of head and then the plus operator is iterating or you can say performing in the second time. The ++ operator is actually running after giving the queue of head value. Am I right?