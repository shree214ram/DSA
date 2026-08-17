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

        1. we need to traverse all the routes from source 
        2. we need to immidietelly stop if we cross the k stop 
        3. if with in k stop limit if we reached to destination we would compoare minimum cost golbal variable to inner sums of costs 
        Eg: 
        Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
        source 0 dest 3 so 
                            0
                     out       in (not perfect root)
               1                    2       
        first we shou;ld make Adjency list bu u--to-->v formula in which we will just check out going call let say u to v so 
        like 
        0: [1]
        1: [3,2]
        2: [3,0]

        BFS + head concept 

        first we will insert into queue sourse and then findout the neibhour and push neibhour in queue and findount 
            if we have reached to destination check minimum cost from global variable 
    */

    //make adgency list 

    const graph = Array.from({ length: n }, () => [])
    console.log(graph, "graph")
    // for(let i=0;i<n;i++){
    for (const [u, v, cost] of flights) {
        graph[u].push(v)
    }
    const costArry = Array.from({ length: n }, () => Array(n).fill(0))
    console.log(costArry, "costArry")

    for (let i = 0; i < flights.length; i++) {
        const u = flights[i][0]
        const v = flights[i][1]
        const cost = flights[i][2]
        costArry[u][v] = cost
    }
    let head = 0;
    const q = [[src,graph[src][0],costArry[src][graph[src][0]]]]

    const visited = Array(n).fill(false)
    let min = Infinity
    while (q.length > 0) {
        const size = q.length;
        let totalCost = 0;
        for (let i = 0; i < Math.min(k,size); i++) { // only traver k stop
            const top = q.shift()
            const [s, d, cost] = top
            totalCost += cost
            if (d == dst) {
                min = Math.min(min, totalCost)
            }
            const neighbour = graph[s]
            for (const x of neighbour) {
                if (!visited[x]) {
                    q.push([s, x, costArry[s][x]])
                }
            }
        }

    }
    return min == Infinity ? -1 : min
};