class Solution {
    // Function to find the number of islands.
    numIslands(grid) {
        let numIsland = 0;
        for(let i=0;i<grid.length;i++){
            
            for(let j=0;j<grid[i].length;j++){
            	console.log(i,"i");
            	console.log(j,"j");
            	console.log(this.isIslind(grid,i,j),"this.isIslind(grid,i,j)");
                if(this.isIslind(grid,i,j)){
            	console.log("TRUE");
                    numIsland++
                }
            }
        }
        return numIsland;
    }
    isIslind(grid , i, j){
    	let upperArrow = true
    	if(i-1 > -1){
        	if(grid[i-1][j] && grid[i-1][j]==1){
            	upperArrow = false
            }
        }
    
    	let upperLeftDigonal = true
    	if(i-1 > -1 && j-1 > -1){
        	if(grid[i-1][j-1] && grid[i-1][j-1]==1){
            	upperLeftDigonal = false
            }
        }
        
        let upperRightDigonal = true
    	if(i-1 > -1 && j+1 < grid[i].length){
        	if(grid[i-1][j+1] && grid[i-1][j+1]==1){
            	upperRightDigonal = false
            }
        }
        
        let rightArraow = true
    	if(j+1 < grid[i].length){
        	if(grid[i][j+1] && 
        grid[i][j+1]==1){
            	rightArraow = false
            }
        }
        
        return grid[i][j]==1 && upperArrow && upperLeftDigonal && upperRightDigonal && rightArraow
    }
}

const grid = [[0,1],[1,0],[1,1],[1,0]]
//const grid = [[0,1,1,1,0,0,0],[0,0,1,1,0,1,0]]
const s = new Solution()
const res=s.numIslands(grid)
console.log(res,"res")
