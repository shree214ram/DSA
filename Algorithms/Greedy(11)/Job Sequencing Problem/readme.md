https://www.youtube.com/watch?v=bID397v7ja4
Job Sequencing Problem | Greedy | GFG | Love Babbar DSA Sheet | Amazon🔥🔥
CodeLibrary - by Yogesh & Shailesh
21K views
1 year ago

Best Explanation :- https://www.youtube.com/watch?v=LjPx4wQaRIs

#### First very important Task is that we need to understand the problem itself then solution 

###### Broute Force Method :- 
Time Complexity: O(N2)
Auxiliary Space: O(N)

1. sort array "desc" according to Profit and choose as our mind force to use Greedy Approach
2. pick first and try to set as last as possible like [1,2,100] {will set hundred to last deadline day like 2nd }
3. pick second and try to set as last as possible like [3, 2, 27] {will set 27 to last deadline day like 2nd but On second day 100 is already setup so will set it to 1 }
4. pick third,fourth,and fifth, But they are having a deadline on which already a Maximum Profitable Job is sequences .
   |   |
   1   2
 (27)   (100) 

According to max deadline so 2 is the heighest deadline day 

                |       | 
Deadline        1       2  
                (27)   (100) 

Answer ==> "127" 
{0
: 
{2 => 100}
1
: 
{1 => 27} // ye 27 hame karna tha 2 par , but 2 already Bhara hua he to ye jaruri nahi ki hum diye hue kam ko last day means deasline wale day par hi kare Hum use us time se pahle bhi kar sakte he To Humne use 1th day hi complete kar liye . Hamara Main 'Maksad' maximum Profit lana he . 
}

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
/*
Isko hum temp array se bhi kar sakte he 
temp = [] //[true, false,false]
if(not exist deadline day){
    set array[j] = true
}
*/
const finalAnswer = 0
for(let i=0;i<Arr.length;i++){
    for(let j=Arr[i][1];j>0;j--){
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
```
According to max deadline so 6 is the heighest deadline day 

                |       |       |       |       |       |
Deadline        1       2       3       4       5       6
                (22)   (80)    (24)   (60)    (65)   (70) 

Answer ==> "322" 
{0
: 
{2 => 80}
1
: 
{6 => 70}
2
: 
{5 => 65} // ye 65 hame karna tha 6 par , but 6 already Bhara hua he to ye jaruri nahi ki hum diye hue kam ko last day means deasline wale day par hi kare Hum use us time se pahle bhi kar sakte he To Humne use 5th day hi complete kar liye . Hamara Main Maksad maximum Profit lana he . 
3
: 
{4 => 60} // ye 60 hame karna tha 5 par , but 5 already Bhara hua he to ye jaruri nahi ki hum diye hue kam ko last day means deasline wale day par hi kare Hum use us time se pahle bhi kar sakte he To Humne use 4th day hi complete kar liye . Hamara Main Maksad maximum Profit lana he . 
4
: 
{3 => 24}
5
: 
{1 => 22}}
```
https://www.geeksforgeeks.org/job-sequencing-problem/

###### Max Heap Method :- 
Time Complexity: O(N log N)
Auxiliary Space: O(N)

Sort the jobs based on their deadlines.
Iterate from the end and calculate the available slots between every two consecutive deadlines. 
Insert the profit, deadline, and job ID of ith job in the max heap.
While the slots are available and there are jobs left in the max heap, include the job ID with maximum profit and deadline in the result.
Sort the result array based on their deadlines.

@sp latest study 
1. make Array with node {jobId,deadline,profit}
1. sort deadline asc
2. loop over last to first 
3. if(i>0){slot =A[i].deadline-A[i-1].deadline } if (i==0){slot = A[i].deadline}
5. Make Max Heap with mind "profit" 
6. insert default first deadline {which is Max Deadline as we have asc sorted and loop started from last to start}
7. while(until heap not empty And timeSlot > 0{bada he 0 means ke or jagah bachi hui he jisme hum or bhi Jobs ka Profit insert kar sakte he }) like [3(deadline of last (ith) deadline job) - 2(deadline of second last (i-1)th deadline job) = 1 ]

        [
            ('d', 1, 25)
            ('b', 1, 19),
            ('a', 2, 100),
            ('c', 2, 27),
            ('e', 3, 15),
        ]
        slot_available
        1              'i=' 4
        0              'i=' 3
        1              'i=' 2
        0              'i=' 1
        1              'i=' 0