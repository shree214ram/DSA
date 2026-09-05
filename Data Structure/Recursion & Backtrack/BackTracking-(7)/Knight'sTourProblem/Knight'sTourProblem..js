//8:21

function isSafe(Board, x, y, val, xMove, yMove, i) {
    //console.log(Board, x, y, val, xMove, yMove, i); return false;
    console.log(x + xMove[i], "x+xMove[i]")
    console.log(y + yMove[i], "x+yMove[i]")
    console.log(y, "x+yMove[i]")
    //console.log(Board[x + xMove[i]][y + yMove[i]], "Board[x+xMove[i]][y+yMove[i]] BEFORE")
    if ( x + xMove[i] >= 0 && x + xMove[i] < Board.length && y + yMove[i] >= 0 && y + yMove[i] < Board.length && 
        Board[x + xMove[i]][y + yMove[i]] == -1 ) {
        return true;
    } return false;
}

function solveUtil(Board, x, y, val, xMove, yMove) {

    //base case , means we reached at last value 8*8 = 64
    if (val == Board.length * Board.length) {
        return true
    }
    for (let i = 0; i < 8; i++) {

        if (isSafe(Board, x, y, val, xMove, yMove, i)) {
            console.log(Board,"I AM IN PASS")
            // 1. set 
            Board[x + xMove[i]][y + yMove[i]] = val

            console.log(Board,"I AM IN PASS AFTER")
            //2. recursion
            if (solveUtil(Board, x + xMove[i], y + yMove[i], val + 1, xMove, yMove)) {
                return true;
            }
            else {
                //3. Backtracking
                //Backtrack if old values not satisfied 
                //Board[x + xMove[i]][y + yMove[i]] =  -1
            }
        }
    }
    return false;
}

function solve(Board, x, y, val) {

    const xMove = [2, 1, -2, -1, 2, 1, -2, -1]
    const yMove = [1, 2, -1, -2, -1, -2, 1, 2]
    //set initial to 1 //mistake 1
    Board[0][0] = 0
    if (solveUtil(Board, x, y, val, xMove, yMove)) {
        //print board 
        console.log(Board,"FINAL")
        return Board;
    } else {
        console.log("No Result found")
        return false; //mistake 2
    }
}


//fill default -1
const Board = new Array(8);
for (let i = 0; i < Board.length; i++) {
    Board[i] = new Array(8);
    for (let j = 0; j < Board.length; j++) {
        Board[i][j] = -1
    }
}
console.log(Board, "INITIAL");
console.log(solve(Board, 0, 0, 1));


