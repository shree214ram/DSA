/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let water = 0, land = 0;
    const q = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0) {
                water++
            } else if (grid[i][j] == 1) {
                q.push([i, j])
                land++
            }
        }
    }
    const total = m * n //4 or 9
    
    if (total == water || total == land) {
        return - 1
    }
    
    let head = 0
    // 0 1 ....4 
    const vx = [0, 0, 1, -1]
    const vy = [1, -1, 0, 0]
    let count=0 //mis3
    while (head < q.length && q.length>0) {
        const size = q.length - head //optimization1
        for (let i = 0; i < size; i++) {
            const [x, y] = q[head++]
            for (let j = 0; j < vx.length; j++) {
                const nX = x + vx[j]
                const nY = y + vy[j]
                if (nX < m && nY < n && nX >= 0 && nY >= 0 && grid[nX][nY] == 0) { //mis1
                    q.push([nX, nY])
                    grid[nX][nY] = 1//visited optimization2 ,  mis2
                }
            }
            //neibhour
        }
        count++
    }
    return count-1
};