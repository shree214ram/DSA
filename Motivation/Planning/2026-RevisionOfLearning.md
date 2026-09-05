# DP
   1. Kanapsack (2d DP-> 1d DP pre)
    2. House Robber (2d DP->p1,p2)
    3. Interval gap stratgy Palingdrom 
        Substring Palingdrome (2d DP-> Center Around Expand)
        Subsequence  Palingdrome (2d DP, color full circle if equal > 2+ i+1 j-1 else i to j-1 + i+1 to j - i+1 to j-1)
        Dintinct (pre,next boundry check)
    4. Sequence DP : 2d dp 
    5. DP+Binary Search
    6. Dp+Bitmask

    1. Center expand around 
    2. KMP 
    3. tails approach binary search 300
    4. DP+ Binary Search next++ pre--

# Graph 

   5. DFS 
    6. BFS 
        Queue Snapshot water wave [head-Logic-BatterOptimised]

    Topology Sort (DFS+Stack)
    Khans Algo (BFS+Indegree)
    Indegree outdegree of Graph 
    Queue BFS + "Bidirectional" Word Ladder [BatterOptimised]

    "Queue Bucket" [] //792 matching SubSequence  [Queue / Multi-Pointer, with a note in your blueprint that it's a Hash Table of Queues optimization for multi-string searching]

Palingdrome : 
    mode method ["space modulo math approach"]
    Center Around Expand 

Find Duplicate : Floyd's tortoise and Hare Pattern 


Heap :- 
   1. Dutch National Algo Cycle slots 
   2. Window Sliding + Lazy Deletion 
   3. Cycle slot 
   4. Two Pointer + Binary Search 

Recursion and Backtrack :-
   1. K bucket Egg trey fillup 
   2. Center Move around expand
Center Around Expand:- 

    let max
    rec(l,r){
        while(l>=0 && r<=s.length && s[i]==s[j]){
            l--
            r++
        }
        if(r-l-1>max){
            max=r-l-1
            start=l+1
        }

    }

  for(){
    rec(i,i)
    rec(i,i+1)
  }




