class HeapSort {
    constructor(capacity) {
      this.heapSize = 0;
      this.capacity = capacity;
      this.heapArray = [];
    }
    setArray(mayArray) {
      this.heapSize = mayArray.length;
      this.capacity = 10;
      this.heapArray = mayArray;
    }
    left(i) { return 2 * i + 1 }
    right(i) { return 2 * i + 2 }
    parent(i) { return (i - 1) / 2 }
  
    heapSort() {
      const n = this.heapSize;
      //build max heap
      for (let i = (n / 2) - 1; i >= 0; i--) {
        this.maxHeapify(this.heapArray,n, i)
      }
      //delete root
      for (let i = n - 1; i > 0; i--) {
        const swappedArray = this.swap(this.heapArray, 0, i);
         // @sunny very very very important :- Swap between always 0 and  i th index of array 
        this.maxHeapify(swappedArray, i, 0) 
        /* @sunny  very very very important :-  hepify the reduced array , 
        i will be the `n of maxHeapify` function argument ("max size") of reduced array and always 
        0 is the `i of maxHeapify` function argument ("start point") 
        */
      }
    }
    swap(heapArray, x, y) {
      let swap = heapArray[x];
      heapArray[x] = heapArray[y];
      heapArray[y] = swap;
      this.heapArray = heapArray;
      return heapArray;
    }
    maxHeapify(heapArray,n, i) {
      let left = this.left(i)
      let right = this.right(i)
      let largest = i
      if (left < n && heapArray[left] > heapArray[largest]) { largest = left; }
      if (right < n && heapArray[right] > heapArray[largest]) { largest = right; }
      if (largest != i) {
        const swappedArray = this.swap(heapArray, i, largest)
        this.maxHeapify(swappedArray,n, largest)
      }
    }
    printArray() {
      console.log("Sorted Heap Array")
      for (let i = 0; i < this.heapArray.length; i++) {
        console.log(this.heapArray[i])
      }
    }
  }
  
  const heap = new HeapSort();
  const myArray = [2, 9, 3, 10, 4, 11, 5, 12]
      console.log("Given Array=",myArray)
  
  heap.setArray(myArray)
  heap.heapSort();
  heap.printArray()