
// JavaScript program for weighted job scheduling using
// Naive Recursive Method

// A job has start time, finish time and profit
class Job
{
	constructor(start, finish, profit)
	{
		this.start = start
		this.finish = finish
		this.profit = profit
	}
}

// A utility function that is used for
// sorting events according to finish time
function jobComparator(s1, s2){
	
	return s2.finish - s1.finish;
}

// Find the latest job (in sorted array) that
// doesn't conflict with the job[i]. If there
// is no compatible job, then it returns -1
function latestNonConflict(arr, i){
	
	for(let j = i - 1; j >= 0; j--)
	{
		if(arr[j].finish <= arr[i - 1].start)
			return j
	}	
	return -1
}

// A recursive function that returns the
// maximum possible profit from given
// array of jobs. The array of jobs must
// be sorted according to finish time
function findMaxProfitRec(arr, n){
	
	// Base case
	if(n == 1)
		return arr[n - 1].profit

	// Find profit when current job is included
	let inclProf = arr[n - 1].profit
	let i = latestNonConflict(arr, n)
	
	if(i != -1)
		inclProf += findMaxProfitRec(arr, i + 1)

	// Find profit when current job is excluded
	let exclProf = findMaxProfitRec(arr, n - 1)
	return Math.max(inclProf, exclProf)
}

// The main function that returns the maximum
// possible profit from given array of jobs
function findMaxProfit(arr, n){
	
	// Sort jobs according to finish time
	arr.sort(jobComparator)
	return findMaxProfitRec(arr, n)

}

// Driver code
let values = [ [3, 10, 20], [1, 2, 50],
		[6, 19, 100], [2, 100, 200] ]
let arr = []
for(let i of values)
	arr.push(new Job(i[0], i[1], i[2]))
	
let n = arr.length
document.write("The optimal profit is ", findMaxProfit(arr, n),"</br>")

// This code is code contributed by shinjanpatra

