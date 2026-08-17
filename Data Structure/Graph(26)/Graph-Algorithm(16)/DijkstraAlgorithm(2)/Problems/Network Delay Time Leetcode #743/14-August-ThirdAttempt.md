/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    /*
        source given and need to reach to all the nodes then Diskj would feet because 
        Kruskl(unionSet)/Prims for Minimum MST path 
        Diskja for shortest path from source to connect all other nodes 

        Belman ford for negative which can not be handles in Diskja 

        1. Adjency list 
        2. Memoigestion for dist 
        3. BFS 
        4. diskja 
        5. find the index and aintain the Priority queue 
        6. out sde of bfs call need t check if any node still have remianing the Infinity means not possible other wise print the Maximum dist/cost 
    */
    // 1. Adjency list 
    const graph = Array.from({ length: n+1 }, () => [])
    for (const [u, v, cost] of times) {
        graph[u].push([v, cost])
    }

    // 2. Memoigestion for dist 
    const minCost = Array(n+1).fill(Infinity)
    const visited = Array(n+1).fill(false)
    // 3. BFS 
    const pq = []//new minPriorityQueue() //i was thinking to use Leetcode default PQ class
    pq.push([k, 0])
    minCost[k] = 0
    while (pq.length > 0) {
        const [u, cost] = pq.shift()
        if (visited[u]) continue
        if (minCost[u] < cost) continue //mis1
        visited[u] = true
        // 4. diskja 
        //neibhour 
        for (const [v, vCost] of graph[u]) {

            if (minCost[u] + vCost < minCost[v]) {
                minCost[v] = minCost[u] + vCost //mis3
                //mis2
                const element = [v, minCost[v]]
                // 5. find the index and aintain the Priority queue
                const idx = pq.findIndex(item => item[1] > element[1])
                if (idx == 0) {
                    pq.push(element)
                } else {
                    pq.splice(0, idx, element)
                }
            }
        }

    }

    // 6. out sde of bfs call need t check if any node still have remianing the Infinity means not possible other wise print the Maximum dist/cost 
    let max = 0
    for (let i = 1; i < minCost.length; i++) { //mis4
        if (minCost[i] == Infinity) {
            return -1 //because we havn't completed att the nodes connected MST 
        }
        max = Math.max(max, minCost[i])
    }
    return max
};