# Floyd’s Cycle Detection (Tortoise & Hare) in LeetCode 287

i just randumly oicked one problem : /**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    /*
        1. first thing came in my mind is Hash Map But that wuld not work because of Constant space 
        2. Mod method i am thinking 
            for(){
             a[arr[%10]] = arr[arr[i]%10] +1 
            }
            But that is also not working because we have to array
        3. sort and then check if current already came in i-1 ? but that would take logn sorting ? 
        4.   1 to n 
                1 2 3 4 5
                let ourSum=0
                for(1 to n(4) ){
                    1
                    2
                    3
                    4
                    sum+=i
                }

                sum- 
    */
    const givenSum=nums.reduce((v,s)=>v+s,0)
    console.log(givenSum,"givenSum")
    let sum=0
    for(let i=1;i<=nums.length-1;i++){
        sum+=nums[i]
    }
    console.log(sum,"sum")

    return givenSum-sum
}; nums =

[3,1,3,4,2]and nums =

[3,3,3,3,3] passed but nums =

[1,3,4,2,2] ===nums =

[1,3,4,2,2,5] failed ? one line 

Sum math fails when a duplicate appears more than twice or when non-duplicate values shift the sum, so LeetCode 287 (Find the Duplicate Number) must be solved in $O(N)$ time and $O(1)$ space using **Floyd's Cycle Detection (Tortoise and Hare)** because the array indices and values form a linked list with a cycle.


have we studied in our Journey ? I think that Floyd cycle is The Graph Algo which i guess not studied right ? one line

Floyd's Cycle Finding Algorithm (Tortoise and Hare) is actually a Fast & Slow Pointer pattern—we haven't covered it in detail yet in your sheets, but it's fundamentally a two-pointer technique applied to implicit linked lists, not a full graph traversal algorithm like DFS/BFS.

in which sheet i should add it ? one line

Add it under your Two Pointers / Fast & Slow Pointers sheet, as LeetCode 287 uses slow and fast pointers to find the cycle entrance in O(N) time and O(1) space.


### Floyd’s Cycle Detection (Tortoise & Hare) in LeetCode 287

In **LeetCode 287 (Find the Duplicate Number)**, you are given an array `nums` containing $n + 1$ integers where each integer is in the range $[1, n]$. There is only **one repeated number**, but it can be repeated multiple times.

---

### The Fundamental Invariant: Array as an Implicit Linked List

Because the values in the array are constrained to $1 \le \text{nums}[i] \le n$, every value in the array points to a valid index inside the array.

If we treat each array index $i$ as a node and the value $\text{nums}[i]$ as a pointer to the next node ($\text{node.next} = \text{nums}[i]$), the array forms an **implicit linked list**.

* Because a duplicate number exists, **multiple indices point to the same value/index**.
* In graph terms, a node with an **in-degree $\ge 2$** creates a **cycle**.
* The duplicate number is precisely the **entrance node to that cycle**.

---

### Visual Walkthrough

Consider `nums = [1, 3, 4, 2, 2]`:

* $\text{Index } 0 \to \text{nums}[0] = 1$
* $\text{Index } 1 \to \text{nums}[1] = 3$
* $\text{Index } 3 \to \text{nums}[3] = 2$
* $\text{Index } 2 \to \text{nums}[2] = 4$
* $\text{Index } 4 \to \text{nums}[4] = 2$

```
Index:    0 ---> 1 ---> 3 ---> 2 ---> 4
Value:    1      3      2      4      2
                        ^             |
                        |_____________|  (Cycle at 2)

```

Both index `3` and index `4` store the value `2`. Therefore, `2` is the entry point of the cycle, which represents the repeated number.

---

### Why Math Sum Fails Where Floyd's Succeeds

| Constraint / Edge Case | Sum-Math ($\sum \text{given} - \sum 1..n$) | Floyd's Cycle Detection |
| --- | --- | --- |
| Single duplicate appearing twice (`[1, 3, 4, 2, 2]`) | Works | Works |
| Duplicate appearing $>2$ times (`[3, 3, 3, 3, 3]`) | Fails (Sum offset incorrect) | Works |
| Array mutated | No mutation needed | No mutation needed |
| Auxiliary Space | $O(1)$ | $O(1)$ |
| Time Complexity | $O(N)$ | $O(N)$ |

---

### Mathematical Proof: Why Phase 2 Works

Let:

* $p$ = distance from head (index 0) to the cycle entrance.
* $c$ = length of the cycle.
* $k$ = distance from cycle entrance to the meeting point of slow and fast pointers inside the cycle.

```
Head (Index 0) ─── p ───► Entrance ─── k ───► Intersection
                           ▲                     │
                           └───────── c - k ─────┘

```

1. **At intersection (Phase 1):**
* $\text{Distance traveled by Slow} = p + k$
* $\text{Distance traveled by Fast} = p + k + m \cdot c$ (where $m$ is the number of full loops around the cycle made by the fast pointer).


2. **Since Fast moves at twice the speed of Slow:**

$$2 \cdot \text{Distance}_{\text{slow}} = \text{Distance}_{\text{fast}}$$


$$2(p + k) = p + k + m \cdot c$$


$$p + k = m \cdot c$$


$$p = m \cdot c - k = (m - 1)c + (c - k)$$


3. **Phase 2 Step:**
* $c - k$ is the remaining distance from the intersection point to the cycle entrance.
* The equation $p = (m - 1)c + (c - k)$ proves that starting one pointer at the **Head** ($p$ steps) and another pointer at the **Intersection** ($c - k$ steps plus full cycle loops) will cause both pointers to meet **exactly at the cycle entrance**.



---

### JavaScript Implementation

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Phase 1: Detect Cycle Intersection using Fast & Slow pointers
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];          // Move 1 step
        fast = nums[nums[fast]];    // Move 2 steps
    } while (slow !== fast);

    // Phase 2: Find the Entrance of the Cycle (Duplicate Number)
    let ptr1 = nums[0];
    let ptr2 = slow;

    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];  // Move 1 step from Head
        ptr2 = nums[ptr2];  // Move 1 step from Intersection
    }

    return ptr1; // Or ptr2, both sit on the cycle entrance
};

```

---

### Complexity Analysis

* **Time Complexity:** $\mathcal{O}(N)$ — Phase 1 traverses at most $2N$ steps to find the intersection; Phase 2 traverses at most $N$ steps to locate the entrance.
* **Space Complexity:** $\mathcal{O}(1)$ auxiliary space — Only two pointer variables (`slow` and `fast`) are tracked in memory.