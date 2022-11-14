const A = [ 3, 5, 7, 8, 9, 1, 25, 6,11,]
//Output : 5
//The subarray is {3, 5, 7, 8, 9}

//const A  = [12, 13, 1, 5, 4, 7, 8, 10, 10, 11]
//Output : 4
//The subarray is {4, 7, 8, 10} 

currentMax = 1
finalMax = 1
last = A[0]
start = 0

for (let i = 1; i < A.length; i++) {
    const current = A[i]
    if (current > last) {
        currentMax++
    } else {
        currentMax = 1
    }
    last = A[i]
    if(currentMax>finalMax){
        start = i+1-currentMax
    }
    finalMax = Math.max(currentMax, finalMax)
}
console.log(start, "start")
console.log(finalMax, "finalMax")
console.log( "Print Array ----")
for(let i=start;i<finalMax;i++){
	console.log(A[i], ",")
	
}