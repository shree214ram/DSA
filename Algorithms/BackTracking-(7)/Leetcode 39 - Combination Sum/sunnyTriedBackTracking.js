//10:20
let A = [2,3,6,7]
const target = 7 
const hash = new Set()

for(let i=0;i<A.length;i++){
	hash.add(A[i])
}
A= [...hash]
const finalResult = []
console.log(solve(A,target,hash,finalResult));


function solve(A,t,hash,finalResult){
	for(let i=0;i<A.length;i++){
    	const mod = t%A[i]
        //if self exist in terms off all
        if(mod == 0){
        	const Result = []
            let sum =0
        	while(sum<t){
            	Result.push[A[i]]
                sum+=A[i]
            }
            return Result 
        }// self +mod exist 
        else if(hash.has(mod)){
        	const remainingIsAvailable = solve(A,t-mod,hash,finalResult)
        	const Result = []
            
            
            
        }
        // mod not exist 

    }
}

</script>

