
//3:36 Rotten Orange
const grid = [
    [2, 1, 1], 
    [1, 1, 0], 
    [0, 1, 1]
    ]
let grid2 = [
    [0, 1, 2],
    [0, 1, 2],
    [2, 1, 1]
];
const visited = new Array(grid.length + 1).fill([]).map(onj => new Array(grid[0].length + 1).fill(0));

const q = []
//Mistake 3 i have forget this 4 direction moves
const mNext = [0, 0, 1, -1]
const nNext = [1, -1, 0, 0]
let noOfFreshOrange = 0;
let noOfConvertedOrange = 0;
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 2) {
            q.push([0, i, j])
        } else if (grid[i][j] == 1) {
            noOfFreshOrange++
        }
    }
}
let temp = [0, 0, 0]; //Mistake 2 i have used top keyword that is wrong already in javascript top key word present 
//bfs 
while (q.length !== 0) {
    temp = q[0];

    // Remove 
    q.shift()
    //
    //rec(top[1],top[2],visited,top[0])
    //@mistake at place of call BFS I have called here DFS call so because of this It was not working 

    //callBFS

    for (let i = 0; i < mNext.length; i++) {
        const upcomingX = mNext[i] + temp[1];
        const upcomingY = nNext[i] + temp[2];
        if (upcomingX  < grid.length && upcomingX  >= 0 && upcomingY  < grid[0].length && upcomingY >= 0 && !visited[upcomingX][upcomingY]) {
            visited[upcomingX][upcomingY] = 1
            if ( grid[upcomingX][upcomingY] == 1) {
                grid[upcomingX][upcomingY] = 2;
                noOfConvertedOrange++
                q.push([temp[0] + 1, upcomingX, upcomingY])
            }
        }
    }
}
if(noOfConvertedOrange === noOfFreshOrange){
    console.log("Maximum = ", temp[0]);
}else{
    console.log("Not Possible");
}

function rec(i, j, visited, top) {
    console.log(i, "i")
    if (!visited[i][j]) {
        visited[i][j] = 1
        if (grid[i][j] == 1) {
            grid[i][j] = 2
            q.push([top + 1, i, j])
        }
        if (i + 1 < grid.length) rec(i + 1, j, visited);
        if (i - 1 > 0) rec(i - 1, j, visited);
        if (j + 1 < grid[0].length) rec(i, j + 1, visited);
        if (j - 1 > 0) rec(i, j - 1, visited);
    }
    return
}
