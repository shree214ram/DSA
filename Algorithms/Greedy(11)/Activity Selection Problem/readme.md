https://www.youtube.com/watch?v=AsbDqOauGZE
Activity Selection Problem | Greedy | GFG | Love Babbar DSA Sheet🔥🔥

https://www.youtube.com/watch?v=w1t_ZDwLPwg
There are so many activity given with start and end time , we have to findound max activity ?

Solution 
const Arr = [[1,4],[5,6],[3,4],[4,7],[4,5],[1,3],[1,2]]
1. sort via end time 
const sorted array  = [[1,2], [1,3],[1,4],[3,4],[4,5],[5,6],[4,7]]
2. old = [1,2] , push first activity directelly in result array resultArray.push(old)
2. for loop
    if (currelement start date if greater than Or Equal to old end time ){
        resultArray.push(currelement)
        old = currelement
    }

//output will be 4
