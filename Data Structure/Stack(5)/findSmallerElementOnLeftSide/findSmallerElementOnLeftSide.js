// https://www.geeksforgeeks.org/find-the-nearest-smaller-numbers-on-left-side-in-an-array/?ref=rp
// https://www.hackerearth.com/practice/data-structures/stacks/basics-of-stacks/practice-problems/algorithm/nearest-smaller-element-929558b4/
//Javascript implementation of efficient algorithm to find 
// smaller element on left side 

// First Method Itrate 2 loop and 
// Prints smaller elements on  left side of every element 
// Time complexity of the above solution is O(n2).
function printPrevSmaller( $arr, $n) 
{ 
      
    // Always print empty or  
    // '_' for first element 
    console.log( "_, "); 
  
    // Start from second element 
    for($i = 1; $i < $n; $i++) 
    { 
          
        // look for smaller 
        // element on left of 'i' 
        $j; 
        for($j = $i - 1; $j >= 0; $j--) 
        { 
            if ($arr[$j] < $arr[$i]) 
            { 
                console.log( $arr[$j] , ", "); 
                break; 
            } 
        } 
  
        // If there is no smaller 
        // element on left of 'i' 
        if ($j == -1) 
        console.log( "_, "); 
    } 
} 
  
    // Driver Code 
    $arr = array(1, 3, 0, 2, 5); 
    $n = count($arr); 
    printPrevSmaller($arr, $n);



// Second  Method Use Stack  
// Prints smaller elements on  left side of every element 
// Time complexity of the above solution is O(n).
import Stack from '../Stack';

function printPrevSmaller(arr, n) {
    // Create an empty stack 
    const S = new Stack();

    // Traverse all array elements 
    for (let i = 0; i < n; i++) {
        // Keep removing top element from S while the top 
        // element is greater than or equal to arr[i] 
        while (!S.isEmpty() && S.peek() >= arr[i]) {
            S.pop();
        }

        // If all elements in S were greater than arr[i] 
        if (S.isEmpty()) {
            console.log("_, ");
        } else //Else print the nearest smaller element 
        {
            console.log(S.peek() + ", ");
        }

        // Push this element 
        S.push(arr[i]);
    }
}

/* Driver program to test  */

const arr = [1, 3, 0, 2, 5];
const n = arr.length;
printPrevSmaller(arr, n);
  // _, 1, _, 0, 0,