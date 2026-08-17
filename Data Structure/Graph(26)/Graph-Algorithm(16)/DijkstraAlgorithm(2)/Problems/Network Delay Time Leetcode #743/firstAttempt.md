/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    /*
        Diskja Algo : BFS (prepare adjency list) + Priority queue 
        Shortest path to reach from single source 
    */

    const graph=Array.from({length:n+1},()=>[])

    for(let i=1;<=n;i++){
        graph[]
    }
};


/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    /*
        BFS , adjency list 
        queue 

        u+cost<v set v with cost 


    */
    //Adjency list 

    const graph= Array.from({length:n+1},()=>[])
    const dist= Array(n+1).fill(Infinity)
    
    for(const [u,v,cost] of times){
        graph[u].push([v,cost])
    }
    const q=[[k,0]]
    dist[k]=0 //mis1
    let head=0
    while(head<q.length && q.length>0){
        const size=q.length-head
        const [src,ucost] = q[head] //u

        const neibhours = graph[src]
        for(const [dest,dCost] of neibhours){
            //u+cost < v
            if(dist[src]+dCost < dist[dest]){
                dist[dest]=dist[src]+dCost
                // [k,0] [node,dist]
                const element=[dest,dist[dest]] //[node, distance]
                const id=q.findIndex(item=>item[1]>element[1]) // we are  trying to findout the index whose distance is greater than current node weight 
                if(id==-1){
                    
                }
                q.push([dest,dist[dest]])
            }
        }
    }
};




