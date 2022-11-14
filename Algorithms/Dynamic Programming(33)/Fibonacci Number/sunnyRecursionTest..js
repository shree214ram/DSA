
//feboneci serios 

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

/*Input  : n = 2
Output : 1

Input  : n = 9
Output : 34*/

function solve(n){
	if(n<=1){
    	return 1
    }
    return solve(n-1)+solve(n-2)
}
const n = 9;
const output = solve(n-1)
console.log("Febonecy serious output is ", output)