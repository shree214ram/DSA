79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?
===>


first I tried with this 

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //first i thought i will use 2 for loop but it may not help for eight we shoud go plus one in column or down in  row in same column 
    //const wordArr=word.split("")
    // for(let i=0;i<board.length;i++){
    //     let spr=board[i];
    //     for(let j=0;j<board[i].length;j++){
    //         spr+=board[i][j];
    //         if()
    //     }
    // }
    //Themn i Moved to below function 
    // first base case 
    if(board.length==1 && board[0].length==1){
        return board[0][0]==word
    }
    const rec=(i,j,str)=>{
        //Base cases 
        if(i>board.length)return 
        if(board[i]==undefined || j>board[i].length)return 
        console.log(str,"str");
            console.log(word,"word")
        if(str.length==word.length ){
            console.log(str,"str==");
            console.log(word,"word===")
            return str==word // Or we may check via word.includes(str), but it may extra time compaxity to run include function , we can direct comoare 
        }
        if(word.includes(str)){
            newStr=str+board[i][j]
            // eight we shoud go plus one in column or down in row in same column 
            return rec(i,j+1,newStr) || rec(i+1,j,newStr);
        }else{
            return rec(i,j+1,"") ; //if not mached then start new string from screch 
        }
    }
    return rec(0,0,"")
};

and then I pased only one test case and failed 2 so i tried to change like below 

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //first i thought i will use 2 for loop but it may not help for eight we shoud go plus one in column or down in  row in same column 
    //const wordArr=word.split("")
    // for(let i=0;i<board.length;i++){
    //     let spr=board[i];
    //     for(let j=0;j<board[i].length;j++){
    //         spr+=board[i][j];
    //         if()
    //     }
    // }
    //Themn i Moved to below function 
    // first base case 
    if(board.length==1 && board[0].length==1){
        return board[0][0]==word
    }
    const rec=(i,j,str)=>{
        //Base cases 
        if(i>board.length)return 
        if(board[i]==undefined || j>board[i].length)return 
        console.log(str,"str");
            console.log(word,"word")
        if(str.length==word.length ){
            console.log(str,"str==");
            console.log(word,"word===")
            return str==word // Or we may check via word.includes(str), but it may extra time compaxity to run include function , we can direct comoare 
        }
        if(word.includes(str)){
            // eight we shoud go plus one in column or down in row in same column 
            return rec(i,j+1,str+board[i][j+1]) || rec(i+1,j,str+board[i+1][j]);
        }else{
            return rec(i,j+1,"") ; //if not mached then start new string from screch 
        }
    }
    return rec(0,0,board[0][0])
};

but not able to do some error coming , Its complete 1 hr full and not able to do 


=====

Spending an entire hour on Word Search is totally normal—this is a tricky **DFS + Grid Backtracking** problem. You actually had a great initial thought about needing 2 for-loops! Your current bottleneck is that your recursion is trying to scan the whole board sequentially like a typewriter, instead of treating the board as a starting point map.

Instead of trying to code it right away, let's reset the intuition. Here are the **3 fundamental concepts** to shift your approach:

---

### 1. The 2 For-Loops *Are* Required

You cannot just call `rec(0,0)`. The word might not start at the top-left corner `[0][0]`; it could start anywhere on the board!

* You need two nested loops to scan the board.
* Whenever you find a cell where `board[i][j] === word[0]`, **that** is when you kick off your DFS recursion from that specific spot.

### 2. Pass a `k` Index Instead of Constructing Strings

Instead of building a `str` and using `.includes()`, tracking a single index pointer (let's call it `k`) representing the character you are currently looking for in `word` is much faster.

* If you are at cell `(i, j)` and `board[i][j] !== word[k]`, stop immediately and return `false`.
* If `k === word.length - 1`, you found the whole word! Return `true`.

### 3. Move in 4 Directions and Backtrack

Once you find a matching character at index `k`, you need to explore all **4 directions** (Up, Down, Left, Right) to look for character `k + 1`.
To prevent the recursion from looping back and reuse the same cell twice:

1. **Mark it visited:** Temporarily change the cell's value (e.g., `board[i][j] = '#'`).
2. **Explore:** Call recursion for all 4 neighbors.
3. **Backtrack:** Change the cell back to its original letter so other starting paths can use it.

---

### 💡 Your Strategy Hint

Think of your recursive function signature looking like this: `dfs(i, j, k)`.

Your base conditions inside `dfs` should instantly return `false` if:

* `i` or `j` are out of array boundaries ($i < 0$, $j < 0$, $i \ge \text{rows}$, $j \ge \text{cols}$).
* The current character doesn't match: `board[i][j] !== word[k]`.

If it matches, temporarily hide the character, check your 4 neighbor branches using `||` operators, and reset the cell.

Does this structure make sense compared to trying to pass a running string combination? Take a few minutes to think about how you'd map those 4 directional recursive steps!

====

Here are the complete Brute Force and Optimized approaches for **79. Word Search**.

In grid-based pathfinding, the "Brute Force" approach is tracking paths using an explicit memory structure (like a `Set` or a duplicate tracking matrix), while the "Optimized" approach cleans up memory allocations by using in-place matrix backtracking.

---

## 1. The Brute Force Solution (Exploratory DFS with Set Tracker)

This approach uses a tracking structure to remember which grid cells have already been visited in the current path. While logically correct, creating string keys (`"row_col"`) and checking a `Set` at every single recursive step introduces significant object allocation overhead.

```javascript
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    const dfs = (r, c, k, visited) => {
        // Base Case: Whole word matched successfully
        if (k === word.length) return true;
        
        // Out of bounds boundary checks or mismatched character
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[k]) {
            return false;
        }
        
        const coordKey = `${r}_${c}`;
        if (visited.has(coordKey)) return false; // Already used this cell in current path
        
        // Calculation / Mark state
        visited.add(coordKey);
        
        // Recursion: Explore all 4 adjacent directions
        const found = dfs(r + 1, c, k + 1, visited) || // Down
                      dfs(r - 1, c, k + 1, visited) || // Up
                      dfs(r, c + 1, k + 1, visited) || // Right
                      dfs(r, c - 1, k + 1, visited);   // Left
                      
        // Backtrack: Remove coordinate so other paths can evaluate it
        visited.delete(coordKey);
        
        return found;
    };
    
    // Grid entry point scanner
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Optimization: Only start DFS if the first character matches
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0, new Set())) return true;
            }
        }
    }
    
    return false;
};

```

---

## 2. The Optimized Solution (In-Place Backtracking - Staff Level)

To optimize this for FAANG production standards, we eliminate the `Set` entirely. We can use **In-Place Modification** by temporarily altering the board cell itself to a non-alphabetic character (like `'#'`) during the recursive dive, and then swapping the character back during the backtracking phase. This reduces our auxiliary space complexity down to the pure recursion stack depth.

```javascript
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    const dfs = (r, c, k) => {
        // Base Case: Whole word matched successfully
        if (k === word.length) return true;
        
        // Boundary condition checks & character match validation
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[k]) {
            return false;
        }
        
        // Step 1: Save the original character and mask the cell to mark it visited
        const temp = board[r][c];
        board[r][c] = '#'; 
        
        // Step 2: Recursive branch evaluation (Down, Up, Right, Left)
        const found = dfs(r + 1, c, k + 1) || 
                      dfs(r - 1, c, k + 1) || 
                      dfs(r, c + 1, k + 1) || 
                      dfs(r, c - 1, k + 1);
                      
        // Step 3: Backtrack - Restore the grid state back to original character
        board[r][c] = temp; 
        
        return found;
    };
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
};

```

---

## 🔬 Complexity Analysis Comparison

| Metric | Brute Force Approach | Optimized In-Place Approach |
| --- | --- | --- |
| **Time Complexity** | $O(M \times N \times 3^L)$ | $O(M \times N \times 3^L)$ |
| **Space Complexity** | $O(L + (M \times N))$ due to string set keys | $O(L)$ where $L$ is the length of the string word |

> **Note on Time Complexity:** $M \times N$ represents scanning the board for the starting character. From there, the recursion branches out into $3$ directions (since you don't turn backward into the cell you just came from) up to a maximum depth equal to the length of the word ($L$).