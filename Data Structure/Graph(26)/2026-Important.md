1) https://www.geeksforgeeks.org/minimum-cost-path-in-a-directed-graph-via-given-set-of-intermediate-nodes/

https://www.geeksforgeeks.org/minimum-cost-path-left-right-bottom-moves-allowed/
https://www.geeksforgeeks.org/minimum-cost-path-from-source-node-to-destination-node-via-an-intermediate-node/ and Mijimum spanning tree Kruskals / Prims , Balman ford , Floyed warshal Should I work on them for FAANG prepartion ? ====== 
2) https://www.geeksforgeeks.org/count-possible-paths-source-destination-exactly-k-edges/

https://www.geeksforgeeks.org/shortest-path-exactly-k-edges-directed-weighted-graph/   https://www.youtube.com/watch?v=YmnwiYKe6g8
Cheapest Flights Within K Stops | Graph | [CODE + Explaination] | Amazon | GFG 🔥
CodeLibrary - by Yogesh & Shailesh
11K views
1 year ago


https://medium.com/swlh/graph-dynamic-programming-heap-cheapest-flights-within-k-stops-e622ce956479


https://www.youtube.com/watch?v=60RbWlDFsmI
Cheapest Flights Within K Stops | DFS + Pruning | Leetcode #787 they all are done in 787 right Or they are different ? one line each 

===

Here are clear, direct answers for each of your two questions:

### 1. Algorithm Prioritization for FAANG Interviews

* **Bellman-Ford & Dijkstra:** **MUST DO.** Essential for single-source shortest path problems (like *Cheapest Flights Within K Stops* or *Network Delay Time*).
* **Kruskal’s & Prim’s (Minimum Spanning Tree):** **HIGH PRIORITY.** Very common in Staff/L6 systems and graph rounds (e.g., *Min Cost to Connect All Points* / LeetCode 1584).

* **Floyd-Warshall (All-Pairs Shortest Path):** **MEDIUM/LOW PRIORITY.** Rarely asked directly to code from scratch; good to know conceptually ($O(V^3)$ DP on matrix) if explicitly asked for all-pairs distances.
* **"Via Intermediate Nodes" GFG variants:** **PATTERN OVERLAP.** These are just standard Dijkstra or BFS run twice (e.g., $Src \to Intermediate$ and then $Intermediate \to Dst$), so you don't need to learn a new algorithm for them.

---

### 2. Breakdown of the Links (Are they all LeetCode 787?)

1. **Count possible paths with exactly K edges:** **DIFFERENT** — This asks to *count* paths using Graph DP or Matrix Multiplication, not to find the *minimum cost*.
2. **Shortest path with exactly K edges:** **SAME PATTERN** — This is the core 0/1 Knapsack / DP variation of Bellman-Ford, identical in concept to *Cheapest Flights Within K Stops* (with $\le K$ vs exact $K$ tweak).
3. **YouTube (Yogesh & Shailesh - Cheapest Flights Within K Stops):** **EXACT SAME** — Direct solution explanation for LeetCode 787.
4. **Medium Article (Graph DP/Heap - Cheapest Flights Within K Stops):** **EXACT SAME** — Complete breakdown comparing DP array vs Priority Queue for LeetCode 787.
5. **YouTube (DFS + Pruning - Cheapest Flights Within K Stops):** **EXACT SAME** — Alternate backtracking/DFS approach for LeetCode 787 (though BFS/Bellman-Ford is preferred in interviews).