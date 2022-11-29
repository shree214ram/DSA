//2:15
//2:23
const Value = [60,100,120];
const Weight = [10,20,30]
const targetWeight = 50;
let maxValue = Number.MIN_VALUE
solve(targetWeight,0,0)
console.log(maxValue,"maxValue")
function solve(target,index,temp){
	//Base Case 
    if(target < Weight[index]){
    	return target
    }
	if(target == 0){
    	maxValue = Math.max(maxValue,temp)
        return maxValue
    }
    if(Weight[index]){
    	const include = solve(target-Weight[index],index+1,temp+Value[index])
        const exclude = solve(target,index+1,temp)
    }
    return
}