/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    //if we find the circle means corces not posible 

    let count = 0;

    //prepre adjency first
    const adj = new Map();
    for (let i = 0; i < prerequisites.length; i++) {
        const course = prerequisites[i][0]
        const prereq = prerequisites[i][1]
        adj.set(course, adj.get(course) ? [...adj.get(course), prereq] : [prereq])
    }
    console.log(adj, "adj")

    //visited 
    const visited = Array(numCourses).fill(false)

    const dfs = (course) => {
        // if 1 
        if (visited[course]) {
            return true
        }

        //if 2 

        visited[course] = true

        //need to increase counter
        // if(){ //need one condition where we need to increase conter 
        count++
        // }

        //dfs utill for neighbore
        const pre = adj.get(course)
        if (pre) {

            for (let i = 0; i < pre.length; i++) {
                dfs(pre[i])
            }
        }
    }

    //call dfs for each 
    for (let i = 0; i < numCourses; i++) {
        dfs(i)
    }
    console.log(numCourses,"numCourses")
    console.log(count,"count")
    return numCourses == count
};