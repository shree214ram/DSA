//4;12
const A = [[0, 2], [1, 3]]
const m = A.length;
const n = A[0].length
// 1. cretae a  visited array with 0 value 
let visited = new Array(m).fill([]).map(obj => {
    return new Array(n).fill(0)
});
const res = binarySearch(visited)
console.log(res, "Res")
// 2. Binary Search
function binarySearch(visited) {
    let l = 0;
    let r = 50 * 50 - 1;
    while (l < r) {
        let mid = Math.round((l + r) / 2)
        // 2.1. We need to reinitiate visited  again with value 0 , 
        /*@mistake :------------>>> 
        I had mistaken here forget to reinitialized , so program was not working .
        it will work like backtracking .
        */
        visited = new Array(m).fill([]).map(obj => {
            return new Array(n).fill(0)
        });
        // 2.2. Every time after get new mid program will again start from 0,0 {i,j} of grid. 
        dfsUtil(0, 0, visited, mid);
        // 2.3. if we reached at last point like m-1, n-1 that means hera posiblity with this mid to reach at End Point. 
        if (visited[m - 1][n - 1]) {
            r = mid
        } else {
        // 2.4. if we did't reached at last point like m-1, n-1 that means we need to increase the left pointer. 
            l = mid + 1
        }
    }
    return l
}

// 3. DFS for each element of grid  
function dfsUtil(i, j, visited, mid) {
    // 3.1. if i,j th element not visited and value of i,j th element at least mid. 
    //matlab ki i,j wale element ki value should be small or equal to mid  
    if (!visited[i][j] && A[i][j] <= mid) {

        visited[i][j] = 1
        if (j + 1 < n) { dfsUtil(i, j + 1, visited, mid) }
        if (j - 1 >= 0) { dfsUtil(i, j - 1, visited, mid) }
        if (i + 1 < m) { dfsUtil(i + 1, j, visited, mid) }
        if (i - 1 >= 0) { dfsUtil(i - 1, j, visited, mid) }

    }
}