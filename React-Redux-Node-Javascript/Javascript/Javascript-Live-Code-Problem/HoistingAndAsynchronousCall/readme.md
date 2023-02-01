<script>
//1. 
// console.log(1); 
  
// setTimeout(() => {
//     console.log(2);
// }, 0);
  
// console.log(3); 



//2.
// console.log(1); 
  
// while(true) {
//     setTimeout(() => {
//         console.log(2);
//     }, 0);
// } 
  
// console.log(3); 


//3. 

var a = 1
  
function abc () {
   console.log(a) //it will give uncaught error : a cant be access before excecution 
   let a=3
   console.log(a)
} 
abc();
console.log(a);

//is question ke 2 different case he 

//3.1 
    //under vale ko var a kardo to vo function ke under lexical scope me top par  ja kar set ho jayegi 
    var a = 1
    
    function abc () {
        console.log(a) //it will print undefined  
        var a=3
        console.log(a)
    } 
    abc();
    console.log(a);
//3.2
    //under vale ko let a ko b bana doto vo function ke under wale a ko global variable ki tarah trit karega  
    var a = 1
    
    function abc () {
        console.log(a) //it will print 1 because yaha par koi a variable declare dobara nahi hua he to ye global variable ko hi print karega 
        let b=3
        console.log(b)
    } 
    abc();
    console.log(a);
//Arrow function 

//UseRef and useCallBack 

//
</script>
