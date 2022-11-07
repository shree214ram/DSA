//1:17

/*
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
*/

//const A = [1,1,4,2,3];
//let x = 5;
//Output: 2


//const A = [3,2,20,1,1,3];
//let x = 10;
//Output: 5

const A = [5,6,7,8,9];
let x = 4;
//Output: -1

let left = 0
let step = 0
let right = A.length-1
while(left<=right && x!=0){
	if(A[left] > x  ){
    	left++
    }else if( A[right] > x ){
    	right--
    }else {
    	const currentMax = Math.max(A[left],A[right])
        if(A[left]>A[right]){
        	left++
        }else{
        	right--
        }
        console.log(currentMax,"currentMax")
        x-= currentMax;
        step++
    }
}
console.log("Minimum Step are = ",step ==0?-1:step)
console.log("Remaining x = ",x)
