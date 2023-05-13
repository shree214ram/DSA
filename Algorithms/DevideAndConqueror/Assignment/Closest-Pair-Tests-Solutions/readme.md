# Assignment 3 :- Programming Assignment (algorithm for the closest pair of points)
   ## The smallest distance between two points in the given array.
   
   ### Approach1  O(n (Logn)^2)
        
   1. Sort the array according to x direction  P[] . 
   2. Now we have to find the middle point in the array, we can use P[n/2] as middle point. 
   3. Divide the given array in two parts. The first subarray part contains points from P[0] to P[n/2]. The second subarray part contains points from P[n/2+1] to P[n-1].
   4. Recursively find the smallest distances in both subarrays. Let the distances be distanceLeft and distanceRight. Find the minimum of distanceLeft and distanceRight. Let the minimum be d.
   5. From the above 3 steps, we have an upper bound d of minimum distance. 
   Now we need to consider the pairs such that one point in pair is from the left half and the other is from the right half. 
   Consider the vertical line passing through P[n/2] and find all points whose x coordinate is closer than d to the middle vertical line. Build an array strip[] of all such points. 
   6. Sort the array strip[] according to y coordinates. This step is O(nLogn). It can be optimized to O(n) by recursively sorting and merging. 
   7. Find the smallest distance in strip[]. This is tricky. From the first look, it seems to be a O(n^2) step, but it is actually O(n). It can be proved geometrically that for every point in the strip, we only need to check at most 7 points after it (note that strip is sorted according to Y coordinate). See this for more analysis.
   8. Finally return the minimum of d and distance calculated in the above step (step 7)

   Time Complexity Let Time complexity of above algorithm be T(n). 
      1. Let us assume that we use a O(nLogn) sorting algorithm. 
      2. The above algorithm divides all points in two sets and recursively calls for two sets. O(2Times(n/2))
      3. After dividing, it finds the strip in O(n) time, sorts the strip in O(nLogn) time and finally 
      4. finds the closest points in strip in O(n) time. 
      
      So T(n) can expressed as follows 
      T(n) = 2T(n/2) + O(n) + O(nLogn) + O(n) 
      T(n) = 2T(n/2) + O(nLogn) 
      T(n) = T(n x Logn x Logn) {n Log Sqaure n}

   Auxiliary Space: O(log n)


   ### Approach2 O(nlogn)

   In this approach, we will discuss an implementation where the time complexity is O(nLogn). 
   1. The idea is to presort all points according to y coordinates. 
   2. Let the sorted array be Py[]. When we make recursive calls, we need to divide points of Py[] also according to the vertical line. 
   3. We can do that by simply processing every point and comparing its x coordinate with x coordinate of the middle line.
https://www.geeksforgeeks.org/closest-pair-of-points-onlogn-implementation/
https://www.geeksforgeeks.org/closest-pair-of-points-using-divide-and-conquer-algorithm/
   https://www.youtube.com/watch?v=kCLGVat2SHk&ab_channel=AlgorithmsbySharmaThankachan
   https://www.youtube.com/watch?v=ldHA8UcQI9Q&ab_channel=Insidecode

   Online Java Compiler 
   https://www.programiz.com/java-programming/online-compiler/
   