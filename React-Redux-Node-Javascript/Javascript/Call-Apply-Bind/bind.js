<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
// bind borrowing

const myObj = {
	fn:"sunny",
    ln:"parmar",
     getFullName: function (mob){
	console.log(this.fn,this.ln,mob)
}
}

const mo = {
	fn:"Kami",
    ln:"Paw",
}

//myObj.getFullName.call(mo,9900)

const newObj =myObj.getFullName.bind(mo,99)
console.log(newObj)
newObj();
//console.log(newObj,"newObj");
//myObj.getFullName();
//console.log(myObj,"myObj");

</script>

</body>
</html>
