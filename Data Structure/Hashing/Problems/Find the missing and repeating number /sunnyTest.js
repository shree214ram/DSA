const Arr=[3, 1, 3]
//Output: Missing = 2, Repeating = 3
const unique = new Map();
let min =Number.MAX_VALUE,max=Number.MIN_VALUE
for(let i=0;i<Arr.length;i++){
	if(unique.get(Arr[i])){
    	unique.set(Arr[i],unique.get(Arr[i])+1)
    }else {
    	unique.set(Arr[i],1)
    }
    min=Math.min(min , Arr[i])
    max=Math.max(min , Arr[i])
}

for(let i=min;i<=max;i++){
	if(unique.get(i)>1){
    	console.log("Duplicate, ", i)
    }else if (!unique.get(i)){
    	console.log("Missing, ", i)
    }
}
