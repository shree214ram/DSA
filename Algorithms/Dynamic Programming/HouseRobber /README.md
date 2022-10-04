// https://www.youtube.com/results?search_query=house+robber+
//https://www.youtube.com/watch?v=ge_Fv2ZQAaE

//https://gist.github.com/kanahaiya/165f20458cd63351efbc53ace4577181

//https://www.geeksforgeeks.org/find-maximum-possible-stolen-value-houses/

##### Steps :- 
###### Recursion
const Arr = [2,7,9,3,1]

1. will start by end 
2. there are 2 possibility 
    1. if we will select current
        //self add and recursive function for next element which will skip next 
        // i have selected 1 from last the A[n] + solve(Arr,n-2) n-2 means 9
        Pickedup=Arr[n] + solve(Arr,n-2)

    2. if we will not select current
        // i have not selected 1 and selected 3 then not add any thing and call recursive function for n-1 means "3"
         NotPickedup=solve(Arr,n-1)
3. Print Math.max(NotPickedup,Pickedup) // this will return max value 

Time Complexity:  O(2N). Every element has 2 choices to pick and not pick
Space Complexity: O(2N). A recursion stack space is required of size 2n, so space complexity is O(2N).

###### DP {Reduce time compaxity and sapce also }
all the steps will be remain same only a small difference will be added here 

1. define DP 
2. send DP in solve function 
    solve(Arr,n,DP)
3. check if (DP[n]!==-1){
    return DP[n]
}


Time Complexity: O(n) . Only one traversal of original array is needed. So the time complexity is O(n)
Space Complexity:  O(n). Recursive stack space is required of size n, so space complexity is O(n).