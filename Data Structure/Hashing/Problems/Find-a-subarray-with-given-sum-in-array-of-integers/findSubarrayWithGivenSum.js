
//https://www.geeksforgeeks.org/find-subarray-with-given-sum/?ref=gcse
//Broute Force Approach
//Program for print sub array of given sum 
// Time Complexity : O(n^2) in worst case.
function findSubArray(myArray,Sum){
    for(let k=0;k<myArray.length ; k++){
        var newSum = myArray[k]
        for(let j= k+1; j< myArray.length; j++){
            if(newSum == Sum){
                console.log('First Index ='+k , 'last index ='+ (j-1));
                return false;
            } 
            if (newSum > Sum){
              // return 1;
            }
            if(newSum < Sum){
                newSum += myArray[j];
            } 
        }
    }
}
var myArray = [15, 2, 4, 8, 9, 5, 10, 23];

var Sum = 23 ;

findSubArray(myArray,Sum);

//Efficient Approach if all elemnts are (+ve)
//Program for print sub array of given sum 
// Time Complexity : O(n) in worst case.
function findSubArrayEfficient(myArray, Sum) {
    var newSum = 0, start = 0;
  
    for (let k = 0; k < myArray.length; k++) {
  
      while (newSum > Sum && k - 1 > start) {
        newSum -= myArray[start];
        start++;
      }
      if (newSum == Sum) {
        console.log('First Index =' + start, 'last index =' + (k - 1));
        return false;
      }
  
      if (k < myArray.length) {
        newSum += myArray[k];
      }
    }
  }
  var myArray = [15, 2, 4, 8, 9, 5, 10, 23];
  
  var Sum = 23;
  
  findSubArrayEfficient(myArray, Sum);

  https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/?ref=gcse


//https://www.geeksforgeeks.org/find-subarray-with-given-sum-in-array-of-integers/?ref=gcse
//Program for print sub array of given sum But handle Negative nuber
// Time Complexity : O(n) in worst case.
function findSubArrayNegative(myArray, Sum) {
    var newSum = 0;
    var myObj = {};
  
    for (let k = 0; k < myArray.length; k++) {
  
      newSum += myArray[k];
  
      if (newSum == Sum) {
        console.log('First Index = 0', 'last index =' + (k));
        return false;
      }
      if (myObj.hasOwnProperty(newSum - Sum)) {
        console.log('First Index =>' + (myObj[newSum - Sum] + 1), 'last index =>' + k);
        return false;
      }
      if (k < myArray.length) {
        myObj[newSum] = k
      }
    }
  }
  var myArray = [10, 2, -2, -20, 10];
  
  var Sum = -10;
  
  findSubArrayNegative(myArray, Sum);