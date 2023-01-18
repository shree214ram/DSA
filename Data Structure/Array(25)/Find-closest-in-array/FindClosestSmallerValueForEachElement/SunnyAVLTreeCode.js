//Shree ganeshay namah

//find the nearest closeset 

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}
class AVL {
    constructor() {
        this.root = null
    }


    add(value, root) {
        // 1. Add new element

        if (value == null) { console.log("Invalid"); return }

        const newNode = new Node(value)

        if (root == null) {
            return newNode;
        }
        if (root.data > value) {
            root.left = this.add(value, root.left)

        } else {
            root.right = this.add(value, root.right)

        }


        // 2. update height 
        root.height = 1 + Math.max(this.height(root.left), this.height(root.right))

        // 3. get balanace 
        const balanace = this.getBalance(root)


        // Left Right Case
        if (balanace > 1 && root.left.data < value) {
            root.left = this.leftRotate(root.left) // yaha par mene mistake ki thi root.left ki jagah root likha tha to fail ho raha tha 
            return this.rightRotate(root)
        }
        //cases L Rotate
        if (balanace > 1 && root.left.data > value) {
            return this.rightRotate(root)
        }

        // Right Left Case
        if (balanace < -1 && root.right.data > value) {
            root.right = this.rightRotate(root.right) // yaha par mene mistake ki thi root.right ki jagah root likha tha to fail ho raha tha 
            return this.leftRotate(root)
        }
        //cases R Rotate
        if (balanace < -1 && root.right.data < value) {
            return this.leftRotate(root)
        }
        return root
    }
    /*
        x 5
      y3 
   z     T4


            x
          T
       y 
    z     

         y 
    y2       x 
            T
    */

    rightRotate(root) {
        let x = root
        console.log(x, "hay right rotate")
        let y = x.left
        let T = y?.right

        x.left = T
        y.right = x

        x.height = 1 + Math.max(this.height(x.left), this.height(x.right))
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right))
        return y;
    }
    /*
        x 
            y
        T4      z
          
       y 
    x     z
       T
    */
    leftRotate(root) {
        let x = root
        let y = x.right
        let T = y.left
        console.log(x, "hay leftRotate ")

        x.right = T
        y.left = x

        x.height = 1 + Math.max(this.height(x.left), this.height(x.right))
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right))
        return y;
    }
    height(root) {
        if (root == null) return 0
        return 1 + Math.max(this.height(root.left), this.height(root.right))
    }
    getBalance(root) {
        if (root == null) return 0
        return this.height(root.left) - this.height(root.right)
    }
    Inorder(root) {
        //Inorder print // Root always in middle 
        if (root == null) return
        if (root.left) {
            this.Inorder(root.left);
        }
        console.log(root.data);
        if (root.right) {
            this.Inorder(root.right);
        }
    }
    maxValue(root) {
        //Inorder print 
        if (root == null) return

        if (root.right) {
            this.maxValue(root.right);
        } else {
            return root.data
        }
    }
    search(value, root, parent) {
        //Inorder print 
        if (root == null) { console.log("Not Found"); return }
        if (root.data == value) {
            root.parent = parent
            return root
        } else if (root.data > value) {
            return this.search(value, root.left, root)
        } else if (root.data < value) {
            return this.search(value, root.right, root)
        } else {
            console.log("Not Found")
        }
    }
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
    //least higher value of a Given value 
    //const myArray = [10, 5, 11, 6, 20, 12,3,7];
    //       10 
    //     /   \ 
    //    5    12 
    //   / \  /  \ 
    //  3  6 11  20 
    //.    \
    //.     7
    higher(treeRoot, data) {

        if (treeRoot?.left == null && treeRoot?.right == null) {
            return treeRoot
        }

        //If data is smaller than Root Data 
        if (data >= treeRoot.data) {
            return treeRoot.right ? this.higher(treeRoot.right, data) : treeRoot;
        } else {
            if (data < treeRoot.data && data >= treeRoot.left?.data) {
                if (treeRoot.left.right && treeRoot.left.right.data > data) {
                    return this.higher(treeRoot.left, data)
                } else {
                    return treeRoot
                }
            }
            else {
                return this.higher(treeRoot.left, data)
            }
        }
    }
}

const Arr = [10, 5, 11, 6, 20, 12, 3, 7];
//const Arr = [4, 6, 9, 3, 11, 1, 24]
const tree = new AVL();
let root = tree.root;
for (let i = 0; i < Arr.length; i++) {
    root = tree.add(Arr[i], root)
}
tree.Inorder(root)
//Print Max Smaller of every element 
const finalArray = []
for (let i = 0; i < Arr.length; i++) {
    const smaller = tree.lower(root, Arr[i]);

    if (smaller.data == Arr[i]) {
        finalArray.push(-1)
    }
    else {
        finalArray.push(smaller.data)
    }
}

console.log("Nearest Smallest Value Of every element in Array" + Arr + " are " + finalArray)

//--------------------------
/*
  const myArray = [10, 5, 11, 6, 20, 12,3,7];
const tree1 = new AVL();
let root1 = tree1.root;
for (let i = 0; i < myArray.length; i++) {
    root1 = tree1.insert( root1,myArray[i])
}
tree1.Inorder(root1)
//Print Max Smaller of every element
const finalArray1 =[]
for (let i = 0; i < myArray.length; i++) {
  const greater = tree1.higher(root1, myArray[i]);

  if (greater.data == myArray[i]){
    finalArray1.push(-1)
  }
  else{
    finalArray1.push(greater.data)
  }
}

console.log("Nearest Smallest Value Of every element in Array" + myArray + " are " + finalArray1)
  //const output = [11, 6, 12, 7, -1, 20,5,10];
*/
