<script>
function ArrayChallenge(arr) { 
  const rowLength = arr[0]/2
  let count= 0;
  const newArray = new Array(rowLength).fill(new Array(2).fill(null));
 
  for(let i=1;i<=rowLength;i++){
  const newIndexArray = []
    for(let j=1;j<=2;j++){
      const currentVal= 2*(i-1)+j;
      console.log(currentVal,"currentVal");
  
      if(
        (!arr.includes(currentVal) && arr[0] !== currentVal) 
        ||
        (arr[0] === currentVal)
      ){//1
      
       console.log(i-1,"i-1");
        console.log(j-1,"j-1");
        newIndexArray[j-1] = currentVal

        if((newArray[i-2] && newArray[i-2][j-1] && !arr.includes(newArray[i-2][j-1])  ) || (newArray[i-1] && newArray[i-1][j-2] && !arr.includes(newArray[i-1][j-2])) ){//2
        console.log("==============count,",currentVal)
          count++
        } //2count
      }//1
      else if(
        arr.includes(currentVal) 
      ){
        newIndexArray[j-1] = currentVal
     }//elseif
    }//inner for loop
    newArray[i-1] = newIndexArray
  }//outer for loop
  console.log(count,"count")
  return count; 
// 2 * i +j => 1   2   i= 0
// 2 * i +j => 3   4   i=1
}
   
// keep this function call here 
console.log(ArrayChallenge([6,4]));

</script>