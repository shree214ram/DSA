
class maxHeap {
    constructor() {
        this.heap = [];
    }
    parentIndex(i) {
        return Math.round((i - 1) / 2)
    }
    add(val) {
        this.heap.push(val);
        let currentIndex = this.heap.length - 1;
        const parentIndex = this.parentIndex(currentIndex);
        let i = currentIndex;

        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            const oldParent = this.heap[parentIndex]
            this.heap[parentIndex] = val
            this.heap[currentIndex] = oldParent
            currentIndex = parentIndex;
        }
    }

    removeTop() {
        const lastIndex = this.heap.length - 1;
        const lastValue = this.heap[lastIndex];
        const topElement = this.heap[0];
        this.heap[0] = lastValue
        this.heap[lastIndex] = topElement
        this.heap.pop();
        let i = 0
        //BubbleDown 
        while (i < this.heap.length) {
            const left = 2 * i + 1
            const right = 2 * i + 2
            let largest = i
            if (this.heap[i] < this.heap[left]) {
                largest = left
            } else if (this.heap[i] < this.heap[right]) {
                largest = right
            }
            this.swap(this.heap, i, largest)
            i++
        }
    }
    swap(A, a, b) {
        let temp = A[a]
        A[a] = A[b]
        A[b] = temp
    }
}
const myHeap = new maxHeap();
myHeap.add(1);
myHeap.add(6);
myHeap.add(3);
myHeap.add(5);
myHeap.add(2);
myHeap.add(4);

myHeap.removeTop();
myHeap.removeTop();

console.log(myHeap.heap, "Result")
/*

    6
   5 4
    3 2
      1

*/