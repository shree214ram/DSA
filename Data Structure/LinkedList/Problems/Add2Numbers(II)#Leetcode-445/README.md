// https://www.youtube.com/watch?v=5YqQDKobpGI
```
        7       2       4        3
    +
                5       6       4
        ------------------------------------
    =
        7       8      0        7
    < --------------------- Addition
```
Note: - In this problem 2 linklist are not possible because LIFO(Last in and first out) required for Addition. 
 3 in the first list added as a last element and 4 as a last element in second list
so for that 2 "stacks" are required

    | 3 |      |   |
    | 4 |      | 4 |
    | 2 |      | 6 |
    | 7 |      | 5 |
    ------           ------
        
Steps: -
1. will make  S1 and S2 are 2 stacks.
2. We will make a new Linked List
3. we will ittrate loop untill S1 Or S2 size not equal to 0 Or carry value is not null
3. in loop we will create a fresh sum and in which we will Add S1[currentData] in fresh sum  and remove same from Stack(Pop()) and
Add S2[currentData] in fresh sum  and remove same from Stack(Pop()).
4. Assign that's Mod value to next of result and Assign carry value to CarryValue variable 
10
1       0
carry   mod