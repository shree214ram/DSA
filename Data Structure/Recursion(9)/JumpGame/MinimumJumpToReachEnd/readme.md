### Dynamic Programming and recursion Solution Approach (Sunny):-
1. we will go to every index and then we will check for how many ways we can go to next indexes 
like  A = [1, 3, 2, 1, 5, 9] index 1 and value = 3 means we can go to next 3 types 
    1. index 1 to index 4 using value 3 in 1 jump
    2. index 1 to index 3 using value 2 in 1 jump
    3. index 1 to index 2 using value 1 in 1 jump
2. but we will compare on each destination index which is the minimum steps taken process we will select that one 
### Optimal Solution 
1. first i saw this vedio https://www.youtube.com/watch?v=CqgK_qi4SKQ&ab_channel=Yogesh%26Shailesh%28CodeLibrary%29 but not able to understand properly 

2. Then this a very nice explanation with code dry run https://www.youtube.com/watch?v=5Du2iSRrbEw&ab_channel=FriendlyDeveloper

3 variable method 
1. jump 
2. steps
3. MaximumRechable 