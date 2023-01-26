### Curring :- 
https://www.youtube.com/watch?v=vQcCNpuaJO8&ab_channel=AkshaySaini


<script>
/*

// bind method
const  multiply=function (x,y){
	console.log(x*y)
}

const  multiplyBy2=multiply.bind(this,2);
multiplyBy2(3);

const  multiplyBy3=multiply.bind(this,3);
multiplyBy3(5);

*/

// clouser method 

const  multiply=function (x){
	 return function (y){
        return function (z){
            console.log(x*y*z)
        }
    }
}

///// Call Via create constant and then call 
const  multiplyBy2=multiply(2);
const  multiplyBy3=multiplyBy2(3);
multiplyBy3(5)

///// Directelly Calling 
//multiply(2)(3)(5)


/*
const  multiplyBy3=multiply.bind(this,3);
multiplyBy3(5);
*/


</script>



### Curring Interview Question 
https://www.youtube.com/watch?v=D5ENjfSkHY4&t=408s&ab_channel=AkshaySaini