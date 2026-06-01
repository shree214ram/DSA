

//11;43 11:50

const A = [1,2,3]

//out put [[],[1,2,3],[1,2],[2,3],[1,2,3],[2],[3],[1]]
const result = []
solve([],0)
console.log(result)
function solve(temp,index){
	if(index==A.length){
    	return  result.push(temp)
    }
    
    //include 
    const newTemp =[...temp,A[index]] //@mistake i have written newTemp.push(A[index])
    solve(newTemp,index+1)
    
    //exclude
    solve(temp,index+1)
}


