# Rest and Spread Operator :- 
 https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators
Object.Assign (...old)

 {key1 as k1 , key2 as k2} = myObject 

const arr = [22,1,33,6,9];
const arr2 = [...arr];//spread 

arr[1] = "kamini";
console.log(arr2, "arr2")
spread operator property: regarding shallow and deep copy


### Rest Perameter :-
    --------->>>Beware! You Cannot Use “use strict” Inside a Function Containing a Rest Parameter
<script>
function abc(name,surname,...otherDetails){
    console.log(otherDetails) // it will print rest arguments as array ["9907095670","indore","India"]
}
abc("sunny","parmar","9907095670","indore","India")
</script>

### Spread Operater  :-
<script>
function abc(...otherDetails){
    console.log(otherDetails) 
    // it will print all arguments as array ["sunny","parmar","9907095670","indore","India"]
}
abc("sunny","parmar","9907095670","indore","India")
</script>



### Destructuring  :-
<script>

// Define a destructuring array with two regular variables and one rest variable:
const [firstName, lastName, ...otherInfo] = [
  "Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"
];

// Invoke the otherInfo variable:
console.log(otherInfo); 

// The invocation above will return:
["CodeSweetly", "Web Developer", "Male"]

</script>

<script>
// Define a destructuring object with two regular variables and one rest variable:
const { firstName, lastName, ...otherInfo } = {
  firstName: "Oluwatobi",
  lastName: "Sofela", 
  companyName: "CodeSweetly",
  profession: "Web Developer",
  gender: "Male"
}

// Invoke the otherInfo variable:
console.log(otherInfo);

// The invocation above will return:
{companyName: "CodeSweetly", profession: "Web Developer", gender: "Male"}
    </script>

 ### Arrow Function :- 
 https://www.youtube.com/watch?v=h33Srr5J9nY
 https://www.youtube.com/watch?v=h33Srr5J9nY&ab_channel=WebDevSimplified

 1. sort code and single line code possible 
 2. It can be assigned to any variable 
 3. Implicit binding , no need to bind that function to this 

 