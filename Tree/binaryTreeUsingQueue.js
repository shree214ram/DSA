// User defined class node 
class LinkedListNode {
  // constructor 
  constructor(element) {
    this.element = element;
    this.next = null
  }
}

// linkedlist class 
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // functions to be implemented 

  // add(element)  at the first of list 
  push(new_data) {
    //Allocate new node and putting data 
    var new_node = new LinkedListNode(new_data);
    //Make next of new node as head 
    new_node.next = this.head;
    //Move the head to point to new Node 
    this.head = new_node;
    this.size++;
  }

  // adds an element at the end of list 
  add(element) {
    // creates a new node 
    var node = new LinkedListNode(element);
    // to store current node 
    var current;
    // if list is Empty add the 
    // element and make it head 
    if (this.head == null)
      this.head = node;
    else {
      current = this.head;
      // iterate to the end of the 
      // list 
      while (current.next) {
        current = current.next;
      }
      // add node 
      current.next = node;
    }
    this.size++;
  }

  // PrintList 
  printList() {
    var tnode = this.head;
    while (tnode != null) {
      console.log(tnode.element + "->");
      tnode = tnode.next;
    }
    console.log("null");
  }
  // insertAt(element, index) 
  // insert element at the position index 
  // of the list 
  insertAt(element, index) {
    if (index > 0 && index > this.size)
      return false;
    else {
      // creates a new node 
      var node = new LinkedListNode(element);
      var curr, prev;

      curr = this.head;

      // add the element to the 
      // first index 
      if (index == 0) {
        node.next = head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find 
        // the position to insert 
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element 
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }

  }

  // removeFrom(index) 
  // removes an element from the specified index 
  removeFrom(index) {
    if (index > 0 && index > this.size)
      return -1;
    else {
      var curr, prev, it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element 
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the 
        // position to removce an element 
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element 
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element 
      return curr.element;
    }
  }
  // removeElement(element) 
  // removes a given element from the list 
  removeElement(element) {
    var current = this.head;
    var prev = null;

    // iterate over the list 
    while (current != null) {
      // comparing element with current 
      // element if found then remove the 
      // and return true 
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // searchElement(element) 
  // searchs a given element from the list 
  search(element) {
    var count = 0;
    var current = this.head;

    // iterae over the list 
    while (current != null) {
      // compare each element of the list 
      // with given element 
      if (current.element === element)
        return count;
      count++;
      current = current.next;
    }

    // not found 
    return -1;
  }

  /* Function to reverse the linked list */
  /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
  // Helper Methods 
  // Helper Methods 
  // isEmpty 
  // checks the list for empty 
  isEmpty() {
    return this.size == 0;
  }
  // size_Of_List 
  // gives the size of the list 
  size_Of_List() {
    return this.size;
  }
  // size_Of_List 
  // gives the size of the list 
  pool_List() {
    return this.removeFrom(0);
  }
}

// ###########################################################
// Node class 
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search tree class 
class BinaryTree {
  constructor() {
    // root of a binary seach tree 
    this.root = null;
    this.max_level = 0;
    this.max_level_r = 0;
  }

  // recursive function to print left view 
  leftViewUtil(node, level) {
    // Base Case 
    if (node == null)
      return;

    // If this is the first node of its level 
    if (this.max_level < level) {
      console.log(" " + node.data);
      this.max_level = level;
    }

    // Recur for left and right subtrees 
    this.leftViewUtil(node.left, level + 1);
    this.leftViewUtil(node.right, level + 1);
  }

  // A wrapper over leftViewUtil() 
  leftView() {
    this.leftViewUtil(this.root, 1);
  }

  rightViewUtil(node, level, max_level_r) {

    // Base Case 
    if (node == null)
      return;

    // If this is the last Node of its level 
    if (this.max_level_r < level) {
      console.log(node.data + " ");
      this.max_level_r = level;
    }

    // Recur for right subtree first, then left subtree 
    this.rightViewUtil(node.right, level + 1, max_level_r);
    this.rightViewUtil(node.left, level + 1, max_level_r);
  }

  rightView() {
    this.rightViewUtil(this.root, 1, this.max);
  }

  // function to print right view of binary tree 
  printRightView(root) {
    if (root == null)
      return;

    const queue = new LinkedList();
    queue.add(root);

    while (!queue.isEmpty()) {
      // number of nodes at current level 

      let n = queue.size_Of_List();

      // Traverse all nodes of current level  
      for (let i = 1; i <= n; i++) {
        let temp = queue.pool_List();

        // Print the right most element at  
        // the level 
        if (i == n)
          console.log(temp.data + " ");

        // Add left node to queue 
        if (temp.left != null)
          queue.add(temp.left);

        // Add right node to queue 
        if (temp.right != null)
          queue.add(temp.right);
      }
    }
  }

  /* function to print level order traversal of tree*/
  printLevelOrder() {
    let h = this.height(this.root);
    let i;
    for (i = 1; i <= h; i++)
      this.printGivenLevel(this.root, i);
  }

  /* Compute the "height" OR "maxDepth" of a tree -- the number of 
  nodes along the longest path from the root node 
  down to the farthest leaf node.*/
  height(root) {
    if (root == null)
      return 0;
    else {
      /* compute  height of each subtree */
      let lheight = this.height(root.left);
      let rheight = this.height(root.right);

      /* use the larger one */
      if (lheight > rheight)
        return (lheight + 1);
      else return (rheight + 1);
    }
  }

  /* Print nodes at the given level */
  printGivenLevel(root, level) {
    if (root == null)
      return;
    if (level == 1)
      console.log(root.data + " ");
    else if (level > 1) {
      this.printGivenLevel(root.left, level - 1);
      this.printGivenLevel(root.right, level - 1);
    }
  }

  /* computes number of nodes in tree */
  size(node) {
    if (node == null)
      return 0;
    else
      return (this.size(node.left) + 1 + this.size(node.right));
  }

  /* Inorder traversal of a binary tree*/
  inorder(temp) {
    if (!temp)
      return;
    this.inorder(temp.left);
    console.log(temp.data);
    this.inorder(temp.right);
  }
  /* preorder traversal of a binary tree*/
  preorder(temp) {
    if (!temp)
      return;
    console.log(temp.data);

    this.preorder(temp.left);
    this.preorder(temp.right);
  }
  /* postorder traversal of a binary tree*/
  postorder(temp) {
    if (!temp)
      return;
    this.postorder(temp.left);
    this.postorder(temp.right);
    console.log(temp.data);
  }
  /* function to delete the given deepest node  */
  deleteDeepest(root, d_node) {

    let q = []
    q.push(root)
    while (q.length > 0) {
      temp = q.pop(0)
      if (temp === d_node) {
        temp = null
        return
      }
      if (temp.right) {
        if (temp.right === d_node) {
          temp.right = null
          return
        } else {
          q.push(temp.right)
        }
      }
      if (temp.left) {
        if (temp.left === d_node) {
          temp.left = null
          return
        } else {
          q.push(temp.left)
        }
      }
    }
  }
  deletion(root, key) {

    if (root == null)
      return null
    if (root.left == null && root.right == null) {
      if (root.key == key) {
        return null
      } else {
        return root
      }
    }
    key_node = null
    q = []
    q.push(root)
    while (q.length > 0) {

      temp = q.pop(0)
      if (temp.data == key) {
        key_node = temp
      }
      if (temp.left) {
        q.push(temp.left)
      }
      if (temp.right) {
        q.push(temp.right)
      }
    }
    if (key_node) {
      x = temp.data

      this.deleteDeepest(root, temp)
      key_node.data = x
    }
    return root
  }


  // # Helper function to store the inroder traversal of a tree 
  storeInorder(root, inorder) {
    // # Base Case 
    if (root == null) {
      return
    }
    // # First store the left subtree 
    this.storeInorder(root.left, inorder)

    // # Copy the root's data 
    inorder.push(root.data)

    // # Finally store the right subtree 
    this.storeInorder(root.right, inorder)
  }


  // # Helper function that copies contents of sorted array  
  // # to Binary tree 
  arrayToBST(arr, root) {
    //  # Base Case 
    if (root == null) {
      return
    }

    // # First update the left subtree 
    this.arrayToBST(arr, root.left)
    // # now update root's data delete the value from array 
    root.data = arr[0]
    arr.shift(0)

    // # Finally update the right subtree 
    this.arrayToBST(arr, root.right)
  }

  // # This function converts a given binary tree to BST 
  binaryTreeToBST(root) {

    // # Base Case: Tree is empty 
    if (root == null) {
      return
    }

    // # Count the number of nodes in Binary Tree so that  
    // # we know the size of temporary array to be created 
    n = this.size(root)

    // # Create the temp array and store the inorder traveral  
    // # of tree  
    arr = []
    this.storeInorder(root, arr)
    console.log('BT TO ARRAY', arr)
    // # Sort the array 
    // arr.sort()
    arr.sort(function(a, b) { return a - b });
    console.log('SOERTARRAY', arr)

    // # copy array elements back to binary tree 
    this.arrayToBST(arr, root)
  }

  // // # This function returns overall maximum path sum in 'res' 
  // // # And returns max path sum going through root 
  // findMaxUtil(root) {
  //   // # Base Case 
  //   if (root == null) {
  //     return 0
  //   }


  //   // # l and r store maximum path sum going through left  
  //   // # and right child of root respetively 
  //   l = this.findMaxUtil(root.left)
  //   r = this.findMaxUtil(root.right)

  //   // # Max path for parent call of root. This path  
  //   // # must include at most one child of root 
  //   max_single = max(max(l, r) + root.data, root.data)

  //   // # Max top represents the sum when the node under 
  //   // # consideration is the root of the maxSum path and 
  //   // # no ancestor of root are there in max sum path 
  //   max_top = max(max_single, l + r + root.data)

  //   // # Static variable to store the changes 
  //   // # Store the maximum result 
  //   findMaxUtil.res = max(findMaxUtil.res, max_top)

  //   return max_single
  // }


  // // # Return maximum path sum in tree with given root 
  // findMaxSum(root) {
  //   // # Initialize result 
  //   findMaxUtil.res = float("-inf")

  //   // # Compute and return result 
  //   this.findMaxUtil(root)
  //   return findMaxUtil.res
  // }


// This function returns overall maximum path sum in 'res' 
    // And returns max path sum going through root. 
    findMaxUtil( node,  res) 
    { 
  
        // Base Case 
        if (node == null) 
            return 0; 
  
        // l and r store maximum path sum going through left and 
        // right child of root respectively 
        let l = this.findMaxUtil(node.left, res); 
        let r = this.findMaxUtil(node.right, res); 
  
        // Max path for parent call of root. This path must 
        // include at-most one child of root 
        let max_single = Math.max(Math.max(l, r) + node.data, 
                                  node.data); 
  
  
        // Max Top represents the sum when the Node under 
        // consideration is the root of the maxsum path and no 
        // ancestors of root are there in max sum path 
        let max_top = Math.max(max_single, l + r + node.data); 
  
        // Store the Maximum Result. 
        res.val = Math.max(res.val, max_top); 
  
        return max_single; 
    } 
  
    // Returns maximum path sum in tree with given root 
     findMaxSum( node) { 
  
        // Initialize result 
        // int res2 = Integer.MIN_VALUE; 
        let res = {}; 
        res.val = 0; 
  
        // Compute and return result 
        this.findMaxUtil(node, res); 
        return res.val; 
    } 

}

// create an object for the BinaryTree 
var BT = new BinaryTree();

// Inserting nodes to the BinaryTree 
BT.root = new Node(1);
BT.root.left = new Node(2);
BT.root.left.left = new Node(41);
BT.root.left.right = new Node(9);
BT.root.right = new Node(21);
BT.root.right.left = new Node(4);
BT.root.right.right = new Node(49);
BT.root.right.left.left = new Node(6);
BT.root.right.left.right = new Node(68);
BT.root.right.left.left.left = new Node(8);
BT.root.right.left.left.right = new Node(83);

//          1 
//         /  \ 
//        2    21 
//       / \   / \     
//      41  9 4  49
//              / \
//              6  68
//                  / \
//                  8  83
console.log("leftView of binary tree is ");

BT.leftView();

console.log("rightView of binary tree is ");

BT.rightView();

console.log("rightView of binary tree using queue is ");

BT.printRightView(BT.root);

console.log("########################### BFS ##########################");
console.log("Level order traversal of binary tree is ");
BT.printLevelOrder();

console.log("Height of binary tree is ");
console.log(BT.height(BT.root));


console.log("size of binary tree is ");
console.log(BT.size(BT.root));

const root = BT.deletion(BT.root, 2);
console.log("After delete  Inorder  traversal of binary tree is ");

console.log("########################### DFS ##########################");

BT.inorder(root);

console.log("After delete  Preorder  traversal of binary tree is ");

BT.preorder(root);

console.log("After delete  Postorder  traversal of binary tree is ");

BT.postorder(root);
console.log("After delete  Level order traversal of binary tree is ");
BT.printLevelOrder();

console.log("########################### Convert binary tree to BST   ##########################");

// # Convert binary tree to BST  
BT.binaryTreeToBST(BT.root)

// print "Following is the inorder traversal of the converted BST"
console.log("After convert BT TO BST inorder tree is ");

BT.inorder(BT.root);
console.log("After convert BT TO BST preorder tree is ");

BT.preorder(BT.root);
console.log("After convert BT TO BST postorder tree is ");

BT.postorder(BT.root);

console.log("After convert BT TO BST  Level order traversal of binary tree is ");

BT.printLevelOrder();

console.log("Max path sum is ");

BT.findMaxSum(BT.root); 