/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    /*
        Interval DP 
        Sequence DP 
        Sequence DO plus Fill Empty String 
        PartitionDP 
        DP + Binary search 
    */

    /*
        prepare the object arraylike [{start:1,end:3,profit:20},{start:2,end:5,profit:20}]

        Sorted : [{start:1,end:3,profit:20},{start:2,end:5,profit:20},{start:4,end:6,profit:70},{start:6,end:9,profit:60},{start:3,end:10,profit:100}]

        dp=2d array for i start , j end 
        for(starts){
            for(end){

            if DP[i][j] already visited then return DP[i][j]{
            }

                // Bnary Search : hot to use for check over lap and maximum comapre and set in DP ?? 
            }
        }
    */

    const num=startTime.map((obj,i)=>{
        return {start:startTime[i],end:endTime[i],profit:profit[i]}
    })
    //sorted by ends 
    const A=num.sort((a,b)=>a.end-b.end)
    const DP=Array(A.length).fill(0)
    DP[0]=A[0]['profit']
    for(let i=1;i<A.length;i++){
        let left=0
        let right=i-1
        
        // 0= left  1=mid 2= right
        let max=0
        while(left<right){
            let mid=Math.floor((left+right)/2)
            if(A[mid]["end"]<=A[i]["start"]){
                max=A[mid]["profit"];
                break;
            }else{
                //overlap 
                right=mid-1
            }
        }
        console.log(A[i]["profit"],'A[i]["profit"]')
        console.log(max,"max")
        DP[i]=A[i]["profit"]+max
    }
    console.log(DP,"DP")
    return DP[DP.length-1]
};