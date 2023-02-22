
//find shortest path 
//10:18
let grid = [
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
];

let src = [0, 0];
let dest = [3, 4];
const m = grid.length;
const n = grid[0].length;
let minLength = Number.MAX_VALUE;
let length = 1;
const mNext = [0, 0, 1, -1]
const nNext = [1, -1, 0, 0]
//visited 
const visited = new Array(m).fill([]).map(obj => new Array(n).fill(0));
if (grid[src[0]][src[1]] != 0) {
    /*@mistake 1 , first i thought i should travel each point same like "Roten Orange" but there is no need to travel each point 
    this is DFS Call from source we need to start and then DFS call will autometically
    go to the next ittereator if next value is 1 then it will go next other wise it will come back again 
    */

    //ittrate over each element of grid
    // for(let i=src[0];i<m;i++){
    // 	for(let j=src[1];j<n;j++){
    // 		if(grid[i][j] ==1 && !visited[i][j]){
    // 			//dfs
    // 			dfsUtil()
    // 		}else{
    // 		}
    // 	}
    // }
    const res = dfsUtil(grid, visited, 0, 0, 1, minLength)
    if (res == Number.MAX_VALUE) {
        console.log("Not Possible")
    } else {
        console.log(res, "minLength")
    }
} else {
    console.log("Not Possible")
}
function dfsUtil(grid, visited, i, j, temp, minLength) {
    //base case 
    if (i == dest[0] && j == dest[1]) {
        minLength = Math.min(minLength, temp)
        return minLength
    }

    //calculation
    visited[i][j] = 1
    //recursion
    for (let k = 0; k < mNext.length; k++) {
        const mNextI = mNext[k] + i;
        const nNextJ = nNext[k] + j;
        if (mNextI >= 0 && mNextI < m && //check corner case for x direction
            nNextJ >= 0 && nNextJ < n && //check corner case for y direction
            grid[mNextI][nNextJ] == 1 && //check value should be 1 only
            !visited[mNextI][nNextJ] //check should not be visited before
            ) {
            minLength = dfsUtil(grid, visited, mNextI, nNextJ, temp + 1, minLength)
        }
    }

    //backtracking
    visited[i][j] = 0
    return minLength; //@mistake i forget
}