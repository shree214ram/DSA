//Longest consecutive sub array
//12:36
const A = [7,8,9,0,11,12,13,14,15,1,5]

let maxLength = Number.MIN_VALUE
let size = 1
let start = A[0]

for(let i=1;i<A.length;i++){
	
    if(A[i]==start+1){
        size++
        maxLength = Math.max(maxLength,size)
    }else{
        size=1
    }
        start = A[i]
}
console.log(maxLength,"maxLength final ")

