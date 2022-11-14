Fibonacci Number
Dynamic Programming with "fibonacci series"
https://www.youtube.com/watch?v=lVR2u9lsxl8

https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/?ref=leftbar-rightbar


# Program for Fibonacci numbers

```
The Fibonacci numbers are the numbers in the following integer sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..

In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation 

Fn = Fn-1 + Fn-2
with seed values 

F0 = 0 and F1 = 1.


Given a number n, print n-th Fibonacci Number. 

Examples: 

Input  : n = 2
Output : 1

Input  : n = 9
Output : 34

Write a function int fib(int n) that returns Fn. For example, if n = 0, then fib() should return 0. If n = 1, then it should return 1. For n > 1, it should return Fn-1 + Fn-2

For n = 9
Output:34
Following are different methods to get the nth Fibonacci number. 
```
### Method 1 (Use recursion) 
A simple method that is a direct recursive implementation mathematical recurrence relation is given above.

```
<script>
//Fibonacci Series using Recursion
	let n = 9;
	
	// function returns the Fibonacci number
	function fib(n) {
	if (n <= 1)
		return n;
	return fib(n-1) + fib(n-2);
}

	//function call
	document.write(fib(n));
//This code is contributed by Surbhi Tyagi
</script>
```
##### Time Complexity: T(n) = T(n) which is linear. 

If the original recursion tree were to be implemented then this would have been the tree but now for n times the recursion function is called

Original tree for recursion

```
                            fib(5)   
                     /                \
               fib(4)                fib(3)   
             /        \              /       \ 
         fib(3)      fib(2)         fib(2)   fib(1)
        /    \       /    \        /      \
  fib(2)   fib(1)  fib(1) fib(0) fib(1) fib(0)
  /     \
fib(1) fib(0)

```

##### Extra Space: O(n) if we consider the function call stack size, otherwise O(1).

### Method 2 (Use Dynamic Programming) 
We can avoid the repeated work done in method 1 by storing the Fibonacci numbers calculated so far. 

```
<script>

// Fibonacci Series using Dynamic Programming

	function fib(n)
	{
		/* Declare an array to store Fibonacci numbers. */
		let f = new Array(n+2); // 1 extra to handle case, n = 0
		let i;
		/* 0th and 1st number of the series are 0 and 1*/
		f[0] = 0;
		f[1] = 1;
		for (i = 2; i <= n; i++)
		{
			/* Add the previous 2 numbers in the series
			and store it */
			f[i] = f[i-1] + f[i-2];
		}
		return f[n];
	}
	let n=9;
	document.write(fib(n));
	
	// This code is contributed by avanitrachhadiya2155
	
</script>
```