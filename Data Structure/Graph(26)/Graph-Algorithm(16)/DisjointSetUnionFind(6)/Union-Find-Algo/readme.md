https://www.geeksforgeeks.org/disjoint-set-data-structures/

Applications of Disjoint set Union: Rank & Path comparation 

1. Kruskal’s Minimum Spanning Tree Algorithm.
2. Job Sequencing Problem.
3. Cycle Detection
4. Number of pairs
5. City With the Smallest Number of Neighbors at a Threshold Distance	
6. Connected Component for undirected graph using Disjoint Set Union 
    https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/
7. https://www.geeksforgeeks.org/find-the-number-of-islands-set-2-using-disjoint-set/


Related Articles: 
Union-Find Algorithm | Set 1 (Detect Cycle in an Undirected Graph) 
Union-Find Algorithm | Set 2 (Union By Rank and Path Compression)

https://www.youtube.com/watch?v=Kptz-NVA2RE&ab_channel=AnujBhaiya 
Good explanation 

### Introduction :- 

1. Union :- join 2 vertex in one set
2. Find :- find 2 vertex in single set or not 
 
     0       1        7

4        3        2

    5        6

    union(0,1)    will make 0 and 1 in single set 
    union(2,7)    will make 2 and 7 in single set 
    union(3,6)    will make 3 and 6 in single set 

    find(0,2)     will print "false" because they are not in single set

    union(0,7)    will make 0 and 7 in single set and because of that  (0,1) and (2,7) will combine in single Set (0,1,2,7)

    find(0,2)     Now it will print "true" because they are in single set 


    0 ---> 1 , 7, 2 {Jo hum yaha dal rahe he vo 7 me bhi same dalne honge except 7}
    1 ---> 0
    2 ---> 7
    3 ---> 6
    4 ---> 
    5 ---> 
    6 ---> 
    7 ---> 2, 0, 1

### Important methods :- 

    find(x){
        if(P[x] == x) return x 
        return find(P[x]) // Recursion for finding parent 
    }

    union(a,b){
        x=find(a)
        y=find(b)
        if(x==y){
            return
        }
        P[y] = x
    }

3. Rank :- Time complaxity is equal to height of tree , which is used in recursion function from leaf to root , so we can reduce time complaxity with the help of reduce height of tree . 

            1(height = 3)
           /
          2(height = 2)
         /
        3(height = 1)
       /
      4(height = 0)    


            5(height = 1)
            \
            6(height = 0)
         

         Union function me hum bina computation ke dusre ka parent pahle ko de dete the . 

         to is hisab se 1 ka parent 5 ho jayega and 1 more timr traverse karna padega 

         Note :- Yadi hum Rank ka use kare to ye problem solve ho jayegi 
      
