
<script>
/*const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
setTimeout(() => console.log(a[i]), 1000);
}
1 ,2 3 4 5 6 7 8 9 10 
for (var i = 0; i < 10; i++) {
setTimeout(() => console.log(a[i]), 1000);
}
undefined 10 times : because its i = 10 and in a[10] is not available so its undefined  

*/

/*
const a = { x: 1, y: 2 };
const b = a;
b.x = 3;
console.log(a); //{ x: 3, y: 2 } why because its deep copy so it will replace in "a" also , if we want shallo copy so we should use  
const b = {...a} ; OR prototype 
console.log(b); //{ x: 3, y: 2 }
*/

let counter = 1; 
for(let i=0;i<4;i++){
	for(let j=0;j<4;j++){
    	if(j<=i){
		document.write(counter);
         document.write(" ");
        counter++
        }
	}
    document.write("</br>");
}
</script>