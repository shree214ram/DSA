https://www.youtube.com/watch?v=Lw4_BOwSOcA&list=PLDdcY4olLQk3Z2Gyo3-VN8gvi7DRKK-YY

Wildcard Pattern Matching | Love Babbar DSA Sheet | Amazon | Ola Cabs 🔥 | Leetcode | GFG | DP Soln.

n = string , m = pattern

function finding(s, p, n, m)
{
1. If both finished 
    return 1
2. If Pattern finished but string not finished {return 0}
        abcd?a Pattern finished 
      abcdcdca String not finished 
3. If String  finished but Pattern not finished 
        abcd?a Pattern not finished 
          cdca String finished 
        //Jab tak ki pattern finish na ho jaye 
        while(m>=0){
            if (pattern[m] != "*"){
                return 0
            }
            m--
        }
4. if Dp me ye n - m exist nahi ho Ya Visited na hua ho tabhi  
    if (DP[n][m] == -1){
        if(Pattern[m] == *){
            //Jab bhi * aata he 
            abc?de*
            abckerf
            (7,7)
            /   \
        (7,6)   (6,7)
            1. ek bar pattern ko fixed rakh kar string ko move karenge  finding(s, p, n-1, m)
            2. ek bar string ko fixed rakh kar pattern ko move karenge  finding(s, p, n, m-1)
            return DP[n][m] = finding(s, p, n-1, m) || finding(s, p, n, m-1)
        }
    }