// Node class 
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// AVLTree class 
class AVLTree {

    constructor() {
        // root of a binary seach tree 
        this.root = null;
    }

    // A utility function to get the height of the tree 
    height(node) {
        if (node == null)
            return 0;
        return node.height;
    }

    // A utility function to get maximum of two integers 
    max(a, b) {
        return (a > b) ? a : b;
    }

    // A utility function to right rotate subtree rooted with y 
    // See the diagram given above. 
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        // Perform rotation 
        x.right = y;
        y.left = T2;

        // Update heights 
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

        // Return new root 
        return x;
    }

    // A utility function to left rotate subtree rooted with x 
    // See the diagram given above. 
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        // Perform rotation 
        y.left = x;
        x.right = T2;

        // Update heights 
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

        // Return new root 
        return y;
    }

    // Get Balance factor of node N 
    getBalance(N) {
        if (N == null)
            return 0;

        return this.height(N.left) - this.height(N.right);
    }


    insert(node, data) {

        /* 1. Perform the normal BST insertion */
        if (node == null) {
            return (new Node(data));

        }

        if (data < node.data)
            node.left = this.insert(node.left, data);
        else if (data > node.data)
            node.right = this.insert(node.right, data);
        else // Duplicate datas not allowed 
            return node;

        /* 2. Update height of this ancestor node */
        node.height = 1 + this.max(this.height(node.left),
            this.height(node.right));

        /* 3. Get the balance factor of this ancestor 
            node to check whether this node became 
            unbalanced */
        const balance = this.getBalance(node);

        // If this node becomes unbalanced, then there 
        // are 4 cases Left Left Case 
        if (balance > 1 && data < node.left.data)
            return this.rightRotate(node);

        // Right Right Case 
        if (balance < -1 && data > node.right.data)
            return this.leftRotate(node);

        // Left Right Case 
        if (balance > 1 && data > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left Case 
        if (balance < -1 && data < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        /* return the (unchanged) node pointer */
        return node;
    }

    // A utility function to print preorder traversal 
    // of the tree. 
    // The function also prints height of every node 
    preOrder(node) {
        if (node != null) {
            console.log(node.data + " ");
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    getMinValueNode(root) {
        if (this.root == null || root.left == null)
            return root
        return this.getMinValueNode(root.left)
    }

    // # Recursive function to delete a node with 
    // # given data from subtree with given root. 
    // # It returns root of the modified subtree. 
    delete(root, data) {
        // STEP 1: PERFORM STANDARD BST DELETE  
        if (root == null)
            return root;

        // If the data to be deleted is smaller than  
        // the root's data, then it lies in left subtree  
        if (data < root.data)
            root.left = this.delete(root.left, data);

        // If the data to be deleted is greater than the  
        // root's data, then it lies in right subtree  
        else if (data > root.data)
            root.right = this.delete(root.right, data);

        // if data is same as root's data, then this is the node  
        // to be deleted  
        else {

            // node with only one child or no child  
            if ((root.left == null) || (root.right == null)) {
                let temp = null;
                if (temp == root.left)
                    temp = root.right;
                else
                    temp = root.left;

                // No child case  
                if (temp == null) {
                    temp = root;
                    root = null;
                }
                else // One child case  
                    root = temp; // Copy the contents of  
                // the non-empty child  
            }
            else {

                // node with two children: Get the inorder  
                // successor (smallest in the right subtree)  
                let temp = this.getMinValueNode(root.right);

                // Copy the inorder successor's data to this node  
                root.data = temp.data;

                // Delete the inorder successor  
                root.right = this.delete(root.right, temp.data);
            }
        }

        // If the tree had only one node then return  
        if (root == null)
            return root;

        // STEP 2: UPDATE HEIGHT OF THE CURRENT NODE  
        root.height = this.max(this.height(root.left), this.height(root.right)) + 1;

        // STEP 3: GET THE BALANCE FACTOR OF THIS NODE (to check whether  
        // this node became unbalanced)  
        const balance = this.getBalance(root);

        // If this node becomes unbalanced, then there are 4 cases  
        // Left Left Case  
        if (balance > 1 && this.getBalance(root.left) >= 0)
            return this.rightRotate(root);

        // Left Right Case  
        if (balance > 1 && this.getBalance(root.left) < 0) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        // Right Right Case  
        if (balance < -1 && this.getBalance(root.right) <= 0)
            return this.leftRotate(root);

        // Right Left Case  
        if (balance < -1 && this.getBalance(root.right) > 0) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }
    // search(node, data) 
    // search for a node with given data 
    search(node, data) {
        // console.log("node->", node)
        // console.log("data->", data)
        // if trees is empty return null 
        if (node === null)
            return null;

        // if data is less than node's data 
        // move left 
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is less than node's data 
        // move left 
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data  
        // return node 
        else
            return node;
    }


    // The first() method returns the first (lowest) element currently in this set.

    // The last() method returns the last (highest) element currently in this set.

    // Recursive function to find the 
    // parent of the given node 
    findParent(node, val, parent) {

        if (node == null)
            return;

        // If current node is the required node 
        if (node.data == val) {
            // Print its parent 
            return parent
        }
        else {

            // Recursive calls for the children 
            // of the current node 
            // Current node is now the new parent 
            if (node.data > val) {
                return this.findParent(node.left, val, node.data);
            } else {
                return this.findParent(node.right, val, node.data);
            }
        }
    }


    //compare two values 
    compare(a, b) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }


    /**
         * Gets the entry for the least key greater than the specified
         * key; if no such entry exists, returns the entry for the least
         * key greater than the specified key; if no such entry exists
         * returns {@code null}.
         */
    higher(treeRoot, data) {
        console.log("higher function called---->");
        console.log("treeRoot---->");
        console.log(treeRoot);
        console.log("data to be search==", data);
        let p = treeRoot;

        console.log("p---->");
        console.log(p);
        while (p != null) {
            const cmp = this.compare(data, p.data);
            console.log("cmp---->");
            console.log(cmp);

            if (cmp < 0) {
                console.log("cmp < 0 IF Co");
                if (p.left != null) {
                    console.log("p.left != null");

                    p = p.left;
                }

                else {
                    console.log("else");

                    return p;
                }
            } else {
                console.log("cmp < 0. ELSE COND");

                if (p.right != null) {
                    console.log("p.right != null IF CONDD");

                    p = p.right;
                } else {
                    console.log("p.right != null ELSE CONDD");

                    let parent = p.parent;
                    console.log("p==>");
                    console.log(p);

                    console.log("parent==");
                    console.log(parent);

                    let ch = p;
                    while (parent != null && ch == parent.right) {
                        ch = parent;
                        parent = parent.parent;
                    }
                    return parent;
                }
            }
        }
        return null;
    }


    /* The higher() method returns the least element 
    in this set strictly greater than the given element, 
    or null if there is no such element. */
    higher1(treeRoot, data) {
        console.log("higher function called---->");
        console.log("treeRoot---->");
        console.log(treeRoot);
        console.log("data to be search==", data);

        if (treeRoot.left == null && treeRoot.right == null) {

            console.log("treeRoot.left == null && treeRoot.right == null");

            return treeRoot
        }
        //       10 
        //     /   \ 
        //    5    12 
        //   / \  /  \ 
        //     6 11  20 
        //If data is greater than OR Equal Root Data 
        if (data >= treeRoot.data) {
            console.log("data >= treeRoot.data IF Condition");

            // return treeRoot.right ? this.higher(treeRoot.right, data) : treeRoot;

            if (treeRoot.right && treeRoot.right.left && treeRoot.right.left.data != data && treeRoot.right.right.data > data) {
                console.log("shree");

                return treeRoot.right.left


            }
            else if (treeRoot.right && treeRoot.right.left && treeRoot.right.left.data > data && treeRoot.right.right.data == data) {
                console.log("Krishan");

                return this.higher(treeRoot.right, data)

            }
            else {
                console.log("ram");
                return treeRoot.right
                // return this.higher(treeRoot.right, data)
            }

        } else {

            console.log("data < treeRoot.data ELSE Condition");
            // return this.higher(treeRoot.left, data)
            if (treeRoot.left && treeRoot.left.right && treeRoot.left.right.data == data) {
                return treeRoot
                console.log("JAY");
            }
            else {
                console.log("SHREE");
                return this.higher(treeRoot.left, data)


            }
            // if (data < treeRoot.data && data == treeRoot.left.data && treeRoot.left.right && treeRoot.data > treeRoot.left.right.data) {
            //         // return this.higher(treeRoot.left, data)
            //   console.log("shree" );

            //       return treeRoot

            // }
            // else {
            //   console.log("ram" );

            //     return this.higher(treeRoot.right, data)
            // }
        }
    }
    // The descendingSet() method returns a reverse order view of the elements contained in this set.


    // The lower() method returns the greatest element in this set strictly less than the given element, or null if there is no such element.
    lower(treeRoot, data) {

        if (treeRoot.left == null && treeRoot.right == null) {
            return treeRoot
        }

        //If data is smaller than Root Data 
        if (data <= treeRoot.data) {
            return treeRoot.left ? this.lower(treeRoot.left, data) : treeRoot;
        } else {
            if (data > treeRoot.data && data <= treeRoot.right.data) {
                if (treeRoot.right.left && treeRoot.right.left.data < data) {
                    return this.lower(treeRoot.right, data)
                } else {
                    return treeRoot
                }
            }
            else {
                return this.lower(treeRoot.right, data)
            }
        }
    }
}


const tree = new AVLTree();

const myArray = [10, 5, 11, 6, 20, 12, 10];
//       10 
//     /   \ 
//    5    12 
//   / \  /  \ 
//     6 11  20 
// output should be  10 6 12 5 12 11 10

let treeRoot = tree.root;
console.log("treeRoot==", treeRoot)

for (let i = 0; i < myArray.length; i++) {
    // A value "True" means that the key 
    // appears more than once. 
    const currentNode = tree.search(treeRoot, myArray[i]);
    console.log("currentNode==", currentNode)
    if (currentNode !== null) {
        // tree.put(myArray[i], true); 
        console.log("currentNode !== null")

        currentNode.data1 = true
    }
    else {
        console.log("insert==", myArray[i])

        treeRoot = tree.insert(treeRoot, myArray[i]);
    }
}
console.log("Preorder traversal of constructed tree is : ");
tree.preOrder(treeRoot);

console.log("Closest Value  traversal of constructed tree is : ");

// Find smallest greater element for every 
// array element
const heigerValuesArray = []
for (let i = 0; i < myArray.length; i++) {
    // If there are multiple occurrences 
    const currentNode = tree.search(treeRoot, myArray[i]);
    // if (currentNode && currentNode.data1) 
    // { 
    //     console.log(myArray[i] + "-- "); 
    //     // heigerValuesArray.push(myArray[i])
    //     continue; 
    // } 

    // If element appears only once 
    const greater = tree.higher(treeRoot, myArray[i]);
    console.log("greater value of " + myArray[i] + " is ---->");
    console.log(greater);
    heigerValuesArray.push(greater.data)

    // const lower = tree.lower(treeRoot, myArray[i]); 
    //     console.log("lower---->" ); 
    //     console.log( lower); 

    // if (greater == null) 
    //     console.log(lower + " "); 
    // else if (lower == null) 
    //     console.log(greater + " "); 
    // else { 
    //     const d1 = greater - myArray[i]; 
    //     const d2 = myArray[i] - lower; 
    //     if (d1 > d2) 
    //         console.log(lower + " "); 
    //     else
    //         console.log(greater + " "); 
    // }
}
//       10 
//     /   \ 
//    5    12 
//   / \  /  \ 
//     6 11  20 
console.log("myArray=", myArray)
console.log("output=[ 11 6 12 10 -1 20 11]")

console.log("heigerValuesArray=", heigerValuesArray)