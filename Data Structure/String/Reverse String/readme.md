https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/

<p>
<img src="reverse.jpeg">
</br>
</p>

# Approach 1:- 
1. ittrative method :-
   1. Ittrate a for loop 
   2. Initialize a start at 0 and end to n-1
   3. while loop till start < end
   4. increment start++ and decrement end --

2. recurcive method :-
   1. make a recurcive function with 2 variable start and end (Default :- start at 0 and end to n-1)
   2. increment start++ and decrement end --
   3. if( start < end) call recurcive function(start,end)
