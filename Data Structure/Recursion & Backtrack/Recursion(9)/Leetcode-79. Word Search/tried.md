/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const last = word[word.length - 1]
    const xN = [0, 0, 1, -1]
    const yN = [1, -1, 0, 0]
    const visited = Array.from({ length: m }, () => Array(n).fill(false))
    const rec = (i, j, nextIndex) => {
        if (i >= m || i < 0 || j < 0 || j >= n) return
        console.log(i, "i");
        console.log(j, "j");
        console.log(board[i][j], "board[i][j]");
        console.log(word[nextIndex], "word[nextIndex]");
        if (visited[i][j]) { console.log("Already visited"); return }
        visited[i][j] = true
        if (word[nextIndex] !== board[i][j]) {
            console.log("not matched so stop");
            return
        }
        if (board[i][j] == last && nextIndex == word.length - 1) {
            console.log("We Got the Last")
            return true
        }
        console.log(board[i][j], word[nextIndex], "Going Forward===>");
        for (let k = 0; k < xN.length; k++) {
            rec(i + xN[k], j + yN[k], nextIndex + 1)
        }
        visited[i][j] = false
        // return false
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                console.log(board[i][j], "matched")
                // rec(i, j, 1)
                for (let k = 0; k < xN.length; k++) {
                    if (rec(i + xN[k], j + yN[k], 1)) {

                        return true
                        break;
                    }
                }
            }
        }
    }
    return false
};