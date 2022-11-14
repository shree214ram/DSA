
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
  
    /* Inorder traversal of a binary tree*/
    inorder(temp) {
      if (!temp)
        return;
      this.inorder(temp.left);
      console.log(temp.data);
      this.inorder(temp.right);
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
  
      // # Create the temp array and store the inorder traveral  
      // # of tree  
      const arr = []
      this.storeInorder(root, arr)
      console.log('BT TO ARRAY', arr)
      // # Sort the array 
      // arr.sort()
      arr.sort(function(a, b) { return a - b });
      console.log('SOERTARRAY', arr)
  
      // # copy array elements back to binary tree 
      this.arrayToBST(arr, root)
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
  
  console.log("BT inorder tree is ");
  BT.inorder(BT.root);
  // # Convert binary tree to BST  
  BT.binaryTreeToBST(BT.root)
  
  // print "Following is the inorder traversal of the converted BST"
  console.log("After convert BT TO BST inorder tree is ");
  
  BT.inorder(BT.root);
  console.log("After convert BT TO BST preorder tree is ");
  