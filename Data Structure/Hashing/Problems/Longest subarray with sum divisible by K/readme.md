https://www.geeksforgeeks.org/longest-subarray-sum-divisible-k/

Given an arr[] containing n integers and a positive integer k. The problem is to find the longest subarray’s 
length with the sum of the elements divisible by the given value k.

Examples:

Input: arr[] = {2, 7, 6, 1, 4, 5}, k = 3
Output: 4
Explaination: The subarray is {7, 6, 1, 4} with sum 18, which is divisible by 3.

Input: arr[] = {-2, 2, -5, 12, -11, -1, 7}, k = 3
Output: 5

Solution :-

const arr = [2, 7, 6, 1, 4, 5], k = 3
let maxSize =  arr.length
let totalWindowSum = 0
for(let i=0;i<arr.length-1;i++){
{
totalWindowSum+=arr[i]
}
const mid = (maxSize % 2 ==0 ) ? maxSize /2 : (maxSize+1)/2
//loop reverse -- 
for(let i=1;i<arr.length-1;i++){
    if(i>mid){
        break;
    }
    if (totalWindowSum %  3 == 0) {
        change maxSize all number 
    } else if (totalWindowSum-arr[arr.length-i] %  3 == 0){
        change maxSize (decrease size 1)
    } else if(remove first){
        change maxSize (decrease size 1)
    } else if (Remove both side ){
        change maxSize (decrease size 2)
    }
}


start from 1 

remove back add next 