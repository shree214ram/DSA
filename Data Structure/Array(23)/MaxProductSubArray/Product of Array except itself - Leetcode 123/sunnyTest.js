const Arr = [-1,1,0,-3,3]
//Output: [0,0,9,0,0]
const output = new Array(Arr.length)
for(let i=0;i<Arr.length;i++){
	let temp = 1
	let j =0
	while(j<i){
    	temp*=Arr[j];
        j++
    }
    
    //
    let k =Arr.length-1
	while(k>i){
    	temp*=Arr[k];
        k--
    }
    output[i]=(temp == -0) ? 0 : temp
}
console.log(output,"output")
