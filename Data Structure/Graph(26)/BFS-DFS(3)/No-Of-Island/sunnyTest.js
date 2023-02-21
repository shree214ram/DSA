
//2;7
const grid = [
[1,1,0,0,0],
[1,1,0,0,0],
[0,0,1,0,0],
[1,0,1,1,1]
]
const m = grid.length;
const n = grid[0].length;
const visited = new Array(m).fill([]).map(obj=>new Array(n).fill(0))
const res = main(grid);
console.log(res,"res");
//1. dfs
function dfsUtil(visited,grid,i,j){
    if(!visited[i][j] && grid[i][j] ==1){
        visited[i][j] = 1;
        if(i+1<m)dfsUtil(visited,grid,i+1,j)
        if(i-1>=0)dfsUtil(visited,grid,i-1,j)
        if(j+1<n)dfsUtil(visited,grid,i,j+1)
        if(j-1>=0)dfsUtil(visited,grid,i,j-1)
    }
    return 
}

//2. main function

function main(grid){
    let count = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(!visited[i][j]){
                if(grid[i][j]==1){count++}
                dfsUtil(visited,grid,i,j)
            }
        }   
    }
    return count
}
