//This will take O(N*N) batter we should use Element As Index 
//2:33 //2:36
const A = [14,13,11,15]
let smallest = Number.MAX_VALUE ;
for(let i=0;i<A.length;i++){
	smallest=Math.min(smallest,A[i])
}
for(let i=smallest;i<smallest+A.length;i++){
	if(!A.includes(i)){
    	console.log("missing element is =",i)
    }
}

//output : missing element is = 12