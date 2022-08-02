
https://www.youtube.com/watch?v=BQ9E-2umSWc
Rolling hash | Rabin karp algorithm | Pattern searching

text = [A A B A A C B A A ]
pattern = [B A A] 

1. Broute force method :-
   1. we can take a window size of equal to the pattern size [A A B]
   2. we can match every character in string [A A B A A C B A A ] one by one with current window elements [B A A] if no match change the window 
   3. which will take O( length of string N * Length of pattern M )
2. KMP Algorithm Or alternative Approach is Rolling Hash :-
   