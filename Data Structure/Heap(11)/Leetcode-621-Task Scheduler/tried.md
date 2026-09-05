/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map= new Map()
    for(let x of tasks){
        map.set(x,map.get(x) ? map.get(x)+1 : 1)
    }

    const heap=[]
    for(const [key,val] of map.entries()){
        heap.push(val)
    }
    heap.sort((a,b)=>b[1]-a[1]) // Max Heap later i would convert into Max Heap 
    let count=0;
    while(heap.length>0){
        const [key,val] = heap[0]
        heap.shift()
        count++;
        const nextVal=val-1;
        if(nextVal>0){
            heap.push([key,nextVal])
        }
    }

};