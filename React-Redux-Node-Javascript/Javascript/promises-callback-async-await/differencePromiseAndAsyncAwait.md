# Differences between promises and async/await
Note: The list below can be matched with the numbers described below.

Promises
1. A promise represents a process that guaranteed to complete the execution.

2. Promises have 3 states, these states are pending, resolved, and rejected.

3. If the promise is chained with .then(), that continues the execution after adding the function to the callback chain.

4. Error handling can be done with .then() and .catch() methods.

5. Promise chaining can be difficult to understand and follow.

6. Debugging can be very tricky with multiple promise chaining.

7. Promises can be used for multiple promises in the promise chaining.

Async/Await
1. Async await is syntactic sugar for promises. Making code looks like executed synchronously.

2. Async await does not have states. Async functions return a promise. This promise state can be either resolved or rejected.

3. Await suspends the called function execution until the promise returns a result for that execution. If there are other functions been called after await, these executions wait until the promise finishes.

4. Error handling can be done with a try-catch block.

5. Async/Await makes reading the promises flow much easier. Understanding the functionality is also very easy compared to promises.

6. Debugging is much easier with async/await.

7. Await can be used for a single promise or promise.all().

Should you use promises or async/await?
That is a very general question and there are both cases we might need to use while writing JavaScript code. Promises and async-await are very closely related.

If you are using another asynchronous function which is depending on the first asynchronous function, you should use await to wait first one to finish instead of promise chaining.
Await keyword blocks the execution for the next lines until it finishes. If you don’t need to block the execution you can call the async function without await. (For example, push notifications, if you don’t want to check the status of a push notification has been delivered or not you can skip await keyword, and code execution will continue asynchronously)
If there are multiple asynchronous functions that can be run in parallel, you can use promise.all([promise1,promise2]) to run them in parallel.
Using async/await definitely will help you to understand asynchronous processes much faster.
Instead of using promise chaining async / await provides a much cleaner code.
If you are using many microservices and asynchronous functions using async / await will help you to debug your code much faster. Generating the breakpoints in the promise chaining can be really tricky.
Async await makes asynchronous code look like synchronous code.
To catch errors in the promises always requires you to write the .catch() block.
Async await can be written in the try-catch block along with all other codes.
Conclusion:
Using async / await while dealing with promises brings so much flexibility, clean code, and much more easy debugging.

Except than using Promise.all() to run parallel asynchronous executions you can accomplish all the other asynchronous tasks with async / await.

Using async/await definitely will provide you with many benefits while you are working on big projects and it makes your and other developer's life easy.

