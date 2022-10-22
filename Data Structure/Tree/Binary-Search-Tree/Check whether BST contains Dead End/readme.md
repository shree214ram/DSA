https://www.youtube.com/watch?v=eZMCRBrMznA
Check whether BST contains Dead End | BST | Love Babbar DSA Sheet | Amazon🔥
CodeLibrary - by Yogesh & Shailesh
5.8K views
1 year ago
https://www.geeksforgeeks.org/check-whether-bst-contains-dead-end-not/?ref=gcse
# Approach 1 Use 2 Map {Time Complaxity O(n),space O(n)} 
1. Create 2 map , 1 for All node another 2nd map for leaf node 
2. check leaf node's exist in  
# Approach 2 (Upper and Lower Bound Limit)
1. for each element traverse in PreOrder Traversing and then set Upper and Lower Limit 
2. If Root then (1,INF) , root.left (1,root.data-1), root.right (root.data+1,INF)
3. If Lower and upper bound limit are same then its Dead End  

