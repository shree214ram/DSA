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
        //cases RL Rotate
        if (balanace > 1 && root.left.data < value) {
            root.left = this.leftRotate(root)
            return this.rightRotate(root)
        }
        //cases L Rotate
        if (balanace > 1 && root.left.data > value) {
            return this.rightRotate(root)
        }
        //cases LR Rotate
        if (balanace < -1 && root.right.data > value) {
            root.right = this.rightRotate(root)
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
        let y = x.left
        let T = y.right

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
  lower(treeRoot,data) {
    
    if (treeRoot.left == null && treeRoot.right == null ){
      return treeRoot
    }

    //If data is smaller than Root Data 
    if(data <= treeRoot.data){
        return treeRoot.left ? this.lower(treeRoot.left,data) : treeRoot;
    } else {
        if(data > treeRoot.data && data <= treeRoot.right.data  ){
          if(treeRoot.right.left && treeRoot.right.left.data < data ){
            return this.lower(treeRoot.right,data)
          } else {
              return treeRoot
          }
        }
        else {
          return this.lower(treeRoot.right,data)
        }
    }
  }
  
}

const Arr = [4, 6, 9, 3, 11, 1, 24]
const tree = new AVL();
let root = tree.root;
for (let i = 0; i < Arr.length; i++) {
    root = tree.add(Arr[i], root)
}
tree.Inorder(root)
//Print Max Smaller of every element 
const finalArray =[]
for (let i = 0; i < Arr.length; i++) {
  const smaller = tree.lower(root, Arr[i]);

  if (smaller.data == Arr[i]){
    finalArray.push(-1)
  }
  else{
    finalArray.push(smaller.data)
  }
}

console.log("Nearest Smallest Value Of every element in Array" + Arr + " are " + finalArray)



