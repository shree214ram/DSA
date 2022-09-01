var a = [6,-3,-10,0,2];

let max = a[0]
let min = a[0]
let res = a[0]
let current = ""
for(let i=1;i<a.length;i++){
    if(a[0] == 0){
    	max = 1
	 	min = 1
        continue;
    }else {
	let currentMax = a[i]*max
	let currentMin = a[i]*min
    max = Math.max(currentMax,currentMin)
    max = Math.max(max,a[i])
    min = Math.min(currentMax,currentMin)
    min = Math.min(min,a[i])
    res = Math.max(max,res)
    
    }
}
console.log(res,"max")

