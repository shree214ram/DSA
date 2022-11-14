//11:14
function Solve(n, m) {
    if (n <= 1) {
        return n
    }
    let totalSteps = 0;
    for (let i = 1; i <= m && i <= n; i++) {
        const current = Solve(n - i, m);

        totalSteps += current
    }
    return totalSteps
}

const target = 4
const steps = 2
const result = Solve(target + 1, steps);
console.log("Total ways to reach at target are =", result)



//Praciced at12 November

const n = 5;
const m=2
console.log("Reult=",solve(n+1,m))
function solve(n,m){
	//Base Case 
    if(n<=1){
    	return n
    }
    //recursion 
    let solution = 0
    for(let i=1;i<=m && i<=n;i++){
    	solution += solve(n-i,m)
    }
    return solution
}
