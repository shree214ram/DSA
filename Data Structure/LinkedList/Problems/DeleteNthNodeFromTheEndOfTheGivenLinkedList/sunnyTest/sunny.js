class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkList {
    constructor() {
        this.size = 0
        this.head = null
    }
    push(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode;
        }
        this.size++;
    }
    deleteNode(key) {
        //1. set 2 pointr 
        let first = this.head;
        let second = this.head;

        for (let i = 0; i < key; i++) {
            if (second.next == null) {
                if (i == key - 1) {
                    this.head = first.next
                }
            }
            second = second.next;
        }
        while (second.next != null) {
            first = first.next
            second = second.next
        }
        first.next = first.next.next
    }
    printList() {
        //1. set 2 pointr 
        let current = this.head;
        while (current.next != null) {
            console.log(current.data);
            console.log("-->");
            current = current.next
        }
        console.log(current.data);
        console.log("-->");
        current = current.next
    }
}

const llist = new LinkList();
llist.push(7)
llist.push(3)
llist.push(1)
llist.push(2)
console.log("List Before Delete Nth Point")
llist.printList()

const N = 3;
console.log("Delete Nth Point =>", N)
llist.deleteNode(N)

console.log("List After Delete Nth Point")
llist.printList()