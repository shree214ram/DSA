// User defined class node 
class Node {
    // constructor 
    constructor(element) {
      this.element = element;
      this.next = null
    }
  }
  
  // linkedlist class 
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // functions to be implemented 
  
    // add(element)  at the first of list 
    push(new_data) {
      //Allocate new node and putting data 
      var new_node = new Node(new_data);
      //Make next of new node as head 
      new_node.next = this.head;
      //Move the head to point to new Node 
      this.head = new_node;
      this.size++;
    }
  
    // adds an element at the end of list 
    add(element) {
      // creates a new node 
      var node = new Node(element);
      // to store current node 
      var current;
      // if list is Empty add the 
      // element and make it head 
      if (this.head == null)
        this.head = node;
      else {
        current = this.head;
        // iterate to the end of the 
        // list 
        while (current.next) {
          current = current.next;
        }
        // add node 
        current.next = node;
      }
      this.size++;
    }
  
    // PrintList 
    printList() {
      var tnode = this.head;
      while (tnode != null) {
        console.log(tnode.element + "->");
        tnode = tnode.next;
      }
      console.log("NULL");
    }
    // insertAt(element, index) 
    // insert element at the position index 
    // of the list 
    insertAt(element, index) {
      if (index > 0 && index > this.size)
        return false;
      else {
        // creates a new node 
        var node = new Node(element);
        var curr, prev;
  
        curr = this.head;
  
        // add the element to the 
        // first index 
        if (index == 0) {
          node.next = head;
          this.head = node;
        } else {
          curr = this.head;
          var it = 0;
  
          // iterate over the list to find 
          // the position to insert 
          while (it < index) {
            it++;
            prev = curr;
            curr = curr.next;
          }
  
          // adding an element 
          node.next = curr;
          prev.next = node;
        }
        this.size++;
      }
  
    }
    
    // removeFrom(index) 
    // removes an element from the specified index 
    removeFrom(index) {
      if (index > 0 && index > this.size)
        return -1;
      else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;
  
        // deleting first element 
        if (index === 0) {
          this.head = curr.next;
        } else {
          // iterate over the list to the 
          // position to removce an element 
          while (it < index) {
            it++;
            prev = curr;
            curr = curr.next;
          }
  
          // remove the element 
          prev.next = curr.next;
        }
        this.size--;
  
        // return the remove element 
        return curr.element;
      }
    }
    // removeElement(element) 
    // removes a given element from the list 
    removeElement(element) {
      var current = this.head;
      var prev = null;
  
      // iterate over the list 
      while (current != null) {
        // comparing element with current 
        // element if found then remove the 
        // and return true 
        if (current.element === element) {
          if (prev == null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
          this.size--;
          return current.element;
        }
        prev = current;
        current = current.next;
      }
      return -1;
    }
  
    // searchElement(element) 
    // searchs a given element from the list 
    search(element) {
      var count = 0;
      var current = this.head;
  
      // iterae over the list 
      while (current != null) {
        // compare each element of the list 
        // with given element 
        if (current.element === element)
          return count;
        count++;
        current = current.next;
      }
  
      // not found 
      return -1;
    }
  
    /* Function to reverse the linked list */
    /**
     * Reverse a linked list.
     * @returns {LinkedList}
     */
    reverse() {
      let currNode = this.head;
      let prevNode = null;
      let nextNode = null;
  
      while (currNode) {
        // Store next node.
        nextNode = currNode.next;
  
        // Change next node of the current node so it would link to previous node.
        currNode.next = prevNode;
  
        // Move prevNode and currNode nodes one step forward.
        prevNode = currNode;
        currNode = nextNode;
      }
  
      // Reset head and tail.
      this.tail = this.head;
      this.head = prevNode;
  
      return this;
    }
    // Helper Methods 
    // isEmpty 
    // checks the list for empty 
    isEmpty() 
    { 
        return this.size == 0; 
    } 
    // size_Of_List 
    // gives the size of the list 
    size_of_list() 
    { 
        console.log(this.size); 
    } 
  }
  
  //Start with the empty list 
  var llist = new LinkedList();
  
  /*Use push() to construct below list 
  14->21->11->30->10  */
  llist.push(1);
  llist.push(3);
  llist.push(5);
  llist.push(7);
  llist.push(9);
  // llist.add(11);
  llist.insertAt(22, 2)
  llist.printList();

if (llist.search(22) !== -1)
  console.log("Yes");
else
  console.log("No");


//removeFrom(index) 
llist.removeFrom(2)
console.log("AFTER REMOVE  2 nd index==>");
llist.printList();

//removeElement(element)
llist.removeElement(3)
console.log("AFTER REMOVE  node which element value is 3==>");
llist.printList();


console.log("REVERSED LINKED LIST ==>");


var reverse = llist.reverse();

reverse.printList();
  