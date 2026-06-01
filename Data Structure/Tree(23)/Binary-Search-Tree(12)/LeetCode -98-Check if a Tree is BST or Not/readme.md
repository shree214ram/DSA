https://www.youtube.com/watch?v=9btwHI_84DM

Check if a Tree is BST or Not | Validate a Binary Search Tree | DSA-One Course #69


https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/?ref=gcse

# Approach 1(Normal but wrong method) Time:O(n) Space:O(h):-
Normal check if right is grater than root and left is smaller than root

# Approach 2(Correct But Not efficient) Time:O(n^2) Space:O(h):-
1. Max in left and min in right , if right min is less then Root Or Max is greater than Root then Return False {Means No BST}

# Approach 3(Lower and Upper Limit ) Time:O(n) Space:O(h):-
Min and Max limit
check(Root,Min,Max){
    if(Root == null) Return true
    if(Root.data < Min || Root.data > Max) Return false
    Return (check(Root.left,Min,Root.data-1) &&  check(Root.left,Root.data+1,Max))
}

# Approach 4(Inorder Traversing):-
1. Inorder traversal 
2. and check Sorted array is there or not , IN BST Inorder always in sorted array 
3. No need to check full array is sorted or not we can set 2 variable previous value if less then means Sorted 

