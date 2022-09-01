### Navie Approach :-

1. Store all the sum in Sum Array 
    const arr = [7,1,9,3,6]
    const SumArray = []
    for(let i=0;i<arr.length;i++){
            let sum = arr[i]
            for(let j=i+1;j<=arr.length;j++){
                SumArray.push(sum);
                sum +=arr[j]
            }
        }
  console.log("Result =", SumArray)

2. Sort them 
3. Print last kth result in Sum Array 

### Efficient Approach :-

1. Store all the prefix sum in Sum Array 

    const arr = [7,1,9,3,6]
    const SumArray = []
    SumArray[0] = 0 
    /* keep o th index just for making the prefix sum and value 0 , we will not use that 0th index in 
    actual result we will start by index 1  */
    SumArray[1] = arr[0]
    // start loop by 2
    for(let i=2;i<arr.length;i++){
        SumArray[i] = SumArray[i-1] + arr[i-1];
        sum +=arr[j]
    }
  console.log("Result =", SumArray)

2. Sort them 
3. Print last kth result in Sum Array 

