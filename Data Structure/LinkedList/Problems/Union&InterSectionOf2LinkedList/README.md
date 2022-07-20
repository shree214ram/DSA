https://www.geeksforgeeks.org/union-and-intersection-of-two-linked-lists/

1. Navie Approach O(n^2+m^2):-
   Union :-
   1. ittrate 2 for loop 
   2. create empty result array
   3. insert one by one every element from first and second list via while loop one by one 
   4. while (node.next!==null)

   Intersection :-
   1. ittrate 2 for loop 
   2. create empty result array
   3. check one by one every element from first and second list via while loop one by one , if exist then insert into result list .
   4. while (node.next!==null)

2. merge sort  O(nlogn+mlogm):-
   Union :-
   1. Sort arrays via merge sort and Linear Search 
   2. create empty result array
   3. insert one by one every element from first and second list via while loop one by one 
   4. while (node.next!==null)

   Intersection :-
   1. Sort arrays via merge sort and Linear Search 
   2. create empty result array
   3. check one by one every element from first and second list via while loop one by one , if exist then insert into result list .
   4. while (node.next!==null)

3. Hashing  O(n+m):-
   Union :-
   1. Empty Resuly array and Create a empty hash table 
   2. insert one by one every element from first list and also check from second list item 
   3. if not exist in "hash table" then insert in Result 

   Intersection :-
   1. Empty Resuly array and Create a empty hash table 
   2. insert one by one every element from first list in hash table and also check from second list item 
   3. if exist in 'hash table" then insert in Result 
   
we will have to understand  Hash Map and Has Set Internal functionality :- 

https://www.youtube.com/watch?v=CojCE-ojdGY


1. we will have to understand the Has map put 
2. Has set contains Has set add
 