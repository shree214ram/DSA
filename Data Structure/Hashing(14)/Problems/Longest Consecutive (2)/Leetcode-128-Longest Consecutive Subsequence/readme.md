https://www.geeksforgeeks.org/longest-consecutive-subsequence/

### Approach 1 (nlogn because sorting):-
1. Sort the array 
2. consecutiveSum =0,currentSum=0
    for(let i=0; i<arr.length;i++) {
        if(A[i]==A[i-1]+1) {
            currentSum+=1
        }else {
            currentSum = 1
        }
        consecutiveSum = Math.max(consecutiveSum,currentSum)
    }
  console.log("Result =", consecutiveSum)

### Approach 2  {O(n), using hash and remove duplicacy}:-
1. Use Hash and store all elements there 
    const hashAray = new Set(); 
    for(let i=0; i<arr.length;i++) {
        hashAray.set(arr[i])
    }
2. consecutiveSum =0,currentSum=0
    for(let i=0; i<arr.length;i++) {
        if(!hashAray.has(A[i]-1)) {
            currentSum = 1
            //starting point 
            while(hashAray.has(A[i]+1)){
                currentSum += 1
            }

        }else {
            currentSum = 1
        }
        consecutiveSum = Math.max(consecutiveSum,currentSum)
    }
  console.log("Result =", consecutiveSum)
  
