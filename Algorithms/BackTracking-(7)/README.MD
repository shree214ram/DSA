https://www.youtube.com/watch?v=REOH22Xwdkk
Subsets - Backtracking - Leetcode 78

https://www.youtube.com/watch?v=s7AvT7cGdSo
Backtracking: Permutations - Leetcode 46 - Python


https://www.youtube.com/watch?v=GuTPwotSdYw
String permutation algorithm | All permutations of a string

https://www.youtube.com/watch?v=Ph95IHmRp5M
N-Queens - Backtracking - Leetcode 51 - Python

https://www.youtube.com/watch?v=AuYujVj646Q
Minimum edit distance | Dynamic programming | Backtracking


1. Introduction with N Queue and Suduku Problem 
    https://www.youtube.com/watch?v=S3rnLLHl0PM
    https://www.youtube.com/watch?v=MHXR4PCY8c0
    https://www.geeksforgeeks.org/backtracking-algorithms/?ref=shm

##### Imprtant Steps for solve all backtracking problems :- 
    1. set 8*8 or 4*4 
    2. set an possible ways array like 
        In Maze :-
        let xMove = [ 0, 0, -1, 1 ];
	    let yMove = [ 1, -1, 0, 0 ];
        In KnightTour :-
        let xMove = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
	    let yMove = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
    3. const target = {x:3,y:4}
    4. function solve(minDistance,x,y){ 
            1. Base Case 
                if(target.x==i && target.y == j){
                    //Matlab ki hum us point par pahuch gaye he jaha hame jana tha 
                    return true //incase of mouce /Rate can reach at Given Point 

                    minDistance = Math.min(minDistance,)
                    return minDistance 

                }
            2. Calculation 
                visited[i][j] = 1
            2. Recursion 
                //Recursion for each index All possible ways 
                for(let i=0;i<xMove.length;i++){
                    minDistance = solve(minDistance,xMove[i],yMove[i])
                }
            3. backtrack
                visited[i][j] = -1
        }