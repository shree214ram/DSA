const A = [4,8,1,2,3,9]
		   0 1 2 3	

		   [1,4,8,2,3,9]

		   [1,2,4,8,3,9]

//Dry Run 
//[]sorted  []unsorted 
//[4]   [8,1,2,3,9]
//output [1,2,3,4,8,9]

 
//[4,8]   [1,2,3,9]
//output [1,2,3,4,8,9]

//[4,9,8] 12
       2 
	   1
	   0

for(let i=1;i<A.length;i++){ //O(N)
	let temp = A[i] ; //picked
	let j= i-1; //0
	while(j>=0 && A[j] >= temp){ //O(N)
		A[j+1] =A[j] // swapping
		j-- //ittrating into negative direction 
	}
	A[j+1] = temp 
}
l r m 
1,6,8,     87, 78    9
// insertion and selection O(N*N) in worst case  [1,9,3,2,19] / Best Case  [1,2,3,9]
//Merge Sort O(n logn)


log n ? 

