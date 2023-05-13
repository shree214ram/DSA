
const A = [1, 3, 5, 3, 7, 8, 34, 23, 3, 3];

const result = [];
const hash = new Map();
for (let i = 0; i < A.length; i++) {
  if (hash.get(A[i])) {
    hash.set(A[i], hash.get(A[i]) + 1);
  } else {
    hash.set(A[i], 1);
  }
}
for (let key of hash.keys()) {
  if (result[key] === undefined) {
    result[key] = [hash.get(key), key];
  }
}
const sorted = result.sort((a, b) => b[0] - a[0]);
console.log("Most", sorted[0][1]);


// ### MoreOptimization in code 

{/* <script> */}
//11:47 11:54
const A = [1, 3, 5, 3, 7, 8, 34, 23, 3, 3,34];
const hash = new Map();

for(let i=0;i<A.length;i++){
	if(hash.get(A[i])){
    	hash.set(A[i],hash.get(A[i])+1)
    }else{
    	    	hash.set(A[i],1)

    }

}
console.log(hash,"hasg")

const res =[] //index as key

for(let key of hash.keys()){
console.log(key)
	res[hash.get(key)]= key
}
console.log(res)
console.log("Maximum elemnt is ",res[res.length-1], " Comming times", res.length-1)
// </script>