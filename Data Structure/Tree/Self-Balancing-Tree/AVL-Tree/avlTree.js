// https://www.geeksforgeeks.org/avl-tree-set-1-insertion/
// Javascript program for insertion in AVL Tree

// Node class
class Node {
    constructor(data, value = null, parent = null) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.parent = parent;
      this.height = 1;
    }
  }
  
  // AVLTree class
  class AVLTree {
    constructor() {
      // root of a binary seach tree
      this.root = null;
      this.keys = {};
    }
  
    // A utility function to get the height of the tree
    height(node) {
      if (node == null) return 0;
      return node.height;
    }
  
    // A utility function to get maximum of two integers
    max(a, b) {
      return a > b ? a : b;
    }
    rightRotate(y) {
      if (y != null) {
        const x = y.left;
        const T2 = x.right;
  
        // set parent
        if (x.right != null) 
        x.right.parent = y;
        x.parent = y.parent;
        if (y.parent == null) 
          this.root = x;
        else if (y.parent.right == y) 
          y.parent.right = x;
        else 
          y.parent.left = x;
  
        // Update heights
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
  
        // Perform rotation
        x.right = y;
        y.left = T2;
        y.parent = x;
  
        // Return new root
        return x;
      }
    }
  //   18                 7
  //  / \   right ->    /  \
  // 7   19            6    18
  // /\                     /\
  // 6 9                   9  19

// x= 18, y= x.left,   T2 = y.right    y.right = x   x.left = t2
    leftRotate(x) {
      if (x != null) {
        const y = x.right;
        const T2 = y.left;
  
        // set parent
        if (y.left != null) y.left.parent = x;
        y.parent = x.parent;

        if (x.parent == null) this.root = y;
        else if (x.parent.left == x) x.parent.left = y;
        else x.parent.right = y;
  
        // Perform rotation
        y.left = x;
        x.right = T2;
        x.parent = y;
  
        // Update heights
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
  
        // Return new root
        return y;
      }
    }
  //  8 (x)                           
  //  / \   <- left           19
  // 7  19 (y)               /  \
  //   / \                   8  20
  //  10   20                /\
  //                        7  10
    //compare two values
    compare(a, b) {
      if (a === b) {
        return 0;
      }
  
      return a < b ? -1 : 1;
    }
    put(key, value) {
      const t = this.root;
      if (t == null) {
        this.compare(key, key); // type (and possibly null) check
        this.root = new Node(key, value, null);
        this.size++;
        return null;
      }
      let cmp;
      let parent;
      // split comparator and comparable paths
      if (this.keys.hasOwnProperty(key)) {
        do {
          parent = t;
          cmp = this.compare(key, t.data);
          if (cmp < 0) t = t.left;
          else if (cmp > 0) t = t.right;
          else t.data = value;
        } while (t != null);
      } else {
        if (key == null) {
          console.log('Key must be a value');
          return null;
        }
        this.keys[key] = value;
        do {
          parent = t;
          cmp = k.compareTo(t.data);
          if (cmp < 0) t = t.left;
          else if (cmp > 0) t = t.right;
          else t.data = value;
        } while (t != null);
      }
      const e = new Node(key, value, parent);
      if (cmp < 0) parent.left = e;
      else parent.right = e;
      fixAfterInsertion(e);
      size++;
      modCount++;
      return null;
    }
    //     ====================
    // Get Balance factor of node N
    getBalance(N) {
      if (N == null) return 0;
  
      return this.height(N.left) - this.height(N.right);
    }
  
    insert(node, data) {
      /* 1. Perform the normal BST insertion */
      if (node == null) return new Node(data);
  
      if (data < node.data) {
        // node.left = this.insert(node.left, data);
        const lchild = this.insert(node.left, data);
        node.left = lchild;
        // Set parent of root of left subtree
        lchild.parent = node;
      } else if (data > node.data) {
        // node.right = this.insert(node.right, data);
        const rchild = this.insert(node.right, data);
        node.right = rchild;
        // Set parent of root of right subtree
        rchild.parent = node;
      } // Duplicate datas not allowed
      else return node;
  
      /* 2. Update height of this ancestor node */
      node.height = 1 + this.max(this.height(node.left), this.height(node.right));
  
      /* 3. Get the balance factor of this ancestor 
          node to check whether this node became 
          unbalanced */
      const balance = this.getBalance(node);
  
      // If this node becomes unbalanced, then there are 4 cases
      //Left Left Case
      if (balance > 1 && data < node.left.data) return this.rightRotate(node);
  
      // Right Right Case
      if (balance < -1 && data > node.right.data) return this.leftRotate(node);
  
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
    preOrder(root) {
      if (root != null) {
        console.log(root.data + ' ');
        if (root.parent == null) console.log('Parent : NULL');
        else console.log('Parent : ' + root.parent.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }
    // A utility function to do inorder traversal of BST
    inorder(root) {
      if (root != null) {
        inorder(root.left);
        console.log('Node : ' + root.data + ' , ');
        if (root.parent == null) console.log('Parent : NULL');
        else console.log('Parent : ' + root.parent.data);
        inorder(root.right);
      }
    }
    getMinValueNode(root) {
      if (this.root == null || root.left == null) return root;
      return this.getMinValueNode(root.left);
    }
  //     30 
  //     / \ 
  //    20  40 
  //   / \	 / \ 
  //  10 25 35 50 
    // # Recursive function to delete a node with
    // # given data from subtree with given root.
    // # It returns root of the modified subtree.
    delete(root, data) {
      // STEP 1: PERFORM STANDARD BST DELETE
      if (root == null) return root;
  
      // If the data to be deleted is smaller than
      // the root's data, then it lies in left subtree
      if (data < root.data) root.left = this.delete(root.left, data);
      // If the data to be deleted is greater than the
      // root's data, then it lies in right subtree
      else if (data > root.data) root.right = this.delete(root.right, data);
      // if data is same as root's data, then this is the node
      // to be deleted
      else {
        // node with only one child or no child
        if (root.left == null || root.right == null) {
          let temp = null;
          if (temp == root.left) temp = root.right;
          else temp = root.left;
  
          // No child case
          if (temp == null) {
            temp = root;
            root = null;
          } // One child case
          else root = temp; // Copy the contents of
          // the non-empty child
        } else {
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
      if (root == null) return root;
  
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
      // if trees is empty return null
      if (node === null) return null;
      // if data is less than node's data
      // move left
      else if (data < node.data) return this.search(node.left, data);
      // if data is less than node's data
      // move left
      else if (data > node.data) return this.search(node.right, data);
      // if data is equal to the node data
      // return node
      else return node;
    }
  
    // The first() method returns the first (lowest) element currently in this set.
  
    // The last() method returns the last (highest) element currently in this set.
  
    // The descendingSet() method returns a reverse order view of the elements contained in this set.
  
    // The getLowerEntry() method returns the greatest element in this set strictly less than the given element, or null if there is no such element.
    /**
     * Returns the entry for the greatest key less than the specified key; if
     * no such entry exists (i.e., the least key in the Tree is greater than
     * the specified key), returns {@code null}.
     */
    getLowerEntry(root, key) {
      let p = root;
      while (p != null) {
        let cmp = this.compare(key, p.data);
        if (cmp > 0) {
          if (p.right != null) p = p.right;
          else return p;
        } else {
          if (p.left != null) {
            p = p.left;
          } else {
            let parent = p.parent;
            let ch = p;
            while (parent != null && ch == parent.left) {
              ch = parent;
              parent = parent.parent;
            }
            return parent;
          }
        }
      }
      return null;
    }
  
    /**
     * Gets the entry corresponding to the specified key; if no such entry
     * exists, returns the entry for the least key greater than the specified
     * key; if no such entry exists (i.e., the greatest key in the Tree is less
     * than the specified key), returns {@code null}.
     */
    getCeilingEntry(root, key) {
      let p = root;
      while (p != null) {
        let cmp = this.compare(key, p.data);
        if (cmp < 0) {
          if (p.left != null) p = p.left;
          else return p;
        } else if (cmp > 0) {
          if (p.right != null) {
            p = p.right;
          } else {
            let parent = p.parent;
            let ch = p;
            while (parent != null && ch == parent.right) {
              ch = parent;
              parent = parent.parent;
            }
            return parent;
          }
        } else return p;
      }
      return null;
    }
  
    /**
     * Gets the entry corresponding to the specified key; if no such entry
     * exists, returns the entry for the greatest key less than the specified
     * key; if no such entry exists, returns {@code null}.
     */
    getFloorEntry(root, key) {
      let p = root;
      while (p != null) {
        let cmp = this.compare(key, p.data);
        if (cmp > 0) {
          if (p.right != null) p = p.right;
          else return p;
        } else if (cmp < 0) {
          if (p.left != null) {
            p = p.left;
          } else {
            let parent = p.parent;
            let ch = p;
            while (parent != null && ch == parent.left) {
              ch = parent;
              parent = parent.parent;
            }
            return parent;
          }
        } else return p;
      }
      return null;
    }
  
    // The getHigherEntry() method returns the least element in this set strictly greater than the given element, or null if there is no such element.
    /**
     * Gets the entry for the least key greater than the specified
     * key; if no such entry exists, returns the entry for the least
     * key greater than the specified key; if no such entry exists
     * returns {@code null}.
     */
    getHigherEntry(root, key) {
      let p = root;
      while (p != null) {
        let cmp = this.compare(key, p.data);
        if (cmp < 0) {
          if (p.left != null) p = p.left;
          else return p;
        } else {
          if (p.right != null) {
            p = p.right;
          } else {
            let parent = p.parent;
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
  }
  
  // const tree = new AVLTree();
  
  /* Constructing tree given in the above figure */
  // tree.root = tree.insert(tree.root, 10);
  // tree.root = tree.insert(tree.root, 20);
  // tree.root = tree.insert(tree.root, 30);
  // tree.root = tree.insert(tree.root, 40);
  // tree.root = tree.insert(tree.root, 50);
  // tree.root = tree.insert(tree.root, 25);
  // tree.root = tree.insert(tree.root, 5);
  // tree.root = tree.insert(tree.root, 35);
  
  /* The constructed AVL Tree would be 
      30 
      / \ 
     20  40 
    / \	 / \ 
   10 25 35 50 
  */
  // console.log("Preorder traversal" + " of constructed tree is : ");
  // tree.preOrder(tree.root);
  
  // const smaller = tree.getLowerEntry(tree.root, 40);
  // console.log("smaller : ", smaller);
  
  // const higher = tree.getHigherEntry(tree.root, 40);
  // console.log("higher : ", higher);
  
  // tree.root = tree.delete(tree.root, 35);
  // tree.root = tree.delete(tree.root, 30);
  // tree.root = tree.delete(tree.root, 40);
  // console.log("Preorder traversal after delete " +
  //     " of constructed tree is : ");
  // tree.preOrder(tree.root);
  /*30
  20
  10
  5
  25
  40
  35
  50 */
  
  