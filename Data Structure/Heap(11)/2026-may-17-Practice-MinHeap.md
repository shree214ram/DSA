<script>
//8:47 8:59

class mnHeap{
	constructor(){
    	this.heap=[]
    }
    parent(i){
    	return Math.floor((i-1)/2)
    }
    add(val){
    	this.heap.push(val);
        this.bubbledUp(this.heap.length-1)
    }
    bubbledUp(index){
    	let current=index;
        while(current>0){
        	const pIndex=this.parent(current)
            if(this.heap[pIndex]>this.heap[current]){
            	this.swap(this.heap,pIndex,current)
            }
            current=pIndex;
        }
    }
    swap(arr,i,j){
    	[arr[i],arr[j]]=[arr[j],arr[i]]
    }
    removeTop(index){
    	//jo hum top root hatate he vahi retun karna he 
        if(this.heap.length==0){
        	return null
        }
    	if(this.heap.length==1){
        	return this.heap.pop()
        }else{
        	const top=this.heap[0]
        	this.heap[0]=this.heap.pop()
            this.bubbledDown(0);
            return  top
        }
        
    }
    bubbledDown(index){
    	let current=index
    	while(true){
        	const left=2*current+1;        	
            const right=2*current+2;
            let latest=current;
            
            if(left<this.heap.length && this.heap[left]<this.heap[current]){
            	latest=left
            }
            if(right<this.heap.length && this.heap[right]<this.heap[latest]){
            	latest=right
            }
            if(latest!==current){
            	this.swap(this.heap,latest,current);
                current=latest
            }else {
            	break;
            }
        }
    }
}
</script>