https://www.youtube.com/watch?v=cjWnW0hdF1Y
Neetcode :- Nice Explanation with Broute  force method 
Longest Increasing Subsequence - Dynamic Programming - Leetcode 300
Broute  force method :- DFS O(2^N) 

https://www.youtube.com/watch?v=mouCn3CFpgg

    5    8   7   1   9 

5,8, 9
5, 7, 9
1,9 

break inro sub problem 
reuse repeaded sub problem 

https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/


 

5    8   7   1   9 
|    |           |   = 3
     |           |   = 2
|        |       |   = 3
         |       |   = 2
             |   |   = 2
### Recursion Method :- 
1. call recursive function with initial value LIS(Arr,Arr.length) // suruat me total length hi 1 hoga 
   1. global variable FinalMaxLength = 1;
2. call Make a recursive function LIS(Arr,n)
3. 

in every recursive function again start from 0 to i and 
    //loop start by one for compare with previous one 0th index to n (means current Index)
    //let say i=1 then comparation will start like A[0] < A[1] 0 to 1 
    //let say i=2 then comparation will start like A[0] < A[2] 0 to 2   {0,1,2} 
    //let say i=3 then comparation will start like A[0] < A[2] 0 to 3   {0,1,2,3} 

    let OldIndexMaxLength = 1 ;

    for(i=1;i<n;i++){
        let currentIndexMaxLength = LIS(Arr,i) {i will be n in recursive function 2 means comparasion will be starts from 0 to 2}

        if(A[i-1] {i-1 means 1 index back like starts from 0 if i =1 , 1 if i=2} 
            < A[n-1] {n-1 means 1 index back like starts from 0 if i =1 , 1 if i=2} 
            && currentIndexMaxLength+1 > )
    }

### DP Method :- 
https://www.youtube.com/watch?v=aPQY__2H3tE

const A =[5   , 8  , 7 ,  1 ,  9 ]
//Step 1 :-Make DP 

    LIS = new Array[n].fill(0)
    for(let i=0;i<n;i++){
        LIS[i] = 1
    }
Step 2 :- Main logic is that 
//Hum log current index ki Array Value agar purane index ki Array value se badi he AND (DP value of current index ) < (purane wale ki DP value +1) se check karte he Agar ye dono true hoti he to currennt index ki DP value = (purane wale ki DP value +1) set karte he 
    //loop start i from 1 and 
    for(let i=1;i<n;i++){
        //second loop from 0 to i 
        for(let j=0;j<i;j++){
            //compare if (current element means 
        if(A[i] > A[j] && LIS[j]+1> LIS[i]){
            LIS[i] = LIS[j]+1
        }
        }
    }
//Step 3 :- return max value 
let max = 0
for(let i=0;i<n;i++){
        max = Math.max(LIS[i],max)
    }

    console.log("Longest Increasing Subsequence is ",max)
