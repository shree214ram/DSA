class Node {
    constructor(value) {
        this.data = value
        this.left = null
        this.right = null
    }
}
class Tree {
    constructor() {
        this.root = null
        this.size = null
        this.right = null
    }
    KthSmallestElement(root, k) {
        // code here
        let arr = []
        let counter = 0
        this.storeInorder(root, arr, counter)
        this.findsmallestElement(root, k, arr, counter)
    }
    findsmallestElement(root, k, arr, counter) {
        if (!root) return null
        this.findsmallestElement(root.left, k, arr, counter)
        if ((counter + 1) === k) {
            console.log(arr[counter], "kthSmallest element")
            return
        }
        counter++
        this.findsmallestElement(root.right, k, arr, counter)
    }
    storeInorder(root, arr, counter) {
        if (!root) return false;
        //InorderTraversing LRR
        this.storeInorder(root.left, arr, counter)
        arr.push(root.data)
        this.storeInorder(root.right, arr, counter)
    }
}

const BT = new Tree()
BT.root = new Node(2)
BT.root.left = new Node(1)
BT.root.right = new Node(3)

BT.KthSmallestElement(BT.root, 2)