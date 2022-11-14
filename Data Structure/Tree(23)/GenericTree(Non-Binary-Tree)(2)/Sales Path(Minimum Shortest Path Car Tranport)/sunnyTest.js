class node{
    constructor(data){
        this.data=data
        this.child=[]
    }
}
function gt(val){
    return new node(val)
}

const GenTree= gt(1)
            //  0      1      2
GenTree.child = [gt(4),gt(5),gt(6)]
GenTree.child[0].child = [gt(2)]
GenTree.child[1].child = [gt(1)]
GenTree.child[2].child = [gt(9)]

GenTree.child[0].child[0].child = [gt(1),gt(3)]
console.log(GenTree,"GenTree")



/*
    1
 /  | \
 4  5  6
/   |  \
 2  1   9
/ \
1 3
*/