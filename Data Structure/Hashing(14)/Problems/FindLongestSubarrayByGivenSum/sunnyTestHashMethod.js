
//Find Longest Sub array whose sum is equal to target 
maxLength = 0
Hash = new Map()
for(let i=0;i<n;i++){
	currentSum+=A[i]
	if (currentSum == target) {
		maxLength = i+1
	}
	if(Hash.has(currentSum - target)){
		maxLength = Math.max(maxLength, i-Hash.get(currentSum - target))

	}
	
	if(!Hash.has(currentSum)) {
		Hash.set(currentSum ,i)
	}
}
