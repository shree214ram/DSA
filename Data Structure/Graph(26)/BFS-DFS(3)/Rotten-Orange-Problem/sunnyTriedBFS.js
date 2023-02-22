//3:1 //3:41 //4:3
let grid1 = [
    [0, 1, 2],
    [0, 1, 2],
    [2, 1, 1]
];
//output 1
let grid = [[2, 1, 0, 2, 1],
[1, 0, 1, 2, 1],
[1, 0, 0, 2, 1]];
//output 2

let grid3 = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
//output 4

let grid4 = [[0, 2]]
//output 0

const m = grid.length;
const n = grid[0].length;
//create queue because in BFS Queue is mendetory
const q = []
const mNext = [0, 0, 1, -1]
const nNext = [1, -1, 0, 0]
const visited = new Array(m).fill([]).map(obj => new Array(n).fill(0));
let freshOrange = 0
//Add all rotten orange in queue 
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        //if value is 2 means that is rotten
        if (grid[i][j] == 2) {
            q.push([0, i, j])
        } else if (grid[i][j] == 1) {
            //if value is 1 means fresh orange so increment by 1
            freshOrange++
        }
    }
}
let totalConvertedRottenOrannge = 0;
let temp = [0, 0, 0];
while (q.length != 0) {
    temp = q[0]
    q.shift()
    //bfs in all 4 directions 
    for (let i = 0; i < mNext.length; i++) {
        const upcomingX = temp[1] + mNext[i];
        const upcomingY = temp[2] + nNext[i];
        if (upcomingX >= 0 && upcomingX < m && upcomingY >= 0 && upcomingY < n &&
            !visited[upcomingX][upcomingY] &&
            grid[upcomingX][upcomingY] == 1
        ) {
            grid[upcomingX][upcomingY] = 2 //convert fresh to rotten
            visited[upcomingX][upcomingY] = 1 //mark visited
            q.push([temp[0] + 1, upcomingX, upcomingY]); //add with increement by one and new cordinates
            totalConvertedRottenOrannge++ //increment the converted fresh to rotten ornage 
        }
    }
}

//if all fresh and converted are same meanse No more Rotten exist . 
if (totalConvertedRottenOrannge == freshOrange) {
    console.log(temp[0], "minimum time")
} else {
    console.log("Not Possible")
}
