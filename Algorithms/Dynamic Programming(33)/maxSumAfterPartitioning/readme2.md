/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    /*
    partition 
    1,15,7,9,2,5,10

    */
    const DP=Array(arr.length).fill(-1)

    const rec=(index)=>{
        if(index>=arr.length) return 0
        if(DP[index]!==-1) return DP[index]
        let max=-Infinity
        let maxSum=0//mistake1

        for(let j=index;j<Math.min(index+k,arr.length);j++){//partition at max k length //mistake2
            max=Math.max(max,arr[j]) //right
            const currentWondowLength=j-index+1 //right
            const currentWondowSum=currentWondowLength*max + rec(j+1)
            maxSum=Math.max(maxSum,currentWondowSum)
        }
        DP[index]=maxSum
        return maxSum
    }
    return rec(0)
};

===

======



TodayI wrote from my side :

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    /*
        Dp + partition technique 
    */
    // const DP=Array.from({length:arr.length},()=>Array(arr.length).fill())
    const DP=Array(arr.length).fill(-1)
    const rec=(index)=>{
        if(index==arr.length) return 0 //mistakes1 
        if(DP[index]!==-1) return DP[index]
        let max=-Infinity;
        let totalMax=-Infinity; //mistake2
        // let length=0
        for(let i=index;i<=Math.min(i+k-1,arr.length);i++){ //mistake3
            console.log(max,"max")
            max=Math.max(arr[i],max) //find the maximum in current window
            const currentWindowMaxSum=max*(i-index+1) //
            console.log(max,"max")
            console.log(currentWindowMaxSum,"currentWindowMaxSum")
            // length++
            totalMax=Math.max(totalMax,currentWindowMaxSum,rec(index+1))  //mstake4 
        }
            console.log(totalMax,"totalMax")

        return DP[index]=totalMax
    }
    console.log(DP,"DP")
    return rec(0)
};

I did couple of mistakes and then seen again solution Its 3rd attempt 

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    /*
        Dp + partition technique 
    */
    const DP = Array(arr.length).fill(-1)
    const rec = (index) => {
        if (index >= arr.length) return 0 //mis1
        if (DP[index] !== -1) return DP[index]
        let max = -Infinity;
        let totalMax = 0; //mis2
        for (let i = index; i < Math.min(index + k , arr.length); i++) {
            max = Math.max(arr[i], max) //find the maximum in current window
            const currentWindowMaxSum = max * (i - index + 1) + rec(i + 1) //mistake3
            totalMax = Math.max(totalMax, currentWindowMaxSum)//mistake2
        }
        DP[index] = totalMax
        return totalMax
    }
    return rec(0)
};

# why every question needs 3 or 4th attempt Its look like we are mugging up (ratna) , i want to be solved at least in seocd attempt 
because Its taking Lot of Time I am not a student  have 15 yrs of exp and i need to join the job asap 
Its my 4 month to be no Job . I have to apply and get soon . 

WHat to do pease help me : To get job in Faang and there are lots of Other Topics to be practice 

why every pattern and question taking 4 attempt , AM I dump or every one took this much time for select in FAANG . 

How much more time i would need to Become champion to solve any problem eventhogh not solved , new 

This Tme I am Working Pattern wise And Made a Very Essential Tracking Sheet (Special Note , template and Faang expectation) which would be very helpful for Revision 
https://docs.google.com/spreadsheets/d/1B6HJlLN6zkwvD5Juv4H59oJWVdWwBHXh4NCfPyvSslQ/edit?gid=0#gid=0 

Similarly I would make for Graph and Other topic which will helpfull for quick revision and Pattern to be set in my mind 

I know that Traking sheet takes some time but It will be more banificial for quick revision when interviews will lindup : what do u think 

And every topic i am giving 3rd or 4th attempt i know its so panic and time gainig , but i have little motivation one day my efforts will be paid off and I would get selected in FAAMG 

Please help me and motivate me . 