class MinHeapNode {
    constructor(Value, row, col) {
        this.data = Value;
        this.row = row;
        this.col = col;
    }
}
class MinHeap {
    heap = []
    constructor(Arr, k) {
        this.heap = Arr;

        for (let i = 0; i < k; i++) {
            this.bubbleDown(i);
        }
    }
    left(i) {
        return 2 * i + 1;
    }
    right(i) {
        return 2 * i + 2;
    }
    parent(i) {
        return Math.round((i - 2) / 2);
    }
    swap(a, b) {
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    bubbleDown(root) {
        const rootValue = this.heap[root]?.data
        const leftIndex = this.left(root)
        const leftIndexValue = this.heap[leftIndex]?.data
        const rightIndex = this.right(root)
        const rightIndexValue = this.heap[rightIndex]?.data
        let minimum = root
        if (leftIndex < this.heap.length && rootValue > leftIndexValue) {
            minimum = leftIndex
        } else if (leftIndex < this.heap.length && rootValue > rightIndexValue) {
            minimum = rightIndex
        }
        if (minimum !== root) {
            this.swap(minimum, root)
            this.bubbleDown(0) //yaha par mistake he this.bubbleDown(minimum)
        }
    }
    empty() {
        return this.heap.length == 0
    }
}
function mergeKSortedArray(arr, k) {
    const Answer = []
    //1.Build a min hip of size k
    const newArray = []
    for (let i = 0; i < k; i++) {
        const newNode = new MinHeapNode(arr[i][0], i, 0)
        newArray.push(newNode)
    }
    const mh = new MinHeap(newArray, k);
    while (!mh.empty()) {

        //2.pickup top
        const top = mh.heap[0];

        //3. popout the last 
        //mh.heap.pop();

        //3. push in Answer newArray
        const rootData = top.data;
        Answer.push(rootData)

        //4. Add new element of same array if exist 
        let row = top.row;
        let col = top.col;
        let nextCol = col + 1;
        if (arr[row][nextCol]) {
            top.data = arr[row][nextCol]
            top.row = row
            top.col = nextCol
            mh.heap[0] = top
            mh.bubbleDown(0);
        } else {
            break;
        }

    }
    console.log(mh.heap[0], "Final")
    console.log(mh.heap, "Final")
    mh.heap.shift();
    mh.bubbleDown(0);
    Answer.push(mh.heap[0].data)
    Answer.push(mh.heap[1].data)

    //Answer.push(mh.heap[2].data)
    console.log(Answer, "Final Result;")

}
const arr = [[2, 8, 9, 12], [1, 4, 7, 13], [3, 5, 11, 14]]
const k = 3
//1, 2, 3, 4, 5, 7, 8, 9, 11, 12 , 13, 14
mergeKSortedArray(arr, k)
//2,1,3 ==>1
//2,4,3 ==>2
//2,4,3 ==>2



