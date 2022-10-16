class Node{
    constructor(val){
        this.data=val;
        this.child=[]
    }
}

function utilFn(root){
	if(root.data==null){
        return 0
    }
    if(root.child.length==0){
        return root.data
    }
    let min = root.data+root.child[0].data
    
    for(let i=0;i<root.child.length;i++){
        min=  Math.min((root.data+utilFn(root.child[i])),min)
    }
    return min
}

function printShortestPath(root){
    return utilFn(root)
}

const root = new Node(1)
root.child =[new Node(8),new Node(9),new Node(4)]
root.child[0].child =[new Node(5),new Node(6),new Node(7)]
root.child[1].child =[new Node(8),new Node(9),new Node(10)]
root.child[2].child =[new Node(2)]
console.log("shortest path value = ",printShortestPath(root))