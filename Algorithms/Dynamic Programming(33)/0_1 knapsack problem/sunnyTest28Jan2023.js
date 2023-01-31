
//11:53

//11:53

const Value = [50,100,150]
const Weight = [10,20,30]

const Target = 50 
/* 
//Recursion 
function solve(){
    //Base Case 
    if(totalWeight == Target ){
        return 
    }
}
solve(DP,)
*/


const DP = new Array(Weight.length+1) //Mistale 1 i-1 at place of i 

for(let i=0;i<=Weight.length;i++){
    DP[i] = new Array(Target+1).fill(0)
    for(let j=0;j<=Target;j++){
        if(i==0||j==0){
            DP[i][j] = 0
        }else if(Weight[i-1] <= j){//Mistale 2 i-1 at place of i 
            DP[i][j] = Math.max(DP[i-1][j], Value[i-1] + DP[i-1][j-Weight[i-1]]) //copy upper 
        }else if(Weight[i] > j){
            DP[i][j] = DP[i-1][j] //copy upper 
        }
    }   
}

console.log(DP[Weight.length][Target])

