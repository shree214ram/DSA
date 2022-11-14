//Popular Coding Interview Question - Minimum Meeting Rooms (Sorting, Heaps)

class minHeap {

    constructor() {
        this.heap = []
    }
    parent(i) {
        return Math.round(((i - 1)) / 2)
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
    empty() {
        return this.heap.length == 0
    }
    bubbleDown(rootIndex) {
        const rootValue = this.heap[rootIndex]
        const leftIndex = this.left(rootIndex)
        const leftIndexValue = this.heap[leftIndex]
        const rightIndex = this.right(rootIndex)
        const rightIndexValue = this.heap[rightIndex]
        let minimum = rootIndex
        if (rootValue > leftIndexValue) {
            minimum = leftIndex
        } else if (rootValue > rightIndexValue) {
            minimum = rightIndex
        }
        if (minimum != rootIndex) {
            this.swap(minimum, rootIndex);
            this.bubbleDown(minimum);
        }
    }

    bubbleUp(index) {
        let currentIndex = index;

        while (currentIndex > 0) {
            const currentIndexValue = this.heap[currentIndex]
            const parentIndex = this.parent(currentIndex)
            const parentIndexValue = this.heap[parentIndex]
            if (currentIndexValue < parentIndexValue) {
                this.swap(currentIndex, parentIndex)
            }
            currentIndex = parentIndex;
        }
    }
    add(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1)
    }
    removeTop() {
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop();
        this.bubbleDown(0)
    }
}
const GivenArray = [[1, 3], [2, 4], [3, 7], [4, 6], [5, 6], [2, 3]]
                //    R1     R3      R1    R2      R3    R2 

//first sort all the interval according to start time 
const sortedInterval = GivenArray.sort((a, b) => {
    return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]
})

//push in min heap first interval 
const mh = new minHeap()
mh.add(sortedInterval[0][1])
for (let i = 1; i < sortedInterval.length; i++) {
    const Top = mh.heap[0] // Old bande ka ending Time 
    //if current interval start time is greater then Top Element End Time 

    // Current Bande ka start time agar old bande ka ending Time se agar bada he means we can reuse the same Room 
    if (sortedInterval[i][0] >= Top) {
        mh.removeTop()
    }
    //Add new element 
    mh.add(sortedInterval[i][1])
}
console.log("total room=>", mh.heap.length)