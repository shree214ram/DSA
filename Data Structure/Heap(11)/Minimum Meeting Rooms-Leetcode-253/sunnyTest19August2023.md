<script>
//4:42
const A = [[1, 3], [2, 4], [3, 7], [4, 6], [5, 6], [2, 3]]
const B = A.sort((a,b)=>a[0] != b[0] ? a[0] - b[0] : a[1] - b[1])
const mh = new Array()
mh.push(B[0][1]);
for(let i=1;i<B.length;i++){
	let top = mh[0]
    console.log(top);
    console.log(B[i][0],"current")
	if(B[i][0]>=top){
    console.log("hii")
    	mh.shift()
    }
    mh.push(B[i][1])
    mh.sort((a,b)=>a-b) //Min Heap
    
}
console.log(mh);
</script>