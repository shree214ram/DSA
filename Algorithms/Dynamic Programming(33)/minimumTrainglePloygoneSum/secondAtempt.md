/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
    if(values.length<3) return 0
    /*
        1. Recurstion with partition DP 
    */
    const memo=Array.from({length:values.length},()=>Array(values.length).fill(-1))
    let min=Infinity
    const fn=(i,j)=>{
        if(i<0 || i>values.length || j<0 || j>values.length){
            return 0
        }
        if(memo[i][j] !== -1) return memo[i][j]
        let currentMin=Infinity
        //k shoud start by j+1 to n-2 
        for(let k=1;k<values.length-2;k++){
            // console.log(values[i],"values[i]")
            // console.log(values[j],"values[j]")
            // console.log(values[k+j],"values[k+j]")
            const current = values[i]*values[j]*values[k+j]
            // console.log(current,"current")
            currentMin=Math.min(currentMin,current)
            fn(i+1,j+1)
        }
        min=Math.min(min,currentMin)
        memo[i][j]=min
    }
    fn(0,1)
    return min==Infinity? 0 : min
};