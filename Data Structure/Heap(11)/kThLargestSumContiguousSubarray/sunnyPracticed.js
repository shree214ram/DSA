class minHeap {

    constructor() {
        this.heap = []
    }
    parent(i) {
        return Math.round((i - 1) / 2)
    }
    left(i) {
        return 2 * i + 1
    }
    right(i) {
        return 2 * i + 2
    }
    swap(a, b) {
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    add(value) {
        this.heap.push(value)
        const lastIndex = this.heap.length - 1;
        this.bubbleUp(lastIndex);
    }

    bubbleUp(last) {
        let currentIndex = last;
        while (currentIndex > 0) {
            const currentValue = this.heap[last];
            const parentIndex = this.parent[last];
            const parentValue = this.heap[parentIndex];
            if (parentValue > currentValue) {
                swap(last, parentIndex)
            }
            currentIndex = parentIndex;
        }
    }

    bubbleDown(root) {
        console.log("Root Index", root)
        const rootValue = this.heap[root];
        console.log("rootValue", rootValue)
        const leftIndex = this.left(root);
        console.log("leftIndex", leftIndex)
        const leftValue = this.heap[leftIndex];
        console.log("leftValue", leftValue)
        const rightIndex = this.right(root);
        console.log("rightIndex", rightIndex)
        const rightValue = this.heap[rightIndex];
        console.log("rightValue", rightValue)
        let minimum = root
        if (rootValue > leftValue) {
            minimum = leftIndex
            console.log("rootValue > leftValue")
        } else if (rootValue > rightValue) {
            minimum = rightIndex
            console.log("rootValue > rightValue")
        }
        this.swap(root, minimum)
        console.log("After Swap", this.heap)
    }


    removeMin(value) {
        this.heap.push(value);
        console.log("removeMin ==After push sum in Heap= ", mh.heap)
        const lastIndex = this.heap.length - 1
        let temp = this.heap[0];
        this.heap[0] = this.heap[lastIndex]
        this.heap[lastIndex] = temp
        console.log("After swap sum in Heap= ", mh.heap)

        for (let i = 0; i < k; i++) {
            this.bubbleDown(i)
            console.log("=====>After bubbleDown Heap= ", mh.heap)
        }


        this.heap.pop()
        console.log("After pop sum in Heap= ", mh.heap)

    }

}
//Ye program galat he sahi kThLargestSumContiguousSubarray.js file me he 
function maxSum(givenArray, mh, k) {
    for (let i = 0; i < givenArray.length; i++) {
        let sum = givenArray[i]
        console.log("givenArray[i] = ", givenArray[i])
        console.log("Initial sum = ", sum)
        for (let j = i; j < givenArray.length; j++) {
            sum += givenArray[j]
            console.log("givenArray[j] = ", givenArray[j])
            console.log("After Add sum = ", sum)
            if (mh.heap.length < k) {
                mh.add(sum)
                console.log("After Add sum in Heap= ", mh.heap)

            } else {
                mh.removeMin(sum)
            }
        }
    }
    console.log("mh.heap = ", mh.heap)
    console.log("Kth Largest Sum = ", mh.heap[0])
}
const mh = new minHeap();
const k = 3;
const givenArray = [1, 9, 3, 7, 6, 5];
maxSum(givenArray, mh, k);
