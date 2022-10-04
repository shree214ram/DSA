class stack{
	constructor(){
    	this.data=[]
    }
    add(value){
    	this.data.push(value)
    }
    pickTop(){
    	const pick = this.data[this.data.length-1]
        return pick
    }
    removeTop(){
    	this.data.pop()
    }
}

// Driver Code
let arr = [ 1,6,4,10,2,5 ];

const st = new stack()
/*st.add(1)
st.add(2)
st.add(3)
console.log(st.pickTop(),"Pick")
st.removeTop()

console.log(st.data,"After Remove Top ")*/
const result =[]
for(let i=0;i<arr.length;i++){
	
    let current = arr[i]
    while(st.data.length != 0 && st.pickTop() >= current){
    	st.removeTop()
    }
    if(st.data.length == 0){
    	result.push(-1)
    }else{
    	result.push(st.pickTop())
    }
    st.add(current)
}
console.log(result,"result ")

