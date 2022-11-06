// dynamic programming 
 
const str = "forgeeksskeegfor";

const DP = []
//for length 1
let maxLength = 1
for (let i = 0; i < str.length ; i++) {
  DP[i] = []
  DP[i][i] = true;
}

let start = 0

//for length 2
for (let i = 0; i < str.length - 1; i++) {
  if (str.charAt(i) == str.charAt(i + 1)) {
    DP[i][i + 1] = true;
    maxLength = 2
    start = i;
  }
}


//for length more than 2
for (let gap = 2; gap <= str.length ; gap++) {

  for (let i = 0; i <= str.length-gap; i++) { 
    //{first time i=0 to i=2 {"for"} then i=0 to i=3 {"forg"} }
    let j = i + gap-1  ; //{first time i=0 and j=2, then i=1 and j=3}
    //agar s[i] and s[j] equal he and bich ki string bhi plaingdrome he to
    if (str.charAt(i) == str.charAt(j) && DP[i + 1][j - 1] == true ) {
      DP[i][j] = true;
      if (gap > maxLength) {
        start = i
        maxLength = gap
      }
    }
  }
}
//geeksskeeg
console.log("Longest palindrome substring is; ");
const subStr = str.substring(start, start + maxLength);
console.log(subStr);


