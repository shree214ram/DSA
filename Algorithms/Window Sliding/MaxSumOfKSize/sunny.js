// Program for two sum for target
// three sum  for target 


// max sum of 2 sub sequesnt 
// max non repeated sub string 


// max sum of 2 non sub sequent 
// max product of triplate 

const myArray = [1, 4, 2, 10, 2, 3, 1, 0, 20]
const k = 4;
// window sliding 
let max = 0
for (let i= 0; i< k ; i ++){
  max += myArray[i];
}
let currentMax = max

for(let j = k ; j< myArray.length ; j++){
  // if(){
    currentMax  += myArray[j] - myArray[j-k]
  // }
  max = Math.max(max,currentMax)
}

console.log('your log', max)
