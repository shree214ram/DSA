// Node class 
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Information stored in every 
// node during bottom up traversal 
class Info {
  constructor(a, b, c, d) {
    this.num_BST = a;
    this.max = b;
    this.min = c;
    this.isBST = d;
  }
};

// Binary Search tree class 
class BinarySearchTree {
  constructor() {
    // root of a binary seach tree 
    this.root = null;
  }

  // function to be implemented 
  // insert(data) cx 
  // helper method which creates a new node to  
  // be inserted and calls insertNode 
  insert(data) {
    // Creating a node and initailising  
    // with data  
    var newNode = new Node(data);

    // root is null then node will 
    // be added to the tree and made root. 
    if (this.root === null)
      this.root = newNode;
    else

      // find the correct position in the  
      // tree and add the node 
      this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree 
  // it moves over the tree to find the location 
  // to insert a node with a given data  
  insertNode(rootNode, newNode) {
    // if the data is less than the rootNode 
    // data move left of the tree  
    if (newNode.data < rootNode.data) {
      // if left is null insert node here 
      if (rootNode.left === null)
        rootNode.left = newNode;
      else

        // if left is not null recurr until  
        // null is found 
        this.insertNode(rootNode.left, newNode);
    }

    // if the data is more than the rootNode 
    // data move right of the tree  
    else {
      // if right is null insert node here 
      if (rootNode.right === null)
        rootNode.right = newNode;
      else

        // if right is not null recurr until  
        // null is found 
        this.insertNode(rootNode.right, newNode);
    }
  }
  // remove(data) 

  remove(data) {
    // root is re-initialized with 
    // root of a modified tree. 
    this.root = this.removeNode(this.root, data);
  }

  // Method to remove node with a  
  // given data 
  // it recurrs over the tree to find the 
  // data and removes it 
  removeNode(rootNode, key) {

    // if the root is null then tree is  
    // empty 
    if (rootNode === null)
      return null;

    // if data to be delete is less than  
    // roots data then move to left subtree 
    else if (key < rootNode.data) {
      rootNode.left = this.removeNode(rootNode.left, key);
      return rootNode;
    }

    // if data to be delete is greater than  
    // roots data then move to right subtree 
    else if (key > rootNode.data) {
      rootNode.right = this.removeNode(rootNode.right, key);
      return rootNode;
    }

    // if data is similar to the root's data  
    // then delete this rootNode 
    else {
      // deleting rootNode with no children 
      if (rootNode.left === null && rootNode.right === null) {
        rootNode = null; //delete from tree with the help of set null to it 
        return rootNode;
      }

      // deleting rootNode with one children 
      if (rootNode.left === null) {
        rootNode = rootNode.right;
        return rootNode;
      } else if (rootNode.right === null) {
        rootNode = rootNode.left;
        return rootNode;
      }

      // Deleting rootNode with two children 
      // minumum rootNode of the right subtree 
      // is stored in aux 
      var aux = this.findMinNode(rootNode.right);
      rootNode.data = aux.data;

      rootNode.right = this.removeNode(rootNode.right, aux.data);
      return rootNode;
    }

  }
  // Helper function 
  // findMinNode() 
  //  finds the minimum node in tree 
  // searching starts from given node 
  findMinNode(node) {
    // if left of a node is null 
    // then it must be minimum node 
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  // findMaxNode() 
  //  finds the minimum node in tree 
  // searching starts from given node 
  findMaxNode(node) {
    // if right of a node is null 
    // then it must be minimum node 
    if (node.right === null)
      return node;
    else
      return this.findMaxNode(node.right);
  }
  // getRootNode() 
  // returns root of the tree 
  getRootNode() {
    return this.root;
  }
  // inorder(node) 
  // Performs inorder traversal of a tree 
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  // preorder(node)           
  // Performs preorder traversal of a tree     
  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  // postorder(node) 
  // Performs postorder traversal of a tree 
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  // search(node, data) 
  // search for a node with given data 
  search(node, data) {
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


  // Returns information about subtree such as 
  // number of BST's it has 
  NumberOfBST(root) {
    // Base case  
    // console.log(Integer.MIN_VALUE)
    if (root == null)
      return new Info(0, 0,
        0, true);

    // If leaf node then return 
    // from function and store 
    // information about the leaf node 
    if (root.left == null && root.right == null)
      return new Info(1, root.data, root.data, true);

    // Store information about the left subtree 
    let L = this.NumberOfBST(root.left);
    // return false;

    // Store information about the right subtree 
    let R = this.NumberOfBST(root.right);

    // Create a node that has to be returned 
    let bst = new Info();
    bst.min = Math.min(root.data, (Math.min(L.min, R.min)));
    bst.max = Math.max(root.data, (Math.max(L.max, R.max)));

    // If whole tree rooted under the 
    // current root is BST 
    if (L.isBST && R.isBST && root.data > L.max && root.data < R.min) {

      // Update the number of BSTs 
      bst.isBST = true;
      bst.num_BST = 1 + L.num_BST + R.num_BST;
    }

    // If the whole tree is not a BST, 
    // update the number of BSTs 
    else {
      bst.isBST = false;
      bst.num_BST = L.num_BST + R.num_BST;
    }

    return bst;
  }
}

// create an object for the BinarySearchTree 
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree 
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17  

var root = BST.getRootNode();

// prints 5 7 9 10 13 15 17 22 25 27 
BST.inorder(root);

// Removing node with no children  
BST.remove(5);


//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//       \    / 
//        9  17  

console.log(" After Remove 5 ");
var root = BST.getRootNode();

// prints 7 9 10 13 15 17 22 25 27 
BST.inorder(root);

// Removing node with one children  
BST.remove(7);

//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      9  13 22  27 
//            / 
//           17  

console.log(" After Remove 7 ");

var root = BST.getRootNode();

// prints 9 10 13 15 17 22 25 27 
BST.inorder(root);

// Removing node with two children  
BST.remove(15);

//          17 
//         /  \ 
//        10   25 
//       / \   / \ 
//      9  13 22  27 

var root = BST.getRootNode();
console.log("inorder traversal");

// prints 9 10 13 17 22 25 27 
BST.inorder(root);

console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
var root = BST.getRootNode();


//          17 
//         /  \ 
//        10   25 
//       / \   / \ 
//      9  13 22  27
// NumberOfBST ==> 7 
var NumberOfBST = BST.NumberOfBST(root);
console.log("NumberOfBST ==> " + NumberOfBST.num_BST)


// findMaxNode ==> 27 
var findMaxNode = BST.findMaxNode(root);
console.log("findMaxNode ==> " + findMaxNode.data)