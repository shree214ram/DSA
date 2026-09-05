category:
{
"towel":"bath&body",
"denim":"bottomwear",
"bottomwear":"clothing"
"candle":"homedecor"
} 
 
coupons:
{
"bath&body":"20",
"clothing":"30"
} 
 
input - towel , o/p - 20
input - denim, o/p - 30
input - candle , o/p - null

<script>
const obj = {
  category: {
    towel: "bath&body",
    denim: "bottomwear",
    bottomwear: "clothing",
    candle: "homedecor"
  },

  coupons: {
    "bath&body": "20",
    clothing: "30"
  }
};

/*input - towel , o/p - 20
input - denim, o/p - 30
input - candle , o/p - null*
*/
const keyObj = obj["category"];
const couponsObj = obj["coupons"];
const finalResKey = printValue(keyObj, "denim");

//recursion
function printValue(obj, key) {
  //base case
  if (obj[key] && couponsObj[obj[key]]) {
    console.log(couponsObj[obj[key]]);
    return
  }
  //calculation
  else if(obj[obj[key]]){
    //recursion
    return printValue(obj, obj[key]);
  }else{
    console.log("No Result")
  }
}


</script>