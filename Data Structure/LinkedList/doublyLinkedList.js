// User defined class node 
class Node {
  // constructor 
  constructor(element, next = null, previous = null) {
    this.element = element;
    this.next = next;
    this.prev = previous;
  }
}

// linkedlist class 
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // functions to be implemented 

  // add(element)  at the first of list 
  push(new_data) {
    //Allocate new node and putting data 
    var new_Node = new Node(new_data);

    /* 3. Make next of new node as head and previous as NULL */
    new_Node.next = this.head;
    new_Node.prev = null;

    /* 4. change prev of head node to new node */
    if (this.head != null)
      this.head.prev = new_Node;

    /* 5. move the head to point to the new node */
    this.head = new_Node;
    this.size++;

  }

  // adds an element at the end of list 
  add(element) {
    // creates a new node 
    var new_node = new Node(element);
    // to store current node 
    var current;
    // if list is Empty add the 
    // element and make it head 
    if (this.head == null) {
      new_node.prev = null;
      this.head = new_node;
    }
    else {
      current = this.head;
      // iterate to the end of the 
      // list 
      while (current.next) {
        current = current.next;
      }
      // add node 
      current.next = new_node;
      new_node.prev = current;
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
  // insert 'element' at the position 'index' 
  // of the list 
  insertAt(element, index) {

    if (index > 0 && index > this.size) {
      return false;
    }
    else {

      // creates a new node 
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // add the element to the 
      // first index 
      if (index == 0) {

        node.next = head;
        node.prev = null;

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
        /* 4. Make next of new node as next of prev_node */
        node.next = curr;

        /* 6. Make prev_node as previous of new_node */
        node.prev = prev;

        /* 5. Make the next of prev_node as new_node */
        prev.next = node;

        /* 7. Change previous of new_node's next node */
        if (node.next != null)
          node.next.prev = curr;
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

        // in the doubly linked list 
        if (curr == null)
          return;
        // remove the element 
        this.removeNode(this.head, curr)
        this.size--;
        return;
      }
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
        this.removeNode(this.head, current);
        this.size--;
        return;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }


  removeNode(head, del) {

    // base case 
    if (head == null || del == null)
      return null;

    // If node to be deleted is head node 
    if (head == del)
      head = del.next;

    // Change next only if node to be  
    // deleted is NOT the last node 
    if (del.next != null)
      del.next.prev = del.prev;

    // Change prev only if node to be  
    // deleted is NOT the first node 
    if (del.prev != null)
      del.prev.next = del.next;

    del = null;

    return head;
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
   * @returns {DoublyLinkedList}
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
  // size_Of_List 
}

//Start with the empty list 
var llist = new DoublyLinkedList();

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
