/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    /*
        Graph 
        DFS 
        2 outer for loop for every cell 
    */
    const m = grid.length;
    const n = grid[0].length;

    if (m == 1 && n == 1) return grid[0] == 1 ? 1 : 0
    const visited = Array.from({ length: m }, () => Array(n).fill(false))
    const dfs = (i, j) => {
        if (i >= m || i < 0 || j >= n || j < 0 || grid[i][j] == 0) return 0
        if (visited[i][j]) return  //check visited
        visited[i][j] = true //set
        const left = dfs(i, j - 1)
        const right = dfs(i, j + 1)
        const up = dfs(i - 1, j)
        const down = dfs(i+1, j)
        
        return 
    }
    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] ) {
                if (grid[i][j] == 1) {
                    count++
                }
                dfs(i, j)
            }
        }
    }
    return count
};