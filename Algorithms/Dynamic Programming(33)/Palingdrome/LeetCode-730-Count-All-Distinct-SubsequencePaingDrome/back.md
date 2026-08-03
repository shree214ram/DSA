/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function (s) {
    if (s.length == 1) return 1

    const DP = Array.from({ length: s.length }, () => Array(s.length).fill(0))

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (i == j) DP[i][j] = 1
        }
    }

    for (let gap = 2; gap <= s.length; gap++) {
        for (let i = 0; i <= s.length - gap; i++) {
            let j = i + gap - 1
            let next = i + 1;
            let pre = j - 1;
            while (next <= pre && s[next] !== s[i]) next++
            while (next <= pre && s[pre] !== s[i]) pre--

            if (next > pre) {
                DP[i][j] = DP[i + 1][j - 1] * 2 + 2
            } else if (next == pre) {
                DP[i][j] = DP[i + 1][j - 1] * 2 + 1
            } else {
                DP[i][j] = DP[i + 1][j - 1] * 2 - DP[next+1][pre-1]
            }
        }
    }
    console.log(DP,"DP")
    console.log(DP[DP.length-1][DP.length-1],"DP[DP.length-1][DP.length-1]")
    return DP[DP.length-1][DP.length-1]
};