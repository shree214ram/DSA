### use strict : Means when we r using this so we cant define  any variable without declare for example b=3 will not work  

1. case 
<script>
(function(){
	var a=3;
})();
console.log(a);//Error will come "a is not defined" because var a is defined in IIFE that can't be acessable outside 
</script>

2. case 

<script>
"use strict";

(function(){
	var a=b=3;//b is not defined , yahi par hi excecution stop ho jayega kyunki ye strict mode me he Niche ka console to excecute hi nahi hoga 
})();

console.log(a);


</script>


3. case
<script>

(function(){
	var a=b=3;
})();
//case 1.
console.log(a);//a is not defined , it will stop excecution 
console.log(b);
//case 2.
console.log(b);//3
console.log(a);//a is not defined , it will stop excecution 

//Note just break the statement into two part var a =   AND b =3 {b yaha par avara sand he jiska koi specific type like let/var/const to ye IIFE ke bahar bhi mil gaya , agar ye let/var/const hota to upper wale program ki tarah b is not defined error deta }
</script>


4. 
<script>
"use strict";

(function(){
	var a=b=3;  //b is not defined , yahi par hi excecution stop ho jayega kyunki ye strict mode me he Niche ka console to excecute hi nahi hoga 
})();
console.log(a);
console.log(b);

</script>
