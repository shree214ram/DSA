//5:55
class Graph{
	constructor(n){
    	this.vertex = new Map();
        this.totalVertex = n
    }
    add(a,b){
    	if(this.vertex.get(a)){
        	const oldValue= this.vertex.get(a);
    console.log(oldValue,"oldValue")
            const newValue = oldValue.concat([b])
            this.vertex.set(a,newValue)
        }else {
        	this.vertex.set(a,[b])
        }
    }
   	DFS(root){
    	const visited =[]
        for(let key of this.vertex.keys()){
        	visited[key] = false
        }
    	
        this.DFSUtil(root,visited)
    }
    
    DFSUtil(root,visited){
    	console.log(root,"--")
        visited[root] = true
        const adjencyList = this.vertex.get(root)
        for(let i=0;i<adjencyList.length;i++){
        	if(visited[adjencyList[i]] == false){
            	this.DFSUtil(adjencyList[i],visited)
            } else {
            	console.log("hay")
            }
        }
    }
}
const gp = new Graph(5);
gp.add(1,0)
gp.add(0,1)
gp.add(0,2)
gp.add(2,0)
gp.add(0,3)
gp.add(3,0)
gp.add(3,4)
gp.add(4,3)
console.log(gp.DFS(0))
