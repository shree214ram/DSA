take reference of my DP master sheet , and make a new Sheet specific for our "Master Graph Stusy Tracking" : i am giving u the work what we did ----------------------------Graphs
27
Number of Islands (L200)
Medium
Done at Leetcode at 3rd attempt and 4 hints but need one more revision 
28
Clone Graph (L133)
Medium
Wrote from own but failed then seen the Solution need to Revisit
29
Course Schedule (L207)
Medium
Find circle in directed graph, first tried by own but wrong ,understood but need to implement Second attempt: Failed today because i did same mistake followed the same 2D array strategy even here AdjacencyTechnique i should follow .I will try third attempt tomorrow    
30
Pacific Atlantic Water Flow (L417)
Medium
Tried once on my own and failed with 85% code . Need to revisit
31
Rotting Oranges (L994)
Medium
Is in progress, 2 times tried but not able to write the code in 45 min Need one more attempt
32
Word Ladder (L127)
Hard
Not Started
33
Alien Dictionary (LeetCode Premium / LintCode)
Hard
Not Started========  # 4-7 June 

1. Schedule the course Or detect cycle in Drected Graph 207 [notDone]
2. Detect cycle in Undirected graph [notDone]
3. Color the Graph 1034 [notDone]
3. No of Iland 200 [notDone]===# 8 June 

1. 2 Big Graph Problem [Iland-Rotten] [HIGH]
    1. Ilan [withHelpOf4HintWorkedButNoHire]
    2. Rotten =====
# 9Nune 
1. Iland 
2. Rotten 
3. Clone Graph ===
# 10 
1. Graph Problems ===
# 10-12 June====# 14 June 
Graph Problems 
1. maximum distance from water to land [BFSQueueSnapShotLogic] [DONEIn3RdAttempt]
2. Minimum count Word Ladder [Done3RdAttempt]===== # July 3 
    1. Revision of Graph [DONE]
    2. 417 Revisit [NeedToRevisit]
    3. uniquePaths Leetcode 62 Rate in Maze [NeedtoRevisit]
    3. Word Ladder Leetcode 127  [NeedtoRevisit] [DoneButTookSomeExtraTime]
    3. Chepest Fligh Leetcode 787  [NeedtoRevisit] [oneTimeAttemptFailed]===# July 5
    1. Chepest Fligh Leetcode 787  [NeedtoRevisit] [SecondTimeAttemptFailed]=====# 3 August >   Topological Sort, Dijkstr:-
        1. Revision of Topological Sort {DFS+Stack+Detect Cycle DAG }
        2. Revision of Course schedule 1
        3. Revision of Course schedule 2 
        4. Khans algo===== 4 August -> Revisit of Complete all the node [DONE]
Longest Increasing Subs sequence [NeedToRevisit]
courece sheculde 1 with detect cyle  [DoneButNeedToRevisitAsBasicTemplatewasNotWrittenCorrect]
courece sheculde 2 with khan [TomorowAgainTryWithKhansAlgo]===

# 05 August 
1. course schedule 2 by Khans BFS done [needOneMoreRevisyt]
2. Find In and Out Degree concept [ReviseOfTopology]
3. 1557 : minimum number of nodes for reach other Nodes[ItsKindOfInOutButHereDirectGiven---u->v-sodirect-we-can-make]
[FindOutOneOptimizationForUint8Array,simpleittration,simplearrayvaluechangeOverallMemoryAllocationGame]
4. Rotten Orange with More FAANG optimization [atplaceofusingthetempArrayassignmentWeShouldUsecounter,reduceFresh,inWhileLoopHeadCheckWithQueueLengthAndFreshAvailable]

5. Chepest Fligh : when i am comparing with your last time solution around july 3 to 10 , i missed 1. memoization and 2. missed the immidiettely brak the loop if we reached the destination , 3. i followed the water wave logic but for get to keep while loop til wave<k+1 , 4. in Adjency list i did little mistake I should make destination + cost also save in adjency list so no need to mainitain the costArray , 5. in memoisation we replace only when if (nextCost < memo[neighbor]) { . Apart from it Any mistake . I think Basic Template like BFS + water wave snapshpot + Adjency list + cost minimum replace ment I think more than 30% I wrote correctelly ? what did u say ? one line [NeedToRevist]=====
# 06 August 
1. L792 : find the count of substring matched in wordlist [Queue-Bucket] [NeeToRevist]
2. Word Ladddr [SolvedWith3HintWithBFS] [LearntNeBiduerctional]
    Lernt js solid way to prepare a..z array 
    Uint8Array
    Head technique 
    const nextWord = word.slice(0, i) + 
                        String.fromCharCode(c) + 
                        word.slice(i + 1);


 
# 7 August 
Tomorrow'sPlan: 
1. L792 [DoneButTookLotTimeToDebug] [totalCompleteNewPatternQueueBucketDrainAndRefillNextIndex]
2. Word Ladder with Bidirectional Method for Optimised way [TriedBidirectionalMethodButFullyNotAbletoWriteNeedtoAgainTry] [NeedToRevist]
3. 1162 As far from Land [findOptimizationLike1.Head2.selfPlace]
4. cource 2 with khan [NeedToRevist] [DONE]

# 8th August 
1. Detect cycle in Directed Graph cource 2 with khan [NeedToRevist] [DONE]
2. Detect cycle in Undirected Graph
    1. BFS [NeedToImplement]
    2. DFS [NeedToImplement]

3. Diskja Algo 
    1. DFS [3Array-1.Parent,2.Visited,3.Value] [understoodButV*VSoSkippedImplementation]
    1. BFS Priority Queue [(V+E)logv]
    2. $O((V+E)\log V)$), and the top must-know FAANG problems for this pattern are 

    Chepest Flights Within K Stops (LeetCode 787), 
    Path with Maximum Probability (LeetCode 1514), 
    Swim in Rising Water (LeetCode 778), 
    and Shortest Path in Binary Matrix (LeetCode 1091).

    Look for specific graph structure and constraint keywords: 
    use Topological Sort + DP if the graph is a DAG; 
    use BFS + Bitmask DP if you must visit all nodes/cities (Travelling Salesperson, $N \le 15$); and use Dijkstra if finding the shortest path between nodes on a weighted graph with non-negative edges.

    Yes, Dijkstra always requires a starting **source node**, and optionally a **destination node** (to stop early once reached) or it will compute the shortest distance from that source to *all* reachable nodes in the graph.


# 9th August
Tomorrows Plan :- 

1. Detect cycle in Undirected Graph will take any Important faang question for Practice below concept
    1. BFS [NeedToImplement]
    2. DFS [NeedToImplement]
2. Network Delay Time Leetcode #743 [TriedButNotAbleTowriteFromOwn=NeedToRevist] [DiskjaAlgoRivision]
3. Longest/Shortest Path in a Directed Acyclic Graph
4. Studied :- DisJoint Union Set | Rank | 
5. Revised Diskja in 743 Problem 


# 10 nAugust 

1. Quick and Merge Sort Algo practice
2. Network Delay Time Leetcode #743 [Wrote80%NeedToRevist] [Diskjs-BFS-PriorityQueue]
3. Cheapest Flight 787 [AttemptedButConfussedFromBidirectionalExpansionFromWordLadder-NeedToRevist] [QsnapShotBFS] [DoneinFourthAttempt]
4. Revision Of Iland Problem with little veriation , at place of 4 direction check in 8 direction like 


# 11 
   Automation [******]
    Drone Problem [NeedToRevist]


# 12 

1. Krsuskals Algo 
2. Prims Algo 
   ATM Machine [***MONEY***] : Need to think how the Money would come from my work
   

# 13
   1. heap sort practice [someErrors] 
    2. Range Problem 632 tried but Failed [NeedToRevist]

  

# 14 
1. Revision of krushkal/DisjointSet/ and worked for 1584 [NeedToRevist]
2. Revision of Diskja/Prims 
3. Bellman ford 
4. 1042 New Algo Coloring the Graph [TotalNewAlgoNeedToRevist]
3. Graph Document and Tracking sheet [notDone]
4. 743 and 787 [NeedToRevist]

Important Instruction :-
1. Follow the DP sheet and make the same type of document with same attempts -dates , stuts and all coulm with Main Distinguish With Pattern same we did in DP Shreet 
2. Please add if any FAANG important Pattern Or problem if we missed with No work (ned to work)
3. As per above daily status u can check how many attempts I tried and If u feel like I should More focus for Real Interview expectation u can add some description and change the color like Red ,
If already attempt 3 to 4 times but still need practice Orange , If Solid then Green 
4. Last 3 yr back column , Ststus , Priority and Task difficulty level like Simple/Medim/Hard
5. If any thing i am missing add from your side as per dp sheet 