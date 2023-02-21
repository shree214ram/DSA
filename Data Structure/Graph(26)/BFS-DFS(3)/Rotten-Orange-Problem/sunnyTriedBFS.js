//3:1 //3:41 //4:3
let grid = [
    [0, 1, 2],
    [0, 1, 2],
    [2, 1, 1]
]; 
const m = grid.length;
const n = grid[0].length;
//create q
const q = []
const mNext = [0, 0, 1, -1]
const nNext = [1, -1, 0, 0]
const visited = new Array(m).fill([]).map(obj => new Array(n).fill(0))
//create all rotten orange array
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] == 2) {
            q.push([0, i, j])
        }
    }
}

let temp = [0,0,0]
while (q.length != 0) {
    temp = q[0]
    q.shift()
    //bfs
    for (let i = 0; i < mNext.length; i++) {
        const upcomingX = temp[1] + mNext[i];
        const upcomingY = temp[2] + nNext[i];
        if (upcomingX >=0 && upcomingX <m && upcomingY >=0 && upcomingY <n && 
            !visited[upcomingX][upcomingY] && 
            grid[upcomingX][upcomingY] == 1
        ) {
            grid[upcomingX][upcomingY] == 2
            q.push([temp[0] + 1, upcomingX, upcomingY])
        }
    }
}
console.log(temp[0],"minimum time")
