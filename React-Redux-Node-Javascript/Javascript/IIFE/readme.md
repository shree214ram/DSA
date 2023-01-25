https://www.geeksforgeeks.org/immediately-invoked-function-expressions-iife-in-javascript/
https://www.youtube.com/watch?v=G91C-eJHNjM&ab_channel=StrongCoffeeCode

### iife immidietelly invoked function expression 
1. not pollute the global scope
2. shields your code from others.
3. a function without any name and call immidietelly by own self is called IIFE 
4. The Banifit of this iife is its Secure our data from laxical scope 
5. Please See index.html 



<script>

function abc(){
	console.log("Normal function statement/declaration")
}

const xyz = function abc(){
	console.log(" function expression with named function")
}

const kml = function (){
	console.log(" function expression without name function")
}

/*
function (){
	console.log("this will give error:  function statement require a function name")
}*/

//iife immidietelly invoked function expression 
/*(function (name){
	console.log("Hii... ");
})("sunny");*/

</script>

