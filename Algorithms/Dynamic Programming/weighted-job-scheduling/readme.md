https://www.geeksforgeeks.org/weighted-job-scheduling/

Given N jobs where every job is represented by following three elements of it.

Start Time
Finish Time
Profit or Value Associated (>= 0)
Find the maximum profit subset of jobs such that no two jobs in the subset overlap. 

Example: 

Input: Number of Jobs n = 4
       Job Details {Start Time, Finish Time, Profit}
       Job 1:  {1, 2, 50} 
       Job 2:  {3, 5, 20}
       Job 3:  {6, 19, 100}
       Job 4:  {2, 100, 200}
Output: The maximum profit is 250.
We can get the maximum profit by scheduling jobs 1 and 4.
Note that there is longer schedules possible Jobs 1, 2 and 3 
but the profit with this schedule is 20+50+100 which is less than 250.

//steps
1. sort via profit (NlogN)
2. pickup max one and set oldStart = start, oldEnd= end , MaxProfit = profit of first pickup
3. for next just check if (current end < old start && current start < current Add ) {maxProfit+=current profit}
Job 1:  {1, 2, 50} 
       Job 2:  {3, 5, 20}
       Job 3:  {6, 19, 100}
       Job 4:  {2, 100, 200}

A simple version of this problem is discussed {Job Sequencing and Acivity selection Greedy} where every job has the same profit or value. The Greedy Strategy for activity selection doesn’t work here as a schedule with more jobs may have smaller profit or value.


```
weighted-job-scheduling:- https://www.geeksforgeeks.org/weighted-job-scheduling can not use greedy because 
   1. there is no Deadline there 
   are start and end time with profit in {Job Sequencing Problem} :- Deadline and Profit was given 
   2. As like Activity selection there are start and end time But in this Problem {Profit is there }
   3. So this is the combination of Activity selection and Job Sequencing 
   [1. That will be done via Recursion {Max(Include current Job,Exclude current Job)}
    2. Or Dynamic Programming for optimal 
   ] 
```

#### Recursive Method to solve it :- 

1. Include 
2. Exclude 
3. Find the Max Profift after Include Or Exclude 

1) First sort jobs according to finish time.
2) Now apply following recursive process. 
   // Here arr[] is array of n jobs
   findMaximumProfit(arr[], n)
   {
     a) if (n == 1) return arr[0];
     b) Return the maximum of following two profits.
         (i) Maximum profit by excluding current job, i.e., 
             findMaximumProfit(arr, n-1)
         (ii) Maximum profit by including the current job  
              Important point we may have to findout the previous job which is not overlapping 
              so we will call a Lenear Serch function 
              where current element start time should be greater > than the previous job end time 
                 
   }

Note :- Important point we may have to findout 

##### Lenear Search function 
```
Find the latest job (in sorted array) that doesn't conflict with the job[i]. If there is no compatible job, then it returns -1
function latestNonConflict(arr, i){
     
    for(let j = i - 1; j >= 0; j--)
    {
        if(arr[j].finish <= arr[i - 1].start)
            return j
    }       
    return -1
}
```
#### Dynamic Programming Method with Lenear Search to solve it O(N*N):- 


The above solution may contain many overlapping subproblems. For example, if lastNonConflicting() always returns the previous job, then findMaxProfitRec(arr, n-1) is called twice and the time complexity becomes O(n*2n). As another example when lastNonConflicting() returns previous to the previous job, there are two recursive calls, for n-2 and n-1. In this example case, recursion becomes the same as Fibonacci Numbers. 

1. sort via end time 
2. Create DP = new Array(Arr.length).fill(null)
3. for(i=1 to n){
       1. Get Include = Arr[i-1].profit
       2. find latest l index {which has end time < current job start time }
              l = latestNonConflict(arr, n)
       3. if l is not equal to -1 than 
              Include += findMaxProfitRec(arr, l + 1) //In term of Recursion 
              Include += DP[l] //In term of Dynamic Programming 
       4. exclude = DP[l-1]
}

#### Dynamic Programming Method with Binary Search to solve it O(NlogN):- 

https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/

https://www.youtube.com/watch?v=V59YYFPN5KA

##### Binary Search function 
```
// A Binary Search based function to find the latest job
// (before current job) that doesn't conflict with current
// job. "index" is index of the current job. This function
// returns -1 if all jobs before index conflict with it.
// The array jobs[] is sorted in increasing order of finish
// time.
function binarySearch(Arr, i){
 
    // Initialize 'low' and 'high' for Binary Search
    let low = 0
    let high = i - 1
 
    // Perform binary Search iteratively
    while(low <= high){
        let mid = Math.floor((low + high) /2);
        if (Arr[mid].finish <= Arr[i].start){
            if(Arr[mid + 1].finish <= Arr[i].start)
                low = mid + 1
            else
                return mid
        }
        else
            high = mid - 1
    }
 
    return -1
 
}
```