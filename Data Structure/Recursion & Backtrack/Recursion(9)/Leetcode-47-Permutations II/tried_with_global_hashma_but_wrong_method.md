/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length==1){
        return [nums[0]]
    }
    const res=[];
    const un=[];
    const swap=(arr,i,j)=>{
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    const fn=(index,current)=>{
        if(index==nums.length){
            const st=current.join("_")
            if(un[st]===undefined){
                res.push([...current])
            }
            un[st]=true
            return; //mistake0
        }
        for(let i=index;i<nums.length;i++){
            //calculation
            swap(current,i,index) //mistake1

            //Recursion
            fn(i+1,current)//mistake2

            //Backtrack
            swap(current,i,index)

        }
    }
    fn(0,nums);
    return res;
};