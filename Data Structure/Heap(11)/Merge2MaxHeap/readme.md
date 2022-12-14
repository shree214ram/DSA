https://www.geeksforgeeks.org/merge-two-binary-max-heaps/
### Solution :- merge both array in single and the apply max Hepify method 
const m=[5,4,3,2]
const n=[5,4,3,2]
1. create newArray = new Array(m.length+n.length).fill(0)
2. add all elements from m and n one by one into newArray
3. call bubbleDown(0)

bubbleDown(rootIndex){
    left = this.left(rootIndex)
    right = this.right(rootIndex)
    let rootValue = mh.data[rootIndex]
    let minimum = rootIndex
    if(rootValue<mh.data[left]){
        minimum = left
    }else if(rootValue<mh.data[right]){
        minimum = right 
    }
    if(rootIndex!=minimum){
        swap(minimum,rootIndex)
        bubbleDown(minimum)
    }
}