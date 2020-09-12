class Node {
    constructor() {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.height = null;
    }
}
class AvlTree {
    constructor() {
        this.size = 0;
        this.root = null;
        this.keys = {}
    }
    //         17
    //      8     19
    //    6   10
    //   5 7  9 11
    rightRotate(x) {
        if (x != null) {
            let y = x.left;
            let T2 = y.right

            if (x.parent == null) {
                y.parent = null;
                x.parent = y
            } else if (x.parent != null && T2 != null) {
                y.right.parent = x
            }

            x.left = T2
            y.right = x

            return y


        }
    }
    //     7
    //    6 18
    //      9 20 
    leftRotate(x) {
        if (x != null) {
            let y = x.right;
            let T2 = y.left

            if (x.parent == null) {
                y.parent = null;
                x.parent = y
            } else if (x.parent != null && T2 != null) {
                y.left.parent = x
                y.parent = x.parent
            }

            x.right = T2
            y.left = x

            return y


        }
    }
    insert(root, data) {
        if (root == null) {
            const newNode = new Node(data);
            this.root = newNode;
            return newNode;
        }
        if (root.data > data) {
            const lChild = this.insert(root.left, data);
            root.left = lChild; (mistake)

            lChild.parent = root;
        } else if (root.data < data) {
            const rChild = this.insert(root.right, data);
            root.right = rChild; (mistake)

            rChild.parent = root;
        }
      else return root;


      root.height = 1 + this.max(this.height(root.left), this.height(root.right));

        const heightFector = max(height())

        // arrange height fector 
        if (heightFector > 1 && data < root.data) {
            this.rightRotate(root)
        }
        if (heightFector < -1 && data > root.data) {
            this.leftRotate(root)
        }
    }
    delete(data) {

    }

}