BellmanFord Algorithms :-

Definition :- Use Bellman-Ford whenever the graph has negative edge weights (which break Dijkstra) or when you specifically need to detect negative weight cycles (e.g., currency arbitrage in financial networks).

Application :- 
    system routing, 
    currency arbitrage problems, and 
    verifying negative cycle detection!

Spot on—Dijkstra and Prim's are virtually identical (both use a Min-Priority Queue to greedily pick the next best node), while Bellman-Ford is an entirely different double-loop edge-relaxation template!

Here are the clean, standard templates for both **Dijkstra's** (with Min-Heap) and **Bellman-Ford** (with edge relaxation) so you can compare and drill their structures:

---

## 1. Dijkstra's Algorithm Template (Priority Queue / Min-Heap)

```javascript
/**
 * Shortest Path from Source (Non-negative weights)
 * Time: O((V + E) log V) | Space: O(V + E)
 */
function dijkstra(n, graph, src) {
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    // Min-Priority Queue storing [currentNode, currentCost]
    const minHeap = new MinPriorityQueue({ priority: (x) => x[1] });
    minHeap.enqueue([src, 0]);

    while (!minHeap.isEmpty()) {
        const [u, d] = minHeap.dequeue().element;

        // Skip stale pairs
        if (d > dist[u]) continue;

        for (const [v, weight] of graph[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                minHeap.enqueue([v, dist[v]]);
            }
        }
    }

    return dist;
}

```

---

## 2. Bellman-Ford Algorithm Template (Iterative Edge Relaxation)

```javascript
/**
 * Shortest Path + Negative Cycle Detection
 * Time: O(V * E) | Space: O(V)
 */
function bellmanFord(n, edges, src) {
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    // 1. Relax all edges (V - 1) times
    for (let i = 0; i < n - 1; i++) {
        for (const [u, v, weight] of edges) {
            if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
            }
        }
    }

    // 2. Check for negative-weight cycles (V-th iteration)
    for (const [u, v, weight] of edges) {
        if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
            throw new Error("Graph contains a negative weight cycle!");
        }
    }

    return dist;
}

```