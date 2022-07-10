// Program for print maximum add of concurn elements 
//Written via Sunny 
// Algorithmic Paradigm: Dynamic Programming
function maxSumPrint(myArray){
  var newMaxSum = 0 , previousSum = 0;
  for(i=0; i<myArray.length; i++){
    var previousSum = previousSum + myArray[i]
    if(previousSum < 0){
      previousSum= 0 ;
    }
    else if(newMaxSum < previousSum){
      newMaxSum= previousSum ;
    } 
  }
  console.log(newMaxSum, 'newMaxSum Sum')
}


// var myArray = [-2, -3, 4, -1,  -2, 1, 5, -3];
var myArray = [1, 2, 3, -2, 5];
maxSumPrint(myArray);



//Program for max Sum with (-ve) negative numberes 

function findMaxSum(myArray) {
  let newSum = 0, prevoiusSum = 0;
  for (let k = 0; k < myArray.length; k++) {
    prevoiusSum = Math.max(myArray[k], prevoiusSum + myArray[k]);
    newSum = Math.max(newSum, prevoiusSum)
  }
  console.log('newSum=> ' + newSum)
}

var myArray = [-2, -3, 4, -1, -2, 1, 5, -3];

findMaxSum(myArray)




// Program for print maximum add of concurn elements and print sub array
//Written via Sunny 

function maxSumPrint(myArray){
  var newMaxSum = 0 , previousSum = 0, s=0;
  for(i=0; i<myArray.length; i++){
    var previousSum = previousSum + myArray[i]
    if(previousSum < 0){
      previousSum= 0 ;
      s = i + 1;
    }
    else if(newMaxSum < previousSum){
      newMaxSum= previousSum ;
      start = s; 
      end = i; 
    } 
  }
  console.log(newMaxSum, 'newMaxSum Sum')
  console.log(start, 'start')
  console.log(end, 'end')
}


// var myArray = [-2, -3, 4, -1,  -2, 1, 5, -3];
var myArray = [-9,-1, 2, 3, -2, 5, -1];
maxSumPrint(myArray);