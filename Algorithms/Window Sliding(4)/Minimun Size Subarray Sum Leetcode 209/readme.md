# Minimun Size Subarray Sum || Leetcode 209
https://www.youtube.com/watch?v=S6Xg-0uaODc
###### Two Pointer and sliding window 
1. Two Pointer {Left and right} [initially 0 both], MinimumSum = 99999 
2. for(i to n array){
3. Sliding Window { variable size of window}
4. initialised a sum for every window if window sum , 
    sum = sum + A[right]

    sum < Target { Increase the Right pointer , right ++} 
    sum >= Target { 
                    1. Remove Left Pointer value from sum  and Increase the Left pointer by 1 and 
                    2. sum = sum - A[left]
                    3. left++
                    4. currentShortest = R-L+2 why because if current window is greater than so we will keep removing until it will not smaller than target
                } 
}
        
target = 7

2, 3, 1, 2, 4 3

left = 0
right = 0
sum = 0
n = Arr.lenght


1. First Loop for keep all element of array one by one
while (right < n) {
2. we will add elements in sum keep going on until sum <= Target(Add next element)

   sum = sum + Array[right](New Upcoming New Element)
   2 = 2
   2 + 3             =  5
   2 + 3 + 1        =  6
   2 + 3 + 1 + 2    =  8(we will stop because 8 > 7)



3. Once Second condition not proved we will remove  elements 
from left of window untill(sum >= Target) of window and
   if (sum >= target) {
      while (sum >= target) {
         sum = sum - Arr[left]
         left++
      }
   }
   right++
}
