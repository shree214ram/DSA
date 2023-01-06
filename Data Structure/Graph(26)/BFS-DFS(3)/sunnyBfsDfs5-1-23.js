
//10:52
class graph{
	constructor(noOfVertex){
    	this.vertices = new Map()    	
        this.noOfVertex = noOfVertex
    }
    add(node,value){
    	if(this.vertices.get(node)){
        	const newValues = this.vertices.get(node)
            newValues.push(value);
            this.vertices.set(node,newValues)
        }else {
        	this.vertices.set(node,[value])
        }
    }
    //dfs
    dfs(key){
    	const visited = {}
        for(const value of this.vertices){
        visited[value[0]]=false;
        }
        console.log(visited)
        this.dfsUtil(visited,key)
    }
    
    dfsUtil(visited,key){
    	//1. visited true to firstkey
        visited[key] = true
        console.log(key,"----")
        const keyValues = this.vertices.get(key)
        
        for(let i=0;i<keyValues.length;i++){
        	if(!visited[keyValues[i]]){
                this.dfsUtil(visited,keyValues[i])
            }
        }
        
    }
    
    //bfs
    
    bfs(key){
    	const visited = {}
        for(const value of this.vertices){
        visited[value[0]]=false;
        }
        console.log(visited)
        this.bfsUtil(visited,key)
    }
    
    bfsUtil(visited,key){
    	//1. visited true to firstkey
        
       
        const q =[]
        q.push(key)
        while(q.length !== 0){
        	const top = q[0]
        	visited[top] = true
        	console.log(top,"----")
            q.shift()
            //add
             const keyValues = this.vertices.get(top)
             for(let i=0;i<keyValues.length;i++){
             if(!visited[keyValues[i]]){
             q.push(keyValues[i])
             }
        }
        }
        
       
        
    }
}
const gp= new graph()
gp.add("A","B");
gp.add("A","C");
gp.add("B","D")
gp.add("B","A")
gp.add("D","F")
gp.add("D","B")
gp.add("F","C")
gp.add("F","D")
gp.add("C","F")
gp.add("C","A")


//console.log(gp.vertices)
gp.dfs("A")

console.log("--------------")

gp.bfs("A")


