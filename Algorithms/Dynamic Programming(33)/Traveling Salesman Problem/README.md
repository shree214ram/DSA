https://www.youtube.com/watch?v=hh-uFQ-MGfw
Traveling Salesman Problem using Dynamic Programming | DAA
Jenny's lectures CS/IT NET&JRF
197K views
3 years ago


Naive Solution:-
``` 
1) Consider city 1 as the starting and ending point.

2) Generate all (n-1)! Permutations of cities. 

3) Calculate the cost of every permutation and keep track of the minimum cost permutation. 

4) Return the permutation with minimum cost. 

Time Complexity: "Θ(n!)" 
```
Dynamic Programming: 
See Image Screenshot DynamicProgrammingSolution.png 

1. If we go from top to bottom there will be so much high time complxity 
2. Dynamic Programming :- If we will go from Bottom to top So there are so many sub problem result can be reuse for saving time complaxity 
   1) we will store the result of sub problem in DP 

Formula :-  C(S, i) = min { C(S-{i}, j) + dis(j, i) }

Time Compaxity :- O(n2*2n) 


