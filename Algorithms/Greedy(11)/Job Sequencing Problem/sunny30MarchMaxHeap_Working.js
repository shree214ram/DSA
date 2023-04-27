//12:41 12:53 1:1 
class Maxheap {
    constructor() {
        this.data = []
    }
    left(i) {
        return 2 * i + 1
    }
    right(i) {
        return 2 * i + 2
    }
    parent(i) {
        return Math.round(i - 1 / 2)
    }
    add(value) {
        this.data.push(value)
        this.bottomUp(this.data.length - 1)
    }
    bottomUp(root) {
        let current = root;
        let parentIndex = this.parent(current);

        while (current > 0 && this.data[parentIndex].profit < this.data[current].profit) {
            this.swap(parentIndex, current)
            current = parentIndex
        }

    }
    swap(parentIndex, current) {
        let temp = this.data[parentIndex];
        this.data[parentIndex] = this.data[current];
        this.data[current] = temp;
    }
    remove() {
        const temp = this.data[0];
        this.data.shift()
        this.upDown(0)
    }
    upDown(root) {
        let current = root;
        let leftIndex = this.left(root);
        let rightIndex = this.right(root);

        let max = current;
        if (this.data[current]?.profit < this.data[rightIndex]?.profit) {
            max = rightIndex
        } else if (this.data[current]?.profit < this.data[leftIndex]?.profit) {
            max = leftIndex
        }
        if (max != current) {
            swap(max, current)
            this.upDown(max)
        }
    }
}
class Job {
    constructor(a, b, c) {
        this.id = a;
        this.deadline = b;
        this.profit = c;

    }
}
const A = [
    new Job('a', 2, 100),
    new Job('b', 1, 19),
    new Job('c', 2, 27),
    new Job('d', 1, 25),
    new Job('e', 3, 15)
];

//1 max heap with profit
const heap = new Maxheap()
//sort via deadline
A.sort((a, b) => a.deadline - b.deadline)
const result = []

for (let i = A.length - 1; i >= 0; i--) {
    let slots = (i == 0) ? A[i].deadline : A[i].deadline - A[i - 1].deadline
    heap.add(A[i])
    console.log(A[i], slots)
    while (slots > 0 && heap.data.length > 0) {
        slots--
        const top = heap.data[0]
        result.push(top)
        heap.remove()
    }
}
result.sort((a, b) => a.deadline - b.deadline)
console.log(result)