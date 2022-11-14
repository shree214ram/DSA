// A C++ program to demonstrate common Binary Heap Operations 

// Prototype of a utility function to swap two integers 

// A class for Min Heap 
class MinHeap {

  // Constructor: Builds a heap from a given array a[] of given size 

  constructor(cap) {
    this.harr = []; // pointer to array of elements in heap
    this.capacity = cap; // maximum possible size of min heap
    this.heap_size = 0; // Current number of elements in min heap
  }

  // to get index of parent  of node at index i 

  parent(i) { return (i - 1) / 2; }

  // to get index of left child of node at index i 
  left(i) { return (2 * i + 1); }

  // to get index of right child of node at index i 
  right(i) { return (2 * i + 2); }

  // Returns the minimum key (key at root) from min heap 
  getMin() { return this.harr[0]; }

  // Inserts a new key 'k' 
  // insert(): Inserting a new key takes O(Logn) time. We add a new key at the end of the tree. 
  // IF new key is greater than its parent, then we don’t need to do anything. Otherwise, 
  // we need to traverse up to fix the violated heap property.
  insertKey(k) {
    if (this.heap_size == this.capacity) {
      console.log("\nOverflow: Could not insertKey\n");
      return;
    }

    // First insert the new key at the end 
    this.heap_size++;
    let i = this.heap_size - 1;
    // this.harr[i] = k;
    this.harr.push(k)
    // Fix the min heap property if it is violated 
    // while loop tak tak jab tak ki i not equal to 0 And Parent Chota na ho kyonki yah Min Heap 
    while (i != 0 && this.harr[this.parent(i)] > this.harr[i]) {
      this.swap(this.harr[i], this.harr[this.parent(i)]);
      i = this.parent(i);
    }
  }

  // Decreases value of key at index 'i' to new_val. It is assumed that 
  // new_val is smaller than harr[i]. 
  decreaseKey(i, new_val) {
    this.harr[i] = new_val;
    while (i != 0 && this.harr[this.parent(i)] > this.harr[i]) {
      this.swap(this.harr[i], this.harr[this.parent(i)]);
      i = this.parent(i);
    }
  }

  /*
            1
        3        9
    12   23    56  78
    
  */
  //  [23 , 56 , 12, 1, 3, 78, 9] ==> [1, 3, 9, 12, 23, 56, 78]

  // Method to remove minimum element (or root) from min heap 
  extractMin() {
    if (this.heap_size <= 0)
      return Number.MAX_VALUE;
    if (this.heap_size == 1) {
      this.heap_size--;
      return this.harr[0];
    }

    // Store the minimum value, and remove it from heap 
    let root = this.harr[0];
    this.harr[0] = this.harr[this.heap_size - 1];
    this.heap_size--;
    this.MinHeapify(0);

    return root;
  }


  // This function deletes key at index i. It first reduced value to minus 
  // infinite, then calls extractMin() 
  deleteKey(i) {
    this.decreaseKey(i, 0);
    this.extractMin();
  }

  // to heapify a subtree with the root at given index 
  // A recursive method to heapify a subtree with the root at given index 
  // This method assumes that the subtrees are already heapified 
  MinHeapify(i) {
    let l = this.left(i);
    let r = this.right(i);
    let smallest = i;
    if (l < this.heap_size && this.harr[l] < this.harr[i])
      smallest = l;
    if (r < this.heap_size && this.harr[r] < this.harr[smallest])
      smallest = r;
    if (smallest != i) {
      this.swap(this.harr[i], this.harr[smallest]);
      this.MinHeapify(smallest);
    }
  }

  // A utility function to swap two elements 
  swap(x, y) {
    let temp = x;
    x = y;
    y = temp;
  }
}
// Driver program to test above functions with capacity limit 15
var heap = new MinHeap(15);

heap.insertKey(3);
heap.insertKey(2);
// heap.deleteKey(1);
heap.insertKey(15);
heap.insertKey(5);
heap.insertKey(4);
heap.insertKey(45);
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
  // console.log(heap.getMin());
  // heap.deleteKey(3);
  // console.log(heap.getMin());

  // heap.decreaseKey(2, 1);
  // console.log(heap.getMin());
