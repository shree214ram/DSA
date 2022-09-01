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
    ##### 2 for loop and one hash map for check duplicate
2. Window Sliding Method :- 
    It takes o(n2) time compaxity 
    1. varibale type of window 
    2. if duplicate found 
    ##### 2 for loop and inside second loop one hash map for check duplicate, if found repeated Break inner loop 
3. Window Sliding Method o(n):- 
    It takes o(n) time compaxity 
    1. varibale type of window 
    2. if duplicate found
    3. remove from left untill repaeted indwx not found 
    4. A B C D D E F
    5. we will remove Till First D  and update max nonRepeating is 4 {A B C D}
    ##### 1 for loop and 1 test string {if test string contains current element so remove all the elements from start to till current charactrer like ABCD and new element id D so we will remove ABCD and new test string will start by D But max = Math.max(Test.length,max) already 4 updated he ABCD ke time so it will remain same and result will be 1 . 
 
