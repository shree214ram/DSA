Here is the **Blackboard Visualization** and dry run for **LeetCode 673 (Number of Longest Increasing Subsequence)** using `nums = [1, 3, 5, 4, 7]`.

---

```
========================================================================================
                                 BLACKBOARD VISUALIZATION
========================================================================================

Input: nums = [1, 3, 5, 4, 7]
Length: N = 5

State Definitions:
- dp[i]    : Length of the Longest Increasing Subsequence ending at index i
- count[i] : Number of LIS ending at index i

Initial State (Every element is its own LIS of length 1):
  Index i   :   0    1    2    3    4
  ------------------------------------
  nums[i]   :   1    3    5    4    7
  dp[i]     :   1    1    1    1    1
  count[i]  :   1    1    1    1    1

========================================================================================
                                  DRY RUN STEP-BY-STEP
========================================================================================

----------------------------------------------------------------------------------------
i = 0 (nums[0] = 1)
----------------------------------------------------------------------------------------
  No inner loop (j < 0).
  dp    : [1, 1, 1, 1, 1]
  count : [1, 1, 1, 1, 1]


----------------------------------------------------------------------------------------
i = 1 (nums[1] = 3)
----------------------------------------------------------------------------------------
  j = 0 (nums[0] = 1):
    1 < 3 is TRUE (nums[j] < nums[i])
    Candidate length: dp[0] + 1 = 1 + 1 = 2
    Current dp[1]   : 1
    
    Since Candidate (2) > Current dp[1] (1):
      --> Found a LONGER subsequence!
      --> dp[1] = 2
      --> count[1] = count[0] = 1

  dp    : [1, 2, 1, 1, 1]
  count : [1, 1, 1, 1, 1]


----------------------------------------------------------------------------------------
i = 2 (nums[2] = 5)
----------------------------------------------------------------------------------------
  j = 0 (nums[0] = 1):
    1 < 5 is TRUE
    Candidate length: dp[0] + 1 = 1 + 1 = 2
    Since 2 > dp[2] (1):
      --> dp[2] = 2, count[2] = count[0] = 1

  j = 1 (nums[1] = 3):
    3 < 5 is TRUE
    Candidate length: dp[1] + 1 = 2 + 1 = 3
    Since 3 > dp[2] (2):
      --> Found a LONGER subsequence!
      --> dp[2] = 3, count[2] = count[1] = 1

  dp    : [1, 2, 3, 1, 1]
  count : [1, 1, 1, 1, 1]


----------------------------------------------------------------------------------------
i = 3 (nums[3] = 4)
----------------------------------------------------------------------------------------
  j = 0 (nums[0] = 1):
    1 < 4 is TRUE
    Candidate length: dp[0] + 1 = 2 > dp[3] (1)
      --> dp[3] = 2, count[3] = count[0] = 1

  j = 1 (nums[1] = 3):
    3 < 4 is TRUE
    Candidate length: dp[1] + 1 = 3 > dp[3] (2)
      --> Found a LONGER subsequence!
      --> dp[3] = 3, count[3] = count[1] = 1

  j = 2 (nums[2] = 5):
    5 < 4 is FALSE (Skip)

  dp    : [1, 2, 3, 3, 1]
  count : [1, 1, 1, 1, 1]


----------------------------------------------------------------------------------------
i = 4 (nums[4] = 7)  <-- CRITICAL INDEX (WATCH COUNT ACCUMULATION)
----------------------------------------------------------------------------------------
  j = 0 (nums[0] = 1):
    1 < 7 is TRUE --> candidate = dp[0] + 1 = 2 > dp[4] (1)
      --> dp[4] = 2, count[4] = count[0] = 1

  j = 1 (nums[1] = 3):
    3 < 7 is TRUE --> candidate = dp[1] + 1 = 3 > dp[4] (2)
      --> dp[4] = 3, count[4] = count[1] = 1

  j = 2 (nums[2] = 5):
    5 < 7 is TRUE --> candidate = dp[2] + 1 = 4 > dp[4] (3)
      --> Found a LONGER subsequence!
      --> dp[4] = 4, count[4] = count[2] = 1   (Subsequence: [1, 3, 5, 7])

  j = 3 (nums[3] = 4):
    4 < 7 is TRUE --> candidate = dp[3] + 1 = 3 + 1 = 4
    Current dp[4] is ALSO 4!
    
    Since Candidate (4) === Current dp[4] (4):
      --> Found ANOTHER path of the EXACT SAME max length!
      --> count[4] += count[3] = 1 + 1 = 2    (Subsequences: [1, 3, 5, 7] and [1, 3, 4, 7])

  dp    : [1, 2, 3, 3, 4]
  count : [1, 1, 1, 1, 2]

========================================================================================
                                     FINAL CALCULATION
========================================================================================

Max LIS length across dp array = max(1, 2, 3, 3, 4) = 4

Sum count[i] for all indices i where dp[i] === 4:
  - Only index 4 has dp[4] === 4.
  - Total number of LIS = count[4] = 2.

Output: 2
========================================================================================

```

---

### Key Takeaway for `dp2` / `count` Array

1. **`dp[j] + 1 > dp[i]`** $\implies$ You found a **strictly longer** sequence. Discard old paths, update `dp[i] = dp[j] + 1`, and reset `count[i] = count[j]`.
2. **`dp[j] + 1 === dp[i]`** $\implies$ You found an **equal length** sequence coming from a different route. Accumulate it: `count[i] += count[j]`.


```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    if (!nums || nums.length === 0) return 0;
    
    const n = nums.length;
    // dp[i] stores the length of the longest increasing subsequence ending at index i
    const dp = new Array(n).fill(1);
    // count[i] stores the number of LIS ending at index i
    const count = new Array(n).fill(1);
    
    let maxLen = 1;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // Found a strictly longer subsequence ending at i
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    count[i] = count[j]; // Reset count to the paths from j
                } 
                // Found another subsequence of the same max length ending at i
                else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j]; // Accumulate paths
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    
    // Sum up the counts of all subsequences that achieve the global maxLen
    let totalLIS = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] === maxLen) {
            totalLIS += count[i];
        }
    }
    
    return totalLIS;
};

// --- Test Cases ---
console.log(findNumberOfLIS([1, 3, 5, 4, 7])); // Output: 2
console.log(findNumberOfLIS([2, 2, 2, 2, 2])); // Output: 5

```

**Complexity:**

* **Time Complexity:** $\mathcal{O}(N^2)$ due to the nested loops.
* **Space Complexity:** $\mathcal{O}(N)$ for the `dp` and `count` arrays.