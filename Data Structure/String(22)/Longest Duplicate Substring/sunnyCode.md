<script>
//2:52 2:56
const A = "aaaaabbbbc"
let max = Number.MIN_VALUE
for(let i=0;i<A.length;i++){
	let start = i
    while(i<A.length&& A[start]==A[i+1]){
    	i++
    }
    max = Math.max(i-start+1,max)
}

console.log(max)
</script>