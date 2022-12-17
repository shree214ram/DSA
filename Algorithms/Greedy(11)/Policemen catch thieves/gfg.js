
// JavaScript program to find maximum
// number of thieves caught

// Returns maximum number of thieves
// that can be caught.
function policeThief(arr, n, k){
	let i = 0
	let l = 0
	let r = 0
	let res = 0
	let thi = []
	let pol = []

	// store indices in list
	while(i < n){
		if(arr[i] == 'P')
			pol.push(i)
		else if(arr[i] == 'T')
			thi.push(i)
		i += 1
	}

	// track lowest current indices of
	// thief: thi[l], police: pol[r]
	while(l < thi.length && r < pol.length){
		
		// can be caught
		if (Math.abs( thi[l] - pol[r] ) <= k){
			res += 1
			l += 1
			r += 1
		}
			
		// increment the minimum index
		else if(thi[l] < pol[r])
			l += 1
		else
			r += 1
	}

	return res
}

// Driver program
let arr1 = ['P', 'T', 'T', 'P', 'T']
let k = 2
let n = arr1.length
document.write("Maximum thieves caught: ",policeThief(arr1, n, k),"</br>")

let arr2 = ['T', 'T', 'P', 'P', 'T', 'P']
k = 2
n = arr2.length
document.write("Maximum thieves caught: ",policeThief(arr2, n, k),"</br>")

let arr3 = ['P', 'T', 'P', 'T', 'T', 'P']
k = 3
n = arr3.length
document.write("Maximum thieves caught: ",policeThief(arr3, n, k),"</br>")

// This code is contributed by shinjanpatra

