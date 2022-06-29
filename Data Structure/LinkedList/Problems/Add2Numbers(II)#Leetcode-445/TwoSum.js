
function AddTwoNumbers(N1, N2) {

    const S1 = AddLinkListIntoStack(N1)
    const S2 = AddLinkListIntoStack(N2)

    var NewList = new LinkedList();
    NewList.add(0)
    while (S1 !== null || S2 !== null || carryValue !== null) {
        let sum = 0
        if (S1 !== null) {
            sum += S1.data
            S1 = S1.next
        }
        if (S2 !== null) {
            sum += S2.data
            S2 = S2.next
        }
        sum += carryValue
        carryValue = sum / 10

        NewList.next = new Node(sum % 10)
        result = NewList.next
    }

}

const N1 = N1.head
const N2 = N2.head

const NewList =
    AddTwoNumbers(N1, N2)

function AddLinkListIntoStack(N1) {
    CurrentNode = head;
    const myStack = new Stack()
    while (N1 !== null) {
        myStack.add(2)
    }
}

class Stack {
    constructor() {
        this.size = 0
        this.bucket = []
    }

    //Add an element 
    add(value) {
        this.bucket.unshift(value)
        this.size += 1
    }

    //Add an element at top 
    removeTop(value) {
        this.bucket.shift()
        this.size -= 1
    }

    printStack() {
        console.log("Stack elements are =>")
        for (let i = 0; i < this.size; i++) {
            console.log(this.bucket[i])
        }
    }
}

// const myStack = new Stack()
// myStack.add(2)
// myStack.add(7)
// myStack.add(9)
// myStack.printStack()
// myStack.removeTop()
// myStack.printStack()