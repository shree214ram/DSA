//  program to find largest sub  
// string with same characters  

// Function to find largest sub  
// string with same characters  
function Substring($s) {
    let $ans = 1;
    let $temp = 1;
  
    // Traverse the string  
    for ($i = 1; $i < $s.length; $i++) {
  
      // If character is same as  
      // previous increment temp value  
      if ($s[$i] == $s[$i - 1]) {
  
          ++$temp;
  
      } else {
        $ans = Math.max($ans, $temp);
        $temp = 1;
      }
    }
  
    $ans = Math.max($ans, $temp);
  
    // Return the required answer  
    return $ans;
  }
  
  // Driver code  
  $s = "abcdddddeff";
  
  // Function call  
  const output = Substring($s);
  console.log(output)
  
  // This code is contributed by Naman_Garg 