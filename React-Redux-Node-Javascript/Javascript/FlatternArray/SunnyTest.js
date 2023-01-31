
//7:40 //7:44
const input = [1, 2, 3, [4, 5, [6, 7]], 8, [9, [10, 11]]];
const out = solve (input);
console.log(out,"out")
function solve (input){
	let res = []
    input.map(obj=>{
    	if(Array.isArray(obj)){
        	let current = solve(obj)
            res = [...res,...current]
        }else{
        	 res.push(obj)
        }
    })
    return res
}

