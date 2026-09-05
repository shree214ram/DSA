The difference comes down to **2-Way (Lomuto)** vs. **3-Way (Dutch National Flag)** partitioning and why you swap the pivot to the end in 2-way partitioning:

* **Why swap to the end `[points[pivotIndex], points[r]]`?** In Lomuto's 2-Way Partitioning, you temporarily park the pivot element at the far right (`r`) so it stays out of the way while your loop scans and rearranges all remaining elements. Once the loop finishes, you swap the pivot back into its exact final sorted spot `i`.
* **Why use 3-Way (Dutch National Flag) instead?** 3-Way partitioning splits the array into three regions: `< pivot`, `== pivot`, and `> pivot`. It does **not** move the pivot to `r` because all elements equal to the pivot naturally get grouped in the middle `[lt ... gt]`.

Both templates achieve the exact same goal, but here is how they compare so you can choose one pattern and stick with it:

| Feature | 2-Way Partitioning (Lomuto) | 3-Way Partitioning (Dutch National Flag) |
| --- | --- | --- |
| **Pivot Strategy** | Swaps pivot to `r` during loop, then swaps it to final index `i`. | Keeps pivot in place; groups all equal elements together in `[lt ... gt]`. |
| **Pointers Used** | 2 pointers (`i`, `j`). | 3 pointers (`lt`, `i`, `gt`). |
| **Best Used For** | General QuickSelect with mostly unique elements. | Datasets with heavy duplicate values (prevents $O(N^2)$ degradation). |
| **Target Check** | Checks if `i === k`. | Checks if `target >= lt && target <= gt`. |

### Standardizing on 3-Way (Dutch National Flag)

If you want to use the **3-Way (lt, gt) template** for *K Closest Points to Origin* (LeetCode 973) just like you did for *Kth Largest* (LeetCode 215), it works identically. You only need to compare distances instead of raw numbers:

```javascript
var kClosest = function (points, k) {
    const dist = (p) => p[0] * p[0] + p[1] * p[1];
    let l = 0, r = points.length - 1;

    while (l <= r) {
        const pivotIndex = Math.floor(Math.random() * (r - l + 1)) + l;
        const pivotVal = dist(points[pivotIndex]);

        let lt = l, i = l, gt = r;
        while (i <= gt) {
            const curDist = dist(points[i]);
            if (curDist < pivotVal) {
                [points[i], points[lt]] = [points[lt], points[i]];
                lt++;
                i++;
            } else if (curDist > pivotVal) {
                [points[i], points[gt]] = [points[gt], points[i]];
                gt--;
            } else {
                i++;
            }
        }

        // Target range check: We need the first k closest elements (indices 0 to k-1)
        if (k - 1 >= lt && k - 1 <= gt) {
            return points.slice(0, k);
        } else if (k - 1 < lt) {
            r = lt - 1;
        } else {
            l = gt + 1;
        }
    }
};

```

### Recommendation for Interviews

Stick to **3-Way (Dutch National Flag)** as your single unified template. It handles duplicates gracefully without worst-case $O(N^2)$ slowdowns, and the core partitioning logic remains 100% identical across all QuickSelect problems.