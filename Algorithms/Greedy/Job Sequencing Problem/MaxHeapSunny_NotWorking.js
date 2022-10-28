//12:10
class maxheap {
    constructor() {
        this.heap = []
    }
    empty() {
        return this.heap.length == 0
    }
    add(value) {
        this.heap.push(value);

        this.bubbledUp(this.heap.length - 1)
    }
    left(i) {
        return 2 * i + 1
    }
    right(i) {
        return 2 * i + 2
    }
    parent(i) {
        return Math.randum((i - 1) / 2)
    }
    swap(a, b) {
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    bubbledUp(i) {

        let currentIndex = i
        while (currentIndex > 0) {
        	console.log(this.heap,"this.heap")
            let currentIndexxValue = this.heap[currentIndex]
            const parentIndex = this.parent(currentIndex)
            const parentIndexValue = this.heap[parentIndex];
            if (parentIndexValue < currentIndexxValue) {
                this.swap(parentIndex, currentIndex);
                currentIndex = parentIndex
            }
        }
    }
    removeTop() {
        let topElement = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop(); // remove top
        this.bubbledDown(0)
    }
    bubbledDown(i) {
        let currentIndex = i
        let currentIndexxValue = this.heap[currentIndex]

        let leftIndex = this.left(currentIndex)
        let leftIndexValue = this.heap[leftIndex]
        let rightIndex = this.right(currentIndex)
        let rightIndexValue = this.Heap[rightIndex]
        let latestCurrent = currentIndex

        if (currentIndexxValue < leftIndexValue) {
            latestCurrent = leftIndex

        } else if (currentIndexxValue < rightIndexValue) {
            latestCurrent = rightIndex
        }
        if (latestCurrent !== currentIndex) {
            this.swap(latestCurrent, currentIndex)
            this.bubbledDown(latestCurrent)
        }
    }
}

//12:10
let Arr = [
    [1, 2, 100],
    [2, 1, 19],
    [3, 2, 27],
    [4, 1, 25],
    [5, 1, 15]
]
// 1    2
// 27  100
// sort O(nlogn)
//2 loop 
//O(n2) , O(n) Map 

// Max Heap 

//Sort asc according to Deadline 
Arr.sort((a, b) => a[1] - b[1])

/* sorted as per deadline 
[
    [2, 1, 19],
    [4, 1, 25],
    [5, 1, 15]
    [3, 2, 27],
    [1, 2, 100],
]
*/

//Max Heap 
const mh = new maxheap();
//Add Max Deadline Value in Heap and then check 
mh.add(Arr[Arr.length - 1][2])
console.log(mh,"mh")
// if any next element profit is greater than current so remove it and push also in 
for (let i = Arr.length - 1; i > 0; i--) {
    const currentValue = Arr[i][2]
    while (!mh.empty()) {
        const Top = mh.heap[0]
        if (Top < currentValue) {
            mh.removeTop()
        }
        mh.add(currentValue)
    }
}
console.log(mh)
