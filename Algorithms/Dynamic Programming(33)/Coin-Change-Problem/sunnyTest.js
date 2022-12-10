//2:30
/*
                    0           1            2               3        4      5       6
                --------------------------------------------------------------------------- 
                |    0      | I         | I           | I         |  I    |   I   |    I  |
          0     |           | {maxValue}|             |           |       |       |       |
                |           |           |             |           |       |       |       |
                |           |           |             |           |       |       |       |
                --------------------------------------------------------------------------- 
                | 0         | 1 coins   | 2 coins     |           |       |       |       |
          1     |           | 1 Rs coin |  1 Rs coin  |   3       |  4    |  5    |  6    |
                |           | Se        | ke 2 coins  |           |       |       |       |
                |           |Upper Diye | leker Upper |           |       |       |       |
                |           | Amount    | Diye Amount |           |       |       |       |
                |           | Bana      | Bana        |           |       |       |       |
                |           | sakte he  | sakte he    |           |       |       |       |
                --------------------------------------------------------------------------- 
                | 0         | coin 2 is |  min(2,     |  min(3,   |       |       | 0     |
          2     |           | greater   |  1+2-2)     |  1+3-2)   |       |       |       |
                |           |  than     |  Answer=1   |  Answer=2 |       |       |       |
                |           |  amount 1 |  2 ke 1     |  2 ke 1   |       |       |       |
                |           |  so just  |  single     |  single   |       |       |       |
                |           |  copied   |  coin       |  coin +   |       |       |       |
                |           |  upper one|  se         |  1 ke     |       |       |       |
                |           |           |             |  single se|       |       |       |
                ---------------------------------------------------------------------------    
                | 0         |           |             |           |       |       | min(6,|
          5     |           |           |             |           |       |       | 1+    |
                |           |           |             |           |       |       | (6-5))|
                |           |           |             |           |       |       | =2    |
                |           |           |             |           |       |       | Answer|
                |           |           |             |           |       |       | {5,1} |
                ---------------------------------------------------------------------------    
*/

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
                DP[i][j] = DP[i - 1][j] // Copy just upper wala
            } else {
                DP[i][j] = Math.min(1 + DP[i][j - coins[i - 1]], 
                    DP[i - 1][j])
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
