//6:4 6:10
const A = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56];
        const k = 4, x = 35;
        const q = []
  for(let i=0;i<A.length;i++){
	if(A[i]!=x){
    	q.push([Math.abs(A[i]-x),A[i]])
        q.sort((a,b)=>b[0]-a[0])
        if(q.length>k){
        	q.shift()
        }
    }
  }
  console.log(q)
  
   for(let i=q.length-1;i>=0;i--){
	console.log(q[i][1])
  } 