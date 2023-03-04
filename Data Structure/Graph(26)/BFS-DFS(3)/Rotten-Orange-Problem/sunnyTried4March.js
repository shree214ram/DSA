<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
//3:36 Rotten Orange
const grid = [[2,1,1],[1,1,0],[0,1,1]]

const visited = new Array(grid.length).fill([]).map(onj=>new Array(grid[0].length).fill(0));

const q = []

for(let i=0;i<grid.length;i++){
	for(let j=0;j<grid[0].length){
    	if(grid[i][j]==2){
        	q.push[0,i,j]
        }
    }
}
let temp= [0,0,0]
//bfs 
while(q.length !== 0){
	top = q[0];
    //
    q.shift()
    //
    rec(top[1],top[2],visited,top[0])
    
}
console.log("Maximum = ", temp[0])
function rec(i,j,visited,top){
	if(!visited[i][j]){
    	visited[i][j] = 1
        if(grid[i][j]==1){
    	    grid[i][j] = 2
            q.push([top+1,i,j])
        }
        if(i+1<grid.length)rec(i+1,j,visited);        
        if(i-1>0)rec(i-1,j,visited);
        if(j+1<grid[0].length)rec(i,j+1,visited);
        if(j-1>0)rec(i,j-1,visited);
    }
    return
}
</script>

</body>
</html>
