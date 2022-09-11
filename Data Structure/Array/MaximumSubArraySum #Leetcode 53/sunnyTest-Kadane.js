//find max sum and print element also //@sp
const A = [-2,          -3,     4,          -1,     -2,         1,         5,           -3]
        //start=0  start=1  start=2     start=2   start=2     start=2    start=2     start=7
        //end=0    end=1    end=2       end=3     end=4       end=5      end=6       end = 7

               //-----------
//const A = [2,3,4,-1,-3,1,-5,3]
let maximumResult=A[0]
let currentSum=A[0]
let start=0,end=0,s=1
for(let i=1;i<A.length;i++){
	currentSum+=A[i]
    if(currentSum<A[i]){
		currentSum=A[i];
		start=i;
        end=i;
        
    }
	if(currentSum>maximumResult){
        maximumResult=currentSum
        end=i;
        // s=i+1
    }else{
        maximumResult=maximumResult
        end=i;
    }
    //maximumResult=Math.max(currentSum,maximumResult)
}
console.log(maximumResult,"maximumResult")
console.log(start,"start")
console.log(end,"end")