
//11:30 //11:41 //11:45 //11:55 

//topological sorting 

class graph{
	constructor(length){
    this.length = length;
    	this.vertex = new Map();
        this.visited = new Array(length).fill(false)
         this.stack = new Array()
    }
    
    addEdge(u,v){
    	this.vertex.set(u,this.vertex.get(u)?[...this.vertex.get(u),v]:[v])
    }
    //@mistake i have forget to call on each vertex which is mendetory in topological sort , i was doing same like dfs only at source which is wrong . And also need to check if not visited then only 
    dfs(){
    	for(let i=0;i<this.length;i++){
        if(!this.visited[i]){
    	this.dfsUtill(i);
        }
        }
        
    }
    
    dfsUtill(src){
    	this.visited[src] = true
        
        const values = this.vertex.get(src)
       if(values){
        for(let val of values){
        	if(!this.visited[val]){
            	this.dfsUtill(val)
            }
        }
        }
    	this.stack.push(src)
    }
    
    print(){
        //print 
        while(this.stack.length !==0){
        	console.log(this.stack[this.stack.length-1]);
            this.stack.pop()
        }
    }
}

const g = new graph(6);
g.addEdge(5, 2)
	g.addEdge(5, 0)
	g.addEdge(4, 0)
	g.addEdge(4, 1)
	g.addEdge(2, 3)
	g.addEdge(3, 1)
g.dfs(5);
g.print();

