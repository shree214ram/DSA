//7:39 7:57 //8:05
//Find circle in undirected graph

class graph {
    constructor() {
        this.vertex = new Map()
    }
    add(key, value) {
        if (this.vertex.get(key)) {
            this.vertex.set(key, [...this.vertex.get(key), value])
        } else {
            this.vertex.set(key, [value])
        }
    }

    dfs(root) {
        const visited = {};
        const parentObj = {}
        for (let key in this.vertex) {
            visited[key] = false
        }
        this.dfsUtill(root, visited, parentObj, -1);
    }
    dfsUtill(root, visited, parentObj, parent) {
        visited[root] = true;
        parentObj[root] = parent;
        const values = this.vertex.get(root)

        for (let value of values) {
            if (!visited[value]) {
                this.dfsUtill(value, visited, parentObj, root)
            } else if (visited[value] && parentObj[root] != value) {
                console.log("Cycle Exist");
                break;
            }
        }
    }
}
const gp = new graph();
gp.add(0, 1);
gp.add(1, 0);
gp.add(0, 2);
gp.add(2, 0);
gp.add(0, 3);
gp.add(3, 0);
gp.add(1, 2);
gp.add(2, 1);
gp.add(3, 4);
gp.add(4, 3);
gp.dfs(0)
