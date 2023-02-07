https://www.geeksforgeeks.org/testing-with-jest/
### Jest 
Jest is a Javascript Testing Framework by Facebook. It is used most commonly for unit testing. Unit testing is when you provide input to a unit of code(usually, a function) and match the output with the expected output. 

### Jest Features: 
 

1. zero config: As we will see later in this article, close to none configuration is required to get started with writing tests and deploying them. However, a config file can be supplied to the test suite as well.
2. snapshots: Jest has the ability to enable snapshot testing as well. Essentially, the snapshots are matched with the saved snapshot and check for matching functionality.
3. isolated tests: Jest tests are run parallelly to improve run time.

```
//index.js
testForAdd: (a, b) => { return (a + b) },

//index.test.js
test('test adding two positive nums', function() {
    expect(testFns.testForAdd(4, 5)).toBe(9);
});

```