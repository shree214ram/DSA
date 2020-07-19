// https://www.geeksforgeeks.org/find-closest-smaller-value-for-every-element-in-array/?ref=rp
//Javascript // Java program to find closest smaller value for 
// every array element 
import AVLTree from '../Tree/Self-Balancing-Tree/AVL-Tree/avlTree';


const tree = new AVLTree();

const myArray = [10, 5, 11, 6, 20, 12, 3, 7];
//       10 
//     /   \ 
//    5    12 
//   / \  /  \ 
//  3  6 11  20 
//.    \
//.     7
// output should be  7, 3, 10,  5, 12, 11, -1,6

let treeRoot = tree.root;
for (let i = 0; i < myArray.length; i++) {

    treeRoot = tree.insert(treeRoot, myArray[i]);
}
tree.preOrder(tree.root);
console.log("Preorder traversal of constructed tree is : ");
tree.preOrder(treeRoot);

console.log("Smaller traversal of constructed tree is : ");


// ##########Javascript Program for Find largest smaller element for every array element ########
// ##### Another example for Use Self Balance Tree (Tree Set in java)for fast search https://www.java2novice.com/java-collections-and-util/treeset/highest-value/
const finalArray = []
for (let i = 0; i < myArray.length; i++) {
    const smaller = tree.lower(treeRoot, myArray[i]);

    if (smaller.data == myArray[i]) {
        finalArray.push(-1)
    }
    else {
        finalArray.push(smaller.data)
    }
}

console.log("Given testArray = 10, 5, 11, 6, 20, 12,3, 7");

console.log("Required finalArray = 7, 3, 10,  5, 12, 11, -1,6");
console.log("result finalArray = " + finalArray);
