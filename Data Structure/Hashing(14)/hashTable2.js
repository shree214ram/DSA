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
  isEmpty() {
    return this.size == 0;
  }
  // size_Of_List 
  // gives the size of the list 
  size_of_list() {
    console.log(this.size);
  }
}
/*
  //Start with the empty list 
  var llist = new LinkedList();
  
  // Use push() to construct below list 
  // 14->21->11->30->10  
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
  */

class HashTable {

  constructor(size = 42) {
    this.buckets = new Array(size)
    this.size = size
    this.keys = {};
  }


  hash(key) {
    return key.toString().length % this.size;
  }


  set(key, value) {
    let index = this.hash(key);
    this.keys[key] = index;
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value])
    return index
  }

  get(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) return null
    for (let bucket of this.buckets[index]) {
      console.log(bucket, 'bucket')
      // key
      if (bucket[0] === key) {
        //value
        return bucket[1]
      }
    }


  }
  printList() {
    const keys = this.keys;
    // for (let bucket of this.buckets[index]) {
    //   console.log(bucket, 'bucket')
    //   // key
    //   if (bucket[0] === key) {
    //     //value
    //     return bucket[1]
    //   }
    // }
    for (var prop in keys) {
      // skip loop if the property is from prototype
      if (!keys.hasOwnProperty(prop)) continue;
      // your code
      console.log(prop + " = " + keys[prop]);
    }
  }
  printKeys() {
    const keys = this.keys;
    console.log(keys, 'keys');
  }

  getIntersection(head1, head2) {
    // HashSet<Integer> hset = new HashSet<>(); 
    const hasht = new HashTable(10);

    let n1 = head1;
    let n2 = head2;
    let result = new LinkedList();

    // loop stores all the elements of list1 in hset 
    while (n1 != null) {
      if (hset.contains(n1.data)) {
        hset.add(n1.data);
      } else {
        hset.add(n1.data);
      }
      n1 = n1.next;
    }

    //For every element of list2 present in hset 
    //loop inserts the element into the result 
    while (n2 != null) {
      if (hset.contains(n2.data)) {
        result.push(n2.data);
      }
      n2 = n2.next;
    }
    return result;
  }

  getUnion(head1, head2) {
    // HashMap that will store the  
    // elements of the lists with their counts 
    // HashMap<Integer, Integer> hmap = new HashMap<>(); 
    const hasht = new HashTable(10);

    let n1 = head1;
    let n2 = head2;
    let result = new LinkedList();

    // loop inserts the elements and the count of  
    // that element of list1 into the hmap 
    while (n1 != null) {
      if (hmap.containsKey(n1.data)) {
        let val = hmap.get(n1.data);
        hmap.put(n1.data, val + 1);
      } else {
        hmap.put(n1.data, 1);
      }
      n1 = n1.next;
    }

    // loop further adds the elements of list2 with  
    // their counts into the hmap  
    while (n2 != null) {
      if (hmap.containsKey(n2.data)) {
        let val = hmap.get(n2.data);
        hmap.put(n2.data, val + 1);
      } else {
        hmap.put(n2.data, 1);
      }
      n2 = n2.next;
    }

    // Eventually add all the elements 
    // into the result that are present in the hmap 
    // for(let a:hmap.keySet()) 
    {
      result.append(a);
    }
    return result;
  }
}

const hasht = new HashTable(10);

hasht.set("userId3", "pop")
hasht.set("userId4", "king")
hasht.set("userId9", "april")
hasht.set("userId50", "gowtham")
hasht.set("userId100", "olo")

console.log(hasht.get("userId3"));
console.log(hasht.printKeys());
console.log(hasht.printList());