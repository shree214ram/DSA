Here is the complete JavaScript solution for **LeetCode 502: IPO** using a Min-Heap (for unaffordable projects sorted by required capital) and a Max-Heap (for affordable projects sorted by profit).

```javascript
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const n = profits.length;
    
    // Pair each project: [required_capital, profit]
    const projects = [];
    for (let i = 0; i < n; i++) {
        projects.push([capital[i], profits[i]]);
    }
    
    // Sort projects primarily by capital ascending (acting as our Min-Heap for availability)
    projects.sort((a, b) => a[0] - b[0]);
    
    // Max-Heap to store profits of all currently affordable projects
    // MaxPriorityQueue is available natively in LeetCode JS runtime
    const maxProfitHeap = new MaxPriorityQueue({ priority: (bid) => bid });
    
    let i = 0;
    
    // Perform up to k project selections
    for (let j = 0; j < k; j++) {
        // Move all projects that we can afford with our current capital `w` into the Max-Heap
        while (i < n && projects[i][0] <= w) {
            maxProfitHeap.enqueue(projects[i][1]);
            i++;
        }
        
        // If no affordable projects are available, we cannot proceed further
        if (maxProfitHeap.isEmpty()) {
            break;
        }
        
        // Greedily pick the project with the maximum profit
        w += maxProfitHeap.dequeue().element;
    }
    
    return w;
};

```

---

**Complexity Analysis**

* **Time Complexity:** $\mathcal{O}(N \log N + k \log N)$, where $N$ is the total number of projects. Sorting takes $\mathcal{O}(N \log N)$, and each project is enqueued and dequeued from the Max-Heap at most once.
* **Space Complexity:** $\mathcal{O}(N)$ to store project pairs and elements inside the Max-Heap.