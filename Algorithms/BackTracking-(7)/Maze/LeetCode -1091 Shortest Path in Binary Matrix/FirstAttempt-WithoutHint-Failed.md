
I was trying to solve /**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0]!==0) return -1
    const m=grid.length;
    const n=grid[0].length;
    if(grid[m-1][n-1]!==0) return -1
    const x=[-1,-1,-1,0,0,1,1,1]
    const y=[-1,0,1,-1,1,-1,0,1]
    /*
    1  3  8   
    4  4  5
    1  2  3
    */
    const dfs=(i,j,count)=>{
        if(i==m && j==n){
            return count 
        }
        
        for(k=0;k<x.length;k++){
            const upX=i+x[k];
            const upY=j+y[k];
            if(upX<m && upX>0 && upY<m && upY>0 && grid[upX][upY]==0]){
                dfs(upX,upY,count+1)
            }
        }


    }
    dfs(0,0,1)
    return 
}; By mistakely I have written the DFS and then I recognize that is BFS Problem , Am i thinking correct Its same like Rotten Orange wave like first check in down and right child and then go to next wave ? 0  1   and second row 1  0 then digonal meets with 0-0 then that is result 2 , sililarly in Image But having Doubt ? One or 2 line hint 