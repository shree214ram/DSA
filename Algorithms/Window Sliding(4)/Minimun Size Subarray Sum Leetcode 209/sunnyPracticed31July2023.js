//const Arr = [2, 3, 1, 2, 4, 3] // output 2
const Arr = [2, 3, 1,0, 2, 2, 4,2,1] // output 3
//const Arr = [2, 3, 1,0, 2, 2, 4,2,1,7] // output 1
//4:56
let min = Number.MAX_VALUE;
let left =0 ;
let sum = Arr[left];
const target = 7; 
let right=1
//for(let right=1;right<Arr.length;){
while(right<Arr.length){
    sum+= Arr[right];
    if(sum>target){
        while(sum>=target){
     	    sum-=Arr[left];
            left++
        }
     }
     min = Math.min(min,right-left+2)
     right++
     }
console.log(min)