
const Arr = [2,6,8,4,7,1]
const target = 9
let sum = 0;
const hashMap = new Map();
for(let i=0;i<Arr.length;i++){
	//let sum = A[i]+A[]
    if(hashMap.get(target-Arr[i])){
    	console.log("Value are =>"+(target-Arr[i])+" And "+ Arr[i])
    } else {
    	hashMap.set(Arr[i],Arr[i])
    }
}
