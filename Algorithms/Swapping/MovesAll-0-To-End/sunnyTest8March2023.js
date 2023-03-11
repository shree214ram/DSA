//11:40 //11:42  //11:43
const A = [0,1,0,3,12]
//Output: [1,3,12,0,0]
let start = 0
for(let i=0;i<A.length;i++){
	if(A[i]!=0){
    	A[start]= A[i];    	
        A[i]= 0;

        start++
    }
}
console.log(A)