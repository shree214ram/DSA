//2:41
//program for nearest greater in right 
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
st.add(Arr[0])
for(let i=1;i<Arr.length;i++){
	//Base case 
    if(st.empty()){
    	st.add(Arr[i])
        continue ;
    }
    //Remove top untill not empty stack and upcoming not greater than Top
	while(!st.empty() && st.PickTop() <= Arr[i]){
    	result.push(Arr[i])
    	
    	st.removeTop()
    }
    
    st.add(Arr[i])
}
//Print Remaining Element -1 
while(!st.empty()){
	result.push(-1)
    	
    	st.removeTop()
}
console.log(st,"st")
console.log(result,"result")