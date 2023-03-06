<script>
 
//https://leetcode.com/problems/sort-colors/

const A = [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]


//Sunny Tried 3 temp array method O(N) and O(3N)
/*
const A0 = [];
const A1 = [];
const A2 = [];

for(let i=0;i<A.length;i++){
	if(A[i]==2){
    	A2.push(2)
    }else if(A[i]==1){
    	A1.push(1)
    }else{
    	A0.push(0)
    }
  }
  console.log([...A0,...A1,...A2])
*/


//1.GFG Solution 3 pointer  O(N) O(1)
//Sort an array of 0s, 1s, and 2s using the Pointer Approach: 
//https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

function swap(A,i,j){
	let temp = A[i];	
    A[i] = A[j];
	A[j] = temp;
}
let left = 0;
let mid = 0;
let right = A.length-1;
if(A.length <3){
	console.log("Not Possible")
}else{
  for(let i=0;i<A.length;i++){
	if(A[mid]==0){
        	swap(A,left,mid);
            mid++;            
            left++;
    }else if(A[mid]==2){
        	swap(A,mid,right)
            right--
    }else{
            mid++;            
    }
  }
}
console.log(A)
//2.GFG counter solution Method O(N) O(1):-

1. 1 for loop for  found the 0,1ans 2s counts 
2. update the number as per count of  0,1ans 2s counts 
let cnt0=cnt1=cnt2=0
for(let i=0;i<A.length;i++){
    if(A[i]==0){
        cnt0++
    }else if(A[i]==1){
        cnt1++
    }else {
        cnt2++
    }
}
let i=0;
while(cnt0>0){
    A[i++]=0
    cnt0--
}
while(cnt1>0){
    A[i++]=1
    cnt1--
}
while(cnt2>0){
    A[i++]=2
    cnt2--
}
console.log(A)
</script>