class Node {
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
        this.parent=null;
        this.height=null;
    }
}

class AvlTree {
    constructor(){
        this.size=0;
        this.keys={};
    }

    getSize(){
        return this.size;
    }
    getHeight(node){
        return (node == null) ? 0 : node.height
    }
    getBalance(root){
        return root.left.height - root.left.height;
    }
//     x
//    /  y
//   3   / \
//      1  3
    leftRotate(x){
        const y = x.right;
        const T2 = y.left;

        //set parent 
        if(y.left !== null)
        y.left.parent = x;
         y.parent = x.parent  (mistake)
        if(x.parent == null){
            y.parent = null
            this.root = y 
        } else if(x.parent.left == x) x.parent.left = y (mistake)
        else x.parent.right = y (mistake)

        //transorm
         y.left = x;
         x.right = T2  ;
         x.parent = y  ;
        return y 

    }
    rightRotate(x){

        const y = x.left;
        const T2 = y.right;

        //set parent 
        if(x.parent == null){
            y.parent = null
            this.root = y 
        } else 
        //transorm
         y.right = x;
         x.left = T2  ;
        return y 

    }
    insert(root,data){

        //insert bst
      if (root == null) return new Node(data); (mistake)

        if(data < root.data){
            const lChild = this.insert(root.left, data)
            lChild.parent = root
            root.left = lChild
        } else if(data > root.data){
            const rChild = this.insert(root.right, data)
            rChild.parent = root
            root.right = rChild
        } else return root

        //height add
        root.height = 1+ max(this.height(root.left), this.height(root.right))

        //adjust height
        const balance = this.getBalance(root);
        //Right Roration
        if(balance > 1 && data < root.data){  (mistake)
            this.rightRotate(root)
        }
        //Left Roration
        if(balance < -1 && data > root.data){ (mistake)
            this.leftRotate(root)
        }
        //Right Left Roration
        if(balance > 1 && data < root.left.data){ (mistake)
            this.rightRotate(root) (mistake)
            this.leftRotate(root) (mistake)
        }
        //Left Right Roration
        if(balance < -1 && data > root.right.data){ (mistake)
            this.leftRotate(root) (mistake)
            this.rightRotate(root) (mistake)
        }
    }
    delete(root,data){

    }
    getLowerKey(root, data){
        let p = root;
        while(p != null){
            if(root.data < data)
            { 
                if(root.right != null){ (mistake)
                    p = root.right
                } else return p 

            } else {
                if(root.left != null){
                    p = root.left
                } else {
                    let parent = p.parent
                    let ch = p
                    while(parent != null && ch == parent.left){
                        ch = parent;
                        parent = parent.parent;
                    }
                }
            }
        }
        return p 
    }

}