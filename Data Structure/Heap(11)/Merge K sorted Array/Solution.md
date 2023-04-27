
// javascript program to merge k sorted
// arrays of size n each.
// A min heap node
class MinHeapNode
{
    element = 0;
    // The element to be stored
    // index of the array from
    // which the element is taken
    i = 0;
    // index of the next element
    // to be picked from array
    j = 0;
    constructor(element, i, j)
    {
        this.element = element;
        this.i = i;
        this.j = j;
    }
}
// A class for Min Heap
class MinHeap
{
    harr = [];
    // Array of elements in heap
    heap_size = 0;
    // Current number of elements in min heap
    // Constructor: Builds a heap from
    // a given array a[] of given size
    constructor(a, size)
    {
        this.heap_size = size;
        this.harr = a;
        var i = parseInt((this.heap_size - 1) / 2);
        while (i >= 0)
        {
            this.MinHeapify(i);
            i--;
        }
    }
    // A recursive method to heapify a subtree
    // with the root at given index This method
    // assumes that the subtrees are already heapified
    MinHeapify(i)
    {
        var l = this.left(i);
        var r = this.right(i);
        var smallest = i;
        if (l < this.heap_size && this.harr[l]?.element < this.harr[i]?.element)
        {
            smallest = l;
        }
        if (r < this.heap_size && this.harr[r]?.element < this.harr[smallest]?.element)
        {
            smallest = r;
        }
        if (smallest != i)
        {
            this.swap(this.harr, i, smallest);
            this.MinHeapify(smallest);
        }
    }
    // to get index of left child of node at index i
    left(i)
    {
        return (2 * i + 1);
    }
    // to get index of right child of node at index i
    right(i)
    {
        return (2 * i + 2);
    }
    // to get the root
    getMin()
    {
        if (this.heap_size <= 0)
        {
            console.log("Heap underflow");
            return null;
        }
        return this.harr[0];
    }
    // to replace root with new node
    // "root" and heapify() new root
    replaceMin(root)
    {
        this.harr[0] = root;
        this.MinHeapify(0);
    }
    // A utility function to swap two min heap nodes
    swap(arr, i, j)
    {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // A utility function to print array elements
    static printArray(arr)
    {
        for ( const  i of arr) {console.log(i + " ");}
    }
    // This function takes an array of
    // arrays as an argument and All
    // arrays are assumed to be sorted.
    // It merges them together and
    // prints the final sorted output.
    static mergeKSortedArrays(arr, k)
    {
        var hArr = Array(k).fill(null);
        var resultSize = 0;
        for (let i; i < arr.length; i++)
        {
            var node = new MinHeapNode(arr[i][0], i, 1);
            hArr[i] = node;
            resultSize += arr[i].length;
        }
        // Create a min heap with k heap nodes. Every heap node
        // has first element of an array
        var mh = new MinHeap(hArr, k);
        var result = Array(resultSize).fill(0);
        // To store output array
        // Now one by one get the minimum element from min
        // heap and replace it with next element of its array
        for (let i; i < resultSize; i++)
        {
            // Get the minimum element and store it in result
            var root = mh.getMin();
            result[i] = root.element;
            // Find the next element that will replace current
            // root of heap. The next element belongs to same
            // array as the current root.
            if (root.j < arr[root.i].length)
            {
                root.element = arr[root.i][root.j++];
            }
            else 
            {
                root.element = Number.MAX_VALUE;
            }
            // Replace root with next element of array
            mh.replaceMin(root);
        }
        MinHeap.printArray(result);
    }
    // Driver code
    static main(args)
    {
        var arr = [[2, 6, 12, 34], [1, 9, 20, 1000], [23, 34, 90, 2000]];
        console.log("Merged array is :");
        MinHeap.mergeKSortedArrays(arr, arr.length);
        MinHeap.printArray(arr);
        
    }
}
MinHeap.main([]);
