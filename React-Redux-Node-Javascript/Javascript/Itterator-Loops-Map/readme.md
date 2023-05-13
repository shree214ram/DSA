# What is looping structures are there in JavaScript?
In JavaScript we have the following looping statements:
while - loops through a block of code while a condition is true.
do...while - loops through a block of code once, and then repeats the loop while a condition is true.
for - run statements a specified number of times.


# difference between array.map and array.foreach
They are not one and the same. Let me explain the difference.
foreach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database)
map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase)
For more explanation visit the below link:
https://codeburst.io/javascript-map-vs-foreach-f38111822c0f

<script>
let arr = [1, 2, 3, 4, 5];
ForEach:

Note that you would never return from a forEach function as the return values are simply discarded:

arr.forEach((num, index) => {
    return arr[index] = num * 2;
});
Result:

// arr = [2, 4, 6, 8, 10]
Map:

let doubled = arr.map(num => {
    return num * 2;
});
Result:

// doubled = [2, 4, 6, 8, 10]

</script>
