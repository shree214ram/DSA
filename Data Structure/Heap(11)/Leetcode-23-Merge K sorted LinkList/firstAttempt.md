/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 class minHeap1 {

    constructor(){
        this.data=[]

    }
    add(val){
        const newData=this.data;
        return
        newData.push(val)
        this.data=newData.sort((a,b)=>a-b)
    }
    removeTop(){
        const newData=this.data;
        newData.shift()//remove top
        this.data=newData.sort((a,b)=>a-b)
    }
 }
var mergeKLists = function(lists) {
    /*Broute force 
    1. find the length of lists 
        lists = [[1,4,5],[1,3,4],[2,6]] means 3 that means 3 for loop 
        and find the very smallest number from here and push in a new Array 
    2. Otimised Use of Min Heap of k length and always push in Result array the root 
    I am using sort function at place of Min Heabut in Real Production i would use the actual class of Min Heap 

    insert first elemnts of each elements array in heap like 1,1,2
    then Heap root which is 1 would be inserted in result [1]
    */
    const k=lists.length;
    if(k==0){return []}
    if(k==1 && lists[0].length==0){return []}
    
    const hp= new minHeap1() ;
    

    //first k elements first elements push in Heap 
    
    for(let i=0;i<k;i++){
        hp.add(lists[i][0])
    }
    console.log(hp,"hp"); 
    const result =[hp.data[0]]
    // ittrate remaining elements 
    for(let i=0;i<lists.length;i++){
        for(let j=1;j<lists[i].length;j++){
            if(lists[i][j]){
                hp.removeTop();
                hp.add(lists[i][j])
                result.push(hp.data[0])
            }
        }
    }
    return result

};

/*
    val:1,next: Remaining LinkList { val: 4 , next:remainigList{val:5,next:remainingList} }

*/