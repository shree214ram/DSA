https://www.youtube.com/watch?v=8AnntMKIWlQ

### Steps:
1. inorder traverse 
2. store (root,InorderArray) inorder into an array one by one via recurssion left -> root-> right 
    store (left ,InorderArray)
    store in array: InorderArray.push[root.data]
    store (right ,InorderArray)

3. Sort Inorder array
4. arrayToBST(Root,InorderArray){
    Again Traverse inorder and replace their value with InorderArray Array value 

    1. arrayToBST(Root.left,InorderArray)
    2. root.data = InorderArray[0]
       InorderArray.shift(0)
    3. arrayToBST(Root.right,InorderArray)
}