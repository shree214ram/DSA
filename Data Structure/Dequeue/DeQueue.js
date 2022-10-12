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
        return this.items[this.items.length-1];
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
  // creating object for queue class 
  var queue = new DeQueue();
  
  
  // Testing deleteFront and pop on an empty queue 
  // returns Underflow 
  console.log(queue.deleteFront());
  
  // returns true 
  console.log(queue.isEmpty());
  
  // Adding elements to the queue 
  // queue contains [10, 20, 30, 40, 50] 
  queue.insertLast(10);
  queue.insertLast(20);
  queue.insertLast(30);
  queue.insertLast(40);
  queue.insertLast(50);
  queue.insertLast(60);
  
  // returns 10 
  console.log(queue.getFront());
  
// returns 50 
console.log(queue.getRear());
  /*
  // removes 10 from the queue 
  // queue contains [20, 30, 40, 50, 60] 
  console.log(queue.deleteFront());
  
  // returns 20 
  console.log(queue.getFront());
  
  // removes 20 
  // queue contains [30, 40, 50, 60] 
  console.log(queue.deleteFront());
  
  // printing the elements of the queue 
  // prints [30, 40, 50, 60] 
  console.log(queue.printDeQueue());
*/