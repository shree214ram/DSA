// const Arr = [3,0,2,6,2,3]
// //output     0 3 1 0 1 0 

//Broute Force 
/*
find left most and right most 
there are 2 way arrange 2 array and store max left and max right for every element 

*/
/*
const leftArray=[]
let leftArrayMax=Arr[0]

for(let i=0;i<Arr.length;i++){
    leftArrayMax = leftArray[i]= Math.max(leftArrayMax,Arr[i])
}

const rightArray=[]
let rightArrayMax=Arr[Arr.length-1]

for(let i=Arr.length-1;i>=0;i--){
    rightArrayMax = rightArray[i]= Math.max(rightArrayMax,Arr[i])
}
let waterCntained  = 0;
for(let i=0;i<Arr.length;i++){
    waterCntained+=Math.min(leftArray[i],rightArray[i])-Arr[i]
}
*/


//Optimal Solution 

const Arr = [3,0,2,6,2,3]
//output     0 3 1 0 1 0 
let waterCntained  = 0;
let leftMax = Arr[0]
let rightMax = Arr[Arr.length-1]
let left = 0;
let right = Arr.length-1;
while(left<right){
    if(leftMax < rightMax){
        if(leftMax<Arr[left]){
            leftMax = Arr[left]
        } else {
            waterCntained+=leftMax-Arr[left]
        }
    } else{
        if(rightMax<Arr[right]){
            rightMax = Arr[right]
        } else {
            waterCntained+=rightMax-Arr[right]
        }
    }
}

// for(let i=0;i<Arr.length;i++){
//     let currentElement = Arr[i]
//     if(currentElement>leftMax){
//         leftMax = Math.max(leftMax,currentElement)
//     }
//     if(currentElement>rightMax){
//         rightMax = Math.max(rightMax,currentElement)
//     }
//     console.log(Math.min(leftMax,rightMax)-currentElement,"Math.min(leftMax,rightMax)-currentElement")
//     waterCntained+=Math.min(leftMax,rightMax)-currentElement
// }
console.log(waterCntained,"waterCntained")