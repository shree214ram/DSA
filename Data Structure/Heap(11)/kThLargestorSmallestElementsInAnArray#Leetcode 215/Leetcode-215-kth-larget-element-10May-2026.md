/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinHeap2 {
    constructor() {
        this.data = [];
    }

    add(val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            // Min-Heap: Parent must be smaller than child
            if (this.data[parentIndex] > this.data[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    removeTop() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();

        const top = this.data[0];
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
        return top;
    }

    bubbleDown(index) {
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            // Check if left child exists and is smaller
            if (left < this.data.length && this.data[left] < this.data[smallest]) {
                smallest = left;
            }
            // Check if right child exists and is smaller
            if (right < this.data.length && this.data[right] < this.data[smallest]) {
                smallest = right;
            }

            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    size() {
        return this.data.length;
    }
}
var findKthLargest = function(nums, k) {
    const hp = new MinHeap2()
    for(let i=0;i<k;i++){
        hp.add(nums[i])
    }
    let j=k;
    while(j<nums.length && hp.size()>0){
        const current=nums[j]
        console.log(current,"curent")
        if(current>hp.data[0]){
            hp.removeTop() ;
            hp.add(current)
        }
        j++
    }
    return hp.data[0]
};

Today I tried on Leetcode 215 kth Largetst element with Heap Solution above and its excepted with 

Runtime
51
ms
Beats
76.28%
Memory
73.70
MB
Beats
11.01%


And also submited at November with Quick Select Method :

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function quickSelect(arr, k)
{
    // Randomly select a pivot
    const pivot
        = arr[Math.floor(Math.random() * arr.length)];

    // For elements greater than the pivot
    const leftArr = arr.filter(x => x > pivot);

    // For elements equal to the pivot
    const midArr = arr.filter(x => x === pivot);

    // For elements less than the pivot
    const rightArr = arr.filter(x => x < pivot);

    // Recursive selection
    if (k <= leftArr.length) {
        return quickSelect(leftArr, k);
    }
    if (leftArr.length + midArr.length < k) {
        return quickSelect(rightArr, k - leftArr.length
                                         - midArr.length);
    }

    // Return pivot as the k-th largest
    return pivot;
}

var findKthLargest = function (nums, k) {
return quickSelect(nums, k);
};

Runtime
44
ms
Beats
81.00%
Memory
76.48
MB
Beats
5.18%



