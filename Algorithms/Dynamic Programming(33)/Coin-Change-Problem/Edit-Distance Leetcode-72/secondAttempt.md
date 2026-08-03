/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    /*
        Interval DP with 1D and Pre value 
    */
    const s1 = word1;
    const s2 = word2;

    const DP = Array(s2 + 1).fill(0)
    //mistake1
    for (let j = 0; j <= s2.length; j++) {
        DP[j] = j
    }

    // DP[0] = 1
    for (let i = 1; i <= s1.length; i++) {
        //pre
        let pre = DP[0];//digonal
        DP[0] = i //we need to maintain first cell for every row 
        for (let j = 1; j <= s2.length; j++) {
            //temp
            let tmp = DP[j]
            if (s1[i - 1] == s2[j - 1]) {
                DP[j] = pre
            } else {
                DP[j] = 1 + Math.min(DP[j], DP[j - 1], pre)
            }
            pre = tmp//DP[j] //mistake1
        }
    }
    // console.log(DP)
    return DP[s2.length] //
};