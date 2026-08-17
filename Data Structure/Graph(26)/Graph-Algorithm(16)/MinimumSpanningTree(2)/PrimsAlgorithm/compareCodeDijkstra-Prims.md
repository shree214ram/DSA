Here is a side-by-side comparison of **Dijkstra** and **Prim's** algorithms implemented using the exact same structure (Adjacency List + Min Priority Queue) in JavaScript.

Notice how **90% of the code structure is identical**—the only structural differences are how edge weights are calculated during the relaxation step!

---

## Code Comparison

```javascript
// ==================== DIJKSTRA ====================                   // ==================== PRIM'S (MST) ====================
function dijkstra(numVertices, graph, startNode) {                     function primMST(numVertices, graph, startNode = 0) {
  const dist = new Array(numVertices).fill(Infinity);                     const key = new Array(numVertices).fill(Infinity);
  const visited = new Array(numVertices).fill(false);                     const visited = new Array(numVertices).fill(false);
  const parent = new Array(numVertices).fill(-1);                         const parent = new Array(numVertices).fill(-1);

  // Min-Priority Queue tracking: [node, metric]                         // Min-Priority Queue tracking: [node, metric]
  const pq = new MinPriorityQueue();                                      const pq = new MinPriorityQueue();

  dist[startNode] = 0;                                                    key[startNode] = 0;
  pq.enqueue(startNode, 0);                                               pq.enqueue(startNode, 0);

  let totalCost = 0;                                                      let totalCost = 0;

  while (!pq.isEmpty()) {                                                 while (!pq.isEmpty()) {
    const { element: u, priority: currentVal } = pq.dequeue();              const { element: u, priority: currentVal } = pq.dequeue();

    if (visited[u]) continue;                                               if (visited[u]) continue;
    visited[u] = true;                                                      visited[u] = true;
    totalCost += currentVal; // Optional accumulate                         totalCost += currentVal; // Total MST Weight!

    for (const [v, weight] of graph[u]) {                                   for (const [v, weight] of graph[u]) {
      if (!visited[v]) {                                                      if (!visited[v]) {

        // ----------------- CHANGE 1 -----------------                          // ----------------- CHANGE 1 -----------------
        // Path distance from START node                                        // Standalone edge weight to MST
        const newDist = dist[u] + weight;                                       const newWeight = weight;

        // ----------------- CHANGE 2 -----------------                          // ----------------- CHANGE 2 -----------------
        // Relax if path from START is shorter                                  // Relax if single EDGE to tree is cheaper
        if (newDist < dist[v]) {                                                if (newWeight < key[v]) {
          dist[v] = newDist;                                                      key[v] = newWeight;
          parent[v] = u;                                                          parent[v] = u;
          pq.enqueue(v, dist[v]);                                                 pq.enqueue(v, key[v]);
        }                                                                       }
      }                                                                       }
    }                                                                       }
  }                                                                       }

  return { dist, parent };                                                return { totalCost, parent };
}                                                                       }

```

---

## Summary of the 3 Key Differences

| Feature | Dijkstra's Algorithm | Prim's Algorithm |
| --- | --- | --- |
| **1. Primary Array** | Tracks **`dist[v]`**: Distance from `startNode` $\rightarrow$ `v` | Tracks **`key[v]`**: Minimum edge weight connecting `v` to the growing MST tree |
| **2. Metric Value** | **`dist[u] + weight`** *(Accumulates path cost)* | **`weight`** *(Just the isolated edge weight)* |
| **3. Priority Queue Push** | `pq.enqueue(v, dist[u] + weight)` | `pq.enqueue(v, weight)` |

---

## Mental Shortcut to Remember

* **Dijkstra** asks: *"How far is node $v$ from where I originally started?"* $\rightarrow$ **`dist[u] + weight`**
* **Prim's** asks: *"How cheap is it to attach node $v$ to my current tree structure?"* $\rightarrow$ **`weight`**