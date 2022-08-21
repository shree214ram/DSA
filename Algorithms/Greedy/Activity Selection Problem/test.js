//shree Ganeshay namah
function findMaxActivity(Arr){

    const sortedArray= Arr.sort((a,b)=>a[1]-b[1])
    let old = sortedArray[0];
    let Answer = [old]
    for(let i=1;i<sortedArray.length;i++){
        if(sortedArray[i][0]>=old[1]){
            Answer.push(sortedArray[i])
            old = sortedArray[i]
        }
    }
    console.log("Resulted Answer =>", Answer)
    console.log("Answer =>", Answer.length)

}
const Arr = [[1,4],[5,6],[3,4],[4,7],[4,5],[1,3],[1,2]]
findMaxActivity(Arr)

