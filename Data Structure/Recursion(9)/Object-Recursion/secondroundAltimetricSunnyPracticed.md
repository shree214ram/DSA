<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
//10:26 //10:34 //10:47
const obj ={category:
{
"towel":"bath&body",
"denim":"bottomwear",
"bottomwear":"clothing",
"candle":"homedecor"
} ,
 
coupons:
{
"bath&body":"20",
"clothing":"30"
} 
}
const cat = obj.category;
const coupons = obj.coupons;
const output = printValue("candle",cat);
console.log(output)
function printValue(input,obj){

    	if(coupons[input] || coupons[obj[input]]){
        	return coupons[input] || coupons[obj[input]]
        }else if(obj[input] && obj[obj[input]]){
        
        	return printValue(obj[obj[input]],obj)
        }else{
        	return "null"
        }
}
 /*
input - towel , o/p - 20
input - denim, o/p - 30
input - candle , o/p - null*/
</script>

</body>
</html>
