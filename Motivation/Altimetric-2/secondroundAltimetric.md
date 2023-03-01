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
// console.log(finalResKey, "finalResKey");
printName(finalResKey, couponsObj);
//recursion
function printValue(obj, key) {
  //console.log(obj, "obj");
  //console.log(key, "key");
  //base case
  if (obj[key] && couponsObj[obj[key]]) {
   // console.log(key, "key");
    //console.log(obj[key], "obj[key]");
    return obj[key];
  }else if(obj[obj[key]]){
    return printValue(obj, obj[key]);
  }else{
    console.log("No Result")
  }
}

function printName(getValue, obj) {
  // console.log(getValue, "getValue");
//  console.log(obj, "obj");
  for (let key in obj) {
    if (key === getValue) {
      console.log(obj[key]);
      break;
    }
  }
}

</script>