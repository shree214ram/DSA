//11:54
//12:8

//12:30
class MH{
	constructor(){
    	this.data=[]
    }
    
    add(value){
        this.data.push(value);
        this.bubbledUp(this.data.length-1)
    }
    
    removeTop(root){
    	let top = this.data[0];
        this.data[0] = this.data[this.data.length-1]
        this.data[this.data.length-1] = top
        this.data.pop()
        this.bubbledDown(0)
    }
    
    left(i){
    	return 2*i+1
    }
    
    right(i){
        	return 2*i+2
    }
    
    parent(i){
        	return parseInt((i-1)/2)
    }
    
    bubbledUp(lastIndex){
    	let currentIndex = lastIndex;
        
        while(currentIndex > 0){
          const currentIndexValue = this.data[currentIndex]
          const parentIndex = this.parent(currentIndex)
          const parentIndexValue = this.data[parentIndex]
          if(parentIndexValue < currentIndexValue){
              this.swap(currentIndex,parentIndex)
          }
          currentIndex = parentIndex
        }
        
    }
    
    bubbledDown(rootIndex){
    	 
          const rootIndexValue = this.data[rootIndex]
          const leftIndex = this.left(rootIndex)          
          const rightIndex = this.right(rootIndex)

          const leftIndexValue = this.data[leftIndex]          
          const rightIndexValue = this.data[rightIndex]
			let maximum = rootIndex
           if(rootIndexValue < rightIndexValue){
             maximum = rightIndex
          }
          else if(rootIndexValue < leftIndexValue){
             maximum = leftIndex
          }
          
          if(maximum !== rootIndex ){
          	 this.swap(maximum,rootIndex)          
             this.bubbledDown(maximum)
          }
    }
    empty(){
    	return this.data.length == 0
    }
    swap(a,b){
    
    	let temp = this.data[a];
        this.data[a] = this.data[b]       
        this.data[b] = temp
    }
}

const maxheap = new MH()
const A = [2,9,5,8,1,3,7,4,6]
const k = 3
//add k element in heap 
for(let i=0;i<k;i++){
	maxheap.add(A[i])
}



for(let i=k;i<A.length;i++){
	const top = maxheap.data[0]
	if(A[i] < top){
    maxheap.removeTop()
    	maxheap.add(A[i])
        
    }
}

console.log("kth smallest element is ",maxheap.data[0])