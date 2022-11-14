
// JavaScript program to do level order traversal
// of a generic tree


// Represents a node of an n-ary tree
class Node
{
	constructor()
	{
		this.key = 0;
		this.child = [];
	}
};

// Utility function to create a new tree node
function newNode(key)
{
	var temp = new Node();
	temp.key = key;
	return temp;
}

// Prints the n-ary tree level wise
function LevelOrderTraversal(root)
{
	if (root == null)
		return;

	// Standard level order traversal code
	// using queue
	var q = []; // Create a queue
	q.push(root); // push root
	while (q.length != 0)
	{
		var n = q.length;

		// If this node has children
		while (n > 0)
		{
			// Dequeue an item from queue
			// and print it
			var p = q[0];
			q.shift();
			document.write(p.key + " ");

			// push all children of
			// the dequeued item
			for (var i = 0; i < p.child.length; i++)
				q.push(p.child[i]);
			n--;
		}
		
		// Print new line between two levels
		document.write("<br>");
	}
}

// Driver Code
/* Let us create below tree
*			 10
*	 / / \ \
*	 2 34 56 100
*	 / \		 | / | \
*	 77 88	 1 7 8 9
*/
var root = newNode(10);
(root.child).push(newNode(2));
(root.child).push(newNode(34));
(root.child).push(newNode(56));
(root.child).push(newNode(100));
(root.child[0].child).push(newNode(77));
(root.child[0].child).push(newNode(88));
(root.child[2].child).push(newNode(1));
(root.child[3].child).push(newNode(7));
(root.child[3].child).push(newNode(8));
(root.child[3].child).push(newNode(9));
document.write("Level order traversal " +
					"Before Mirroring <br>");
LevelOrderTraversal(root);
