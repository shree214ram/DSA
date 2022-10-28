//O(n*n) , O(n)
let Arr = [
    [1,2,100],
    [2,1,19],
    [3,2,27],
    [4,1,25],
    [5,1,15]
]
//Sort Array
Arr.sort((a,b)=>b[2]-a[2])
console.log(Arr,"Sorted Arr")
const jobsMap = new Map()
/*
Isko hum temp array se bhi kar sakte he 
temp = [] //[true, false,false]
if(not exist deadline day){
    set array[j] = true
}
*/
let finalAnswer = 0
for(let i=0;i<Arr.length;i++){
    for(let j=Arr[i][1];j>0;j--){
        if(!jobsMap.get(j)){
            jobsMap.set(j,Arr[i][2])
            finalAnswer+=Arr[i][2];
            break;
        }
    }
}
console.log(jobsMap,"jobsMap")
console.log(finalAnswer,"finalAnswer")


//Max Heap Solution 

//@sp