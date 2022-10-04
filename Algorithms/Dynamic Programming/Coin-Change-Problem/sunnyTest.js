//2:30
function printMinimumCoin(target, coins, value) {
    const maxValue = 10000000000
    const DP = new Array(coins.length)
    for (let i = 0; i <= coins.length; i++) {
        DP[i] = new Array(target.length + 1).fill(0)
        for (let j = 0; j <= target.length; j++) {
            if (j == 0) {
                DP[i][j] = 0
            } else if (i == 0) {
                DP[i][j] = maxValue
            }

            else if (coins[i - 1] > target[j - 1]) { //coin hi bada he amount se
                DP[i][j] = DP[i - 1][j]
            } else {
                DP[i][j] = Math.min(1 + DP[i][j - coins[i - 1]], DP[i - 1][j])
                //Min(5, 1+ 5-5 = 1) = 1  
            }
        }
    }
    console.log(DP[coins.length][value], "DP")
}

const target = [1, 2, 3, 4, 5, 6];
const coins = [1, 2, 5]
const value = 6
printMinimumCoin(target, coins, value)