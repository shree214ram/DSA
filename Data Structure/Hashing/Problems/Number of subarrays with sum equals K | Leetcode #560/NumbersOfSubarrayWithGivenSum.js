https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/?ref=gcse

// Javascript program to find number of subarrays
// with sum exactly equal to k.
     
    // Function to find number of subarrays
    // with sum exactly equal to k.
    function findSubarraySum(arr,n,sum)
    {
     
        // HashMap to store number of subarrays
        // starting from index zero having
        // particular value of sum.
        let prevSum = new Map();
        let res = 0;
  
        // Sum of elements so far.
        let currsum = 0;
        for (let i = 0; i < n; i++)
        {
  
            // Add current element to sum so far.
            currsum += arr[i];
  
            // If currsum is equal to desired sum,
            // then a new subarray is found. So
            // increase count of subarrays.
            if (currsum == sum)
                res++;
  
            // currsum exceeds given sum by currsum
            //  - sum. Find number of subarrays having
            // this sum and exclude those subarrays
            // from currsum by increasing count by
            // same amount.
            if (prevSum.has(currsum - sum))
                res += prevSum.get(currsum - sum);
  
            // Add currsum value to count of
            // different values of sum.
            let count = prevSum.get(currsum);
            if (count == null)
                prevSum.set(currsum, 1);
            else
                prevSum.set(currsum, count + 1);
        }
        return res;
    }
     
    let arr = [10, 2, -2, -20, 10];
    let sum = -10;
    let n = arr.length;
    document.write(findSubarraySum(arr, n, sum));
     