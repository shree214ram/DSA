// https://www.geeksforgeeks.org/maximum-subarray-sum-using-divide-and-conquer-algorithm/
// A Divide and Conquer based Javascript
// program for maximum subarray sum 
// problem 

class GFG {

    // Find the maximum possible sum in arr
    // such that arr[m] is part of it 
    maxCrossingSum(arr, l, m, h) {
      // Include elements on left of mid. 
      sum = 0;
      left_sum = 0;
      for (let i = m; i >= l; i--) {
        sum = sum + arr[i];
        if (sum > left_sum)
          left_sum = sum;
      }
  
      // Include elements on right of mid 
      sum = 0;
      right_sum = 0;
      for (let i = m + 1; i <= h; i++) {
        sum = sum + arr[i];
        if (sum > right_sum)
          right_sum = sum;
      }
  
      // Return sum of elements on left 
      // and right of mid 
      // returning only left_sum + right_sum will fail for [-2, 1] 
      return Math.max(left_sum + right_sum, Math.max(left_sum, right_sum));
    }
  
    // Returns sum of maxium sum subarray 
    // in aa[l..h] 
    maxSubArraySum(arr, l,h) {
      // Base Case: Only one element 
      if (l == h)
        return arr[l];
  
      // Find middle po
      let m = (l + h) / 2;
  
      /* Return maximum of following three 
      possible cases: 
      a) Maximum subarray sum in left half 
      b) Maximum subarray sum in right half 
      c) Maximum subarray sum such that the 
      subarray crosses the midpo*/
      return Math.max(Math.max(this.maxSubArraySum(arr, l, m),
        this.maxSubArraySum(arr, m + 1, h)),
        this.maxCrossingSum(arr, l, m, h));
    }
  }
  /* Driver program to test maxSubArraySum */
  const obj = new GFG();
  const arr = [2, 3, 4, 5, 7];
  const n = arr.length;
  max_sum = obj.maxSubArraySum(arr, 0, n - 1);
  
  console.log("Maximum contiguous sum is " +
    max_sum);
  // This code is contributed by Prerna Saini
  