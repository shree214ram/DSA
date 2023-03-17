<script>
// JavaScript program to find the in and out
// degrees of the vertices of the given graph

// Function to print the in and out degrees
// of all the vertices of the given graph
function findInOutDegree(adjList, n) {

	// Initialize arrays to store in-degree
	// and out-degree of all vertices
	let inDegree = Array(n).fill(0);
	let outDegree = Array(n).fill(0);

	// Loop through each vertex in the graph
	for (let i = 0; i < adjList.length; i++) {

		// Get the list of vertices that are
		//connected to the current vertex
		let list = adjList[i];

		// Out-degree for the current vertex
		// will be the count of direct paths
		// from the current vertex to other vertices
		outDegree[i] = list.length;

		// Loop through each vertex that
		// is connected to the current vertex
		for (let j = 0; j < list.length; j++) {

			// Increase the in-degree for the vertex
			// that has an incoming edge from the current vertex
			inDegree[list[j]] += 1;
		}
	}

	// Print the in-degree and out-degree of all vertices
	document.write("Vertex In Out"+"<br>");
	for (let k = 0; k < n; k++) {
		document.write(k + " " + inDegree[k] + " " + outDegree[k]+"<br>");
	}
}

// Driver code

	
	// Adjacency list representation of the graph
	let adjList = [];

	// Vertices 1 and 2 have an incoming edge from vertex 0
	adjList.push([1, 2]);

	// Vertex 3 has an incoming edge from vertex 1
	adjList.push([3]);

	// Vertices 0, 5, and 6 have an incoming edge from vertex 2
	adjList.push([0, 5, 6]);

	// Vertices 1 and 4 have an incoming edge from vertex 3
	adjList.push([1, 4]);

	// Vertices 2 and 3 have an incoming edge from vertex 4
	adjList.push([2, 3]);

	// Vertices 4 and 6 have an incoming edge from vertex 5
	adjList.push([4, 6]);

	// Vertex 5 has an incoming edge from vertex 6
	adjList.push([5]);

	// Number of vertices in the graph
	let n = adjList.length;

	// Call the findInOutDegree function to
	// find and print the in-degree and out-degree of all vertices
	findInOutDegree(adjList, n);
    
    </script>
