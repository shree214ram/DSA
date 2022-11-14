class maxHeap {
    constructor() {
        this.heap = [];
    }
    empty() {
        return this.heap.length == 0
    }
    parentIndex(i) {
        return Math.round((i - 1) / 2)
    }
    add(val) {
        this.heap.push(val);
        let currentIndex = this.heap.length - 1;
        const parentIndex = this.parentIndex(currentIndex);
        let i = currentIndex;

        while (currentIndex > 0 && this.heap[currentIndex].profit > this.heap[parentIndex].profit) {
            const oldParent = this.heap[parentIndex]
            this.heap[parentIndex] = val
            this.heap[currentIndex] = oldParent
            currentIndex = parentIndex;
        }
    }

    removeTop() {
        const lastIndex = this.heap.length - 1;
        const lastValue = this.heap[lastIndex];
        const topElement = this.heap[0];
        this.heap[0] = lastValue
        this.heap[lastIndex] = topElement
        this.heap.pop();
        let i = 0
        //BubbleDown 
        while (i < this.heap.length) {
            const left = 2 * i + 1
            const right = 2 * i + 2
            let largest = i
            if (this.heap[i].profit < this.heap[left].profit) {
                largest = left
            } else if (this.heap[i].profit < this.heap[right].profit) {
                largest = right
            }
            this.swap(this.heap, i, largest)
            i++
        }
    }
    swap(A, a, b) {
        let temp = A[a]
        A[a] = A[b]
        A[b] = temp
    }
}

// a class to represent job
class Job {
    job_id = ' ';
    deadline = 0;
    profit = 0;
    constructor(job_id, deadline, profit) {
        this.deadline = deadline;
        this.job_id = job_id;
        this.profit = profit;
    }
}
function printJobScheduling(arr) {
    var n = arr.length;
    // sorting the array on the
    // basis of their deadlines
    arr.sort((a, b) => a.deadline - b.deadline)
    // initialise the result array and maxHeap
    var result = new Array();
    var maxHeap = new maxHeap();

    // starting the iteration from the end
    for (i; i > -1; i--) {
        var slot_available = 0;
        // calculate slots between two deadlines
        if (i == 0) {
            slot_available = arr[i].deadline;
        }
        else {
            slot_available = arr[i].deadline - arr[i - 1].deadline;
        }
        // include the profit of job(as priority),
        // deadline and job_id in maxHeap
        maxHeap.add(arr[i]);
        while (slot_available > 0 && maxHeap.size() > 0) {
            // get the job with max_profit
            var job = maxHeap.remove();
            // reduce the slots
            slot_available--;
            // include the job in the result array
            (result.push(job) > 0);
        }
    }
    // jobs included might be shuffled
    // sort the result array by their deadlines

    result.sort((a, b) => a.deadline - b.deadline)

    for (const job of result) {
        console.log(job.job_id + " ");
    }
}
// Driver's Code

var arr = new Array();
(arr.push(new Job('a', 2, 100)) > 0);
(arr.push(new Job('b', 1, 19)) > 0);
(arr.push(new Job('c', 2, 27)) > 0);
(arr.push(new Job('d', 1, 25)) > 0);
(arr.push(new Job('e', 3, 15)) > 0);
console.log("Following is maximum profit sequence of jobs");
// Function call
printJobScheduling(arr);