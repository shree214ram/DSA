
//12:41 12:53 1:1

class Job {
	constructor(a,b,c){
    	this.id=a;    	
        this.deadline=b;
    	this.profit=c;

    }
}
const  A = [
new Job('a', 2, 100),
new Job('b', 1, 19),
new Job('c', 2, 27),
new Job('d', 1, 25),
new Job('e', 3, 15)
];

//1 max heap with profit
const heap = []
//sort via deadline
A.sort((a,b)=>a.deadline-b.deadline)
const result = []

for(let i=A.length-1;i>=0;i--){
	let slots = (i==0) ? A[i].deadline : A[i].deadline-A[i-1].deadline
    heap.push(A[i])
    while(slots>0 && heap.length>0){
    	slots--
        heap.sort((a,b)=>b.profit-a.profit) //max heap will set max profit at top
        const top =heap[0]
        result.push(top)
        heap.shift()
    }
}
result.sort((a,b)=>a.deadline-b.deadline)
console.log(result)