//2:58
//Smallest Range from K Sorted List
/*[]
[]
[]
min max < old { update }*/
class NewNode {
	constructor(val,row,col){
    	this.data=val
    	this.row=row
    	this.col=col
    }
}
class Heap {
	constructor(){
    	this.data=[]
    }
    parent(i){
    	return Math.round((i-1)/2);
    }
    left(i){
    	return 2*i+1;
    }
    right(i){
    	return 2*i+2;
    }
    swap(a,b){
    	let temp = this.data[a]
        this.data[a]=this.data[b]
        this.data[b]=temp
    }
    addOnBottom(value){
    	this.data.push(value);
        let lastIndex = this.data.length-1
        
        while(lastIndex>0){
        const lastIndexValue = this.data[lastIndex]
        const parentIndex = this.parent(lastIndex)
        const parentIndexValue = this.data[parentIndex];
        
        if(parentIndexValue.data>lastIndexValue.data){
        		
        		this.swap(lastIndex,parentIndex)
            }
            lastIndex = parentIndex
        }
    }
    removeFromTop(){
    	const topElement = this.data[0]
        this.data[0] = this.data[this.data.length-1];
        this.data.pop()
        this.bubbledDown(0)
        
    }
    bubbledDown(root){
    	const rootData = this.data[root]
        
        const leftIndex = this.left(root)
    	const leftData = this.data[leftIndex]
        
        
        const rightIndex = this.left(root)
    	const rightData = this.data[rightIndex]
        
        
        let currentIndex = root
    	if(rootData.data>leftData.data){
        	currentIndex = leftIndex
        }else if(rootData.data>rightData.data){
        	currentIndex = rightIndex
        }
        if(currentIndex !== root){
        
        	swap(currentIndex,root)
            
        }
        bubbledDown(currentIndex)
    }
    empty(){
        return this.data.length == 0
    }
}
const givenArray = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
//Output: [20,24]
const hp = new Heap();
let minDiff = 1000000000000;
console.log(hp.data,"HP Data")

for(let i=0;i<givenArray.length;i++){
	const newAddNode = new NewNode(givenArray[i][0],i,0)
	hp.addOnBottom(newAddNode);
}
console.log(hp.data,"HP Data")
let max = Number.MIN_VALUE
let min = Number.MAX_VALUE
let start=-1,end=-1;
while(!hp.empty()){

	let TopElement = hp.data[0] // chota
console.log(TopElement,"element to be removed")
    
	let LastElement = hp.data[hp.data.length-1] // chota
    min = TopElement.data
    if(max-min+1 < minDiff){
    	minDiff = max-min+1
        start = min;
        end = max;
    }
	hp.data[0] = LastElement;
    hp.data.pop();
    
    const row=TopElement.row
    const col=TopElement.col
    let newAddNode = null
    if(col+1<givenArray[row].length){
    if(givenArray[row][col+1]){
     newAddNode = new NewNode(givenArray[row][col+1],row,col+1)
    }else {
    	 newAddNode = new NewNode(givenArray[row+1][col],row,col)
    }
console.log(newAddNode,"newAddNode")
    hp.addOnBottom(newAddNode);
    if(newAddNode.data>max){
    	max = newAddNode.data
    }
    }
}
console.log(minDiff,"minDiff")
console.log(start,"start")
console.log(end,"end")

