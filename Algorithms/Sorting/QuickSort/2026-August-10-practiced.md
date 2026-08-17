<script>
//8:30
//Quick Sort
const part=(A,l,r)=>{
	
    let j=l-1;
    let pick=A[r] //mis3
    for(let i=l;i<r;i++){//mis2 
    	if(A[i]<=pick){//mis4
        	
            j++
            swap(A,i,j)
        }
    }
    swap(A,r,j+1)
    return j+1
}
const swap=(A,a,b)=>{ //mis7
	[A[a],A[b]]=[A[b],A[a]]
}
const sort=(A,l,r)=>{
	if(l>=r) return A //mis5
	if(l<r){
		const pi=part(A,l,r)
    	sort(A,l,pi-1)    	
        sort(A,pi+1,r)
        return A
    }
    
}
const A=[2,4,1,0,9,8]

console.log(sort(A,0,A.length-1))//mis1
</script>