# I solved this problem without seen solution or even any Hint I just seen the Array and Result , i got to know i need to findout the next greater element (Beacuse I solved Next Smaller Element Problem On Right side )and store the index in stack . If stack last element value if smaller than current value then Pop and Poped Element index would be the Left Pointer Index and Current would be the Right pointer Index . So we can easily findout the Difference that would be the Days and we can store at last popped Index . 
<script>
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // 
    const A=temperatures
    const res=new Array(A.length).fill(0);
    const st=[]
    for(let i=0;i<A.length;i++){
        while(st.length>0 && A[i] > A[st[st.length-1]]){
            const left=st.pop()
            const right= i ;
            res[left]=right-left;
        }
        st.push(i)
    }
    return res;
};