https://www.youtube.com/watch?v=bID397v7ja4
Job Sequencing Problem | Greedy | GFG | Love Babbar DSA Sheet | Amazon🔥🔥
CodeLibrary - by Yogesh & Shailesh
21K views
1 year ago

Best Explanation :- https://www.youtube.com/watch?v=LjPx4wQaRIs

#### First very important Task is that we need to understand the problem itself then solution 

###### Broute Force Method :- 
1. sort array according to profeet as our mind force to use Greedy Approach
2. pick first and try to set as last as possible like [1,2,100] {will set hundred to last deadline day like 2nd }
3. pick second and try to set as last as possible like [3, 2, 27] {will set 27 to last deadline day like 2nd but On second day 100 is already setup so will set it to 1 }
4. pick third,fourth,and fifth, But they are having a deadline on which already a Maximum Profitable Job is sequences .
   |   |
   1   2
 (27)   (100) 

let Arr = [
    [1,2,100],
    [2,1,19],
    [3,2,27],
    [4,1,25],
    [5,1,15]
]
//Sort Array
Arr.sort((a,b)=>a[2]-b[19])

[1, 2, 100]
[3, 2, 27]
[4, 1, 25]
[2, 1, 19]
[5, 1, 15]

const jobsMap = new Map()
const finalAnswer = 0
for(let i=0;i<Arr.length;i++){
    for(let j=Arr[1];j>0;j--){
        if(!jobsMap.get(j)){
            jobsMap.set(j,Arr[i][2])
            finalAnswer+=Arr[i][2]
        }
    }
}


====another sample =====
let Arr = [
    [6, 2, 80],
[3, 6, 70],
[7, 6, 65],
[2, 5, 60],
[5, 4, 25],
[8, 2, 22],
[1, 4, 20],
[7, 2, 10]
] 

Answer 322 
{0
: 
{2 => 80}
1
: 
{6 => 70}
2
: 
{5 => 65}
3
: 
{4 => 60}
4
: 
{3 => 24}
5
: 
{1 => 22}}

https://www.geeksforgeeks.org/job-sequencing-problem/

###### Max Heap Method :- 

Sort the jobs based on their deadlines.
Iterate from the end and calculate the available slots between every two consecutive deadlines. 
Insert the profit, deadline, and job ID of ith job in the max heap.
While the slots are available and there are jobs left in the max heap, include the job ID with maximum profit and deadline in the result.
Sort the result array based on their deadlines.