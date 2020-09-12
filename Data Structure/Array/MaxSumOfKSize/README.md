// https://www.geeksforgeeks.org/window-sliding-technique/
k = size of sub sequent 
n = size of array

Basically there are 2 methods 
1. Itrate k times loop:-
    It takes o(n to the power of k) time compaxity
2. Window Sliding Method :- 
    It takes o(n) time compaxity 
    1. increase the index one by one after k subsequesnt  {1, 2, 3} and find current sum 
    2. First for loop for find the first Max sum 
       max sum = 0
       for (i = 0; i< k ; i++){
           max sum += Array[i] 
       }
    2. Loop will start 
       for (i = k; i< n ; k++)
    2. compare current sum with Old max Sum 
       1. if current sum < Old Max , then dont change Max Sum 
       2. If current sum > Old Max then change Max Sum like 
          Max sum = max sum + Array[i] - Array [i - k]
    

