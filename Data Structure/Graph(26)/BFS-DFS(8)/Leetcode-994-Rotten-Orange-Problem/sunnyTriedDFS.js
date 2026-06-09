
<script>
//10:40 //11:00
let grid =  [[0,1,2],[0,1,2],[2,1,1]];
const m  = grid.length;
const n  = grid[0].length;
const res= main();
console.log(res,"res")
// 1. dfs
function dfsUtil(visited,i,j){
    //boundries check
    if(!visited[i][j] && grid[i][j]==1){
        visited[i][j] = 1 //visited mark
        grid[i][j]==2 //convert in rotten
        //dfs in all 4 directions
        if(i+1<m &&grid[i+1][j]==2)dfsUtil(visited,i+1,j)
        if(i-1>=0&&grid[i-1][j]==2)dfsUtil(visited,i-1,j)
        if(j+1<n&&grid[i][j+1]==2)dfsUtil(visited,i,j+1)
        if(j-1>=0&&grid[i][j-1]==2)dfsUtil(visited,i,j-1)
    }
    return 
}
//2. main function :ittrate over each point

function main(){
    let count = 0;
    const visited= new Array(m).fill([]).map(obj=>new Array(n).fill(0))
    console.log(visited,"visited")
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(visited[m-1][n-1]){
                return count
            }
            if(grid[i][j]==2 && visited[i][j]==0){
                dfsUtil(visited,i,j)
                count++
            }
        }
    }
}
</script>
