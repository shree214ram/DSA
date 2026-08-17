i am thinking to solve 1091. Shortest Path in Binary Matrix : timers atrted 45 min and 2 thing coming in ,mind 1 BFS 2. Backtrack because we need to findout the Shortest patyh so we wouls traverse so many paths and we will calculate the minimum count of 0 to traverse I means shortest path we need to findout so ? but i would store and compare with min count in BFS , should i need to memoise or meoize not required only traverse in different different branch from 0,0 to last,last and only found the minimum count of 0 ? In 8 direction we would check if 0 then only traverse ? one line discussin nood code noo solution 

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let min = Infinity
    const visited = Array.from({ length: m }, () => Array(n).fill(false))
    const x = [0, 0, 1, -1, -1, -1, 1, 1]
    const y = [1, -1, 0, 0, -1, 1, -1, 1]
    const rec = (i, j, sum) => {
        //base case Or boundry case 
        if (i >= m || i < 0 || j >= n || j < 0 || grid[i][j] == 1) {
            return
        }
        // if we reached to final cell then compare Minimum count of 0 branch 
        if (i == m - 1 && j == n - 1) {
            min = Math.min(min, sum + 1)
        }
        //if already visited return 
        if (visited[i][j]) {
            return
        }
        //move in 8 direction if 0 value 
        for (let k = 0; k < x.length; k++) {
            const nextX = i + x[k]
            const nextY = j + y[k]

            visited[i][j] = true
            rec(nextX, j + y[k], sum + 1)
            visited[i][j] = false //backtrack
        }
    }

    rec(0, 0, 0)
    return min
};

```python
# Analyze user code for bugs:
# Bug 1: rec(nextX, j + y[k], sum + 1) -> using 'j + y[k]' instead of 'nextY'!
# Bug 2: visited check comes AFTER grid[i][j] == 1 check, but also visited set/reset happens inside loop multiple times (8 times) for same (i,j)!
# Bug 3: DFS for Shortest Path in unweighted grid results in Time Limit Exceeded (TLE) because grid shortest paths require BFS!
print("Bugs identified.")


```

```text
Bugs identified.


```

Look closely at your recursive call line: you passed `nextX`, but instead of passing `nextY`, you wrote `j + y[k]`—and remember that for finding the **shortest path** in an unweighted grid, DFS with backtracking causes Time Limit Exceeded ($O(8^{N^2})$), so you must use **BFS** instead!

last time i did via /**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    if(grid[0][0] !==0) return -1
    if(m==1 && n==1) return grid[0][0] ==0 ? 1 : -1

    const q=[[0,0,1]]
    const x=[0,0,-1,1,-1,-1,1,1]
    const y=[1,-1,0,0,-1,1,-1,1]
    let temp=[0,0,1]
    while(q.length>0){
        //pop
         temp=q[0]
        const cX=temp[0]
        const cY=temp[1]
        if(cX==m-1 && cY==n-1){
            break;
        }
        const oldCount=temp[2]
        // console.log(oldCount,"oldCount")
        q.shift()
        //
        //push
        for(let i=0;i<x.length;i++){
            const nX=cX+x[i]
            const nY=cY+y[i]
            // console.log(nX,nY)
            if(nX>=0 && nX<m && nY>=0 && nY<n && grid[nX][nY]===0){
                // console.log("hay",grid[nX][nY])
                q.push([nX,nY,oldCount+1])
                grid[nX][nY]="X"
            }
        }
    }
    // console.log(temp)
    return (temp[0]==m-1 && temp[1]==n-1) ?  temp[2] : -1
}; but I am just doing Inplace Visitibg with X but not doing Backtrack , but there are multiple Branch and we should again change X with Its original value Or its 0 and we have visited in BFS once so they would not come again and we can chnage it to X ? one line 



```python
# Let's test if marking visited as 'X' without backtracking works in BFS.
def shortestPathBinaryMatrix(grid):
    m = len(grid)
    n = len(grid[0])
    if grid[0][0] != 0 or grid[m-1][n-1] != 0:
        return -1
    if m == 1 and n == 1:
        return 1

    q = [(0, 0, 1)]
    grid[0][0] = 1 # visited
    
    dirs = [(0,1), (0,-1), (-1,0), (1,0), (-1,-1), (-1,1), (1,-1), (1,1)]
    head = 0
    while head < len(q):
        r, c, dist = q[head]
        head += 1
        
        if r == m - 1 and c == n - 1:
            return dist
            
        for dr, dc in dirs:
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 0:
                grid[nr][nc] = 1 # mark visited permanently
                q.append((nr, nc, dist + 1))
                
    return -1

# Test grid
grid = [[0,0,0],[1,1,0],[1,1,0]]
print("BFS shortest path with permanent visited mark:", shortestPathBinaryMatrix(grid))


```

```text
BFS shortest path with permanent visited mark: 4


```

You **do not need backtracking** in BFS: because BFS explores nodes level-by-level, the first time you reach a cell, it is *guaranteed* to be the shortest path to that cell, so marking it as `'X'` permanently is completely optimal!

so at the time of BFS level traversak we do the shortest path only but how let say i am at 0,0 and i have 3 option to go next which all are 0 [[0,1],[1,0][1,1]] if they all are 0 then How BFS would deside we should go to direct 1,1 cell so answer would be 2 on;y ? one line 

```text
BFS distance to (1,1): 2


```

BFS doesn't "choose" or guess: it explores **all 3 neighbors simultaneously at distance 2** (level 1), and since `(1,1)` is reached in that very first level, its shortest path is immediately recorded as `2`!

YESTERDAY WE PREPARED THE Graph master sheet and u given Shortest Path / Grid DijkstraLC 1091Shortest Path in Binary Matrix which we have laready solved once in Backtrack Study , and today again revised BFS . but u added in Sheet Shortest path Grid Diskja So Should i solve with Diskja also Or the BFS solution is correct only for FAANG please let me know which one is batter and why ? one line 


**BFS** is the strictly better, $O(V + E)$ optimal solution for LC 1091 because all edge weights are equal ($1$), whereas Dijkstra adds unnecessary $O(E \log V)$ min-heap overhead!