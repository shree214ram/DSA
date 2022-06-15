// shree Ganeshaynamah
//******************Hash Table Class*********/
class Hashtable {
    constructor() {
      this.size = 0;
      this.length = 0;
      this.bucket = [];
      this.keys = {};
    }
    append() {
      this.size = 0;
    }
    sizeOfHashTable() {
      return this.size;
    }
    add(key, value = null) {
      this.put(key, value);
    }
    hashFunction(key) {
      return key % this.size;
    }
    contains(key) {
      const index = this.hashFunction(key);
      return this.bucket[index] ? this.bucket[index] : false;
    }
  
    get(key) {
      if (this.contains[key]) {
        for (k in this.contains[key]) {
          console.log('k==', k);
        }
      }
    }
    put(key, value) {
      const index = this.hashFunction(key);
      if (!this.bucket[index]) {
        this.size++;
      }
      this.bucket[index] = { key: value };
    }
    printList() {
      for (let k=0; k< this.bucket.length; k++) {
          for (let key in this.bucket[k]) {
            console.log('key==', key);
            console.log('value==', this.bucket[k][key]);
          }
      }
    }
  }
  
  //******************Linklist Class*********/
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Linklist {
    constructor() {
      this.size = 0;
      this.head = null;
    }
    append() {
      this.size = 0;
    }
    sizeOfLinkedList() {
      return this.size;
    }
    push(data) {
      const node = new Node(data);
      const head = this.head;
      if (head == null) {
        this.head = node;
      } else {
        let currebtNode = head;
        while (currebtNode.next != null) {
          currebtNode = currebtNode.next;
        }
        currebtNode.next = node;
      }
      this.size++;
      return;
    }
    printList() {
      let currebtNode = this.head;
      while (currebtNode.next != null) {
        console.log(currebtNode.data);
        currebtNode = currebtNode.next;
      }
      console.log(currebtNode.data);
    }
  }
  
  const llist1 = new Linklist();
  const llist2 = new Linklist();
  
  llist1.push(20);
  llist1.push(4);
  llist1.push(15);
  llist1.push(10);
  
  console.log('Print List First-->'); 
  llist1.printList();
  console.log('Size List First-->');
  const size1 = llist1.sizeOfLinkedList();
  console.log(size1);
  llist2.push(10);
  llist2.push(2);
  llist2.push(4);
  llist2.push(8);
  
  console.log('Print List Second-->');
  llist2.printList();
  console.log('Size List Second-->');
  const size2 = llist2.sizeOfLinkedList();
  console.log(size2);
  
  const union = unionOf2LinkedList(llist1.head, llist2.head);
  console.log(union);
  
  const intersection = intersectionOf2LinkedList(llist1.head, llist2.head);
  console.log(intersection);
  
  function unionOf2LinkedList(head1, head2) {
    const unionOf2LinkedList = [];
    const hash = new Hashtable();
    let currentNode1 = head1;
    while (currentNode1.next != null) {
      if (!hash.contains(currentNode1.data)) {
        hash.add(currentNode1.data);
      }
      currentNode1 = currentNode1.next;
    }
    if (!hash.contains(currentNode1.data)) {
      hash.add(currentNode1.data);
    }
    hash.printList()
    let currentNode2 = head2;
    while (currentNode2.next != null) {
      if (hash.contains(currentNode2.data)) {
        unionOf2LinkedList.push(currentNode2.data);
      }
      currentNode2 = currentNode2.next;
    }
    if (hash.contains(currentNode2.data)) {
      unionOf2LinkedList.push(currentNode2.data);
    }
  
    return unionOf2LinkedList;
  }
  
  function intersectionOf2LinkedList(head1, head2) {
    const intersectionOf2LinkedList = [];
    const hash = new Hashtable();
    let currentNode1 = head1;
    while (currentNode1.next != null) {
      if (!hash.contains(currentNode1.data)) {
        intersectionOf2LinkedList.push(currentNode1.data);
  
        hash.add(currentNode1.data);
      }
      currentNode1 = currentNode1.next;
    }
    if (!hash.contains(currentNode1.data)) {
      intersectionOf2LinkedList.push(currentNode1.data);
  
      hash.add(currentNode1.data);
    }
  
    let currentNode2 = head2;
    while (currentNode2.next != null) {
      if (!hash.contains(currentNode2.data)) {
        intersectionOf2LinkedList.push(currentNode2.data);
      }
      currentNode2 = currentNode2.next;
    }
    if (!hash.contains(currentNode2.data)) {
      intersectionOf2LinkedList.push(currentNode2.data);
    }
    intersectionOf2LinkedList.push(currentNode2.data);
  
    return intersectionOf2LinkedList;
  }
  