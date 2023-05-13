# Array Functions 

https://www.geeksforgeeks.org/how-to-map-reduce-and-filter-a-set-element-using-javascript/

### Split, Replace, Splice, Slice Reduce

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

1. ittration loops : for/while/dowhile/map/forEach {}
2. for :- key in ,/key Of 
3. map
4. filter 
5. reduce 



### Without Using Replace All Replace values in a string 
# case 1
const A = "Hello sunny this is rahul verma.sunny you are a very good person";

const data = A.split("sunny").join("Ram")

console.log(data)

//Output:-  Hello Ram this is rahul verma.Ram you are a very good person
tr


# case 2 

const A = ["A","B","C"]
const data = A.join(",")

//output = A,B,C

### What is difference between foreach and Map 
1. map returns a new array 
2. foreach can not return a new array its modified on same array 


### Reduce :- Always Returns a single value after some calculation
 const A = [1,2,3]
 const B = A.reduce((a,b)=>a+b)
 console.log(B)
 //output 6


 ### Sort :-  Sort Will affect the main array
 const A = [1,2,3]
 const B = A.sort((a,b)=>a-b);
 const C = A.sort((a,b)=>b-a);
 console.log(B);
 console.log(C);
 console.log(A);


 //output 6

# Reduce 
C:\Users\Ambika\Desktop\ShreePrep\DSA\React-Redux-Node-Javascript\Javascript\Javascript-Live-Code-Problem\ReverseOfArray-DeepAnalysis\readme.md
