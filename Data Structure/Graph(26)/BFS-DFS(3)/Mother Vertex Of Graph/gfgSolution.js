	// Javascript program to find a mother
	// vertex in O(V+E) time
	
	function addEdge(u, v, adj)
	{
		adj[u].push(v);
	}

	// A recursive function to print DFS starting from v
	function DFSUtil(g, v, visited)
	{
		// Mark the current node as
		// visited and print it
		visited[v] = true;

		// Recur for all the vertices
		// adjacent to this vertex
		for(let x in g[v])
		{
			if (!visited[x])
			{
				DFSUtil(g, x, visited);
			}
		}
	}

	// Returns a mother vertex if exists.
	// Otherwise returns -1
	function motherVertex(g, V)
	{

		// visited[] is used for DFS. Initially
		// all are initialized as not visited
		let visited = new Array(V);
		for(let i = 0; i < V; i++)
		{
			visited[i] = false;
		}
		
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

		// If there exist mother vertex (or vertices)
		// in given graph, then v must be one
		// (or one of them)

		// Now check if v is actually a mother
		// vertex (or graph has a mother vertex).
		// We basically check if every vertex
		// is reachable from v or not.

		// Reset all values in visited[] as false
		// and do DFS beginning from v to check
		// if all vertices are reachable from
		// it or not.
		let check = new Array(V);
		for(let i = 0; i < V; i++)
		{
			check[i] = false;
		}
		DFSUtil(g, v, check);
		for(let val in check)
		{
			if (!val)
			{
				return -1;
			}
		}
		return v-1;
	}
	
	let V = 7;
	let E = 8;
	let adj = [];
	for(let i = 0; i < V; i++)
	{
		adj.push([]);
	}
	addEdge(0, 1,adj);
	addEdge(0, 2,adj);
	addEdge(1, 3,adj);
	addEdge(4, 1,adj);
	addEdge(6, 4,adj);
	addEdge(5, 6,adj);
	addEdge(5, 2,adj);
	addEdge(6, 0,adj);
	
	document.write("The mother vertex is " + motherVertex(adj, V));

// This code is contributed by divyesh072019.
