https://www.geeksforgeeks.org/move-zeroes-end-array/

https://leetcode.com/problems/move-zeroes/

### Sunny Tried O(N*M):-
N one for loop , M for only once value is 0 

I have thought when i will start from last and found "0" i will , push a new element "0" in last and 
since current element to last element i will swap  current to nextupcoming elemet 

### Sunny Test GFG O(N):-
1. count variable 
2. When non zero ,then replace A[count] with A[i]{non zero} and increment count by 1 
const A = [1, 2, 0, 4, 3, 0, 5, 0]

first time count =0 and value is 1 , so A[count which is 0] = A[i] which is 1 so it will be same 
second time count =1 and value is 2 , so A[count which is 1] = A[i] which is 2 so it will be same 
third time count =2 and value is 0 , so we will skip
fourth time count =2 and value is 4 , so A[count which is 2] = A[i] which is 4 so it will chnage 0 to 4 at index 2 
.............till last

3. convert remaining element 0 from last count value to last 



