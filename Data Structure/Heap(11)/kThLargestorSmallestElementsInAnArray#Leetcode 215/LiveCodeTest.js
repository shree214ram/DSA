// kth smallest element 

// 1. make the max heap for k element 
// 2. delete and add new element one by 
// 3. top will be the final anser 

class maxHeap {
    constructor() {
        this.heap = []
    }
    left(i) {
        return 2 * i + 1
    }
    right(i) {
        return 2 * i + 2
    }
    parent(i) {
        return parseInt((i - 1) / 2)
    }
    makeKMaxHeap(k, arr) {
        this.heap = arr.slice(0, k);
        for (let i = 0; i < k; i++) {
            this.bubbleDown(i);
        }
    }
    swap(a, b) {
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    bubbleDown(root) {
        const rootValue = this.heap[root]
        const leftIndex = this.left(root)
        const rightIndex = this.right(root)
        const leftValue = this.heap[leftIndex]
        const rightValue = this.heap[rightIndex]
        let minimum = root;
        if (rootValue < leftValue) {
            minimum = leftIndex;
        }
        if (rootValue < rightValue) {
            minimum = rightIndex;
        }
        this.swap(minimum, root)
    }
}

function kthSmallest(arr, k) {
    const mh = new maxHeap();
    //1. make the max heap for k element 
    mh.makeKMaxHeap(k, arr);
    //2. Add remaining element from the loop one by one 
    for (let i = k; i < arr.length; i++) {
        // If current Element is smaller than Top Element 
        //1. Add in last Because always Add in last , 
        //2. Swap Top and last element Becasue delete always from Top 
        //3. and then Remove Last element 
        if (arr[i] < mh.heap[0]) {
            let topElement = mh.heap[0]
            mh.heap.push(arr[i])
            mh.heap[mh.heap.length - 1] = topElement
            mh.heap[0] = arr[i]
            mh.heap.pop()
            mh.bubbleDown(0)
        }
    }

    console.log("Kth largest element is =>", mh.heap[0])
}

//driver code
const arr = [4, 6, 2, 1, 3, 5]
const k = 4;


kthSmallest(arr, k);
