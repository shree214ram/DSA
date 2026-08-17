/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    /*
        1. Adjency List
        2. minCost memoization
        3. BFS Queue snapshot 
        4. 
    */
    const graph = Array.from({ length: n }, () => [])

    for (const [u, v, cost] of flights) {
        graph[u].push([v, cost])
    }

    const minCost = Array(n).fill(Infinity)

    const q = [[src, 0]]
    minCost[src]=0
    let stop = 0;
    while (q.length > 0 && stop < k + 1) {
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const [u,uCost]=q.shift()

            if(graph[u]===undefined) continue //mis1
            if(u===dst) continue //mis2

            //neibhour
            for(const [v,vCost] of graph[u]){
                if(uCost+vCost<minCost[v]){ //mis3 
                    minCost[v]=uCost+vCost
                    q.push([v,minCost[v]])
                }
            }
        }
        stop++
    }
    return minCost[dst]==Infinity ? -1 : minCost[dst]
}; Runtime
17
ms
Beats
83.19%


Memory
65.67
MB
Beats
28.99% ==== but i converted into head to safe some time frm q.shift function /**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    /*
        1. Adjency List
        2. minCost memoization
        3. BFS Queue snapshot 
        4. 
    */
    const graph = Array.from({ length: n }, () => [])

    for (const [u, v, cost] of flights) {
        graph[u].push([v, cost])
    }

    const minCost = Array(n).fill(Infinity)

    const q = [[src, 0]]
    minCost[src]=0
    let stop = 0;
    let head=0
    while (head<q.length && q.length > 0 && stop < k + 1) {
        const size = q.length-head;
        for (let i = 0; i < size; i++) {
            const [u,uCost]=q[head++]

            if(graph[u]===undefined) continue 
            if(u===dst) continue 

            //neibhour
            for(const [v,vCost] of graph[u]){
                if(uCost+vCost<minCost[v]){
                    minCost[v]=uCost+vCost
                    q.push([v,minCost[v]])
                }
            }
        }
        stop++
    }
    return minCost[dst]==Infinity ? -1 : minCost[dst]
}; but its giveving more MS : Runtime
21
ms
Beats
72.06%


Memory
65.02
MB
Beats
40.34%