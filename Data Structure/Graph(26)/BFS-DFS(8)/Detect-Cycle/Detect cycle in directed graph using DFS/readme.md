### detect cycle in directed graph using DFS 
https://www.youtube.com/watch?v=Tl5qbEmEQyY

Note :- we can't use same method like undirected graph . We need to write one more special condition check {DFS call for same node}

##### If visited and dfs call both are true means Cycle is Present 

1. DFS Call 
2. Visited array 
    visited = new Map()
3. check for visited dfs call (aa chuki he ya nahi us bande ki )
    visitedDFS = new Map()

if(visited[adjency[i]] == true &&  visitedCheck[adjency[i]] == true){
    cycle he 
}else if (visited[adjency[i]] == false){
    call DFS utill

    1. set visited[adjency[i]] == true
    2. set visitedCheck[adjency[i]] == true
}   

