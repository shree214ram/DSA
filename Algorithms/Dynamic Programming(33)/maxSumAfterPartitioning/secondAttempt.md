/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    /*
        We will use Partition array and i would be 0 and j would be last 
        and we will keep k 

        [1,15,7,9,2,5,10], k = 3  === [15,15,15] [9] [10,10,10]
        index =0
        fn(index){
        if(index>arr.length)return 0
        for(i=index  to i<(index+k-1) i++){

        }
        // 0,1,2 
        }

    */
    const DP = Array(arr.length).fill(-1)
    let largest = -Infinity 
    const fn=(index)=>{
        if (index > arr.length) return 0
        if (DP[index] !== -1) return DP[i]
        let max=-Infinity
        for (i = index; i < (index + k - 1); i++) {
            max=Math.max(arr[i],max)
            const currentWindowSize=i-index+1;
            const currentWindowMaxSum=currentWindowSize*max; 
            largest=Math.max(largest,max)

        }
        // 0,1,2 
        DP[index]=largest
        return largest
    }
    fn(0)
    return largest
};