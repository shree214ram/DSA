https://www.youtube.com/watch?v=HbbYPQc-Oo4
Subarray sum equals K | Number of subarrays with sum equals K | Leetcode #560
https://leetcode.com/problems/subarray-sum-equals-k/

https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/?ref=gcse

Note :- 
1. In the problem "Find-a-subarray-with-given-sum-in-array-of-integers" we stoped the loop after finding first array and we printed ther array from start to end 
2. In this problem we introduce a Counter and we increment one by one once a 


Steps:-

1. make 2 variable currentSum, Counter = 0
2. PreviousSum = new Hash()
3. Itrate one for loop for access all the element one by one and Add in currentSum
4. will increment currentSum += Arr[i]
5. if currentSum == TargetSum then Counter++
6. check if current sum is greater than Targetsum then check in hashTable 
   "currentSum-TargetSum" is already there then increment Counter 
7. check if currentSum is already exist in HashTable then set currentSum to currentSum++
8. Return Counter  

counter = 0
for(){
   currentSum  +=A[i]
   if(currentSum==Target){
      counter++
   }

   if(currentSum-Target exist in Map){
      counter=get(currentSum-Target)+1)
   } 

   if(currentSum exist in Map){
      map.set(currentSum,(get(currentSum)+1))
   } else {
      map.set(currentSum,1)
   }
}
