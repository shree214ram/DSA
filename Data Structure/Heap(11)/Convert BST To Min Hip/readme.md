Convert BST To Min Hip
https://www.geeksforgeeks.org/convert-bst-min-heap/

1. Structure will be same as given because its complete Binary Tree 
2. first take Inorder and store in an array A[1,2,3,4,5,6,7]
3. then take elemnt of array one by one and prefer folrmula of Pre Order traverse on same tree and update the value of them 
   N L R [1,2,3,4,5,6,7] 
                    4
                /       \
              2          6
            /  \        /  \
          1     3      5    7  
           
            Root
     left         right 

   N will go to root , L will go to Left of N 
   like 
   //1.Preapre Tree
    const BT = new BinaryTree();
    BT.root= 4
    BT.root.left= 2
    BT.root.right= 6
    BT.root.left.left= 1
    BT.root.left.right= 6
    BT.root.right.left= 5
    BT.root.right.right= 6

    const root = BT.root
   //2. InOrder arrat that will be sorted array 
    const inorder = inOrder(root)
    inorder(root){
      inorder(root.left)
      arr.push(root.data) // prepare arr[] which is a ascending sorted order array 
      inorder(root.right)
    }

    //3. Preorder traversing of same array and update their value according to Sorted array index 
   preOrder(root,Arr){
      root.data=arr[i++] //****ye line main he jo ki replace karegi preorder format me min heap banane ke liye 
      preOrder(root.left)
      preOrder(root.right)
   }