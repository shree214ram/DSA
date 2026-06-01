703. Kth Largest Element in a Stream
Easy
Topics
premium lock icon
Companies
You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.

Implement the KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.
 

Example 1:

Input:
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

Output: [null, 4, 5, 5, 8, 8]

Explanation:

KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // return 4
kthLargest.add(5); // return 5
kthLargest.add(10); // return 5
kthLargest.add(9); // return 8
kthLargest.add(4); // return 8

Example 2:

Input:
["KthLargest", "add", "add", "add", "add"]
[[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]

Output: [null, 7, 7, 7, 8]

Explanation:

KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
kthLargest.add(2); // return 7
kthLargest.add(10); // return 7
kthLargest.add(9); // return 7
kthLargest.add(9); // return 8
 

Constraints:

0 <= nums.length <= 104
1 <= k <= nums.length + 1
-104 <= nums[i] <= 104
-104 <= val <= 104
At most 104 calls will be made to add.
 

/**
 * @param {number} k
 * @param {number[]} nums
 */
 const res =[]
let hp=[];
let n=0
var KthLargest = function(k, nums) {

const A=nums;
    if(A.length==0){
        return res
    }
    console.log(A);
    console.log(k,"K")
   for(let i=0;i<k;i++){
        hp.push(A[i]);
   }
   console.log(hp,"first k elemnt")
    n=k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    const newHp=hp;
    console.log(this,"current")
    console.log(val,"value")
    newHp.push(val);
    newHp.sort((a,b)=>b-a);
    console.log(newHp,"Added element",val)
    newHp.pop();
    console.log(newHp,"Removed element");
    hp=newHp;
    console.log(hp[n-1],"returning hp[n-1]");
    return hp[n-1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


today i tried with 703 , and I tried the Heap Approach : /**

 * @param {number} k

 * @param {number[]} nums

 */

 const res =[]

let hp=[];

let n=0

var KthLargest = function(k, nums) {



const A=nums;

    if(A.length==0){

        return res

    }

    console.log(A);

    console.log(k,"K")

   for(let i=0;i<k;i++){

        hp.push(A[i]);

   }

   console.log(hp,"first k elemnt")

    n=k;

};



/** 

 * @param {number} val

 * @return {number}

 */

KthLargest.prototype.add = function(val) {

    const newHp=hp;

    console.log(this,"current")

    console.log(val,"value")

    newHp.push(val);

    newHp.sort((a,b)=>b-a);

    console.log(newHp,"Added element",val)

    newHp.pop();

    console.log(newHp,"Removed element");

    hp=newHp;

    console.log(hp[n-1],"returning hp[n-1]");

    return hp[n-1];

};



/** 

 * Your KthLargest object will be instantiated and called as such:

 * var obj = new KthLargest(k, nums)

 * var param_1 = obj.add(val)

 */



 but its failed in ["KthLargest","add","add","add","add"] [[4,[7,7,7,7,8,3]],[2],[10],[9],[9]]


 The reason your code is failing is due to **how you are managing the Heap size** and **global variable pollution**.

In LeetCode, never use global variables like `let hp = []` outside the constructor. If the test runner calls your class multiple times, the second test will have "leftover" data from the first test, causing a total mess!

### The Logic Errors in your Code:

1. **Heap Size:** You are only taking the first `k` elements of `nums`. But `nums` might already have 100 elements. You need to process **all** elements in the initial array to find the current $k^{th}$ largest.
2. **Sort Order:** For $k^{th}$ **Largest**, you actually need a **Min-Heap**.
* If you keep the $k$ largest elements in a Min-Heap, the **smallest** of those $k$ elements (at the top) is the $k^{th}$ largest overall.


3. **Global Variables:** By putting `hp` and `n` outside the function, they persist across different test cases.

---

### The Correct "Interview-Style" Fix

Since we are in JavaScript and want to avoid writing a full `heapify` function for a quick solution, we use an array but keep it **inside the class instance** using `this`.

```javascript
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    // 1. Sort the initial array descending
    this.hp = nums.sort((a, b) => b - a).slice(0, k); 
    // We only keep the top 'k' elements. 
    // Because we sort descending, the kth largest is at the end: this.hp[k-1]
};

/** * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    // 2. Add the new value
    this.hp.push(val);
    
    // 3. Re-sort (Descending)
    this.hp.sort((a, b) => b - a);
    
    // 4. If we have more than k elements, remove the smallest one
    if (this.hp.length > this.k) {
        this.hp.pop(); // Removes the smallest because it's sorted High to Low
    }
    
    // 5. The kth largest is now the last element in our array of size k
    return this.hp[this.k - 1];
};

```

### Why this works for your failing case:

Your failing case `[4,[7,7,7,7,8,3]]` means $k=4$.

* Initial Top 4: `[8, 7, 7, 7]`
* Add `2`: Array becomes `[8, 7, 7, 7, 2]`. Pop `2`. Return `this.hp[3]` -> `7`.
* Add `10`: Array becomes `[10, 8, 7, 7, 7]`. Pop `7`. Return `this.hp[3]` -> `7`.

### FAANG Fact: "The Hidden Min-Heap"

In a real interview, you should tell the interviewer:

> "I am using a sorted array here for simplicity in JavaScript, but logically this represents a **Min-Heap of size K**. In a Min-Heap, the smallest of the 'top k' elements is always at the root, allowing us to access the $k^{th}$ largest in $O(1)$ and update in $O(\log k)$."

### Complexity check:

* **Your Code:** $O(N \log N)$ initial + $O(M \cdot k \log k)$ where $M$ is the number of `add` calls.
* **True Heap:** $O(N \log k)$ initial + $O(M \log k)$ update.

**Staff Tip:** Notice that in the `add` function, if the new `val` is smaller than `this.hp[k-1]`, you don't even need to sort or push it! It wouldn't make it into the top $K$ anyway. Adding that one `if` statement shows great optimization thinking.
 

 I have corrected the solution i moved hp and k into this means its own constructor , and i saw many cases passed 

 /**
 * @param {number} k
 * @param {number[]} nums
 */
 
var KthLargest = function(k, nums) {

const A=nums;
    if(A.length==0){
        this.hp=[];
        this.k=k;
        return 
    }

    this.hp=A.sort((a,b)=>b-a).slice(0,k)
    this.k=k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    const newHp=this.hp;
    newHp.push(val);
    newHp.sort((a,b)=>b-a);
    if(newHp.length>this.k){
    newHp.pop();

    }
    this.hp=newHp;
    const n=this.k;
    return this.hp[n-1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

 But 

 Time Limit Exceed for a long data  what should I do 1) My solution is valids for FAANG Interview Because I will Explain at place of sorting I would use the Real Heap ? 2) Should I use Real Class of Heap at place of sorting to be run in Leetcode ? 

 Great work on the refactor! Moving the data into `this` is a crucial step for writing object-oriented JavaScript. To answer your two questions directly:

### 1. Is this valid for a FAANG Interview?

**Yes, with one condition.** You must explicitly state: *"I am using `Array.sort()` as a placeholder to demonstrate the logic. I am aware this makes the `add` operation **$O(K \log K)$** instead of the optimal **$O(\log K)$**. In a production environment, I would use a Min-Heap data structure."*

An interviewer cares more about your **intent** and **complexity analysis** than your ability to memorize a Heap class. However, if you just write the sorting code without explaining the bottleneck, they might think you don't know why it's slow.

### 2. Should I use a Real Heap to pass LeetCode?

**Yes.** LeetCode's "Time Limit Exceeded" (TLE) happens because they test your code with thousands of `add` calls and a large $K$.

* **Your current complexity:** $O(\text{calls} \times K \log K)$
* **Min-Heap complexity:** $O(\text{calls} \times \log K)$

When $K$ is 10,000, sorting every time is thousands of times slower than a heap.

---

### The "Mental Bridge" from Sort to Heap

To understand why a Min-Heap is better for the **Kth Largest** problem, look at this comparison:

| Action | Your Current Array Sort | Real Min-Heap |
| --- | --- | --- |
| **Add Element** | `push()` is $O(1)$ | `push()` + `bubbleUp` is **$O(\log K)$** |
| **Maintain Size** | `sort()` is **$O(K \log K)$** | (Automatic via heap property) |
| **Get Kth Largest** | `array[k-1]` is $O(1)$ | `peek()` root is **$O(1)$** |

### How to implement a "Real Heap" quickly in LeetCode

Since JavaScript doesn't have a built-in Heap, most candidates write a small helper class or use the "Bubble Up/Down" logic directly. Here is a condensed version of what that "Real Heap" logic looks like:

```javascript
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [];
    // Initialize heap with all numbers
    for (let x of nums) {
        this.add(x);
    }
};

KthLargest.prototype.add = function(val) {
    // Optimization: If heap is full and val is smaller than smallest, ignore it
    if (this.heap.length < this.k) {
        this.heap.push(val);
        this.bubbleUp();
    } else if (val > this.heap[0]) {
        this.heap[0] = val; // Replace root
        this.bubbleDown();
    }
    return this.heap[0]; // The root of a Min-Heap of size K is the Kth largest
};

// ... heapify methods (bubbleUp, bubbleDown) go here

```

### Summary for your next step:

1. **Keep your logic:** The logic of "Keep $K$ largest elements and return the smallest of them" is 100% correct.
2. **The Bottleneck:** `Array.sort()` is the reason for the TLE.
3. **The Fix:** Learn the **Min-Heap** structure. Even if you don't code it perfectly in the interview, being able to draw the tree and explain `bubbleUp/Down` is what moves you from "Hire" to "Strong Hire."

**Would you like to see the simple math for the `bubbleUp` and `bubbleDown` index calculations (the `2i + 1` logic)?**


======
I am trying to use Max Heap class by my own /**
 * @param {number} k
 * @param {number[]} nums
 */

class maxHeap {
    constructor() {
        this.data = []
    }

    add(value) {
        this.data.push(value)
        const lastIndex = this.data.length - 1
        this.bubbledUp(lastIndex)
    }
    bubbledUp(root) {
        let currentIndex = root
        while (currentIndex > 0) {
            const parentIndex = this.parent(currentIndex);
            if (this.data[parentIndex] < this.data[currentIndex]) {
                this.swap(parentIndex, currentIndex);

            }
            currentIndex = parentIndex
        }
    }
    parent(i) {
        return parseInt((i - 1) / 2)
    }
    left(i) {
        return 2 * i + 1
    }
    right(i) {
        return 2 * i + 2
    }
    removeTop() {
        const backTop = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.pop()
        this.bubbledDown(0)
    }
    bubbledDown(root) {
        let leftIndex = this.left(root);
        let rightIndex = this.right(root);

        let max = root;

        if (this.data[leftIndex] > this.data[root]) {
            max = leftIndex
        } else if (this.data[rightIndex] > this.data[root]) {
            max = rightIndex
        }

        if (max != root) {
            this.swap(max, root)
            this.bubbledDown(max)
        }
    }
    swap(a, b) {
        let temp = this.data[a];
        this.data[a] = this.data[b];
        this.data[b] = temp;
    }
    empty() {
        return this.data.length == 0
    }
}


var KthLargest = function (k, nums) {

    const A = nums;
    if (A.length == 0) {
        this.hp = [];
        this.k = k;
        return
    }
    //     console.log(A);
    //     console.log(k,"K")
    //    for(let i=0;i<k;i++){
    //         hp.push(A[i]);
    //    }
    //    console.log(hp,"first k elemnt")
    //     n=k;

    //this.hp=A.sort((a,b)=>b-a).slice(0,k)
    //console.log(this.hp,"first K elements")
    this.k = k
    const hp = new maxHeap();
    for (let i = 0; i < k; i++) {
        hp.add(A[i])
    }
    this.hp = hp
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    const newHp = this.hp;
    const n=this.k;
    // console.log(this,"current")
    // console.log(val,"value")
    /*newHp.push(val);
    newHp.sort((a,b)=>b-a);
    //console.log(newHp,"Added element",val)
    if(newHp.length>this.k){
    newHp.pop();

    }
    // console.log(newHp,"Removed element");
    this.hp=newHp;
    
    //console.log(this.hp[n-1],"returning hp[n-1]");
    */


    //heap 
    console.log(newHp,"newHp")
   newHp.add(val);
    /*if (newHp.length > this.k) {
        newHp.removeTop();
    }
    return this.hp[n - 1];*/
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

Just to pass my code in Leetcode but its failed at "newHp.add(val);"

Building your own Heap class is a massive step toward mastering DSA. However, your code is failing because of two high-level logic errors and a few "index out of bounds" bugs in your implementation.

Here is the breakdown of why it's failing and how to fix it.

### 1. The "Big" Logic Error: Max-Heap vs. Min-Heap

To find the **Kth Largest** element, you actually need a **Min-Heap**, not a Max-Heap.

* **Why?** If you maintain a Min-Heap of size $K$, the **smallest** element in that heap is actually the $k^{th}$ largest overall.
* **Example:** If $K=3$ and your heap has `[10, 20, 30]`, the 3rd largest is the minimum of that group (`10`).
* In your code, you are using a Max-Heap and trying to access `hp[n-1]`. In a heap, the $k^{th}$ index of the array is **not** the $k^{th}$ largest value. Only the **root (index 0)** is guaranteed to be the min/max.

### 2. Bugs in your `maxHeap` Class

There are three technical bugs in your helper functions:

* **`parent(i)`:** You used `parseInt((i - 1) / 2)`. In JavaScript, for negative numbers or edge cases, `Math.floor((i - 1) / 2)` is safer and standard.
* **`bubbledDown(root)`:** * **The Comparison:** You aren't checking if `leftIndex` or `rightIndex` actually exist within the array bounds. You are trying to compare `this.data[leftIndex]` even if it's `undefined`.
* **The Max Logic:** You are only comparing the root with the left, then the root with the right. You need to find the **largest of all three** (root, left, and right) and swap with that one.



---

### 3. Corrected Min-Heap Implementation for LeetCode

To pass, change your comparisons from `>` to `<` and fix the `bubbledDown` logic.

```javascript
class MinHeap {
    constructor() {
        this.data = [];
    }

    add(val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            // Min-Heap: Parent must be smaller than child
            if (this.data[parentIndex] > this.data[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    removeTop() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();

        const top = this.data[0];
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
        return top;
    }

    bubbleDown(index) {
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            // Check if left child exists and is smaller
            if (left < this.data.length && this.data[left] < this.data[smallest]) {
                smallest = left;
            }
            // Check if right child exists and is smaller
            if (right < this.data.length && this.data[right] < this.data[smallest]) {
                smallest = right;
            }

            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    size() {
        return this.data.length;
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = new MinHeap();
    
    for (let num of nums) {
        this.add(num);
    }
};

/** * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.add(val);
    // If heap size exceeds k, remove the smallest (the root)
    if (this.heap.size() > this.k) {
        this.heap.removeTop();
    }
    // The root of our Min-Heap is now the kth largest element
    return this.heap.data[0];
};

```

---

### Real Interview Fact:

If you write this full class in an interview, you have technically "won." But it's very time-consuming.

**My Wit Tip:** Writing a `bubbleDown` recursively is elegant, but using a `while(true)` loop (as shown above) is often easier to debug under pressure because you don't have to worry about the call stack or passing the `max/smallest` index correctly through recursion.

**Does the switch from Max-Heap to Min-Heap (and the index checking in `bubbleDown`) make sense for finding the "Largest" element?**