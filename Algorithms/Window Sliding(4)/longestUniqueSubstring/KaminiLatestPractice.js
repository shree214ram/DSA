//longest unique substring (non-repeating) with window sliding technique

const A = "GEEKFORGEEKS";
let res = 0; 
for(let i=0; i<A.length; i++){
const h = {};
  for(let j=i; j<A.length; j++){
    if(h[(A[j])] == true){
      break;
    }else{
      res = Math.max(res, j-i+1);
      h[(A[j])]=true;
    }
    // h[(A[i])] == false;
  }
}
  console.log(res,"max")
