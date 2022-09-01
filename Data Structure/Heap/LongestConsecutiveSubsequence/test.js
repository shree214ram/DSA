const arr = [7,1,9,3,6,2,11,3,8,4,10]
const hashAray = new Set(); 
    for(let i=0; i<arr.length;i++) {
        hashAray.add(arr[i])
    }
let consecutiveSum =0,currentSum=0
    for(let i=0; i<arr.length;i++) {
        if(!hashAray.has(arr[i]-1)) {
            currentSum = 1
            //starting point 
            let j=i;
            while(hashAray.has(arr[j]+1)){
                currentSum += 1
                j++
            }

        }else {
            currentSum = 1
        }
        consecutiveSum = Math.max(consecutiveSum,currentSum)
    }
  console.log("Result =", consecutiveSum)

