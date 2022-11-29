//3:59
//Three for loop
//O(N3)

//2 for loop and 1 Hash Table 
//O(N2) time and space O(N)


//O(N2) Sorting and Two pointer,  O(1) No extra space required 

//9:30
const A =[0,-1,2,-3,1]
A.sort((a,b)=>a-b)
const result =[]
const target =0
for(let i=0;i<A.length;i++){
    let first = A[i]
    let left = i+1;
    let right = A.length-1;
    while(left<right){
		if(first+A[left]+A[right] == target){
        	result.push({first:first,second:A[left],third:A[right]})
        }if(first+A[left]+A[right] > target){
        	right--
        }else{
        	left++
        }
    }
}
console.log("Result=",result)



