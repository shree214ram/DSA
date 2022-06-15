class Node {
    constructor(value){
        this.data = value
        this.next = null
    }
}
class LinkList {
    constructor(){
        this.size = 0
        this.head = null
    }

    insert(value, index){
        const newNode = new Node(value)
        //add at root
        if(index ==0){
            if(this.size == 0){
                this.head = newNode
                newNode.next = null
            }else{
                this.head = newNode
                newNode.next = this.head
            }
        }else{
            It = 0;
            let currentNode = this.head
            let nextNode = currentNode.next
            while(It<index){
                currentNode = nextNode
                nextNode = currentNode.next
                It++
            }
            //
            currentNode.next = newNode
            newNode.next = nextNode
        }
    }
    
    //remove via index
    remove(index){
        let currentNode = It = previousNode = 0
         currentNode = this.head
         previousNode = currentNode
        //remove at root
        if(index ==0){
            if(this.size == 0){
                console.log("No data available in List to delete")
            }else{
                this.head = currentNode.next
                currentNode.previousNode = this.head
            }
        }else{
            while(It<index){
                previousNode = currentNode
                currentNode = currentNode.next
                It++
            }
            //
            previousNode.next = currentNode.next
        }
    }

    //remove via value
    reverse(){
    // Head   
    // 100
    //     2-->6-->9-->11
    //     100 200 300 400
        let it = 0
        if(this.size == 0){
                console.log("No data available in List to reverse")
                return 
        } else if(this.size == 1){
            return 
        }
        let current = this.head
        current.next = null 
        while(it!== null) {
            latestCurrent = current.next
            current.next = current
            current = latestCurrent
        }

    }

    print(){

    }

    checkIsEmpty(){

    }
}