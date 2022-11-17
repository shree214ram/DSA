//5:55
class Graph{
	constructor(n){
    	this.vertex = new Map();
        this.totalVertex = n
    }
    add(a,b){
    	if(this.vertex.get(a)){
        	const oldValue= this.vertex.get(a);
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
    	const parent = new Map()
        parent.set(root,-1)
        this.DFSUtil(root,visited,parent)
    }
    /*
        A
     B    C   

     root A and vertex = [B,C]

     first time A will be visited 
     DFS Utill will be called for A's Childs and now 
     1. B will go as root 
     2. B will be set as visited 
     3. in parent set B as a Node, A as parent
    */


    DFSUtil(root,visited,parent){
    	console.log(root,"--")
        visited[root] = true
        const adjencyList = this.vertex.get(root)
        for(let i=0;i<adjencyList.length;i++){
        	if(visited[adjencyList[i]] == false){
        		parent.set(adjencyList[i], root) // B wil go as root and  , A as root 
            	this.DFSUtil(adjencyList[i],visited,parent)
            }
            //Jo upcoming child aa raha he vo Already visited Ho And 
            // Or jo current root bande Ka parent vo upcoming child na ho then 100% sure cycle is present 
            else if(visited[adjencyList[i]] == true && adjencyList[i] !== parent.get(root)) {
            	console.log("Cycle is present")
                break;
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

gp.add(1,2)
gp.add(2,1)
gp.DFS(0)
