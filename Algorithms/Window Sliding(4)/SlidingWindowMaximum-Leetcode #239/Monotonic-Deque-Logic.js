/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const A=nums;
    if(A.length==1 && k==1){
        return [A[0]];
    }
    const dq=[];
    const res=[]
    if(A.length>1){
        //fir first k element 
        for(let i=0;i<k;i++){
            //remove from rare
            while(dq.length>0 && A[i]>=A[dq[dq.length-1]]){
                dq.pop()
            }

            //push index
            dq.push(i)
        }

        //remaining  k element 
        for(let i=k;i<A.length;i++){

            res.push(A[dq[0]])

            //remove from left 
            while(dq.length>0 && dq[0]<= i-k){
                dq.shift()
            }

            //remove from rare
            while(dq.length>0 && A[i]>=A[dq[dq.length-1]]){
                dq.pop()
            }

            //push index
            dq.push(i)
        }
        res.push(A[dq[0]])
    }
    return res;
};