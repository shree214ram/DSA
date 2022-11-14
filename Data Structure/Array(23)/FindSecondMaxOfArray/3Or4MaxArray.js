// Function to print the  
// second largest elements 
function print2largest($arr, $arr_size) {

  // There should be atleast  
  // two elements  
  if ($arr_size < 2) {
    console.log(" Invalid Input ");
    return;
  }

  $first = $second = $third = $fourth = null;
  for (let $i = 0; $i < $arr_size; $i++) {

    // If current element is 
    // smaller than first 
    // then update both  
    // first and second  
    if ($arr[$i] > $first) {
      $fourth = $third;
      $third = $second;
      $second = $first;
      $first = $arr[$i];
    }

    // If arr[i] is in  
    // between first and  
    // second then update  
    // second  
    else if ($arr[$i] > $second &&
      $arr[$i] != $first) {
      $fourth = $third;
      $third = $second;
      $second = $arr[$i];

    }
    // If arr[i] is in  
    // between second and  
    // third then update  
    // third  
    else if ($arr[$i] > $third &&
      $arr[$i] != $second) {
      $fourth = $third;
      $third = $arr[$i];

    }
  }
  if ($second == null)
    console.log("There is no second largest element\n");
  else
    console.log("The fourth largest element is " + $fourth + "\n");
    console.log("The third largest element is " + $third + "\n");
    console.log("The second largest element is " + $second + "\n");
}

// Driver Code 
var arr = [12, 35, 1, 10, 37, 1];
var n = arr.length;
print2largest(arr, n);

// This code is contributed by Ajit.





// ##################SUNNY PRACTICE ###############
function find3Max(myArray){
  let first = second = third = null;
  for (let i=0 ; i< myArray.length ; i++){
    let current = myArray[i]
    if(current >  first){
      third = second ;
      second = first ;
      first  = current ;
    } 
    else if(current >  second && first != current ){
      third = second ;
      second = current ;
    }
    else if(current >  third && second != current) {
      third = current ;
    }
  }
  console.log(first)
  console.log(second)
  console.log(third)
}

const myArray = [2, 7, 5, 9]
find3Max(myArray);