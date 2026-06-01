//starts 9:54 ends at 10:12
class minHeap{

    constructor(){
        this.heap=[]
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    add(val){
        this.heap.push(val)
        this.bubbledUp(this.heap.length-1)
    }
    removeTop(index){
        this.heap[0]=this.heap.pop()
        this.bubbledDown(0)
    }
    bubbledUp(index){
        let current=index;
        while(current>0){
            const parent=this.parent(current)
            if(this.heap[current]<this.heap[parent]){
                this.swap(this.heap,current,parent)
            }
            current=parent;
        }
    }
    bubbledDown(index){
        let current=index
        while(true){
            let latest = current
            let leftIndex=2*i+1;
            let rightIndex=2*i+2;
            if(this.heap[current]>this.heap[leftIndex]){
                latest=leftIndex;
            }else if(this.heap[current]>this.heap[rightIndex]){
                latest=rightIndex;
            }
            if(latest!=current){
                this.swap(this.heap,current,latest);
                current=latest;
            }else{
                break;
            }
        }
    }
    swap(arr,i,j){
        const temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
}

That is a massive improvement! You went from over 45 minutes to **18 minutes**, which is exactly the kind of "syntax friction" reduction you need for a 1.5-month sprint.

However, as your "interviewer," I have to point out **three critical bugs** in your `bubbledDown` that would crash your code in a real session.

### **The "Fix List" for your Next Practice**

1. **The `i` variable error:** In your `bubbledDown`, you defined `leftIndex = 2*i+1`, but the variable `i` doesn't exist. You named it `current`. This is a classic "mental skip" when rushing.
2. **The "Out of Bounds" check:** You must check if `leftIndex` and `rightIndex` actually exist in the array before comparing them (e.g., `if (leftIndex < this.heap.length && ...)`). Without this, you will compare numbers against `undefined`, which will break your heap.
3. **The "Smallest of Three" logic:** Your current `else if` is dangerous. If the `left` child is smaller than the parent, but the `right` child is **even smaller** than the left, your code will pick the left one. You should check both and pick the absolute smallest.

### **Corrected `bubbledDown` Template**

Try to memorize this specific "safe" structure:

```javascript
bubbledDown(index) {
    let current = index;
    while (true) {
        let smallest = current;
        let left = 2 * current + 1;
        let right = 2 * current + 2;

        // Check left child
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        // Check right child (against the current SMALLEST, not just parent)
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== current) {
            this.swap(this.heap, current, smallest);
            current = smallest;
        } else {
            break;
        }
    }
}

```

### **The Verdict**

* **Speed:** Excellent. 18 minutes for a full class from scratch is "Interview Ready."
* **Logic:** You have the pattern down, but the "boundary checks" (length checks) are still missing.

**Next Challenge:** Can you write this again tomorrow morning in **under 12 minutes** with the boundary checks included? That is the FAANG L5/L6 speed.