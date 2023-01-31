//3:12

//N staris

const N= 3 ;
const M = 2;
const DP = new Array(N+1).fill(-1)
// let count =0;
const res = solve(N);
console.log(res,"Res")
function solve(n){
	//base
    if(n<=1){
    return DP[n] = 1 
    }    
    
    if(DP[n]!= -1){
    

    	return DP[n]
    }
    	

    let count = 0;
    
        	

    for(let i=M;i>0;i--){

    	  count+= solve(n-i)
    }

	return DP[n] = count
}

