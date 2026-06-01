// /**
//  * @param {number[][]} intervals
//  * @param {number[]} newInterval
//  * @return {number[][]}
//  */
// var insert = function(intervals, newInterval) {
//     //2 min already taken for Reading and then started timer of 45 min 

//    const res=[]
//    const A= intervals
//    let lastElememt = -1
//    for(let i=0;i<A.length;i++){
//      //overlap
//      const current=A[i]
//      if(current[1]>=newInterval[0]){
//         if(res.length==0){
//             res.push([current[0],newInterval[1]])
//         }else{
//             res[res.length-1][1]=newInterval[1]
//         }
//      }else{
//         res.push(current)
//      }
//    }

// };


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if(intervals.length==0 && newInterval==[])return []
    if(intervals.length==0 && newInterval!=[])return [newInterval]
    //9:56 10:34 Pause and Again Started 11:29
    const res = [];
    let i = 0;
    const n = intervals.length;
    //[[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]


    //insert before intervals from newIntervas 
    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i])
        i++
    }
    console.log(res,"first");
    
    //res would be [[1,2]]]

    // insert  overlap first element 
    res.push([intervals[i][0], Math.max(intervals[i][0], newInterval[1])]);
    i++
    //[3,5] will compare with [4,8] and it will have [3,max(5,8)=8]  ===>[3,8]


    //Now compare the nextOverlapped which needs to be updated in Res last elemets end 
    /*
        [3,5] [4,8] => [3,8] //already done upper
        [3,8] [6,7] => [3,8] //updated the max from 8,7 to 8 
        [3,8] [8,10]=> [3,10] //updated max from 8,10 to 10 
    */

    while (i < n && res[res.length - 1][1] >= intervals[i][0]) {
        console.log(res[res.length - 1][1],"LAST end")
        console.log(intervals[i][0],"current start")
        const last = res[res.length - 1];
        last[1] = Math.max(last[1], intervals[i][1]);
        i++
    }
console.log(res,"second");

    while (i < n) {
        res.push(intervals[i]);
        i++
    }
    console.log(res,"third");

    return res;
}