class GFG {
	// Function to find smallest set
	// of vertices from which the
	// complete graph can be visited
	static solve(edges) {
		var graph = new Map();
		// Dictionary storing
		// indegree of nodes
		var indeg = new Map();
		for (const dt of edges) {
			graph.set(dt[0], dt[1]);
			// Count indegree of
			// each node
			if (indeg.has(dt[1])) {
				indeg.set(dt[1], indeg.get(dt[1]) + 1);
			}
			else {
				indeg.set(dt[1], 1);
			}
		}
		var ans = new Array();
		for (const it of graph.entries()) {
			// Add to ans, if indegree
			// of node u is 0
			if (!indeg.has(it[0])) {
				(ans.push(it[0]) > 0);
			}
		}
		// Return Ans
		return ans;
	}
	// Driver code
	static main(args) {
		var edges = [[0, 1], [2, 1], [3, 2], [4, 3]];
		var ans = GFG.solve(edges);
		for (const dt of ans) { console.log(dt + " "); }
	}
}
GFG.main([]);