<script>
    const A=[[1,2],[3],[0,5,6],[1,4],[2,3],[4,6],[5]]

    const out=[]
    const In=Map()

    for(let i=0;i<A.length;i++){
        out.push(A[i].length)
        for(const x of A[i]){
            In.set(x,In.get(x)? In.get(x)+1 : 1)
        }
    }
    console.log(In)
    console.log(out)
</script>