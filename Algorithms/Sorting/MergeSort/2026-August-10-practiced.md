<script>
//9:12
//merge sort 

//conqure
const merge =(A,l,r)=>{
	const res=[]
    let i=0,j=0;
    while(i<l.length && j<r.length){
    	if(l[i]<r[j]){
        	res.push(l[i])
            i++
        }else{
        	res.push(r[j])
            j++
        }
    }
    while(i<l.length){
    	
        	res.push(l[i])
            i++
        
    }
    while( j<r.length){
    	
        	res.push(r[j])
            j++
        
    }
    return res;
}

//Devide 
const sort=(A,l,r)=>{
	if(l>=r) return [A[l]] //moajor mistake
    if(l<r){
    	const mid=Math.floor((l+r)/2)
        const left=sort(A,l,mid);       
        const right =sort(A,mid+1,r);
        return merge(A,left,right) //major mistake
		
    }
   
    
}

const A=[2,4,1,0,9,8]

console.log(sort(A,0,A.length-1))//mis1
</script>


<script>
    // BEST CODE Given by Gemini
// Conquer
const merge = (l, r) => {
    const res = [];
    let i = 0, j = 0;
    while (i < l.length && j < r.length) {
        if (l[i] < r[j]) {
            res.push(l[i++]);
        } else {
            res.push(r[j++]);
        }
    }
    while (i < l.length) res.push(l[i++]);
    while (j < r.length) res.push(r[j++]);
    return res;
};

// Divide
const sort = (A, l, r) => {
    if (l >= r) return [A[l]]; // Base case: single element sub-array

    const mid = Math.floor((l + r) / 2);
    const left = sort(A, l, mid);       
    const right = sort(A, mid + 1, r);

    return merge(left, right); // Return the merged result!
};

const A = [2, 4, 1, 0, 9, 8];
console.log(sort(A, 0, A.length - 1)); // Outputs: [0, 1, 2, 4, 8, 9]

</script>