/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    //12:10
    const st=[]
    const A=num
    for(let i=0;i<A.length;i++){
        while(k>0 && st.length>0 && A[i]<st[st.length-1]){
            st.pop()
            k--
        }
        st.push(A[i])
    }
    //if k still remaining 
    while(k>0){
        st.pop()
        k--
    }

    const stv= st.join("")

    //if it has 0 value at start 
    let start=0;
    while(start<stv.length && stv[start]==0){
        start++
    }
    const result = stv.substring(start,stv.length)
    return result=="" ? "0" : result
};
