  The remaining topics to cover include **Trie**, **Segment Trees / Fenwick Trees**, **Advanced Graph algorithms** (Union-Find, Topological Sort, Dijkstra), and **Bitmask / State Compression DP**.

Advanced Graphs 
   (Topological Sort  [DONE]
    Union-Find, [DONE]
    Dijkstra, and [DONE]
    Prims / Kruskals [MST] [MST] [DONE]
    Bellman-Ford [DONE]
    
    ), 
    

Trie, and 
    
Segment / Fenwick Trees



Here is the definitive breakdown of the **20 Core Patterns** that cover 90%+ of FAANG coding interviews:

## 1. Array & String Manipulation

* **Two Pointers:** Opposite ends (e.g., Two Sum II, Container With Most Water) or same-direction (e.g., Remove Duplicates).
* **Sliding Window:** Fixed or dynamic size for sub-arrays/sub-strings (e.g., Longest Substring Without Repeating Characters).
* **Prefix Sum / Difference Array:** Range sum queries in $O(1)$ or range updates (e.g., Subarray Sum Equals K).
* **Fast & Slow Pointers (Floyd’s Cycle):** Cycle detection in linked lists or arrays (e.g., Happy Number, Linked List Cycle II).

---

## 2. Searching & Sorting

* **Modified Binary Search:** On sorted arrays, rotated arrays, or answer spaces (e.g., Search in Rotated Sorted Array, Koko Eating Bananas).
* **Top-K / Heap Pattern:** Kth smallest/largest element or streaming data (e.g., K Closest Points to Origin, Find Median from Data Stream).
* **Intervals:** Merging, inserting, or overlapping intervals (e.g., Merge Intervals, Meeting Rooms II).

---

## 3. Trees & Graphs

* **Tree BFS (Level-Order / Snapshot):** Wave-by-wave traversal using queues (e.g., Binary Tree Level Order Traversal, Zigzag Traversal).
* **Tree DFS (Pre/In/Post Order Recursion):** Bottom-up value returning or top-down path tracking (e.g., Lowest Common Ancestor, Diameter of Binary Tree).
* **Graph BFS / Shortest Path:** Unweighted shortest path or multi-source BFS (e.g., Rotting Oranges, Word Ladder).
* **Graph DFS / Backtracking:** Path finding, connected components, or grid traversal (e.g., Number of Islands, Clone Graph).
* **Topological Sort (Kahn’s Algorithm / DFS):** Directed Acyclic Graphs (DAG) for dependency resolution (e.g., Course Schedule I & II).
* **Union-Find (Disjoint Set Union - DSU):** Dynamic connectivity, cycle detection in undirected graphs (e.g., Redundant Connection, Number of Provinces).

---

## 4. Subsequence, String Matching & Advanced Data Structures

* **Subsequence Index Lookup (Binary Search / Buckets):** Order-preserving character index mapping (e.g., LeetCode 792 - Number of Matching Subsequences).
* **Monotonic Stack / Queue:** Next Greater/Smaller Element or boundary tracking (e.g., Daily Temperatures, Trapping Rain Water).
* **Trie (Prefix Tree):** String prefix lookups and autocomplete patterns (e.g., Implement Trie, Word Search II).

---

## 5. Dynamic Programming & Backtracking

* **Combinatorial Backtracking:** Subsets, Permutations, Combinations with pruning (e.g., Subsets II, Combination Sum).
* **1D / 2D Grid DP:** State transitions on linear sequences or grids (e.g., House Robber, Unique Paths, Longest Common Subsequence).
* **0/1 & Unbounded Knapsack DP:** Choice-based DP with capacity limits (e.g., Partition Equal Subset Sum, Coin Change).
* **Interval / Sequence DP:** DP over ranges or sub-intervals (e.g., Longest Palindromic Substring, Matrix Chain Multiplication).