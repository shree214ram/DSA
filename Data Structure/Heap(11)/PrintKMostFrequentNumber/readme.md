// Given an integer array nums 
// and an integer k, return the k 
// most frequent elements.

// Given an integer array nums and an integer k, return the k most frequent elements.
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

<script>
const k = 2;
// const A = [1,2,3,4,5,1,1,2];
const A = [3,4,5,1,1,2,1,2];
// 333 
// answer : 1, 2
// count = [1:3,]

//Max Heap Approach discussed 
// value : 3
// count : 1

// value : 3
// count : 1


//    3
//   4  
  
//   4
//  3      

//  5
// 4 
const hash = new Map();

for(let i=0;i<A.length;i++){
  if(hash.get(A[i])){
    hash.set(A[i],hash.get(A[i])+1)
  }else{
    hash.set(A[i],1)
  }
}

const frM = new Map()
for(let key of hash.keys()){
  const count = hash.get(key)
  if(frM.get(count)){
    frM.set(count,[...frM.get(count),key])
  }else{
    frM.set(count,[key])
  }
}
console.log(frM,"frm")
</script>
### Note :- First I tried with Hash Map and shown the result But It was taking O(N) Time,O(N) Sapce He told for more optimised way , So i thought by Heap(Max Heap)  he told yes , he asked me the approach so i explain same like Kth largest element we can have aonject {value,counter} and behalf of counter we can keep max counter on Top and return first k elements from heap 
