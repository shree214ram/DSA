// https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/

// https://www.youtube.com/watch?v=5co5Gvp_-S0


Basically there are 2 methods 
1. Itrate 2 times loop:-
    But it will take 
2. Hash Map  :- 
    1. First Create Hash map array with key value at every index value of string
    
    2. if ith character is already existing than 
        put value = old value of ith index charactre + 1 
       other wise put value = 1 
       
    2. now itrate the hash map and check which periculer key has value 1 then return key (which is result)
