/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //sort 
    if(intervals.length==1){return intervals}
    const A= intervals.sort((a,b)=>a[0]-b[0])
    
    const res=[A[0]]
    for(let i=1;i<A.length;i++){
        if(A[i][0]<=A[i-1][1]){
            res[i-1]=[A[i-1][0],
            Math.max(A[i-1][1],A[i][1]) ]
        }else{
            res.push(A[i])
        }
    }
    return res;
};

I tried to update the Previous element in res But it might be more in left if we found overlap with 
like A B C ,C overlap with B and C Overlap with A also Then ??

We will work with a constant of last of res and we will keep updating in that . 

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
        //sort 
        if(intervals.length==1){return intervals}
        const A= intervals.sort((a,b)=>a[0]-b[0])
        
        const res=[A[0]]
        for(let i=1;i<A.length;i++){
            let last = res[res.length - 1]
            if(A[i][0]<=last[1]){
                last=[A[i-1][0],
                Math.max(last[1],A[i][1]) ]
                
            }else{
                res.push(A[i])
            }
        }
        return res;
    }; I reached here in 46 Min please give me another hint 


<script>
    /**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //sort 
    if(intervals.length==1){return intervals}
    const A= intervals.sort((a,b)=>a[0]-b[0])
    
    const res=[A[0]]
    for(let i=1;i<A.length;i++){
        //we can think like stack last element and only we need to update on last element of res , we dont nee to add if its overlap otherwise simply push in array if its not overlap 
        let last = res[res.length - 1] 
        if(A[i][0]<=last[1]){
        last[1] = Math.max(last[1], A[i][1]);
            //we only need to update the the last element of res and that's ending point only 
        }else{
            res.push(A[i])
        }
    }
    return res;
};