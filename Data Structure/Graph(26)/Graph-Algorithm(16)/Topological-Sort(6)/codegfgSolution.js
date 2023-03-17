
// Javascript for the above approach

	// This class represents a directed graph
	// using adjacency list representation
	class Graph{

		// Constructor
		constructor(v)
		{
			// Number of vertices
			this.V = v

			// Adjacency List as ArrayList of ArrayList's
			this.adj = new Array(this.V)
			for (let i = 0 ; i < this.V ; i+=1){
				this.adj[i] = new Array()
			}
		}

		// Function to add an edge into the graph
		addEdge(v, w){
			this.adj[v].push(w)
		}

		// A recursive function used by topologicalSort
		topologicalSortUtil(v, visited, stack)
		{
			// Mark the current node as visited.
			visited[v] = true;
			let i = 0;

			// Recur for all the vertices adjacent
			// to thisvertex
			for(i = 0 ; i < this.adj[v].length ; i++){
				if(!visited[this.adj[v][i]]){
					this.topologicalSortUtil(this.adj[v][i], visited, stack)
				}
			}

			// Push current vertex to stack
			// which stores result
			stack.push(v);
		}

		// The function to do Topological Sort.
		// It uses recursive topologicalSortUtil()
		topologicalSort()
		{
			let stack = new Array()

			// Mark all the vertices as not visited
			let visited = new Array(this.V);
			for (let i = 0 ; i < this.V ; i++){
				visited[i] = false;
			}

			// Call the recursive helper
			// function to store
			// Topological Sort starting
			// from all vertices one by one
			for (let i = 0 ; i < this.V ; i++){
				if (visited[i] == false){
					this.topologicalSortUtil(i, visited, stack);
				}
			}

			// Print contents of stack
			while (stack.length != 0){
				console.log(stack.pop() + " ")
			}
		}
	}

	// Driver Code
	var g = new Graph(6)
	g.addEdge(5, 2)
	g.addEdge(5, 0)
	g.addEdge(4, 0)
	g.addEdge(4, 1)
	g.addEdge(2, 3)
	g.addEdge(3, 1)
	
	console.log("Following is a Topological sort of the given graph")
	
	// Function Call
	g.topologicalSort()
	
	// This code is contributed by subhamgoyal2014.
