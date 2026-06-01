<script>
//9:08 9:34 , Its printing min heap but nut sorted array

class minHeap{

	constructor(){
    	this.heap=[]
    }
    parent(i){
    	return Math.floor((i-1)/2)
    }
    add(val){
    	if(this.heap.length==0){
    	this.heap.push(val)
        }else{
        	this.heap.push(val);
            this.bubbledUp(this.heap.length-1)
        }
    }
    swap(arr,i,j){
    	[arr[i],arr[j]]=[arr[j],arr[i]]
    }
    removeTop(){
    	if(this.heap.length==0) return null;
        const top=this.heap[0]
        if(this.heap.length==1){ 
        	this.heap.pop()
        	return top
        }else{
        	this.heap[0]=this.heap.pop();
            this.bubbledDown(0)
        	return top
        }
    }
    bubbledUp(index){
    	let current=index;
        while(current>0){
        	const pIndex=this.parent(current);
            if(this.heap[current]<this.heap[pIndex]){
            	this.swap(this.heap,current,pIndex)
            }
            current=pIndex
        }
    }
    bubbledDown(i){
    	let current=i
    	while(true){
        	const left=2*current+1;        	const right=2*current+2;
            let latest=current;
            if(left<this.heap.length && this.heap[current]>this.heap[left]){
            	latest=left
            }
			if(right<this.heap.length && this.heap[latest]>this.heap[right]){
            	latest=right
            }
            if(latest!=current){
            
            	this.swap(this.heap,latest,current);
                current=latest;
            }else{
            	break;
            }
            
        }
    }
   
}

const A=[9,5,2,1,6]

const mh=new minHeap();

for(let i=0;i<A.length;i++){
	mh.add(A[i])
}
console.log(mh.heap); 

const res=[]
while(mh.heap.length>0){
	const top=mh.removeTop();
    res.push(top);
    
}
console.log(res);
</script>

You are incredibly close! Your comparison operators (`>`) and node index updates (`latest = left/right`) inside `bubbledDown` are **100% correct** today. You nailed the tough min-heap logic cleanly.

The reason your extraction loop isn't printing a sorted array comes down to **one missing step inside your `removeTop()` function**.

Look closely at what happens when the heap has more than one element:

```javascript
} else {
    this.heap.pop();       // ❌ BUG HERE: You are deleting the last element immediately!
    this.bubbledDown(0);
    return top;
}

```

---

### 🔍 The Bug Breakdown

When you run `this.heap.pop()`, you are completely deleting the element at the very back of the array.

What a heap is *supposed* to do during a removal is:

1. Save the top element (`this.heap[0]`).
2. Take the element from the very back of the array and **move it to the top** to replace the old root.
3. Bubble that element down.

Right now, your code saves the top element, completely deletes the back element out of existence, leaves the *old* root sitting at index 0, and runs `bubbledDown(0)` on a value that never changed! This breaks the heap's structure on the very first extraction.

---

### 🛠️ The Direct Fix

Modify your `else` block to copy the last element over to index 0 before popping it:

```javascript
removeTop() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    
    if (this.heap.length === 1) { 
        this.heap.pop();
        return top;
    } else {
        // Move the last element to the top, THEN pop it from the back
        this.heap[0] = this.heap.pop(); 
        
        // Now bubble that replacement value down into its correct home
        this.bubbledDown(0);
        return top;
    }
}

```

Make that single change (`this.heap[0] = this.heap.pop()`), and your extraction loop will immediately output a perfectly sorted array `[1, 2, 5, 6, 9]`!