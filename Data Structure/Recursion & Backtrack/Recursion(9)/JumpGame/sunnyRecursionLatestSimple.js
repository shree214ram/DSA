
//const A =  [2,3,1,1,4]
//output true

//const A =  [3,2,1,0,4]
//output false

//const A =  [2,1,1,0,4]
//output false

const A =  [3,2,2,0,4]
//output True
const targetIndex = A.length

if(!solve(0)){
	console.log("False")
}

function solve(index){
	//base case 
    if(index >= targetIndex){
    	console.log("True")
    	return true
    }
    
    //recursion 
    for(let i=1;i<=A[index];i++){
    	if( solve(index+i)){
        	return true
        }
    }
    
    return false
}
