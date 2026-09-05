Today i did in 28 min 
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //include/exclude [subset/combination]

    //Permutation 

    //Devide conqure Tree

    //Backtrack Grid/Path

    if(candidates.length==1){
        if(candidates[0]>target){
            return []
        }
    } 
    const res=[]
    const rec=(index,sum,arr)=>{
        if(index>candidates.length || sum>target){
            return 
        }
        if(sum==target){
            res.push(arr)
        }
        for(let i=index;i<candidates.length;i++){
            rec(i,sum+candidates[i],[...arr,candidates[i]])
        }
    }
    rec(0,0,[])
    return res;
};


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //include/exclude [subset/combination]

    //Permutation 

    //Devide conqure Tree

    //Backtrack Grid/Path

    if(candidates.length==1){
        if(candidates[0]>target){
            return []
        }
    } 
    const res=[]
    const rec=(index,sum,arr)=>{
        if(index>candidates.length || sum>target){
            return 
        }
        if(sum==target){
            res.push([...arr])
        }
        for(let i=index;i<candidates.length;i++){
            arr.push(candidates[i])
            rec(i,sum+candidates[i],arr)
            arr.pop() //backtrack it is optimized solution for saving unnecessory space from 7ms to 4ms 
        }
    }
    rec(0,0,[])
    return res;
};