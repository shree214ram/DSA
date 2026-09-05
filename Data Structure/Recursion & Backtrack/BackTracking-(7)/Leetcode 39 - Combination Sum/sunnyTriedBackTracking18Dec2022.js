
//5:9
const A =  [2,4,6,8]

let sum = 8;

//combination sum 
//[2,2,2,2] [2,2,4] [4,4] [2,6] [8]
let res =[]
let temp =[]
solve(A,sum,temp,0,res)
console.log("Res=",res)
function solve(A,sum,temp,index,res){
	//base 
    if(sum==0){
        res.push([...temp]) //@here mistaken i tried with simple push temp but failed so [...temp]
    	return 
    }
    //retrive every element 
    for(let i=index;i<A.length;i++){
		if ((sum - A[i]) >= 0) {
            //take 
            temp.push(A[i])
            //rec
            solve(A,sum-A[i],temp,i,res)
            //not take (backTracking)
            temp.splice(temp.indexOf(A[i]),1)
        }
    }
}
