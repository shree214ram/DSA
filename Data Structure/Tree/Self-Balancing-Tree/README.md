Self-Balancing-Binary-Search-Trees :- 
    Self-Balancing Binary Search Trees are height-balanced binary search trees that automatically keeps height as small as possible when insertion and deletion operations are performed on tree. The height is typically maintained in order of Log n so that all operations take O(Log n) time on average.

    Important function which makes AVL (Self Balance Tree) more important 
    search , insert o(h) h height in BST o(logn) in AVL (Self Balance Tree)
    https://hajsoftutorial.com/treeset-first-last-lower80-higher20-descendingset/#:~:text=The%20lower()%20method%20returns,there%20is%20no%20such%20element.

Examples :-
    1) Red Black Tree
    2) AVL Tree


Why Red-Black Trees?
    Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. The cost of these operations may become O(n) for a skewed Binary tree. If we make sure that height of the tree remains O(Logn) after every insertion and deletion, then we can guarantee an upper bound of O(Logn) for all these operations. The height of a Red-Black tree is always O(Logn) where n is the number of nodes in the tree.


Comparison with AVL Tree
    The AVL trees are more balanced compared to Red-Black Trees, but they may cause more rotations during insertion and deletion. So if your application involves "many frequent" insertions and deletions, then Red Black trees should be preferred. And if the insertions and deletions are less frequent and search is a "more frequent" operation, then AVL tree should be preferred over Red-Black Tree.

