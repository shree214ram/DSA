
// DeQueue class 
class DeQueue {
    // Array is used to implement a DeQueue 
    constructor() {
        this.items = [];
    }

    // Functions to be implemented 

    // insertFront function : insertFront(): Adds an item at the front of Deque.
    insertFront(element) {
        // adding element to the queue 
        this.items.unshift(element);
    }

    // insertLast function : insertLast(): Adds an item at the rear of Deque.
    insertLast(element) {
        // adding element to the queue 
        this.items.push(element);
    }

    // deleteFront function : deleteFront(): Deletes an item from the front of Deque.
    deleteFront() {
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue 
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    // deleteLast function : deleteLast(): Deletes an item from the rear of Deque. 
    deleteLast() {
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue 
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop();
    }

    // getFront function : getFront(): Gets the front item from the queue.
    getFront() {
        // returns the Front element of  
        // the queue without removing it. 
        if (this.isEmpty())
            return "No elements in DeQueue";
        return this.items[0];
    }

    // getRear function : getRear(): Gets the last item from queue.
    getRear() {
        // returns the Front element of  
        // the queue without removing it. 
        if (this.isEmpty())
            return "No elements in DeQueue";
        return this.items[this.items.length - 1];
    }

    // isEmpty function : isEmpty(): Checks whether Deque is empty or not.
    isEmpty() {
        // return true if the queue is empty. 
        return this.items.length == 0;
    }

    // printDeQueue function 
    printDeQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}




class Solution {
    shortestSubarray(nums, Target) {
        const n = nums.size();
        // creating object for queue class 
        var dq = new DeQueue(); //index,sum
        let sum = 0;
        let shortest = Integer.MAX_VALUE;

        for (let i = 0; i < n; ++i) {
            sum += nums[i];
            if (sum >= Target) shortest = min(shortest, i + 1);//Sum from start to i-th index

            //Reduce window size to find minimum window with sum>=Target
            let curr = { first: Integer.MAX_VALUE, second: Integer.MAX_VALUE };
            while (!dq.isEmpty() && (sum - dq.getFront().second >= Target)) {
                curr = dq.getFront();
                dq.deleteFront();
            }
            //Calculate new shortest (if possible)
            if (curr.second != Integer.MAX_VALUE)
                shortest = min(shortest, (i - curr.first));

            //Maintain monotonically non-decreasing order of deque
            while (!dq.isEmpty() && sum <= dq.back().second)
                dq.deleteLast();
            dq.insertLast({ first: i, second: sum });//Push i-th sum
        }
        return shortest == Integer.MAX_VALUE ? -1 : shortest;
    }
};
var sp = new Solution();

const A = [2, 1, 1, -4, 3, 1, -1, 2], Target = 5
const res=sp.shortestSubarray(A, Target)
console.log(res,"res")
