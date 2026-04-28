<script>
class stack{
	constructor(){
    	this.data=[]
    }
    add(value){
    	this.data.push(value)
    }
    
    removeTop(){
    	this.data.pop()
    }
    
    PickTop(){
    	return this.data[this.data.length-1]
    	 
    }
    
    empty(){
    	return this.data.length==0
    }
}
</script>
# important notes
1. use LIFO for stack 
2. Use always Push and pop because shift or unshift has to ittrate all the elements again 

# Applicatins 
1. fnd Next greater element Leetcode 496
2. Find Smaller on right side (Leetcode 1475 Discount for each elemet)
3. Nearest Greater element on Left Side (Leetcode 901)
3. Nearest Smallest element on Left Side (Leetcode 84: Largest Rectangle in Histogram)