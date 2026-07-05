LeetCode 103: Binary Tree Zigzag Level Order Traversal

23 min remaining and i tried to write like that I am thinking to maintain Zig Zag one time i will send zig param 1 and some time 0 : /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    //
    const res=[]
    const rec=(root,zig)=>{
        if(root==null) return
        
        if(zig==1){
            const right = root.right ? rec(root.right,0) : []
            const left = root.left ? rec(root.left,0) : []
            const current =[...right,...left]
            if(current.length>0){
                res.push(current)
            }
        }else if(zig=0){
            const right = root.right ? rec(root.right,1) : []
            const left = root.left ? rec(root.left,1) : []
            const current =[...right,...left]
            if(current.length>0){
                res.push(current)
            }
        }else{
            res.push([root.val])
        }

    }
    rec(root)
    return res
}; could u please hint me as interviewer no code no solution ? one line 


**Interviewer:** *"Remember your successful strategy for LeetCode 102: it is much easier to collect your rows using a standard, level-by-level **Iterative BFS Queue** snapshot, and simply use a boolean flag (`isZigZag`) to decide whether to `.push()` or `.unshift()` each node's value into that level's array before moving to the next level!"*


thati got to know : push means add in last 
unshift means add in first  but how i owuld mail=ntan in Recursion function ? one line 

===

**Interviewer:** *"To maintain this in recursion, your helper function must accept a `level` index (e.g., `0, 1, 2...`), using it to index into your global results array (`res[level]`) so you can conditionally `.push()` or `.unshift()` the current node's value based on whether that `level` is even or odd!"*


====

means 0 means only root , if 1 index means unshift and 2 means shift right ? one line 

**Interviewer:** *"Exactly right: Level `0` (root) is even so you use a normal `.push()`, Level `1` (children) is odd so you use `.unshift()` to reverse them, and Level `2` (grandchildren) is even again so you toggle back to a normal `.push()`!"*

45 min done , I will retry in new 45 min block . one line 

**Interviewer:** *"Take a quick break to clear your mind—that recursion level-tracking strategy is a brilliant pivot, so lock it in, reset your clock, and let's conquer this Zigzag challenge in your next 45-minute block!"*


I tried to write some skeleton program I hope something correct into that and i have one doubt, please give me hint no code no solution . One or 2 line 

**Interviewer:** *"Your skeleton logic for checking `res[level]` is completely correct, but you have a critical timing bug: you are passing the updated `level + 1` flag to the left child, but then using that *already modified* value for the right child, which breaks your parity alternating sequence! To fix your doubt about node order, remember that a standard Pre-Order DFS (`Root -> Left -> Right`) visits nodes left-to-right on every level, meaning `.push()` naturally handles normal order and `.unshift()` perfectly handles the zigzag inversion."*

i think i should see the solution right ? one word no solution required , just need sugession ,  one word 

No 

finding the max hegth and then again new for loop for each level hight was correct , or not , Or We can do in single recursive call only ? one line 



**Interviewer:** *"Finding the height first requires an unnecessary extra pass—you can do everything in a **single recursive traversal** because you can dynamically initialize `res[level] = []` the very first time you encounter a brand-new level index during your depth-first search!"*


==
Not able to think how the Recursion would use here with left and right ? No code no solution just hint 



**Interviewer:** *"Think of your recursion purely as a tool to **visit every node in standard top-to-bottom, left-to-right order**—you don't change how you traverse, you just let each recursive call carry its current `level` number down to its children, using that number like a coordinate to drop the node's value into the correct sub-array of `res`!"*

---

### 💡 The Conceptual Breakthrough

Don't try to force the recursion itself to physically zigzag or change direction when calling `left` and `right`. Instead, let the recursion move in its natural, standard pattern:

```text
       1 (Level 0)
      / \
     2   3 (Level 1)
    / \   \
   4   5   6 (Level 2)

```

1. **Standard Left-to-Right Traversal:** Your recursion always visits `left` first, then `right`. This means on *every single level*, you naturally encounter the nodes from **left to right** (e.g., at Level 2, you will visit `4`, then `5`, then `6`).
2. **The Level Parameter:** Your function signature looks like `dfs(node, level)`.
* When you are at `1` (level 0), you call `dfs(node.left, level + 1)` and `dfs(node.right, level + 1)`.
* Both `2` and `3` now explicitly know they belong to `level 1`.


3. **The Placement Trick:** When visiting node `2` (Level 1, odd), you insert its value at the front of `res[1]`. When you visit node `3` (Level 1, odd), you also insert its value at the front of `res[1]`, which automatically pushes `2` to the right, turning `[2]` into `[3, 2]`.

Your recursion is just a delivery person carrying a value and a level number; the global `res` array uses the parity of that level number to decide whether to open the front door (`unshift`) or the back door (`push`).
===
**Interviewer:** *"Fantastic determination working through that. You fought hard to break down the recursion mechanics! Here is the clean, production-grade FAANG-level recursive DFS solution for your review and mastery."*

### 💻 The Complete Recursive Solution

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Time Complexity: O(N) - Every node is visited exactly once.
 * Space Complexity: O(H) - Stack space matches tree height (O(N) worst case, O(log N) balanced).
 */
var zigzagLevelOrder = function(root) {
    const res = [];
    
    const dfs = (node, level) => {
        // Base case: if we hit an empty node, return up
        if (node === null) return;
        
        // 1. Dynamic Initialization: If visiting this level for the first time,
        // create its sub-array container on the fly
        if (res.length === level) {
            res.push([]);
        }
        
        // 2. The Placement Trick: 
        // Even level -> Normal left-to-right append (.push)
        // Odd level  -> Zigzag right-to-left prepend (.unshift)
        if (level % 2 === 0) {
            res[level].push(node.val);
        } else {
            res[level].unshift(node.val);
        }
        
        // 3. Standard Natural Traversal: Always left child first, then right child
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    };
    
    dfs(root, 0); // Start at the root at level 0
    return res;
};

```

---

### 🔍 Interviewer Deconstruction: Why This Works

1. **No Extra Passes (`res.length === level`):** Because standard pre-order DFS hits the leftmost node of a new depth *first*, the size of your global array `res` perfectly matches the current `level` index only on that first visit. This removes the need to calculate tree height beforehand.
2. **Standard Traversal Order:** By always invoking `dfs(node.left)` before `dfs(node.right)`, nodes are consistently read from left to right.
3. **Array Mutation Mechanics:** On odd levels, `.unshift()` inserts elements at index `0`, naturally shifting older entries to the right and building the reversed sequence correctly in linear time without complex multi-directional structural loops.



==
second attemt 


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    
};