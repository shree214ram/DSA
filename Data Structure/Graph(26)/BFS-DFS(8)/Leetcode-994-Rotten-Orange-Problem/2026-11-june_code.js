/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    //as any fresh orange can be change into rotten means same like water wave from all 4 side to middle can move in same single minute 

    //and we will use BFS and queue because when water wave moving towards middle it will cover both the child 
    const m = grid.length;
    const n = grid[0].length;
    const visited=Array.from({length:m},()=>Array(n).fill(false))
    const q = []
    let total=0
    let freshOrnage=0;
    let rotten=0;
    let min=0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) { 
            if(grid[i][j]==0) continue
            if(grid[i][j]==2){
                q.push(grid[i][j]);
                rotten++
            }
            //
            if(grid[i][j]==1){
                freshOrnage++
            }
            //
            total++
        }

    }

    //BFS

    const bfs=(i,j)=>{
        //water wave boundries handle 
        if(i>=m || i<0 || j>=n || j<0 || grid[i][j]==2 || grid[i][j]==0 ){
            retrun 
        }
        if(visited[i][j]) return 
        visited[i][j]=true;

        if(grid[i][j]==1){
            grid[i][j]==2
            min++
        }
        
        bfs(i,j-1)
        bfs(i,j+1)
        bfs(i-1,j)
        bfs(i+1,j)
        return 
    }
    while(q.length>0){
        const top = q[0]
        q.shift()

        q.push()// something i need to push and call BFS again thet i am unable to think
    } 
    //call from all for direction 
    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) { 
    //         bfs(grid[i][j]);
    //     }
    // }

    return (total==rotten) ? min : -1
};