# Binary Search Tree :-
  Tree which is having 2 child and left child will be lasser than current node value . And Right child's value will be greater than current root node .

### Operration 

1. Add (root,value){
        const newNode = new Node(value)
        AdditionNewNode(root,newNode)
    }
    AdditionNewNode(root,newNode){
        if( root == null)
            root = newNode
        if(root.data>newNode.data){
            if(root.left == null)
                root.left = newNode
            else 
                Add(root.left,newNode)
        } else {
            if(root.right == null)
                root.right = newNode
            else 
                Add(root.right,newNode)
        }
    }
2. Remove (root,value){
        if( root == null)
                return null
        if(root.data>newNode.data){
            return Remove(root.left,value)
        } else if(root.data<newNode.data){
            return Remove(root.right,value)
        } else {
            //if both null
            if(root.left == null && root.right == null){

            }
            //if one null
            if(root.left == null || root.right == null){
                if(root.left == null)
                    root = root.right
                if(root.right == null)
                    root = root.left
            }
            //if no one null
            if(!(root.left == null || root.right == null)){
                const min =findMin(root.right,value)
                root.data = min.data
                root.right = Remove(root.right,min.data)
                return root
            }
        }
    }