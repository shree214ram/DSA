# FInd the most frequency of element 
<script>
/*
[
    [1,2,3,2,5],
    [3,2,3,5,6],
    [8,2,7,2,6],
]
*/
// 5:45

/*
5x | 2
3x | 3
2x | 5,6
1x | 8,7
*/

// ## Sunny Tried Approach 1:- 
const data = [
    [1,2,3,2,5],
    [3,2,3,5,6],
    [8,2,7,2,6],
]
const OrderArray = []
const AllArray = []
const hash = new Map()
for(let i=0;i<data.length;i++){
    for(let j=0;j<data[i].length;j++){
        if(hash.get(data[i][j])){
            if(hash.get(data[i][j]) ==1){
                OrderArray.push(data[i][j])
            }
            hash.set(data[i][j],hash.get(data[i][j])+1)
        }else{
            AllArray.push(data[i][j])
            hash.set(data[i][j],1)
        }
    }
}

OrderArray.forEach(value=>{
    console.log(hash.get(value),"x"," | ", value)
})
let str = ""
AllArray.forEach(value=>{
    if(!OrderArray.includes(value)){
        str+= str == "" ? value : ","+value
    }
})
console.log("1x"," | ", str)


// ## Sunny Tried Approach 2:- 
const data = [
    [1,2,3,2,5],
    [3,2,3,5,6],
    [8,2,7,2,6],
]
const OrderArray = []
const AllArray = []
const hash = new Map();
const newMap = new Map()
for(let i=0;i<data.length;i++){
    for(let j=0;j<data[i].length;j++){
        if(hash.get(data[i][j])){
            if(hash.get(data[i][j]) ==1){
                OrderArray.push(data[i][j])
            }
            hash.set(data[i][j],hash.get(data[i][j])+1)
        }else{
            AllArray.push(data[i][j])
            hash.set(data[i][j],1)
        }
    }
}
//2:5
for(key of hash){
	if(newMap.get(key[1])){
           const old = newMap.get(key[1])
            newMap.set(key[1],[...old,key[0]])
        }else{
            newMap.set(key[1],[key[0]])
        }
}
console.log(newMap)

for(key of newMap){
    console.log(`${key[0]}X | ${key[1].join(",")}`)
}
/*
output :-

1X | 1,8,7
5X | 2
3X | 3
2X | 5,6
*/
</script>
// ## Correct Solotion GFG:- 


https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/

1. Hash Map and sorting O(nlogn)

2. Max Heap O(nlogn)

https://www.geeksforgeeks.org/find-k-most-frequent-in-linear-time/
1. Hash Map and use Indexed Array  O(nlogn)

<script>
 const data = [
        [1,2,3,2,5],
        [3,2,3,5,6],
        [8,2,7,2,6],
    ];
    //1. first make a map and ittrate over array and make counter of each value 
        const hash = new Map();
        for(let i=0;i<data.length;i++){
            for(let j=0;j<data[i].length;j++){
                if(hash.get(data[i][j])){
                    hash.set(data[i][j],hash.get(data[i][j])+1)
                }else{
                    hash.set(data[i][j],1)
                }
            }
        }
        
   // 2. again ittrate over map and conver value as key and key as value , if value repeated then push in array 
        const IndexedArr = new Array(data[0].length+1).fill([])
        
        for(let key of hash.keys()){
        IndexedArr[hash.get(key)]=[...IndexedArr[hash.get(key)],key]
  
        }
      
      for(let i=IndexedArr.length-1;i>=0;i--){
      	if(IndexedArr[i].length>0){
        	console.log(`${i}X | ${IndexedArr[i]}`)
        }
      }
       
</script>


https://leetcode.com/problems/frequency-of-the-most-frequent-element/