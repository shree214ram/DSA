
// JavaScript program for weighted job scheduling using
// Naive Recursive Method

// A job has start time, finish time and profit
class Job{
	
	constructor(start, finish, profit){
		
		this.start = start
		this.finish = finish
		this.profit = profit
	}

}

// A utility function that is used for
// sorting events according to finish time
function jobComparator(s1, s2){
	
	return s1.finish - s2.finish
}

// Find the latest job (in sorted array) that
// doesn't conflict with the job[i]. If there
// is no compatible job, then it returns -1
function latestNonConflict(arr, i){
	
	for(let j=i-1;j>=0;j--){
		if (arr[j].finish <= arr[i - 1].start)
			return j
	}
			
	return -1
}

// The main function that returns the maximum
// possible profit from given array of jobs
function findMaxProfit(arr, n){
	
	// Sort jobs according to finish time
	arr.sort(jobComparator)

	// Create an array to store solutions of subproblems.
	// DP[i] stores the profit for jobs till arr[i]
	// (including arr[i])
	let DP = new Array(n).fill(null)
	DP[0] = arr[0].profit

	// Fill entries in M[] using recursive property
	for(let i=1;i<n;i++){

		// Find profit including the current job
		let inclProf = arr[i].profit
		let l = latestNonConflict(arr, i)

		if (l != -1)
			inclProf += DP[l]

		// Store maximum of including and excluding
		DP[i] = Math.max(inclProf, DP[i - 1])
	
	}

	// Store result and free dynamic memory
	// allocated for DP[]
	let result = DP[n - 1]

	return result
}

// Driver code
let values = [ [3, 10, 20], [1, 2, 50], [6, 19, 100], [2, 100, 200] ]
let arr = []
for(let i of values)
	arr.push(new Job(i[0], i[1], i[2]))
	
let n = arr.length

document.write("The optimal profit is ", findMaxProfit(arr, n),"</br>")

// This code is code contributed by shinjanpatra

