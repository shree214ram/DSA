Here is your **Rat in a Maze** challenge.

⏱️ **Timer Started:** You have **45 minutes** remaining.

---

### **Problem Statement**

Consider a rat placed at position `(0, 0)` in an `n x n` square matrix `mat` filled with `0`s and `1`s.

* `1` represents a path the rat can walk on.
* `0` represents a blocked cell that the rat cannot step on.

The rat starts at `(0, 0)` and wants to reach the destination at `(n - 1, n - 1)`.

The rat can move in four directions: **'U' (Up), 'D' (Down), 'L' (Left), and 'R' (Right)**.

Return all possible paths the rat can take to reach the destination as a list of strings, sorted in lexicographical order. If no path exists, return an empty array/list.

**Constraints:**

* `2 <= n <= 5`
* `mat[i][j]` is either `0` or `1`
* `mat[0][0]` and `mat[n-1][n-1]` can be `0` or `1`.

---

### **Example 1**

```text
Input: mat = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1]
]

Output: ["DDRDRR", "DRDDRR"]

```

---

Whenever you are ready, share your initial approach, decision tree thinking, or code!

*(Remaining Time: **45:00**)*


<script>
const fn=(mat)=>{
  const m=mat.length;
  const n=mat[0].length;
  const xN=[0,0,1,-1];
  const yN=[1,-1,0,0];
  const move=["R","L","D","U"];
  const visited=Array.from({length:m},()=>Array(n).fill(false));
  const dfs=(i,j,str)=>{
    if(i>=m || i<0 ||  j>=n || j<0 || mat[i][j]==0){ return 0;
    }
	 if(visited[i][j]) {return mat[i][j];}
    if(i==m-1 && j==n-1){
      res.push(str);
      return
    }
   
    
    for(let k=0;k<move.length;k++){
    const nextX=xN[k];   
    const nextY=yN[k];

    	if(mat[nextX][nextY]==1 && visited[nextX][nextX]== false){
      		visited[nextX][nextX]= true;
      		dfs(nextX,nextY,str+move[k]);
      		visited[i][j]= false; //backtrack
      }
    }
  }
  dfs(0,0,"")
  return res;
}
 const mat = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1]
]
console.log(fn(mat))

</script>