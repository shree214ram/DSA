// desktop 132

// 136

// 10:48 

// 11:13 - 11:19



const N = 8
let minLength = Number.MAX_VALUE
const Target = { x: 4, y: 4 }
const waysArrayX = [0, 0, -1, 1]
const waysArrayY = [1, -1, 0, 0]
function check(i, j, visited, mat) {
    return (i >= 0 && i < mat.length && j >= 0 && j < mat[0].length && mat[i][j] == 1 && visited[i][j] == -1)
}



function MinShortPath(i, j, temp, visited, mat, minLength) {
    //Base Case
    //reached to that points 
    if (i == Target.x && j == Target.y) {
        minLength = Math.min(minLength, temp)
        return minLength
    }
    //Calculation
    visited[i][j] = 1

    //Recursion on each ways  
    for (let i = 0; i < waysArrayX.length; i++) {
        if (check(waysArrayX[i], waysArrayY[i], visited, mat)) {
            minLength = MinShortPath(waysArrayX[i], waysArrayY[i], temp + 1, visited, mat, minLength)
        }
    }

    //BackTrack
    visited[i][j] = -1

}

//Prapare visoted Array 
const visited = []

for (let i = 0; i < N; i++) {
    visited[i] = Array(N)
    for (let j = 0; j < N; j++) {
        visited[i][j] = -1
    }
}

let mat = [
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
];


if (MinShortPath(0, 0, 0, visited, mat, minLength) !== Number.MAX_VALUE) {
    console.log("Minimum Length =", minLength)
} else {
    console.log("NOT POSSIBLE")
}







