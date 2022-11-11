// dp solution

function solve(n,dp){

    //Base Case 
    if(n<=1){
        return n
    }
    if(DP[n] !== -1){
        return DP[n]
    }
    // for(let i=1;i){

    // }
    return DP[n] = solve(n-1,DP)+solve(n-2,DP)

}
const n = 5
const m = 2
const DP = new Array(n).fill(-1)

solve(n,m, DP)