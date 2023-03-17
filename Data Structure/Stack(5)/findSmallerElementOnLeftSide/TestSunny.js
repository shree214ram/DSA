
//2:31
//program for nearest small in left 
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



const Arr = [1,9,3,11]
const result = []
const st = new stack();
for(let i=0;i<Arr.length;i++){
	
	while(!st.empty() && st.PickTop() >= Arr[i]){
    	st.removeTop()
    }
    if(st.empty()){
    	result.push(-1)
    }else{
    	result.push(st.PickTop())
    }
    
    st.add(Arr[i])
}
console.log(result,"result")
//output [-1,1,1,3]