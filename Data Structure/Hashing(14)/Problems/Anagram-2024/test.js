/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // if(s.length!==t.length){
    //     return false
    // }
    // const hash =new Map();
    // const hash2 =new Map();
    // for(let i=0;i<s.length;i++){
    //     if(hash.get(s[i])){
    //         hash.set(s[i],hash.get(s[i])+1)
    //     }else{
    //         hash.set(s[i],1)
    //     }

    //     if(hash2.get(t[i])){
    //         hash2.set(t[i],hash2.get(t[i])+1)
    //     }else{
    //         hash2.set(t[i],1)
    //     }
    // }
    // //checking 
    // for(let i=0;i<s.length;i++){
    //     if(hash.get(s[i])!==hash2.get(s[i])){
    //         return false
    //     }
    // }
    // return true ;
    const A = s, B=t;
    if(A.length == B.length){
    
    let hash = new Map(); 
    for(let i=0; i<A.length; i++){
      if(hash.get(A[i])){
        hash.set(A[i],hash.get(A[i])+1)
      }else{
            hash.set((A[i]),1)
      }
    }
    
    for(let i=0; i<B.length; i++){
      if(hash.get(B[i])){
        hash.set(B[i],hash.get(B[i])-1)
      }
    }
    for(let value of hash){
      
      if(value[1] > 0){
        return false;
      }
    }
    return true;
    
    
  }else{
    return false;
  }
};