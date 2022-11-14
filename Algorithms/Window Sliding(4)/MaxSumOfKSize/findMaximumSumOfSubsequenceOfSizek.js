
//Maximum Sum SubArray Of Size K //https://www.youtube.com/watch?v=__guhvzO540


Basically there are 2 methods 
1. Itrate k times loop(Brute Force Method):-
    It takes o(n to the power of k) time compaxity
    we iterate 2 loop 
    1)first loop for pick up one element 
    2)second loop for iterate k times from the first index to kth index and Make a current  Max via adding in second  loop 
    3) Compare Old Max with current Max , latestMax = max(current max,old max) Assign this latestmax to Old Max and then again ittrate for next 3 elements .
    4) In the last who will be latestmax that will be final Max result value . 

   function Brute_Force_Method(Arr,k){
      let oldMax = 0
      let latestMax = 0
      for(i=0;i<Arr.length-1;i++){
         let currentMax =0 
         for(j=i;j<=k;j++){
            currentMax = currentMax + Arr[j]
         }
         latestMax = Math.max(currentMax,latestMax)
      }
      console.log("Maximum Sum is =>", latestMax )
   }

   const Arr = [2, 7, 0, 6, 1, 3]
   const k = 2 
   Brute_Force_Method(Arr,k)

2. Window Sliding Method :- 
    It takes o(n) time compaxity 
    1. increase the index one by one after k subsequesnt  {1, 2, 3} and find current sum 
    2. First for loop for find the first Max sum 
       max sum = 0
       for (i = 0; i< k ; i++){
           max sum += Array[i] 
       }
    2. Loop will start 
       for (i = k; i< n ; k++)
    2. compare current sum with Old max Sum 
       1. if current sum < Old Max , then dont change Max Sum 
       2. If current sum > Old Max then change Max Sum like 
          Max sum = max sum + Array[i] - Array [i - k]


   2, 7, 0, 6, 1, 3
   |     |  |
   |     |  |
   -------  |
      |     |
      |     |
      -------

   function Window_Sliding_Method(Arr,k){
      let oldMax = 0
      let currentMax =0 

      for(i=0;i<k;i++){
         currentMax = currentMax + Arr[i]
         oldMax = currentMax
      }

      /* 0   1
      |   |
      {2, 7} => 9 oldMax

         1   2
         |   |
         {7, 0} => 7 (oldMax+ A[j] - A[j-k]) */

      for(j=k;j<Arr.length;j++){
         currentMax = currentMax + Arr[j] - Arr[j-k]
         oldMax = Math.max(currentMax,oldMax)
      }
      console.log("Maximum Sum is =>", oldMax )
   }

   const Arr = [2, 7, 0, 6, 1, 3]
   const k = 2 
   Window_Sliding_Method(Arr,k)

// https://www.geeksforgeeks.org/window-sliding-technique/
// Returns maximum sum in a  
// subarray of size k. 
function maxSum( $arr, $n, $k) 
{ 
    // n must be greater 
    if ($n < $k) 
    { 
        console.log ("Invalid"); 
        return -1; 
    } 
  
    // Compute sum of first 
    // window of size k 
    $max_sum = 0; 
    for($i = 0; $i < $k; $i++) 
    $max_sum += $arr[$i]; 
  
    // Compute sums of remaining windows by 
    // removing first element of previous 
    // window and adding last element of 
    // current window. 
    $window_sum = $max_sum; 
    for ($i = $k; $i < $n; $i++) 
    { 
        $window_sum += $arr[$i] - $arr[$i - $k]; 
        $max_sum = Math.max($max_sum, $window_sum); 
    } 
  
    return $max_sum; 
} 
  
    // Driver code 
    $arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]; 
    $k = 4; 
    $n = $arr.length; 
    console.log ( maxSum($arr, $n, $k) ); 