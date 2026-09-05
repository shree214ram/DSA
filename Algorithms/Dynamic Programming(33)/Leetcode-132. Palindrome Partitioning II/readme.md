var minCut = function(s) {
    const n = s.length;
    // dp[i] stores the minimum cuts needed for substring s[0...i]
    // Initialize dp[i] with the maximum possible cuts (i cuts)
    const dp = Array.from({ length: n }, (_, i) => i);

    // Helper to expand around center and update DP array
    const expand = (left, right) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            // If the palindrome starts at index 0, 0 cuts are needed for s[0...right]
            // Otherwise, dp[right] = min(dp[right], dp[left - 1] + 1)
            dp[right] = left === 0 ? 0 : Math.min(dp[right], dp[left - 1] + 1);
            left--;
            right++;
        }
    };

    for (let i = 0; i < n; i++) {
        expand(i, i);     // Odd length palindromes (single character center)
        expand(i, i + 1); // Even length palindromes (two character center)
    }

    return dp[n - 1];
};