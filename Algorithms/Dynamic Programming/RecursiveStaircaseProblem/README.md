// https://www.youtube.com/watch?v=ftpbBbtyxdE
// https://www.youtube.com/watch?v=Hr8HDhhSvZc

//https://gist.github.com/kanahaiya/9ab87eb465c0cb0e69b9358d50d75c6b

//https://www.geeksforgeeks.org/count-ways-reach-nth-stair/

Neetcode nice declare :- Climbing Stairs - Dynamic Programming - Leetcode 70 - Python
https://www.youtube.com/watch?v=Y0lT9Fck7qI

```
—
1 step
==
1

	———
—
2 step
===
1,1
2

		———
	———
—
3 step
===
1,1,1
1,2
2,1




				————
		———
	———
—
4 step
===
1,1,1,1
1,1,2
2,1,1
1,2,1
2,2


					————
			————
		———
	———
—
5 step
===
1,1,1,1,1
1,1,1,2
2,1,1,1
1,2,1,1
1,1,2,1
2,2,1
1,2,2
2,1,2


					————
				————
			————
		———
	———
——
6 step
===
1,1,1,1,1,1



2,1,1,1,1
1,2,1,1,1
1,1,2,1,1
1,1,1,2,1
1,1,1,1,2

2,2,1,1
1,2,2,1
1,1,2,2
2,1,1,2
1,2,1,2



2,2,2




n*n-1

1(1-1) = 0
2(2-1) =2
3(3-1) = 6

1, 2, 3, 5, 8, 12
```

1. BrouteForce-DFS
2. DP-Memoization
3. DP-Table
4. DP-Bottom-up
5. Code with 2 variable O(n)

### Recursive Solution 
1. we will think in reverse direction 
2. solve(n){
	// if only 2 way either 1 step or 2 
	if(n<=1) return n
	return solve(n-1) + solve(n-2)
	//But  if there are more than  2 way either 1 step or 2 step or 3 step or 4 step 
	//then we have to generalize the solution 
	let result =0
	for(let i=1;i<possiblewaysOfStep;i++){
		result+=solve(n-i)//i is the no of staires is used in sigle step like 1 or 2 or 3 staire in singl step
	}
}
