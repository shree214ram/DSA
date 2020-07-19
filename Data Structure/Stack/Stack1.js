// # Javascript program for implementation of stack 

// # import maxsize from sys module  
// # Used to return -infinite when stack is empty 
// from sys import maxsize 

// # Function to create a stack. It initializes size of stack as 0 
function createStack() {
  const stack = []
  return stack
}

//# Stack is empty when stack size is 0 
function isEmpty(stack) {
  return stack.length == 0
}

//# Function to add an item to stack. It increases size by 1 
function push(stack, item) {
  stack.append(item)
  print(item + " pushed to stack ")
}

//# Function to remove an item from stack. It decreases size by 1 
function pop(stack) {
  if (isEmpty(stack)) {
    return str(-maxsize - 1) //# return minus infinite 
  }
  return stack.pop()
}
//# Function to return the top from stack without removing it 
function peek(stack) {
  if (isEmpty(stack)) {
    return str(-maxsize - 1) //# return minus infinite 
  }
  return stack[stack.length - 1]
}

//# Driver program to test above functions     
stack = createStack()
push(stack, str(10))
push(stack, str(20))
push(stack, str(30))
print(pop(stack) + " popped from stack") 