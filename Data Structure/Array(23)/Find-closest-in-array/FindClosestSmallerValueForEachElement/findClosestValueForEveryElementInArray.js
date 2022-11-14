// https://www.geeksforgeeks.org/find-closest-value-for-every-element-in-array/

// this is simialr to findClosestSmallerValueForEveryElementInArray but 
// only difference is that : its check for greater value Or Lower value , 
// if nearest greater is not exist then print nearest lower .


import AVLTree from '../../Tree/Self-Balancing-Tree/AVL-Tree/avlTree';


const tree = new AVLTree();

const myArray = [10, 5, 11, 6, 20, 12, 10 ];
//       10 
//     /   \ 
//    5    12 
//   / \  /  \ 
//  3  6 11  20 
//.    \
//.     7
// output should be  10 6 12 5 12 11 10


let treeRoot = tree.root;
for (let i = 0; i < myArray.length; i++) {
    // A value "True" means that the key 
    // appears more than once. 
    if (tree.search(treeRoot, arr[i])) 
        tree.put(arr[i], true); 
    else
        tree.put(arr[i], false);
}
tree.preOrder(tree.root);
console.log("Preorder traversal of constructed tree is : ");
tree.preOrder(treeRoot);

console.log("Closest Value  traversal of constructed tree is : ");

// Find smallest greater element for every 
// array element
for (let i = 0; i < myArray.length; i++) {
    // If there are multiple occurrences 
    if (tree.get(arr[i]) == true) 
    { 
        console.log(arr[i] + " "); 
        continue; 
    } 

    // If element appears only once 
    const greater = tree.higherKey(arr[i]); 
    const lower = tree.lowerKey(arr[i]); 
    if (greater == null) 
        console.log(lower + " "); 
    else if (lower == null) 
        console.log(greater + " "); 
    else { 
        const d1 = greater - arr[i]; 
        const d2 = arr[i] - lower; 
        if (d1 > d2) 
            console.log(lower + " "); 
        else
            console.log(greater + " "); 
    }
}
