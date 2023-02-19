# Array Functions 

https://www.geeksforgeeks.org/how-to-map-reduce-and-filter-a-set-element-using-javascript/

### Split, Replace, Splice, Slice

# Difference between splice , and slice?
https://stackoverflow.com/questions/37601282/javascript-array-splice-vs-slice
See the examples below:
var array=[1,2,3,4,5]; 
console.log(array.splice(2));

This will return [3,4,5]. The original array is affected resulting in the array being [1,2].


var array=[1,2,3,4,5] 
console.log(array.slice(2));

This will return [3,4,5]. The original array is NOT affected with resulting in array being [1,2,3,4,5].

### Splice vs Slice
The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.
The splice() method changes the original array and slice() method doesn’t change the original array.
The splice() method can take n number of arguments and slice() method takes 2 arguments.
