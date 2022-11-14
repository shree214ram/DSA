1. set 8*8 Board
2. set all to -1
3. initial set Arr[0][0] = 0 because knight will start from 0 
4. solve(){

}
5. solveUtil(){
    knight can move in 8 direction 
    up-right,up-right2,up-left,up-left2
    down-right,down-right2,down-left,down-left2
    for(8 direction ){
        A[i][j]= value
    1. checkIsValid {
        1. recursion solveUtil(x,y,i,val+1,Board)
        2. backtrack
    }
    }
}
6. checkIsValid(){
    if A[x][y] == -1 && x>=0 && x<n && y>=0 && y<n; 
    return true
}


