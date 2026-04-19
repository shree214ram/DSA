//3:36 4:00

const A = "abdfcbak"
const pat = "abc"

const pHash = new Map();
const sHash = new Map();

for(let i=0;i<pat.length;i++){
	if(pHash.get(pat[i].charCodeAt(0))){
    	pHash.set(pat[i].charCodeAt(0),pHash.get(pat[i].charCodeAt(0))+1)
    }else {
    	pHash.set(pat[i].charCodeAt(0),1)
    }
}
let count = 0
let start = 0
let minimum = Number.MAX_VALUE
for(let i=0;i<A.length;i++){
	if(sHash.get(A[i].charCodeAt(0))){
    	sHash.set(A[i].charCodeAt(0),sHash.get(A[i].charCodeAt(0))+1)
        
    }else{
    	sHash.set(A[i].charCodeAt(0),1)
    }
    
    //mistake bahutbadi
    if(pHash.get(A[i].charCodeAt(0)) >= sHash.get(A[i].charCodeAt(0))){
     count++
    }
    
    if(count == pat.length){
    
    while(!pHash.get(A[start]?.charCodeAt(0)) || 
        pHash.get(A[start].charCodeAt(0)) < sHash.get(A[start].charCodeAt(0))
        ){
        if(pHash.get(A[start].charCodeAt(0)) <= sHash.get(A[start].charCodeAt(0))){
            sHash.set(A[start].charCodeAt(0),sHash.get(A[start].charCodeAt(0))-1)
            }
        	start++
        }
    minimum= Math.min(minimum,i-start+1)
}
}
console.log("minimum Length is ", minimum);
console.log("string is ", A.substr(start,minimum))
