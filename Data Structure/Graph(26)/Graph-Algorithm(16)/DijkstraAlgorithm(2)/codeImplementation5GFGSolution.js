// javascript Program to find Dijkstra's shortest path using
// priority_queue in STL
const INF = 2147483647;

// This class represents a directed graph using
// adjacency list representation
class Graph {
	
	constructor(V){
		
		// No. of vertices
		this.V = V;
		
		// In a weighted graph, we need to store vertex
		// and weight pair for every edge
		this.adj = new Array(V);
		for(let i = 0; i < V; i++){
			this.adj[i] = new Array();
		}
	}

	addEdge(u, v, w)
	{
		this.adj[u].push([v, w]);
		this.adj[v].push([u, w]);
	}

	// Prints shortest paths from src to all other vertices
	shortestPath(src)
	{
		// Create a priority queue to store vertices that
		// are being preprocessed. This is weird syntax in C++.
		// Refer below link for details of this syntax
		// https://www.geeksforgeeks.org/implement-min-heap-using-stl/
		let pq = [];

		// Create a vector for distances and initialize all
		// distances as infinite (INF)
		let dist = new Array(V).fill(INF);

		// Insert source itself in priority queue and initialize
		// its distance as 0.
		pq.push([0, src]);
		dist[src] = 0;

		/* Looping till priority queue becomes empty (or all
		distances are not finalized) */
		while (pq.length > 0) {
			// The first vertex in pair is the minimum distance
			// vertex, extract it from priority queue.
			// vertex label is stored in second of pair (it
			// has to be done this way to keep the vertices
			// sorted distance (distance must be first item
			// in pair)
			let u = pq[0][1];
			pq.shift();
 
			// 'i' is used to get all adjacent vertices of a
			// vertex
			for(let i = 0; i < this.adj[u].length; i++){
				
				// Get vertex label and weight of current
				// adjacent of u.
				let v = this.adj[u][i][0]; //u se jude hue adjency vertex ka label
				let weight = this.adj[u][i][1]; //u ka weight

				// If there is shorted path to v through u.
				if (dist[v] > dist[u] + weight) {
					// Updating distance of v
					dist[v] = dist[u] + weight;
					pq.push([dist[v], v]);
					pq.sort((a, b) =>{
						if(a[0] == b[0]) return a[1] - b[1];
						return a[0] - b[0];
					});
				}
			}
		}

		// Print shortest distances stored in dist[]
		document.write("Vertex Distance from Source");
		for (let i = 0; i < V; ++i)
			document.write(i, "	 ", dist[i]);
	}
}

// Driver's code
// create the graph given in above figure
let V = 9;
let g = new Graph(V);

// making above shown graph
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);

// Function call
g.shortestPath(0);

// The code is contributed by Nidhi goel.
