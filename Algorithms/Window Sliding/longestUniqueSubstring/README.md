// https://www.geeksforgeeks.org/window-sliding-technique/
//https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/


https://www.youtube.com/watch?v=wiGpQwVHdE0 
Neetcode 


https://www.youtube.com/watch?v=L6cffskouPQ


Set map with current window 


k = size of sub sequent 
n = size of array

Basically there are 3 methods 
1. Itrate 3 times loop:-
    It takes o(n ^3) time compaxity
2. Window Sliding Method :- 
    It takes o(n2) time compaxity 
    1. varibale type of window 
    2. if duplicate found 
3. Window Sliding Method o(n):- 
    It takes o(n) time compaxity 
    1. varibale type of window 
    2. if duplicate found
    3. remove from left untill repaeted indwx not found 
    4. A B C D D E F
    5. we will remove Till First D  and update max nonRepeating is 4 {A B C D}
    

   

