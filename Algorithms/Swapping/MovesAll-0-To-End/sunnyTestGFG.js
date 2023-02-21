
//11:21
const A = [1, 2, 0, 4, 3, 0, 5, 0]
let count = 0
for(let i=0;i<A.length;i++){
	if(A[i]!=0){
    	A[count++]=A[i]
    }
}
while(count<A.length){
	A[count++]= 0
}
console.log(A,"A")