//https://www.geeksforgeeks.org/container-with-most-water/

https://www.youtube.com/watch?v=ZHQg07n_tbg
Container With Most Water | leetcode 11 | Hindi


https://www.youtube.com/watch?v=UuiTKBwPgAo
Container with Most Water - Leetcode 11 - Python
NeetCode
57K views
1 year ago


1. Naive Solution:

Approach: The idea is quite simple and involves checking every pair of boundaries or array element and find out the maximum area under any pair of boundaries.
Algorithm:
Create a nested loop, the outer loop traverses the array from 0 to end (index of this loop is i).
The inner loop traverses the array from i + 1 to end (index of this loop is j).
Find the water that can be contained in the container with height of boundaries as array[i] and array[j], i.e area = (j – i)* min(array[i],array[j]), if this area is greater than current maximum, update the current maximum
Print the current maximum.

Complexity Analysis:
Time Compelxity: O(n^2).
As nested traversal of the array is required, so time complexity is O(n^2)
Space Complexity: O(1).
As no extra space is required, so space complexity is constant.

2. Efficient Solution:

Approach: Given an array of heights of lines of boundaries of the container, find the maximum water that can be stored in a container. So start with the first and last element and check the amount of water that can be contained and store that container. Now the question arises is there any better boundaries or lines that can contain maximum water. So there is a clever way to find that. Initially, there are two indices the first and last index pointing to the first and the last element (which acts as boundaries of the container), if the value first index is less than the last index increase the first index else decrease the last index. As the increase in width is constant, by following the above process the optimal answer can be reached.
The GIF below explains the approach.


Algorithm:
Keep two index, first = 0 and last = n-1 and a value max_area that stores the maximum area.
Run a loop until first is less than the last.
Update the max_area with maximum of max_area and min(array[first] , array[last])*(last-first)
if the value at array[first] is greater tha array[last] then update last as last – 1 else update first as first + 1
Print the maximum area.

/* Note :-  
1. loop while from left to right as like two pointer method 
2. if Array[left] > Array[right] { r--} 
3. if Array[left] < Array[right] { l++} 
4. compare maxArea in each itteration and update with max 
*/
