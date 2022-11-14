
https://www.youtube.com/watch?v=HddgLcq9Efs
Minimum Operations to Reduce X to Zero | Dynamic Programming | Leetcode #1658
TECH DOSE
16K views 1 year ago

https://www.geeksforgeeks.org/minimum-number-of-array-elements-from-either-ends-required-to-be-subtracted-from-x-to-reduce-x-to-0/

https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

1658. Minimum Operations to Reduce X to Zero
Medium

3739

80

Add to List

Share
You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

 

Example 1:

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
Example 2:

Input: nums = [5,6,7,8,9], x = 4
Output: -1
Example 3:

Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.


# first observation Self Sunny gfg {Two pointer }

https://www.geeksforgeeks.org/minimum-number-of-array-elements-from-either-ends-required-to-be-subtracted-from-x-to-reduce-x-to-0/

But this approach is working fine for all above 3 Cases Examples But failing in case of 

let arr = [ 1, 3, 1, 1, 2 ];
let K = 4;
//output should be 2 but from Two pointer method coming 3

# Second Dynamic Programming 

https://www.youtube.com/watch?v=HddgLcq9Efs
Minimum Operations to Reduce X to Zero | Dynamic Programming | Leetcode #1658
TECH DOSE
16K views 1 year ago


https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

# third {Sum-k}

https://www.geeksforgeeks.org/minimum-array-elements-required-to-be-subtracted-from-either-end-to-reduce-k-to-0/?ref=rp

https://www.youtube.com/watch?v=7nzwrX4N_A0