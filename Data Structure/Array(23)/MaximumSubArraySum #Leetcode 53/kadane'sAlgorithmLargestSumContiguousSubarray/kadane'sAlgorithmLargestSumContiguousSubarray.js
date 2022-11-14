// Program for print maximum add of concurn elements 
//Written via Sunny 
// Algorithmic Paradigm: Dynamic Programming
function maxSubArraySum(myArray){
  var max_so_far = 0 , max_ending_here = 0;
  for(i=0; i<myArray.length; i++){
    var max_ending_here = max_ending_here + myArray[i]
    if(max_ending_here < 0){
      max_ending_here= 0 ;
    }
    else if(max_so_far < max_ending_here){
      max_so_far= max_ending_here ;
    } 
  }
  console.log(max_so_far, 'max_so_far Sum')
}


// var myArray = [-2, -3, 4, -1,  -2, 1, 5, -3];
var myArray = [1, 2, 3, -2, 5];
maxSubArraySum(myArray);



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

function maxSubArraySum(myArray){
  var max_so_far = 0 , max_ending_here = 0, s=0;
  for(i=0; i<myArray.length; i++){
    var max_ending_here = max_ending_here + myArray[i]
    if(max_ending_here < 0){
      max_ending_here= 0 ;
      s = i + 1;
    }
    else if(max_so_far < max_ending_here){
      max_so_far= max_ending_here ;
      start = s; 
      end = i; 
    } 
  }
  console.log(max_so_far, 'max_so_far Sum')
  console.log(start, 'start')
  console.log(end, 'end')
}


// var myArray = [-2, -3, 4, -1,  -2, 1, 5, -3];
var myArray = [-9,-1, 2, 3, -2, 5, -1];
maxSubArraySum(myArray);