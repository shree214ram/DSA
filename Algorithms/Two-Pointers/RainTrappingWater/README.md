### Rain Trapping Water Problem :- 
//https://www.geeksforgeeks.org/trapping-rain-water/
 
//https://www.youtube.com/watch?v=FbGG2qpNp4U

https://www.youtube.com/watch?v=m18Hntz4go8

1. Naive Solution:

Approach: 

2. Efficient Solution:

Approach: 

https://www.youtube.com/watch?v=C8UjlJZsHBw
Trapping Rainwater Problem | Leetcode #42
TECH DOSE
55K views
1 year ago


https://www.geeksforgeeks.org/trapping-rain-water/
Main Logic :- Hame left max nikalna padta he and right max , and Dono ka jo min hota he usko final Minimum man kar usme se current element ki height ko minus karte he to water level nikal aata he current building ka 
### 1. Navie Approach O(N*N),O(1)
    2 for loop :- 1 for outer for all elements of array second for set left Max and right Max 
    for(i=1){
        left = A[i]
        for(let j=0;j<i;i++){
            left = Math.max(left,A[j])
        }
        right = A[i]
        for(let j=i+1;j<n;i++){
            right = Math.max(right,A[j])
        }
        res+=Math.min(left,right)-A[i]
    }
### 2. Otimal Solution O(N),O(N):- (Pre Calculation of Left and right values in 2 different array)
    pura code upper wala hi hota he bus hum 2 for loop ki jagah 1 loop ittrate karte he 
    and Precalculation (Pahle se hi) karke leftMax and rightMax Nikal lete he 
    left[0] = A[0]
    for(let j=1;j<i;i++){
        left = Math.max(left[j-1],A[j])
    }
    right[n-1] = A[n-1]
    for(let j=n-2;j>=0;i++){
        right = Math.max(right[j+1],A[j])
    }
    for(i=0){
        res+=Math.min(left[i],right[i])-A[i]
    }
### 3. Batter Optimal Solution O(N),O(1) :- Two pointer 
    leftMax
    rightMax
    leftPointer
    rightPointer

    while(leftPointer<rightPointer){
        if(leftMax<rightMax){
            if(bich ka koi array element height leftMax se badi ho jaye ){
                no water increement
                only leftMax= Array[i]{current element height}
            } else {
                water increment
            }
        } else {

        }
    }
 product 

    Or samajhna padega Deep me 