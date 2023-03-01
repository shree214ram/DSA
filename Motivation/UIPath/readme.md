# Accecibility in backend ? how can we give accecibility 

# coding Chalange 

<script>
/*
[
    [1,2,3,2,5],
    [3,2,3,5,6],
    [8,2,7,2,6],
]
*/
// 5:45
/*5x | 2
3x | 3
2x | 5,6
1x | 8,7*/

// ## Approach 1:- 
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


// ## Approach 2:- 
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