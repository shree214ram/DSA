<script>
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // let ml= Number.MIN_VALUE
    // for(let i=0; i<s.length; i++){
    //     let left = i
    //     let right = i+1;

    //     const hash = new Map()
    //     hash.set(s[left],1)
    //     let length = 1;
    //     while(right<s.length && !hash.get(s[right])){
    //         hash.set(s[right],1)
    //         right++;
    //         length++
    //     }
    //     ml = Math.max(ml,length)
    // }
    // return ml;
    const A = s
    let maxLength = Number.MIN_VALUE;
    let start = 0 
    const hash = new Map()
    for(let i=0;i<A.length;i++){
    //console.log(A[i].charCodeAt(0),"A[i].charCodeAt(0)")
        if(!(hash.get(A[i].charCodeAt(0)) || hash.get(A[i].charCodeAt(0))==0)){
          //console.log("yy"); 
          hash.set(A[i].charCodeAt(0),1);
            maxLength = Math.max(maxLength,i-start+1);
            //console.log(hash,"shree");
        }else {
        //console.log("hay")
            maxLength = Math.max(maxLength,i-start)
            hash.set(A[i].charCodeAt(0),hash.get(A[i].charCodeAt(0))+1);
            while(start<i && i<A.length){
                //twist
                if(hash.get(A[start].charCodeAt(0)) != hash.get(A[i].charCodeAt(0))){
                    hash.set(A[start].charCodeAt(0),hash.get(A[start].charCodeAt(0))-1)
                }else {
                    start++
                    break;
                }
                start++
            }
        }
    }
    
    return maxLength
};
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("tmmzuxt"));

</script>