
class CustomNode {

    constructor(value, row, col) {
        this.data = value
        this.row = row
        this.col = col
    }
}
class minHeap {

    constructor() {
        this.heap = []
    }
    Node(value, row, col){
    	const newObj ={}
        newObj.data = value
        newObj.row = row
        newObj.col = col
        return newObj;
    }
    add(value) {
    const AA = []
        console.log(this.heap,"this.heap before add new element node ");
        console.log(value,"value");
        //this.heap.push(value);
        AA.push(value)
       // AA.push(value)
        
        console.log(AA,"AA");
        this.heap =  this.heap.concat(AA) ;
        console.log(this.heap,"this.heap after push new element in min heap");
        const lastIndex = this.heap.length - 1;
        console.log(lastIndex,"lastIndex");
        this.bubbledUp(lastIndex);
    }
    removeTopElement(k) {
        let rootIndexValue = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap[this.heap.length - 1] = rootIndexValue
        this.heap.pop()
        for (let i = 0; i < k; i++) {
            this.bubbledDown(i);
        }
    }
    parent(i) {
        return Math.round((i - 1) / 2);
    }
    left(i) {
        return 2*i + 1;
    }
    right(i) {
        return 2*i + 2;
    }
    swap(a, b) {
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    bubbledUp(lastIndex) {
        let currentIndex = lastIndex
        console.log(currentIndex,"currentIndex");
        while (currentIndex > 0) {
            const parentIndex = this.parent(currentIndex)
            const parentIndexValue = this.heap[parentIndex].data
            const currentIndexValue = this.heap[currentIndex].data
        console.log(parentIndexValue,"parentIndexValue");
        console.log(currentIndexValue,"currentIndexValue");
            if (parentIndexValue < currentIndexValue)
        console.log(this.heap,"this.heap before swap");
                this.swap(parentIndex, currentIndex);
        console.log(this.heap,"this.heap aftrer swap");
            currentIndex = parentIndex
        }
    }
    bubbledDown(root) {
        let rootIndexValue = this.heap[root]
        const leftIndex = this.left(root)
        const leftIndexValue = this.heap[leftIndex]
        const rightIndex = this.right(root)
        const rightIndexValue = this.heap[rightIndex]
        let minimumValueIndex = root
        if (rootIndexValue > leftIndexValue) {
            minimumValueIndex = leftIndex
        } else if (rootIndexValue > rightIndexValue) {
            minimumValueIndex = rightIndex
        }
        this.swap(minimumValueIndex, root)
    }

}
const arr = [[2, 5, 9], [1, 3, 7], [8, 6, 5]]
const k = 3
//prepare min Heap
const mh = new minHeap();
for (let i = 0; i < k; i++) {
    const newNode = new CustomNode(arr[i][0], i, 0)
    console.log(newNode,"newNode");
    mh.add(newNode)
    console.log(mh.heap,"mh.heap Aftrer Add ");
}
    console.log(mh.heap,"mh.heap");
const Answer = [];
let i = 0
//add in answer array 
while (i < k) {
    const nodeOfTop = mh.heap[0]
    let row = nodeOfTop.row
    let col = nodeOfTop.col
    Answer.push(nodeOfTop.data)
    mh.removeTopElement(k)
    if (col++ && arr[row][col++]) {
        mh.add(arr[row][col++], row, col++)
    }
}
console.log(Answer,"result Answer")


