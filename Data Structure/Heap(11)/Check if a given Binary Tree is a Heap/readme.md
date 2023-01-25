https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-heap/
Check if a given Binary Tree is a Heap

1. isCompleteUtil(root,totalNode,index){
    //base case
    if(root==null){
        return true
    }
    //index paar kar chuka he total limit se
    if(index >= totalNode){
        return false
    }
    //recursion
    return (isCompleteUtil(root.left,totalNode,2*index+1) && isCompleteUtil(root.right,totalNode,2*index+2))
}

2. isHeap(root){
    //base case 
    if(root.left == null && root.right == null){
        return true
    }
    //right not exist
    if(root.right == null){
        return root.data>=root.left.data
    } else {
        //both exist
        if(root.data >= root.left.data && root.data >= root.right.data ){
            return isHeap(root.left) &&  isHeap(root.right)
        } else {
            return false
        }
    }
}