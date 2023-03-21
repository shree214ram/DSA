const A = "qwabcsdyu";
const P = "abcd";
//10:02 //10:14 //10:23
const hashP = new Map();
const hash = new Map();

//Set Pattern
for(let i=0;i<P.length;i++){
	if(hashP.get(P[i].charCodeAt(0))){
    	hashP.set(P[i].charCodeAt(0), hashP.get(P[i].charCodeAt(0))+1)
    }else{
    	hashP.set(P[i].charCodeAt(0), 1)
    }
}
let counter = 0;
let start = 0;
let minLength = Number.MAX_VALUE;

//string
for(let i=0;i<A.length;i++){
	if(hash.get(A[i].charCodeAt(0))){
    	hash.set(A[i].charCodeAt(0), hash.get(A[i].charCodeAt(0))+1)
    }else{
    	hash.set(A[i].charCodeAt(0),1)
    }
    
    if(hashP.get(A[i].charCodeAt(0)) ){
    	counter++
    }
    console.log(counter,"countter");    
    console.log(P.length,"P.length");

    if(counter === P.length){
    	while( !hashP.get(A[start].charCodeAt(0)) || 
        hash.get(A[start].charCodeAt(0)) > hashP.get(A[start].charCodeAt(0)) ){
        console.log("hay =",hash.get(A[start].charCodeAt(0)));	
        hash.set(A[start].charCodeAt(0),hash.get(A[start].charCodeAt(0))-1);
        console.log(start)
        	start++
            if(start > P.length){
            	break
            }
        }
        minLength = Math.min(minLength,i-start+1)
    }
}
console.log("Minimum Length is =", minLength);
console.log("Start is =", start);
console.log("String  is =", A.substring(start,start+minLength));
