
//9:53
const A = [64, 25, 12, 22, 11];
for(let i=0;i<A.length;i++){
	let low = i
    for(let j=i+1;j<A.length;j++){
    	if(A[low]>A[j]){
        	low = j
        }
    	//low = Math.min(low,A[j])
    }
    if(A[low]<A[i]){
        	
            let temp = A[low]
            A[low]=A[i];           
            A[i]=temp;
        }
}
console.log(A)



