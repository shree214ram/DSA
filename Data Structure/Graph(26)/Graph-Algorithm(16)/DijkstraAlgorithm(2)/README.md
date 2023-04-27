https://www.youtube.com/watch?v=smHnz2RHJBY
6.13 Dijkstra Algorithm- single source shortest path| With example | Greedy Method
Jenny's lectures CS/IT NET&JRF
656K views
3 years ago

# Theory :- 
https://www.youtube.com/watch?v=Sj5Z-jaE2x0&ab_channel=TECHDOSE

# Code Implementation :- 
https://www.youtube.com/watch?v=t2d-XYuPfg0&ab_channel=TECHDOSE

### Approach1 :- {Adjency Metrics and  Linear serch O(V*V) V is vertex}
1. codeImplementation4Approach1.png :- Leaner Serch 
2. codeImplementation4Approach1_2.png :- Check every vertex in Adjency Matrics [2D ARRAY Metrics] So it will take unnecessory ittration and checks 
   1. Important Variable to be maintained 
      1. we  need to maintain visited Array
      2. We  neet to keep tracke of parent Array
      3. We  need Value Array 
   2. check condition will be so much complax 
   if(!visited && 
   graph[u][j] !=0 && 
   Value[U] != Number.MAX_VALUE && 
   Value[j] > Value[U] + graph[U][j]
   ){
      Value[j] = Value[U] + graph[U][j];
      Parent[j] = U
   }
### Approach2 :- {Adjency List and  Heap O(E*logV) V is vertex}
   #### Important Steps :-
   1. Heap {Priority Queue}
   2. Hash map

    codeImplementation5GFGSolution.js 

   1. Benifits of this approach :-
      1. we dont need to maintain visited Array
      2. We dont neet to keep tracke of parent Array
      3. We Only need Value Array 
   2. check condition will be so much simple 
   if( Value[j] > Value[U] + graph[U][j]){
      Value[j] = Value[U] + graph[U][j];
      Parent[j] = U
   }

