// dp solution

function solve(n,dp){

    //Base Case 
    if(n<=1){
        return DP[n]=1
    }
    if(DP[n] !== -1){
        return DP[n]
    }
    //*** for more than 2 stairs jump in sinle step 
    // for(let i=1;i){

    // }
    return DP[n] = solve(n-1,DP)+solve(n-2,DP)

}
const n = 5
const m = 2
const DP = new Array(n+1).fill(-1) //@Mistaken new Array(n).fill(-1) i have written only n but it should be n+1

solve(n,m, DP)