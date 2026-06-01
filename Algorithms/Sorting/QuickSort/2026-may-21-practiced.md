<script>
//11:17
const part=(A,l,r)=>{
	const pivot=A[r]	
    let i=l-1;
    console.log(i);
    for(let j=l;j<r;j++){
    	    console.log(j);

    	if(A[j]<=pivot){
        	i++
            swap(A,i,j);
        }
    }
	swap(A,i+1,r);
	return i+1
}
const swap=(arr,i,j)=>{
console.log(i,"hay",j)
console.log(arr[i],"sec",arr[j])
	[arr[i],arr[j]]=[arr[j],arr[i]];
}
const sort=(A,l,r)=>{
	if(l==r) {return [A[l]]}
	if(l<r){
    	const pi=part(A,l,r);
        sort(A,l,pi-1);        
        sort(A,pi+1,r);
        return
    }
    return A
}
const A=[2,8,1,9,21,3]
console.log(sort(A,0,A.length-1))
</script>