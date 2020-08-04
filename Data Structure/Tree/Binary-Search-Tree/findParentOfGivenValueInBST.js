//https://www.callicoder.com/find-closest-element-binary-search-tree/

// Find the closest element to a target value in a binary search tree

//First Simple Method 
// https://www.geeksforgeeks.org/find-closest-element-binary-search-tree/

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
    findClosestValue(node, target) {
      console.log(node, target)
      let currentNode = node;
      let closestValue = currentNode.data;
      let minDiff = 999999999;
  
      while (currentNode != null) {
        let currentDiff = Math.abs(target - currentNode.data);
        console.log("currentDiff", currentDiff)
  
        if (currentDiff < minDiff) {
          minDiff = currentDiff;
          closestValue = currentNode.data;
        }
        if (target < currentNode.data) {
          currentNode = currentNode.left;
        } else if (target > currentNode.data) {
          currentNode = currentNode.right;
        } else {
          break;
        }
      }
      return closestValue;
    }
    // Recursive function to find the 
    // parent of the given node 
    findParent( node, val,  parent) {
  
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
        if(node.data > val){
          return this.findParent(node.left, val, node.data);
        } else {
          return this.findParent(node.right, val, node.data);
        }
      }
    }
  }
  
  // create an object for the BinaryTree 
  var BT = new BinaryTree();
  
  // Inserting nodes to the BinaryTree 
  // BT.root = new Node(1);
  // BT.root.left = new Node(2);
  // BT.root.right = new Node(21);
  // BT.root.left.left = new Node(4);
  // BT.root.left.right = new Node(49);
  // BT.root.left.left.left = new Node(6);
  // BT.root.left.left.right = new Node(68);
  // BT.root.left.left.left.left = new Node(8);
  // BT.root.left.left.left.right = new Node(83);
  
  
  BT.root = new Node(9);
  BT.root.left = new Node(4);
  BT.root.right = new Node(17);
  
  BT.root.left.left = new Node(3);
  BT.root.left.right = new Node(6);
  BT.root.left.right.left = new Node(5);
  BT.root.left.right.right = new Node(7);
  
  BT.root.right.right = new Node(22);
  BT.root.right.right.left = new Node(20);
  const current = 22;
      console.log("Parent Node Of "+current+"==>",BT.findParent(BT.root, current, -1));
  //findParent(root, node, -1);
  
  // Input
  // -----
  // Binary Search Tree:
  //      9
  //    /   \
  //   4      17
  //  / \      \
  // 3   6      22
  //    / \     /
  //   5   7   20
  
  // target: 18 
  
  
  // Output
  // ------
  // 17
  
  // console.log("leftView of binary tree is ");
  
  // BT.leftView();
  
  // console.log("rightView of binary tree is ");
  
  // BT.rightView();
  
  // console.log("Level order traversal of binary tree is ");
  // BT.printLevelOrder();
  
  // console.log("Height of binary tree is ");
  // console.log(BT.height(BT.root));
  
  
  // console.log("size of binary tree is ");
  // console.log(BT.size(BT.root));
  
  //findClosestValue( node,  target)
  
  
  // Second Method 
  // https://www.geeksforgeeks.org/find-the-closest-element-in-binary-search-tree-space-efficient-method/