Steps Of Mother vetex 

https://www.youtube.com/watch?v=oXFkK2BVVZA

https://www.geeksforgeeks.org/find-a-mother-vertex-in-a-graph/

steps :-
1. DFS 
    1.  visited 
        // visited[] is used for DFS. Initially
        // all are initialized as not visited
        let visited = new Array(V);
        for(let i = 0; i < V; i++)
        {
            visited[i] = false;
        }
    2. for(upto all Vertex){
        dfsUtill
    }
2. set v as -1 and update in every DFS utill 
    // To store last finished vertex
        // (or mother vertex)
        let v = -1; 
        for(let i = 0; i < V; i++)
        {
            if (!visited[i])
            {
                DFSUtil(g, i, visited);
                v = i;
            }
        }
3. now again reset to all visted vertex and then again check DFS but with v 

        let check = new Array(V);
        for(let i = 0; i < V; i++)
        {
            check[i] = false;
        }
        DFSUtil(g, v, check); //***check DFS but with v
4. check with v again DFS 
    //Agar ek bhi esi vertex mil gayi jo ki DFS ke through visited nahi hui to return -1 other wise print v
    for(let val in check)
        {
            if (!val)
            {
                return -1;
            }
        }

        return v-1; //***print v