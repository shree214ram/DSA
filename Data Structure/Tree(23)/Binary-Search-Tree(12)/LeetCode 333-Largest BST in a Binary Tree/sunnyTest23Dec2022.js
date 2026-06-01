
//5:31
//5:43
//Longest BST size 
//@mistake 1 i forget to make 2 different class 1 for node and another for info 
class Info {
    constructor(a, b, c, d) {
        this.noOfBST = a;
        this.max = b
        this.min = c
        this.isBST = d
    }
}
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}
class BST {
    constructor() {
        //this.root=root;

    }
    Add(root, value) {
        if (value == null) {
            return root
        }
        if (root == null) {
            return 0
        }
        if (value > root.data) {
            if (root.right == null) {
                root.right = new Node(value)
            } else {
                this.Add(root.right, value)
            }
        } else if (value < root.data) {
            if (root.left == null) {
                root.left = new Node(value)
            } else {
                this.Add(root.left, value)
            }
        }
    }

    InOrder(root) {
        if (root == null) {
            return
        }
        this.InOrder(root.left)
        console.log(root.data, "==")
        this.InOrder(root.right)

    }
    isBST(root) {
        if (root == null) {
            return true
        }
        if (root.left == null && root.right == null) {
            return true
        }
        if (root.left == null && root.right != null) {
            return fasle
        }
        if (root.left != null && root.right == null) {
            return root.data > root.left.data
        }
        if (root.left != null && root.right != null) {
            return root.data > root.left.data && root.data < root.right.data
        }
    }
    printLargetsBSTSize(root) {
        //Base Case
        if (root == null) {
            // return 0 
            //@mistake 2 mene yaha par mistake ki thi normal value 0 return kar raha tha jabki Info Object send karna he taki 
            //hum maintain kar sake Max size 
            return new Info(0, Number.MAX_VALUE, Number.MIN_VALUE, true)
        }
        if (root.left == null && root.right == null) {
            // root.max=1
            // root.isBST = true
            // return root
            //@mistake 3 mene yaha par mistake ki thi normal value 1 return kar raha tha jabki Info Object send karna he taki 
            //hum maintain kar sake Max size and isBST
            return new Info(1, root.data, root.data, true)
        }
        //Recursion
        const leftRoot = this.printLargetsBSTSize(root.left);
        const rightRoot = this.printLargetsBSTSize(root.right);

        //Main Logic 
        //1. Create an empty object 
        const newNode = new Info()
        //2. set min and max value 
        newNode.min = Math.min(root.data, Math.min(leftRoot.min, rightRoot.min))
        newNode.max = Math.max(root.data, Math.max(leftRoot.max, rightRoot.max))
        //3. check both child are BST and they have isBST Property 
        //(left child's tree Maximum value should be less than Root.data && right child's tree Minimum value should be greater than Root.data )
        if (leftRoot.isBST && rightRoot.isBST && leftRoot.max < root.data && rightRoot.min > root.data) {
            newNode.isBST = true
            newNode.noOfBST = 1 + leftRoot.noOfBST + rightRoot.noOfBST
        }
        return newNode
    }
}
/*
    50
     /    \
  30       60
 /  \     /  \ 
5   20   45    70
              /  \
            65    80
Output: 5
*/
const root = new Node(50)


root.left = new Node(30);
root.right = new Node(60);

root.left.left = new Node(5);
root.left.right = new Node(20);

root.right.left = new Node(45);
root.right.right = new Node(70);


root.right.right.left = new Node(65);
root.right.right.right = new Node(80);

const bst = new BST(root)
/*bst.Add(root,30)
bst.Add(root,60)
bst.Add(root,5)
bst.Add(root,20)
bst.Add(root,45)

bst.Add(root,70)

bst.Add(root,65)
bst.Add(root,80)*/

bst.InOrder(root);

console.log("printLargetsBSTSize", printLargetsBSTSize)

