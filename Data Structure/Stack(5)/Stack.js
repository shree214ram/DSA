// Stack class 
class Stack {
  // Array is used to implement a Stack 
  constructor() {
    this.items = [];
  }

  // Functions to be implemented 

//# Function to add an item to stack. It increases size by 1 
  push(element) {
    // console.log(this.items)
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
// var stack = new Stack();


// Testing peek and pop on an empty stack 
// returns Underflow 
// console.log(stack.peek());

// returns true 
// console.log(stack.isEmpty());

// Adding elements to the stack 
// stack contains [10, 20, 30, 40, 50] 
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// stack.push(60);

// returns 10 
// console.log(stack.peek());

// removes 10 from the stack 
// stack contains [20, 30, 40, 50, 60] 
// console.log(stack.peek());

// returns 20 
// console.log(stack.peek());

// removes 20 
// stack contains [30, 40, 50, 60] 
// console.log(stack.peek());

// printing the elements of the stack 
// prints [30, 40, 50, 60] 
// console.log(stack.printStack());






/*

//######### function to generate binary numbers #########//
function generatePrintBinary(n) {
  // Create an empty stack of strings 
  var q = new Stack();

  // Enstack the first binary number 
  q.push("1");

  // This loops is like BFS of a tree with 1 as root 
  // 0 as left child and 1 as right child and so on 
  while (n-- > 0) {
    // print the front of stack 
    var s1 = q.front();
    q.destack();
    console.log(s1);

    // Store s1 before changing it 
    var s2 = s1;

    // Append "0" to s1 and push it 
    q.push(s1 + "0");

    // Append "1" to s2 and push it. Note that s2 contains 
    // the previous front 
    q.push(s2 + "1");
  }
}

// calling the above function     
// prints [1 10 11 100 101] 
generatePrintBinary(5);*/