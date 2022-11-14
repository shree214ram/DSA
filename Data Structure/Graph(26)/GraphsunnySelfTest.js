class Queue{
	constructor(){
    	this.data=[]
    }
    eneque(value){
    	this.data.unshift(value)
    }
    dequeue(){
    	const lastValue = this.data[this.data.length-1]
        this.data.pop();
        return lastValue;
    }
    empty(){
    	return this.data.length==0
    }
}
class Graph{
	
    constructor(noOfVertices){
    	this.noOfVertices=noOfVertices;
        this.vertexList=new Map();
    }
    addAdjency(a,b){
    	if(this.vertexList.get(a)){
        	const old = this.vertexList.get(a);
            const newValue =old.concat([b])
        	this.vertexList.set(a,newValue)
        }else {
        	this.vertexList.set(a,[b])
        }
    }
     printGraph(){
    	for(let key of this.vertexList.entries()){
        	const adjencyVertex = this.vertexList.get(key[0]);
            let innerVertex = ""
            for(let i=0;i<adjencyVertex.length;i++){
            	innerVertex+=" "+adjencyVertex[i]
            }
        	console.log(key[0]," ==> ",innerVertex)
        }
    }
    DFS(start){
    	//1.create visitedArray
        const visited = []
        for(let i=0;i<this.noOfVertices.length;i++){
        	visited[i]=false
        }
        this.dfsUtill(start,visited)
    }
    
    dfsUtill(start,visited){
    	//1.create visitedArray
        visited[start]=true
        console.log(start)
        const rootValues = this.vertexList.get(start)
        for(let i=0;i<this.rootValues.length;i++){
        	if(!visited[rootValues[i]]){
            	this.dfsUtill(rootValues[i],visited)
            }
        }
    }
    
    
    BFS(start){
    	//create a visited array 
        const visited=[]
        for(let i=0;i<this.noOfVertices.length;i++){
        	visited[i]=false
        }
    	//create a queue
        const q = new Queue();
        visited[start]=true
        q.eneque(start);
        console.log(q)
        while(!q.empty()){
        	//remove top element
        	const topElement = q.dequeue();
            //print value
        	console.log(topElement);
            const topElementValues = this.vertexList.get(topElement)

            for(let i=0;i<topElementValues.length;i++){
            	if(!visited[topElementValues[i]]){
        			visited[topElementValues[i]]=true
                    q.eneque(topElementValues[i]);
                }
            }
            
        }
    }
	
}
const totalVertex = 6
const gp = new Graph(totalVertex);
gp.addAdjency("A","B")
gp.addAdjency("A","D")
gp.addAdjency("A","E")
gp.addAdjency("B","C")
gp.addAdjency("D","E")
gp.addAdjency("F","C")
gp.addAdjency("E","F")
gp.addAdjency("C","E")
gp.printGraph();
console.log("BFS VIEW ")
gp.BFS("A");