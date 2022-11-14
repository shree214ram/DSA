// https://www.geeksforgeeks.org/window-sliding-technique/
k = size of sub sequent 
n = size of array

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
   const k = 3 
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
       for (j = k; j< n ; j++)
         currentMax  += myArray[j] - myArray[j-k] // [2,7,0] remove 1 from left side and add 6 in right side 
    2. compare current sum with Old max Sum 
       1. if current sum < Old Max , then dont change Max Sum 
       2. If current sum > Old Max then change Max Sum like 
          Maxsum = Math.max(MaxSum,currentMax)


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
    
// 1. https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/
// 2. https://www.geeksforgeeks.org/find-number-times-string-occurs-given-string/
// 3. https://www.geeksforgeeks.org/count-gfg-subsequences-given-string/?ref=lbp
// 4. https://www.geeksforgeeks.org/print-concatenation-of-zig-zag-string-form-in-n-rows/
// 5. Find All Anagrams in a String | Sliding window | Leetcode #438 // https://www.youtube.com/watch?v=fYgU6Bi2fRg
// 6. Sliding Window Maximum | Leetcode #239  // https://www.youtube.com/watch?v=LiSdD3ljCIE
// 7. Sliding Window Maximum - Monotonic Queue - Leetcode 239 //https://www.youtube.com/watch?v=DfljaUwZsOk
// 7. Sortest Sub array with sum at least K || Leetcode #862 //https://www.youtube.com/watch?v=K0NgGYEAkA4
// 8. Minimun Size Subarray Sum || Leetcode #209
// 9. Permutation in String | Anagram of string s1 in string s2 | Leetcode #567





