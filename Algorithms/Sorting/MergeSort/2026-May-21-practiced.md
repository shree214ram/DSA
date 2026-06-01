<script>
//11:50 //12:02
const merge=(left,right)=>{
	const res=[]
	let i=0,j=0,k=0;
    while(i<left.length && j<right.length){
    	if(left[i]<=right[j]){
        	res[k]=left[i]
            i++
        }else{
        	res[k]=right[j]
            j++
        }
        k++
    }
	
    while(i<left.length){
    	res[k]=left[i]
        i++
        k++
    }
    
     while(j<right.length){
    	res[k]=right[j]
        j++
        k++
    }
    return res;
}

const sort=(A,l,r)=>{
if(l==r) return [A[l]]
	if(l<r){
    	const mid=Math.floor((l+r)/2)
    	const left=sort(A,l,mid)    	
        const right=sort(A,mid+1,r)
		return merge(left,right)
    }	
}
const A=[9,1,6,0,3,7,2,11]
console.log(A.length-1,"A.length-1")
console.log(sort(A,0,A.length-1))
</script>