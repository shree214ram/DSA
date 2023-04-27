https://www.youtube.com/watch?v=utDu3Q7Flrw

5 most important graph algorithm

1. BFS/DFS
2. Topoligical Sort
3. Union-find
4. Dijkstar
5. Prims/kruskal's
6. Floyed Warshall 

### What is the difference between Dijkstra and  Prims 
1. 
https://stackoverflow.com/questions/14144279/difference-between-prims-and-dijkstras-algorithms

The best way to distinguish their difference is read some source code, Dijkstra and Prim. The main difference is here: for Prim graph[u][v] <  key[v], and for Dijkstra dist[u]+graph[u][v] < dist[v]. So as you can see from the graphs in those two pages, they are different mainly because of these two lines of code.

Prim's algorithm constructs a minimum spanning tree for the graph, which is a tree that connects all nodes in the graph and has the least total cost among all trees that connect all the nodes. However, the length of a path between any two nodes in the MST might not be the shortest path between those two nodes in the original graph. MSTs are useful, for example, if you wanted to physically wire up the nodes in the graph to provide electricity to them at the least total cost. It doesn't matter that the path length between two nodes might not be optimal, since all you care about is the fact that they're connected.

Dijkstra's algorithm constructs a shortest path tree starting from some source node. A shortest path tree is a tree that connects all nodes in the graph back to the source node and has the property that the length of any path from the source node to any other node in the graph is minimized. This is useful, for example, if you wanted to build a road network that made it as efficient as possible for everyone to get to some major important landmark. However, the shortest path tree is not guaranteed to be a minimum spanning tree, and the sum of the costs on the edges of a shortest-path tree can be much larger than the cost of an MST.

Another important difference concerns what types of graphs the algorithms work on. Prim's algorithm works on undirected graphs only, since the concept of an MST assumes that graphs are inherently undirected. (There is something called a "minimum spanning arborescence" for directed graphs, but algorithms to find them are much more complicated). Dijkstra's algorithm will work fine on directed graphs, since shortest path trees can indeed be directed. Additionally, Dijkstra's algorithm does not necessarily yield the correct solution in graphs containing negative edge weights, while Prim's algorithm can handle this.

2. 
https://www.baeldung.com/cs/prim-dijkstra-difference
