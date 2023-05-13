
//5:53
const Arr = [1,2,3,4]
//totalProduct = 24
//[24/1,24/2,24/3,24/4] output will be [24,12,8,6]
const result = []
for(let i=0;i<Arr.length;i++){
	let leftProduct = 1 
    let k = i-1;
	while(k>0){
    	leftProduct*=Arr[k];
        k--
    }
    let rightProduct = 1 
    let m = i+1;
	while(m<Arr.length){
    	rightProduct*=Arr[m]
        m++
    }
    result[i]=leftProduct*rightProduct;
}
console.log(result,"result")