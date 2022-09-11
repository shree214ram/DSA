//6:06
class Queue{
	constructor(){
    	this.data=[]
    }
    enqueue(val){
    	this.data.push(val)
    }
    dequeue(){
    	const top = this.data[0]
    	this.data.shift();
        return top;
    }
    empty(){
    	return this.data.length == 0
    }
}
class Graph{
	constructor(){
    	this.vertex=new Map()
    }
    addAdjency(a,b){
    	if(this.vertex.get(a)){
        	const newUpdated =  this.vertex.get(a).concat([b]);
            this.vertex.set(a,newUpdated)
        }else{
            this.vertex.set(a,[b])
        }
    }
    BFS(start){
    	const visited={};
    	for(let key of this.vertex.keys()){
        	visited[key] = false
        }
        
        //first 
        visited[start] = true
        const q = new Queue();
        q.enqueue(start);
        
        //untill q is not empty
        while(!q.empty()){
        
          const top = q.dequeue();//q.data[0];
          console.log(top,",")
          //visited[top] = true
          const current = this.vertex.get(top);
          
          //delete 
          //q.dequeue();
          
          for(let i=0;i<current.length;i++){
              if(visited[current[i]] == false){
        			q.enqueue(current[i]);
        			visited[current[i]] = true
              }
          }
        }
    }
    DFS(start){
    	const visited={};
    	for(let key of this.vertex.keys()){
        	visited[key] = false
        }
    	visited[start]=true
        this.DFSUtill(start,visited)
    }
    DFSUtill(start,visited){
        console.log(start,",")
        const adjArray= this.vertex.get(start)
    	for(let i=0;i<adjArray.length;i++){
        	if(visited[adjArray[i]]==false){
    			visited[adjArray[i]]=true
            	this.DFSUtill(adjArray[i],visited)
            }
        }
    }
    
}
const GP= new Graph();
GP.addAdjency("A","B")
GP.addAdjency("A","C")
GP.addAdjency("A","D")
GP.addAdjency("B","D")
GP.addAdjency("B","C")
GP.addAdjency("C","D")
GP.addAdjency("C","E")
GP.addAdjency("D","E")
GP.addAdjency("E","F")
GP.addAdjency("F","E")


console.log(GP.vertex,"Graph");
 /*
 	 A
    /| \
   B_C_D 
   \ | /
     E
 */
 
 console.log("BFS ===");
 GP.BFS("A")
 console.log("DFS ===");
 GP.DFS("A")