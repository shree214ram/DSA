Problem
Read problem statements in Hindi, Bengali, Mandarin Chinese, Russian, and Vietnamese as well.
Elections are coming soon. This year, two candidates passed to the final stage. One candidate is John Jackson and his opponent is Jack Johnson.

During the elections, everyone can vote for their favourite candidate, but no one can vote for both candidates. Then, packs of votes which went to the same candidate are formed. You know that for John Jackson, there are NN packs containing A_1, A_2, \ldots, A_NA 
1
​
 ,A 
2
​
 ,…,A 
N
​
  votes, and for Jack Johnson, there are MM packs containing B_1, B_2, \ldots, B_MB 
1
​
 ,B 
2
​
 ,…,B 
M
​
  votes.

The winner is the candidate that has strictly more votes than the other candidate; if both have the same number of votes, there is no winner. You are a friend of John Jackson and you want to help him win. To do that, you may perform the following operation any number of times (including zero): choose two packs of votes that currently belong to different candidates and swap them, i.e. change the votes in each of these packs so that they would go to the other candidate.

You are very careful, so you want to perform as few swaps as possible. Find the smallest number of operations you need to perform or determine that it is impossible to make John Jackson win.

Input
The first line of the input contains a single integer TT denoting the number of test cases. The description of TT test cases follows.
The first line of each test case contains two space-separated integers NN and MM.
The second line contains NN space-separated integers A_1, A_2, \ldots, A_NA 
1
​
 ,A 
2
​
 ,…,A 
N
​
 .
The third line contains MM space-separated integers B_1, B_2, \ldots, B_MB 
1
​
 ,B 
2
​
 ,…,B 
M
​
 .
Output
For each test case, print a single line containing one integer ― the smallest number of swaps needed to make John Jackson win, or -1−1 if it is impossible.

Constraints
1 \leq T \leq 10^31≤T≤10 
3
 
1 \le N, M \leq 10^31≤N,M≤10 
3
 
1 \leq A_i \leq 10^61≤A 
i
​
 ≤10 
6
  for each valid ii
1 \leq B_i \leq 10^61≤B 
i
​
 ≤10 
6
  for each valid ii
the sum of NN over all test cases does not exceed 10^410 
4
 
the sum of MM over all test cases does not exceed 10^410 
4
 
Subtasks
Subtask #1 (20 points):

A_1 = A_2 = \ldots = A_NA 
1
​
 =A 
2
​
 =…=A 
N
​
 
B_1 = B_2 = \ldots = B_MB 
1
​
 =B 
2
​
 =…=B 
M
​
 
Subtask #2 (80 points): original constraints

Sample 1:
Input
Output
2
2 3
2 2
5 5 5
4 3
1 3 2 4
6 7 8
2
1
Explanation:
Example case 1: We can perform two swaps ? each time, we swap a pack of 22 votes from AA and a pack of 55 votes from BB. After that, John Jackson gets 5+5 = 105+5=10 votes and Jack Johnson gets 2+2+5 = 92+2+5=9 votes.

Example case 2: We can swap the pack of 11 vote from AA and the pack of 88 votes from BB. After that, John Jackson gets 8+3+2+4 = 178+3+2+4=17 votes and Jack Johnson gets 6 + 7 + 1 = 146+7+1=14 votes.