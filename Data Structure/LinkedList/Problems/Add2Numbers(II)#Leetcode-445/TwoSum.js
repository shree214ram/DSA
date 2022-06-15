// https://www.youtube.com/watch?v=5YqQDKobpGI

7       2     4      3
    +
    5     6      4
------------------------------------
    =
7       8      0     7
    < --------------------- Addition
Note: - In this problem 2 linklist are not possible because LIFO(Last in and first out) required for Addition. 
 3 in the first list added as a last element and 4 as a last element in second list
so for that 2 stacks are required

    | 3 |      |        |
| 4 |      | 4 |
| 2 |      | 6 |
| 7 |      | 5 |
    ------           ------
        Steps: -
            1. will make  S1 and S2 are 2 stacks.
2. We will make a new Linked List
3. we will ittrate loop untill S1 Or S2 size not equal to 0 Or carry value is not null
3. in loop we will create a fresh sum and in which we will Add S1[currentData] in fresh sum  and remove same from Stack(Pop()) and
Add S2[currentData] in fresh sum  and remove same from Stack(Pop()).
4. Assign that's Mod value to next of result and Assign carry value to CarryValue variable 
10
1       0
carry   mod



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