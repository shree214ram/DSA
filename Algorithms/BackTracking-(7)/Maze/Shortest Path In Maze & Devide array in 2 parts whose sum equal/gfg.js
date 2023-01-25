// JavaScript code to implement the approach


// User defined Pair class
class Pair {
	constructor(x, y)
	{
		this.first = x;
		this.second = y;
	}
}

// Check if it is possible to go to (x, y) from the current
// position. The function returns false if the cell has
// value 0 or already visited
function isSafe(mat, visited, x, y)
{
	return (x >= 0 && x < mat.length && y >= 0
			&& y < mat[0].length && mat[x][y] == 1
			&& !visited[x][y]);
}

function findShortestPath(mat, visited, i, j, x, y,
						min_dist, dist)
{
	if (i == x && j == y) {
		min_dist = Math.min(dist, min_dist);
		return min_dist;
	}
	// set (i, j) cell as visited
	visited[i][j] = true;

	/////@sunny### we can use for loop for access all cases like sunnyTest.js

	// go to the bottom cell
	if (isSafe(mat, visited, i + 1, j)) {
		min_dist
			= findShortestPath(mat, visited, i + 1, j, x, y,
							min_dist, dist + 1);
	}
	// go to the right cell
	if (isSafe(mat, visited, i, j + 1)) {
		min_dist
			= findShortestPath(mat, visited, i, j + 1, x, y,
							min_dist, dist + 1);
	}
	// go to the top cell
	if (isSafe(mat, visited, i - 1, j)) {
		min_dist
			= findShortestPath(mat, visited, i - 1, j, x, y,
							min_dist, dist + 1);
	}
	// go to the left cell
	if (isSafe(mat, visited, i, j - 1)) {
		min_dist
			= findShortestPath(mat, visited, i, j - 1, x, y,
							min_dist, dist + 1);
	}
    
	// backtrack: remove (i, j) from the visited matrix
	visited[i][j] = false;
	return min_dist;
}

// Wrapper over findShortestPath() function
function findShortestPathLength(mat, src, dest)
{
	if (mat.length == 0 || mat[src.first][src.second] == 0
		|| mat[dest.first][dest.second] == 0)
		return -1;

	let row = mat.length;
	let col = mat[0].length;
	// construct an `M × N` matrix to keep track of visited
	// cells
	let visited = [];
	for (var i = 0; i < row; i++)
		visited.push(new Array(col));

	let dist = Number.MAX_SAFE_INTEGER;
	dist = findShortestPath(mat, visited, src.first,
							src.second, dest.first,
							dest.second, dist, 0);

	if (dist != Number.MAX_SAFE_INTEGER)
		return dist;
	return -1;
}

// Driver code

let mat = [
	[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
	[ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 ],
	[ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 ],
	[ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
	[ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ],
	[ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 ],
	[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
	[ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
	[ 1, 1, 0, 0, 0, 0, 1, 0, 0, 1 ]
];

let src = new Pair(0, 0);
let dest = new Pair(3, 4);
let dist = findShortestPathLength(mat, src, dest);
if (dist != -1)
	console.log("Shortest Path is " + dist);

else
	console.log("Shortest Path doesn't exist");

// This code is contributed by phasing17
