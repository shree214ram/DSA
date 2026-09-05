const lists=[[1, 4, 7] [2, 3,6] [5,7,11] ]

const pq=new MinPriorityQueue(val=>val[0])

for(let i=0;i<lists.length;i++){
    pq.enqueue([lists[i][0],i,0])
}
const res=[]
while(pq.size>0){
    const [value,r,c]=pq.dequeue()
    res.push(value)
    if(c+1<lists[r].length){
        pq.enqueue([lists[r][c+1],r,c+1])
    }
}
return res