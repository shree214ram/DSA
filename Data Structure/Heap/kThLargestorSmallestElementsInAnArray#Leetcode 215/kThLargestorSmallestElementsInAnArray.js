// A Javascript program to find k'th smallest element using max heap

// A class for Max Heap
class MaxHeap {
    constructor() {

        this.harr = []; // pointer to array of elements in heap
        this.capacity = 99; // maximum possible size of max heap
        this.heap_size = 0; // Current number of elements in max heap

    }
    parent(i) { return (i - 1) / 2; }
    left(i) { return (2 * i + 1); }
    right(i) { return (2 * i + 2); }
    getMax() { return harr[0]; } // Returns maximum

    // to replace root with new node x and heapify() new root
    replaceMax(x) {
        this.harr[0] = x;
        maxHeapify(0);
    }
    MaxHeap(a, size) {
        heap_size = size;
        harr = a; // store address of array
        i = (heap_size - 1) / 2;
        while (i >= 0) {
            maxHeapify(i);
            i--;
        }
    }

    // Method to remove maximum element (or root) from max heap
    extractMax() {
        if (heap_size == 0)
            return Math.max;

        // Store the maximum value.
        root = harr[0];

        // If there are more than 1 items, move the last item to root
        // and call heapify.
        if (heap_size > 1) {
            harr[0] = harr[heap_size - 1];
            maxHeapify(0);
        }
        heap_size--;
        return root;
    }

    // A recursive method to heapify a subtree with root at given index
    // This method assumes that the subtrees are already heapified
    maxHeapify(i) {
        l = left(i);
        r = right(i);
        largest = i;
        if (l < heap_size && harr[l] > harr[i])
            largest = l;
        if (r < heap_size && harr[r] > harr[largest])
            largest = r;
        if (largest != i) {
            t = harr[i];
            harr[i] = harr[largest];
            harr[largest] = t;
            maxHeapify(largest);
        }
    }
};

// Function to return k'th largest element in a given array
kthSmallest(arr, n, k)
{

    // Build a heap of first k elements: O(k) time
    const mh = new MaxHeap(arr, k);

    // Process remaining n-k elements. If current element is
    // smaller than root, replace root with current element
    for (let i = k; i < n; i++)
        if (arr[i] < mh.getMax())
            mh.replaceMax(arr[i]);

    // Return root
    return mh.getMax();
}

// Driver program to test above methods

const arr = [12, 3, 5, 7, 19];
n = arr.length, k = 4;
console.logt("K'th smallest element is " + kthSmallest(arr, n, k));

// This code is contributed by Rajput-Ji
