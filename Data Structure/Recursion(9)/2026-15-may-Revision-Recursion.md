https://www.youtube.com/watch?v=8b9rwm1VsYA&ab_channel=CodeIn10-NishantChahar
### What is Recursion :-
    we need to findout the the main things in our function then Recursion would work autometically 
fn(){
    //base case 

    //calculation 

    //recursion 
}

### Here are the core FAANG recursion patterns you need to master before DP:

1. The Include/Exclude Pattern (Subsets/Combinations): Making a binary decision for each element—either take it or leave it.

2. The Permutation Pattern (Arrangements): Swapping or tracking visited elements to find all unique orderings of a sequence.

3. The Divide and Conquer Pattern (Tree/Merge): Splitting a problem into independent subproblems, solving them, and combining results (e.g., Merge Sort, Binary Tree traversals).

4. The Backtracking/Exploration Pattern (Grid/Paths): Modifying a state, moving forward to explore paths, and explicitly undoing the choice if it hits a dead end (e.g., N-Queens, Flood Fill).

# Some Basic Recursion Problem 
<script>
//12:51 //12:59 
/*
sum of n numbers 
const sum=(n,total)=>{
	//
    if(n<0) return     
    if(n==1) return total+1 
    return sum(n-1,total+n);

}
//5+4+3+2+1
const number=6;
console.log(sum(number,0));
*/

//Reverse a string 
//13:08 //13:18
/*
const s="sunny"

const fn=(s)=>{
	const res=s.split("")
	let left=0,right=s.length-1
	while(left<right){
    	[res[left],res[right]]=[res[right],res[left]];
        left++
        right--
    }
    console.log(res)
    return res.join("")
}
console.log(fn(s))*/

// Palingdrome with all test cases passed at Leetcode , actually first i wrote and passeed almost cases but some specific was failing so rework 11511 test cases Passed
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //13:28 //13:42
    const x1=x.toString()

    if(x1.length==0 ) return false
    if(x1.length==1) return true
    const A=x1.split("");
    let left=0;
    let right=A.length-1;
    if(right==0) return false
    while(left<right){
        if(A[left]!=A[right]){
            return false
        }
        left++;
        right--
    }
    return true
};

// 

//Fectorial

//Febonacy 
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0){return 0}
    if(n==1){return 1}
    // 0 , 1, 1, 2, 3 
    const rec=(res)=>{
        // console.log(res,"res");
        const currentResLen=res.length
        const currenSum=res[currentResLen-1]+res[currentResLen-2]
        //base 
        // console.log(n,"n");
        // console.log(currenSum,"currenSum");
        // console.log(res.length,"res.length");

        if(n==res.length){
            // console.log("hay",currenSum)
            return currenSum
        }
        //recursion
        // console.log("ju")
        return rec([...res,currenSum])
    }
    //start 

    return  rec([0,1])
    
}; tooks 24 min but i wrote by Own withouse seen the solution and passed all test cases 31 cases 





//Leetcode 46 Permutation 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result =[]
    const rec=(index,res)=>{
        //base case
        if(index==nums.length){
            return [...result,res]
        }
        const newRes=[nums[index]]
        //calculation
        for(let i=index+1;<i<nums.length;i++){
            newRes.push(nums[i])
            //recursion 
            //Backtrack
        }

    }
    return rec(0,[])
};

Taken 22 Min but not able to recall last time what i did at dec 17 2025 , I remember something structure and I wrote from own but forget something 
1. I remembered the Base case 
2. I know it would need backtrack again to arrage the nums in same order how it was given 
3. Something Recusion and backtrack i forget 

====
I have seen one time solution because I forget the Swapping Logic and then Tried 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result =[]
    const swap=(arr,i,j)=>{
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    const rec=(index,res)=>{
        //base case
        if(index>nums.length){
            return 
        }
        if(index==nums.length){
            result.push([...res])
            return 
        }
        
        for(let i=index;i<nums.length;i++){
            swap(res,index,i)
            //recursion 
            rec(index+1,res)
            //Backtrack
            swap(res,index,i)
        }

    }
    rec(0,nums)
    return result;
};

//Nth Stairs Problem 
</script>