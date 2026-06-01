
//4:01
//check BT is BST ??
class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.data = []
    }
    inOrder(root) {
        //base case 
        if (root == null) {
            return
        }
        this.inOrder(root.left)
        this.data.push(root.data)
        this.inOrder(root.right)
    }

}
const BT = new Node(4)
BT.left = new Node(2);
BT.right = new Node(5)


BT.left.left = new Node(1);
BT.left.right = new Node(3);

const BSO = new BST();
BSO.inOrder(BT)
const InOrderData = BSO.data
let old = InOrderData[0]
let check = false
for (let i = 1; i < InOrderData.length; i++) {
    if (InOrderData[i] < old) {
        check = true
        break;
    }
    old = InOrderData[i]
}
if (check) {

    console.log("This is not a BST ");
} else {
    console.log("This is a BST")
}

