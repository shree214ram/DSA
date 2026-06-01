84. Largest Rectangle in Histogram
Solved
Hard
Topics
premium lock icon
Companies
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

Example 1:




Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
Example 2:


Input: heights = [2,4]
Output: 4
 

Constraints:

1 <= heights.length <= 105
0 <= heights[i] <= 104
//10 am to 10:15
const A=heights;
if (A.length==0) return 0
let maxArea=0
const st=[];
// find next right Smallest 
for(let i=1;i<A.length;i++){
    while(st.length>0 && A[i]<=A[st[st.length-1]]){
        const left=st.pop()
        const right=i;
        const height=Math.min(A[left],A[right])
        const width=right-left-1;
        maxArea=Math.max(maxArea,height*width)
    }
    st.push(A[i])
}
return maxArea;