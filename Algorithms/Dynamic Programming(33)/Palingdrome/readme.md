In all the Palingdrome problem the main thing is that to note  below process would be common 
1. make dp
2. every single character is a palingdrome itself 
   1. fill single element is one 
3. check for length 2 {if S[i]==S[i+1]} 
    1. set true in case of count all palingdrom 
    2. set DP[i][i+1] = 2, in case of length of  palingdrom 
4. for more than 2 character :- corners are same or not 
    1. if corners are same than 
        in subsequence :- Its not mandatory to check middle should be true for palingdrom 
            if(S[i]==S[j]){
                1. in case of counting all paligdrome 
                    DP[i][j]= 1+DP[i+1][j]+DP[i][j-1]

                    1 + DP[i][j-1]+DP[i+1][j] 
                    {+1 if calculating how many palingdrom } why 1 because a c a both corners are same so it will increase counter of palingdromes 1 
                    
                2. in case of counting longest paligdrome length
                    DP[i][j] = DP[i + 1][j - 1] + 2;
                    {+2 if we are counting longest palingdome } why 2 because corners will be 1+1 meanse 2 length of character
            }else{
				dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];

            }

        in substring :- Its mandatory to check middle should be true for palingdrom 
            if(S[i]==S[j] && DP[i+1][j-1]) //in case of 
                1. in case of counting all paligdrome 
                    DP[i][j] =  1+ DP[i+1][j] + DP[i][j-1] - DP[i+1][j-1]
            else 
				dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];




     