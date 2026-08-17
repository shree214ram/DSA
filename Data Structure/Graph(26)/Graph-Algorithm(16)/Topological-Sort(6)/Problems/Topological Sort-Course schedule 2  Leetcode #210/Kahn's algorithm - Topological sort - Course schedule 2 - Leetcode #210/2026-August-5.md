/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    /*
        Topology sort + DFS + stack 
        khan's Algo BFS + queue + indegree 
    */

    const graph = Array.from({ length: numCourses }, () => [])

    const indegree = Array(numCourses).fill(0)
    for ([course, pre] of prerequisites) {
        graph[pre].push(course) //mis3 
        indegree[course]++ //mis1
    }


    const q = []
    //fill all the first course whose incoming call is 0 
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) { //mis2 only whose incoming call 0
            q.push(i)
        }
    }
    const res = []
    while (q.length > 0) {
        const cou = q.shift()
        
        res.push(cou)
        const neighbour = graph[cou]
        for (const x of neighbour) {
            indegree[x]-- //remove the nodes whose incoming call is 0 //mis3
            if (indegree[x] === 0) {
                q.push(x)
            }
        }
    }
    return res.length==numCourses ? res : []
};