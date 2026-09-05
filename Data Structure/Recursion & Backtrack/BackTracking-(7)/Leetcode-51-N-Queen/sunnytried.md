/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    if (n == 1) return [["Q"]]

    let grid = Array.form({ length: n }, () => Array(n).fill("."))
    // const visited = Array.form({length:n},()=>Array(n).fill("false"))
    const res=[]
    const rec = (i) => {
        if (i > n || i < 0) return false
        if (i == n) {
            res.push(grid)
            grid = Array.form({ length: n }, () => Array(n).fill("."))
        }

        //visited
        // if(visited[i][j]){
        //     return 
        // }
        // visited[i][j]=true;
        for (let i = index; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // const left=grid(i,j-1)
                // const right=grid(i,j+1)
                const up = grid(i - 1, j)
                // const down=grid(i+1,j)
                const leftUpDig = grid(i - 1, j - 1)
                const rightUpDig = grid(i - 1, j + 1)
                // const leftDownDig=grid(i+1,j-1)
                // const rightDownDig=grid(i+1,j+1)
                if (up == "." && leftUpDig == "." && rightUpDig == ".") {
                    grid[i][j] = "Q"
                }
            }
            rec(index + 1)
        }

    }
    rec(0)

        /*
        1. one mind is thinking i should do 2 for loop i and j and in that loop call rec (i,j) and set queen at each row with 3 checks up,upleftDigonan,upRightDigonal and if  i j reached end cell Push in Res that full Grid and also do Backtrack like grid set all as "." and visited also false . Like first time  started continuesly DFS Path from (0,0) so this Path not able to set so new Path start from (0,1) . And at each path we need to check We have count Queen==n f yes means we have sucessfully setuped 4 (n) queens at that path , and then reset to Path (Backtrack) in reverse direction Or Same Direction from where we started for this path 
        2. One mind is thinking as per your hint : i should call rec(0,0) and call itself there rec with ncrease the i,j 
        3. 
        */

        ===

        same like other Recursion problem like Power set, Phone digit, combination sum we will initilize with (inxex = 0, noOfQuuen = 0) then if rec(inxex, noOfQueen){  //1. Base case boundies //2. if reached to end index and then we will check noOfQuuen==n then Push in Res //3. Each Row for(0 to n-1) { //a. index is column  //b. check all three upper directional check and then call rec(index+1, if upper check is true the Q+1 ) . Please gime me hint if any thing wrong one or 2 line 

    =====
};