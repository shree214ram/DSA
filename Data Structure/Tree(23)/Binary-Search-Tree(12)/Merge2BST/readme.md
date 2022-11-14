https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/?ref=gcse

https://www.youtube.com/watch?v=LY5hbvFSJqM

https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/?ref=gcse

Navie Aproach (BST Insert Function):-
1. Insert all element one by one into second BST  by BST Insert Function
2. this will take O(Logm) + O(Log(n+1))
Efficient Approach (Inorder Traversing):-
1. make 2 inorder aray of both BST that will be damesure Sorted array
2. Insert all the element of both arrays into  Has map A3 
3. A3 will be an sorted array 
4. Convert Sorted array {which is a Normal BST} to Balanced BST 
    conBST(root,start,end)
    1. find Mid index
    2. root.data= Result[mid]
    3. call same function again for left sub tree conBST(root.left,start,mid)
    3. call same function again for right sub tree conBST(root.right,mid+1,end)