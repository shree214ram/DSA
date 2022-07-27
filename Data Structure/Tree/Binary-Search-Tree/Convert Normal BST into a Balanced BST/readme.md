https://www.youtube.com/watch?v=ceGBg3g18js

Convert Normal BST into a Balanced BST | Binary Search Tree | Love Babbar DSA Sheet | Amazon 🔥

Steps :-
1. Store Inorder , start = 0 , end= length of InorderArray
2. call convertBalancedBST(InorderArray,root, start, end)
3. convertBalancedBST(InorderArray,root, start, end){
    if(start>end) return
    mid = (start+end)/2
    root.data = InorderArray[mid]
    convertBalancedBST(InorderArray,root.left, 0, mid)
    convertBalancedBST(InorderArray,root.right, mid+1,n)
}