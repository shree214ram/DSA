// A class for Max Heap
class MaxHeap {
    harr = [];
    // pointer to array of elements in heap
    capacity = 0;
    // maximum possible size of max heap
    heap_size = 0;
    // Current number of elements in max heap
    constructor(a, size)
    {
        this.heap_size = size;
        this.harr = a.splice(0,size);
        // store address of array
        var i = parseInt((this.heap_size - 1) / 2);
        while (i >= 0)
        {
            this.maxHeapify(i);
            i--;
        }
        console.log(this.harr,"this.harr")
    }
    parent(i)
    {
        return parseInt((i - 1) / 2);
    }
    left(i)
    {
        return (2 * i + 1);
    }
    right(i)
    {
        return (2 * i + 2);
    }
    getMax()
    {
        return this.harr[0];
    }
    // Returns maximum
    // to replace root with new node x and heapify() new root
    replaceMax(x)
    {
        this.harr[0] = x;
        this.maxHeapify(0);
    }
    
    // Method to remove maximum element (or root) from max heap
    extractMax()
    {
        if (this.heap_size == 0)
        {
            return Number.MAX_VALUE;
        }
        // Store the maximum value.
        var root = this.harr[0];
        // If there are more than 1 items, move the last item to root
        // and call heapify.
        if (this.heap_size > 1)
        {
            this.harr[0] = this.harr[this.heap_size - 1];
            this.maxHeapify(0);
        }
        this.heap_size--;
        return root;
    }
    // A recursive method to heapify a subtree with root at given index
    // This method assumes that the subtrees are already heapified
    maxHeapify(i)
    {
    console.log("hay")
        var l = this.left(i);
        var r = this.right(i);
        var largest = i;
        if (l < this.heap_size && this.harr[l] > this.harr[i])
        {
            largest = l;
        }
        if (r < this.heap_size && this.harr[r] > this.harr[largest])
        {
            largest = r;
        }
        if (largest != i)
        {
            var t = this.harr[i];
            this.harr[i] = this.harr[largest];
            this.harr[largest] = t;
            this.maxHeapify(largest);
        }
    }
}
// Function to return k'th largest element in a given array
function kthSmallest(arr, n, k)
{
    // Build a heap of first k elements: O(k) time
    var mh = new MaxHeap(arr, k);
    // Process remaining n-k elements. If current element is
    // smaller than root, replace root with current element
    for (let i=k; i < n; i++)
    {
        if (arr[i] < mh.getMax())
        {
            mh.replaceMax(arr[i]);
        }
    }
    // Return root
    return mh.getMax();
}
// Driver program to test above methods

    var arr = [12, 3, 5, 7, 19];
    var n = arr.length;
    var k = 3;
    
    console.log("K\'th smallest element is " + kthSmallest(arr, n, k));