// Stack class 
class Stack {
  // Array is used to implement a Stack 
  constructor() {
    this.items = [];
  }

  // Functions to be implemented 

//# Function to add an item to stack. It increases size by 1 
  push(element) {
    console.log(this.items)
    this.items.unshift(element);
  }

  //# Function to remove an item from stack. It decreases size by 1 
  pop() {
    // removing element from the stack 
    // returns underflow when called  
    // on empty stack 
    if (this.isEmpty())
      return "Underflow";
    return this.items.pop();
  }


  //# Function to return the top from stack without removing it 
 peek() {
    // returns the Front element of  
    // the stack without removing it. 
    if (this.isEmpty())
      return "No elements in Stack";
    return this.items[this.items.length-1]; // Last In First Out
  }

  // isEmpty function 
  isEmpty() {
    // return true if the stack is empty. 
    return this.items.length == 0;
  }

  // printStack function 
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
  }
}
// creating object for stack class 
var stack = new Stack();


// Testing peek and pop on an empty stack 
// returns Underflow 
console.log(stack.peek());

// returns true 
console.log(stack.isEmpty());

// Adding elements to the stack 
// stack contains [10, 20, 30, 40, 50] 
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);

// returns 10 
console.log(stack.peek());

// removes 10 from the stack 
// stack contains [20, 30, 40, 50, 60] 
console.log(stack.peek());

// returns 20 
console.log(stack.peek());

// removes 20 
// stack contains [30, 40, 50, 60] 
console.log(stack.peek());

// printing the elements of the stack 
// prints [30, 40, 50, 60] 
console.log(stack.printStack());



