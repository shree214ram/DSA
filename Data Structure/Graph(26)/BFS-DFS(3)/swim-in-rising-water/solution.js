let N, M;

const A = [[0, 2], [1, 3]];
const m = A.length;
const n = A[0].length;
let vis = new Array(m).fill([]).map(obj => {
    return new Array(n).fill(0)
});
const res = swimInWater(A);
console.log(res, "res")
function ok(mid, x, y, grid) {
    if (!vis[x][y] && grid[x][y] <= mid) {
        vis[x][y] = 1;
        if (x - 1 >= 0) ok(mid, x - 1, y, grid);
        if (x + 1 < N) ok(mid, x + 1, y, grid);
        if (y - 1 >= 0) ok(mid, x, y - 1, grid);
        if (y + 1 < M) ok(mid, x, y + 1, grid);
    }
}

function swimInWater(grid) {
    let l = 0;
    let r = 50 * 50;
    let n = grid.length;
    let m = grid[0].length;
    N = n;
    M = m;
    while (l < r) {
        let mid = Math.round((l + r) / 2);
        vis = new Array(m).fill([]).map(obj => {
            return new Array(n).fill(0)
        });
        ok(mid, 0, 0, grid);
        if (vis[n - 1][m - 1])
            r = mid;
        else
            l = mid + 1;
    }
    return l;
}