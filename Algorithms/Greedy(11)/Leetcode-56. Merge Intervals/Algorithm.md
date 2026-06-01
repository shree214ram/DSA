Algorithm 

1. sort 
2. store the Oth element in Result variable
3. for loop from 1 to n 
    {
        check if result last element's end point overlap with currents Start Point then 
        Replace Result Last end with Max()
        like [[1,2],[1,4]  ]
        result=[[1,2]] last time 
        then we will update last=result[result.length-1]
        last[1]=Math.max(current[1],last[1])
    }
    