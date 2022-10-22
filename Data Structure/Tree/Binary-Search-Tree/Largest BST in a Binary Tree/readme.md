https://www.youtube.com/watch?v=6nJ_fUcCTNU
Largest BST in a Binary Tree | BST | Love Babbar DSA Sheet | Amazon🔥
CodeLibrary - by Yogesh & Shailesh
10K views
1 year ago

https://www.geeksforgeeks.org/largest-bst-binary-tree-set-2/?ref=gcse

# Largest BST in BT
### Steps:-


1. LargestBST(root){
    Set 4 parameter at each node via In Order Traversing (isBST,size,min,max)
2. if root null then 
        return newNode(1,0,Number.MIN_VALUE,Number.MAX_VALUE)
3. if root not null but left and right are null then 
        return newNode(1,1,root.data,root.data)
4. const result = newNode()
    const left = Largest(root.left)
    const right = Largest(root.right)
    if root not null AND  left && right not null then {
        if(left.isBST && right.isBST && root.data > left.Max && root.data < right.Min){
            //this is the main concept of BST left and right should be present and left < root and right > root 
            result.min = Math.min(Math.min(Left.min,right.min),root.data)
            result.max = Math.max(Math.max(Left.max,right.max),root.data)
            result.size = Math.max(left.size,right.size)+1
            result.isBST = true
            return result
        }
    }
    //if total tree is not bst 
    result.size = Math.max(left.size,right.size)+1
    result.isBST = false
5. newNode{
    constructor(isBST,size,min,max){
        this.isBST = isBST
        this.size = size
        this.min = min
        this.max = max
    }
}

# Total No Of BST 
### Steps ;- code and all the steps will same like largest bst only one small difference will be that at place of size number of bst flag will be there and we will increase the counter like if both child are BST then 
        bst.num_BST = 1 + L.num_BST + R.num_BST;
5. newNode{
    constructor(isBST,num_BST,min,max){
        this.isBST = isBST
        this.num_BST = num_BST
        this.min = min
        this.max = max
    }
}
