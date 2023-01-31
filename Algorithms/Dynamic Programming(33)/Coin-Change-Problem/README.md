# Coin Change Problem 

1. Greedy {It will not give excect solution}
2. Recursion {2TothePowerN} 2N
    Include 
    Exclude 

3. Dynamic Problem 
    1. Create DP 
    2. 3 case 
        1. if j==0 {
                DP[i][j] = 0
            }
        2. else if(i==0){
                DP[i][j] = Number.MAX_VALUE
            }
        3. else if(j>Weight[i-1]){
                DP[i][j] = DP[i-1][j] //Copy Upper wali in case Coin Hi bada ho Amount se 
            }
        4. else {
                // Min Nikalo (upper wale row same column ki value , Upper wali in Row me se jis amount ki value ka coin pata karna he {j} - Pichle wale Weight  {Weight[i-1]} Wale collumn ki value  )
                DP[i][j] = Math.min(DP[i-1][j], DP[i-1][j-Weight[i-1]])
            }
            35      45 -->j
                        _____________
            |    10    |
            |    20    |          DP [i-1 Upper wali row] [45  - 10 = 35 Coins[i-1] upper wali row ka amount ]
            |    30    |
        Amount 