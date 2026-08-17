/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    /*
        Adjency list 
        dist memoization
        BFS 
        Diskja Algo [cost+u<v]
    */
    // 1. Adjency list 
    const graph = Array.from({ length: n + 1 }, () => [])

    for (const [u, v, w] of times) {
        graph[u].push([v, w])
    }
    // 2. Adjency list 
    const dist = Array(n + 1).fill(Infinity)
    //3. BFS
    const q = [[k, 0]] //[node,dist]
    dist[k] = 0

    while (q.length > 0) {
        const [u, w] = q.shift() //[node,dist]

        //return 
        if (dist[u] < w) continue //mis1 wrote return at place of continue 

        //neibhour
        const neighbours = graph[u]

        for (const [v, vWeight] of neighbours) {
            //diskja
            if (dist[u] + vWeight < dist[v]) {
                dist[v] = dist[u] + vWeight

                //Mis3 forget this Priority queue idx finding and seting up PQ logic 
                //find index , where we need to set the current element in Priority q either in last or in between of any index , so the PQ would be in sorted array 

                const idx = q.findIndex(item => item[1] > dist[v])
                if (idx == 0) {
                    q.push([v, dist[v]])
                } else {
                    q.splice(idx, 0, [v, dist[v]])
                }
            }
        }
    }
    let max = 0; //mis2 wrote min at place of max 
    for (let i = 1; i <= n; i++) {
        if (dist[i] == Infinity) {
            return -1 //means we have not reached to that perticuler node 
        }
        max = Math.max(max, dist[i])
    }
    return max
};