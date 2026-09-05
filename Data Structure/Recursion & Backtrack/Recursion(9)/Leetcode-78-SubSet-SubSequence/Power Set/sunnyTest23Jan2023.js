
//10:31 //10:35 
//10:37 
//power serts subsequence 
const A =[1,2,3]
const result = []
solve(A,[],0)
console.log(result,"result")
function solve(A,temp,i){
	//base case 
    if(i==A.length){
    	console.log("final",temp)
    	return result.push(temp)
    }
    //recursion 
    console.log(temp)
    //incluse 
    const newTemp = [...temp,A[i]]
    solve(A,newTemp,i+1)    

    //exclide
    solve(A,temp,i+1)
}
