https://www.youtube.com/watch?v=dxVcMDI7vyI
Minimum Platform 

https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/

This is same like Minimum Room Required for meeting 

Steps :- 

1. sort according to arrival time 
2. push 0th index train diparture time in min hip
    minHeap.Add(Arr[0][1])
3. for(let train index 1 to n ){
    const OldTrainDeparture=minHeap.top()
    //Remove Old Train 
    if (Arr[i][0] {Current train ka Arrival time} >= Old Train Ka diparture Time  ){
        minHeap.removeTop()
    }
    //Add current train ka diparture time 
    minHeap.Add(Arr[i][1])
}
