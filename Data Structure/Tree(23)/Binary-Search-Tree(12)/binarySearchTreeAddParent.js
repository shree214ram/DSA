// Java implementation of the approach

/* A binary tree node has data, pointer  
to left child and a pointer  
to right child */
class Node {
    constructor(data) {
      this.data = data;
      this.left = this.right = null;
    }
  }
  
  class BST {
    // Recursive function to find the
    // parent of the given node
    findParent(node, val, parent) {
      if (node == null) return;
  
      // If current node is the required node
      if (node.data == val) {
        // Print its parent
        console.log(parent);
      } else {
        // Recursive calls for the children
        // of the current node
        // Current node is now the new parent
        this.findParent(node.left, val, node.data);
        this.findParent(node.right, val, node.data);
      }
    }
  }
  
  // Driver code
  const BS = new BST();
  BS.root = new Node(1);
  BS.root.left = new Node(2);
  BS.root.right = new Node(3);
  BS.root.left.left = new Node(4);
  BS.root.left.right = new Node(5);
  const node = 4;
  
  BS.findParent(BS.root, node, -1);
  