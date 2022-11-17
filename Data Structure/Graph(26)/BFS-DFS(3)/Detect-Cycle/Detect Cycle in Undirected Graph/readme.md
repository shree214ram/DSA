https://www.youtube.com/watch?v=6PSczvPWGak


https://www.youtube.com/watch?v=1cSzxlhxOw8
detect cycle in undirected graph using BFS/DFS


/*
      A
    B    C   

    root A and vertex = [B,C]

    first time A will be visited 
    DFS Utill will be called for A's Childs and now 
    1. B will go as root 
    2. B will be set as visited 
    3. in parent set B as a Node, A as parent
*/


DFSUtil(root,visited,parent){
    console.log(root,"--")
    visited[root] = true
    const adjencyList = this.vertex.get(root)
    for(let i=0;i<adjencyList.length;i++){
        if(visited[adjencyList[i]] == false){
            parent.set(adjencyList[i], root) // B wil go as root and  , A as root 
            this.DFSUtil(adjencyList[i],visited,parent)
        }
        /*
            Jo upcoming child aa raha he vo Already visited Ho And 
            Or jo current root bande Ka parent vo upcoming child na ho then 100% sure cycle is present 
            Please Look the png file screen shot
        */
        else if(visited[adjencyList[i]] == true && adjencyList[i] !== parent.get(root)) {
            console.log("Cycle is present")
            break;
        }
    }
}


https://www.geeksforgeeks.org/detect-cycle-undirected-graph/

https://www.geeksforgeeks.org/check-given-graph-tree/
check if graph is tree or not ?
it must followed 
1. no cycle present in graph
2. all the visited vertex count == initial vertex count {means all the vertex should be visited in DFS }