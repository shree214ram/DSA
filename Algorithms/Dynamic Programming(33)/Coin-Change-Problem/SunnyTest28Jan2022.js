
//4:13
//4:37
const Coins = [1, 2, 3, 5]
const target = 6
const Value = [1, 2, 3, 4, 5, 6]
const DP = new Array(Coins.length + 1)

for (let i = 0; i <= Coins.length; i++) {
    DP[i] = new Array(target + 1).fill(0)//mistake
    for (let j = 0; j <= target; j++) {
        //Base case 
        if (j == 0) {
            DP[i][j] = 0
        } else if (i == 0) {
            DP[i][j] = Number.MAX_VALUE
        } else if (Coins[i - 1] <= j) {
//                     35      45 -->j
//                 _____________
//     |    10    |
//     |    20    |          DP [i-1 Upper wali row] [45  - 10 = 35 Coins[i-1] upper wali row ka amount ]
//     |    30    |
//    Amount 
            DP[i][j] = Math.min(DP[i - 1][j], 1 + DP[i - 1][j - Coins[i - 1]])

        } else {


            DP[i][j] = DP[i - 1][j] //copy the upper cell value
        }
        // 
    }
}
console.log(DP[Coins.length][target], "DP")

