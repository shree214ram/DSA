
<script>
//7:17 , 7:42
//
class maxHeap {
	constructor(){
    	this.data=[]
    }
    
    add(value){
    	this.data.push(value)
        const lastIndex = this.data.length-1
    	this.bubbledUp(lastIndex)
    } 
    bubbledUp(root){
    	let currentIndex = root
        while(currentIndex > 0){
        	const parentIndex = this.parent(currentIndex);
            if(this.data[parentIndex]<this.data[currentIndex]){
            	this.swap(parentIndex,currentIndex);
                
            }
            currentIndex = parentIndex
        }
    }
    parent(i){
    	return parseInt((i-1)/2)
    }
    left(i){
    	return 2*i+1
    }
    right(i){
    	return 2*i+2
    }
    removeTop(){
    	const backTop = this.data[0]
        this.data[0] = this.data[this.data.length-1]
    	this.data.pop()
    	this.bubbledDown(0)
    }
    bubbledDown(root){
    	let leftIndex = this.left(root);    	
        let rightIndex = this.right(root);
        
        let max= root ;
        
        if(this.data[leftIndex]>this.data[root]){
        	max = leftIndex
        }else if(this.data[rightIndex]>this.data[root]){
        	max = rightIndex
        }
	
    	if(max!= root){
        	this.swap(max,root)
            this.bubbledDown(max)
        }
    }
    swap(a,b){
    	let temp = this.data[a];
        this.data[a] = this.data[b];        		
        this.data[b] = temp;
    }
    empty(){
    	return this.data.length == 0
    }
}


const A = [28, 3, 1, 5, 4, 6] // output 3
//insert 3 values 
const k = 3
const hp = new maxHeap();
for(let i=0;i<k;i++){
	hp.add(A[i])
}
let j=k
while(!hp.empty() && j< A.length ){
	let top = hp.data[0];
    if(top>A[j]){
    	hp.removeTop();
        hp.add(A[j]);
    }
    j++
}
console.log(hp.data)
console.log("kth smallest element is =", hp.data[0])
</script>

