class GFG
{
    // a class to represent job
    class Job
    {
        job_id = ' ';
        deadline = 0;
        profit = 0;
        constructor(job_id, deadline, profit)
        {
            this.deadline = deadline;
            this.job_id = job_id;
            this.profit = profit;
        }
    }
    static printJobScheduling(arr)
    {
        var n = arr.length;
        // sorting the array on the
        // basis of their deadlines
        Collections.sort(arr,(a,b)->
        return a.deadline - b.deadline;
);
        // initialise the result array and maxHeap
        var result = new Array();
        var maxHeap = java.util.PriorityQueue((a,b)->
        return b.profit - a.profit;
);
        // starting the iteration from the end
        for (i; i > -1; i--)
        {
            var slot_available = 0;
            // calculate slots between two deadlines
            if (i == 0)
            {
                slot_available = arr[i].deadline;
            }
            else 
            {
                slot_available = arr[i].deadline - arr[i - 1].deadline;
            }
            // include the profit of job(as priority),
            // deadline and job_id in maxHeap
            maxHeap.add(arr[i]);
            while (slot_available > 0 && maxHeap.size() > 0)
            {
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
        Collections.sort(result,(a,b)->
        return a.deadline - b.deadline;
);
        for ( const  job of result) {
        console.log(job.job_id + " ");
}
        console.log();
    }
    // Driver's Code
    static main(args)
    {
        var arr = new Array();
        (arr.push(new GFG.Job('a', 2, 100)) > 0);
        (arr.push(new GFG.Job('b', 1, 19)) > 0);
        (arr.push(new GFG.Job('c', 2, 27)) > 0);
        (arr.push(new GFG.Job('d', 1, 25)) > 0);
        (arr.push(new GFG.Job('e', 3, 15)) > 0);
        console.log("Following is maximum profit sequence of jobs");
        // Function call
        GFG.printJobScheduling(arr);
    }
}
GFG.main([]);