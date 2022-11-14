https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/

https://www.youtube.com/watch?v=QZmh8-Auqo8

Check if two strings are anagrams of equal size

1) Broute force O(nlogm):- 
   1. Sorting 
   2. Compare 
   A1.sort.join("")=== A2.sort.join("")
2) 2 Array O(n) but space will be O(m+n):- 
   1. Define 2 Array  (Count1 and Count2)
   2. Add one by one in each Array with character code of current index value in Respective Array Sum 
   3. Compare Both Sum  
3) 1 Array O(n) but space will be O(m):- 
   1. Define 1 Array  
   2. Add one by one in each Array with character code of current index value in Respective Array Sum 
   3. Compare Both Sum  
4) Hash Map O(n) Batter Solution 
   Ittrate First Array 
   mySet = newSet()
   for(){
      if(myset.get(A[i].characterCode())){
         myset.set(A[i].characterCode(),(myset.get(A[i].characterCode()) + 1 ))
      } else{
         myset.set(A[i].characterCode(),1)
      }
   }
   Ittrate Second Array 
   mySet = newSet()
   for(){
      if(myset.get(A[i].characterCode())){
         myset.set(A[i].characterCode(),(myset.get(A[i].characterCode()) - 1 ))
      } else {
         return false
      }
   }