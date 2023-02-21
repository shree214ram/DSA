
const A= [0,1,0,3,12]
//Output: [1,3,12,0,0]

for(let i=A.length;i>=0;i--){
	if(A[i]==0){
    	A.push(0);
        for(let j=i;j<A.length;j++){
        	A[j]=A[j+1];        						
        }
        A.pop()
    }
}
console.log(A)
