<script>
//2;6 2:10
const A=[[1,2],[3],[0,5,6],[1,4],[2,3],[4,6],[5]]
const inD = [];
const outD = new Map;

for(let i=0;i<A.length;i++){

	inD.push(A[i].length)
    for(let j=0;j<A[i].length;j++){
    
    	outD.set(A[i][j],outD.get(A[i][j])? outD.get(A[i][j])+1 :1 )
    }
	
}
console.log(inD);console.log(outD);

</script>
