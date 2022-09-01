// dynamic programming 
 
const str = "forgeeksskeegfor";

const table = []
	let dp = new Array(N);
    //for length 1
let maxLength = 1
for (let i = 0; i < str.length ; i++) {
  table[i] = []
  table[i][i] = true;
  dp[i][j] = 0;
}

let start = 0

//for length 2
for (let i = 0; i < str.length - 1; i++) {
  if (str.charAt(i) == str.charAt(i + 1)) {
    table[i][i + 1] = true;
    maxLength = 2
    start = i;
  dp[i][i+1] = 2;
}
}


//for length more than 2
for (let gap = 2; gap <= str.length ; gap++) {

  for (let i = 0; i <= str.length-gap; i++) { 
    //{first time i=0 to i=2 {"for"} then i=0 to i=3 {"forg"} }

    let j = i + gap-1  ; //{first time i=0 and j=2, then i=1 and j=3}
    //agar s[i] and s[j] equal he and bich ki string bhi plaingdrome he to
    if (str.charAt(i) == str.charAt(j) && table[i + 1][j - 1] == true ) {
      table[i][j] = true;
      if (gap > maxLength) {
        start = i
        maxLength = gap
      }
       if (str[i] == str[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
    } else {
        dp[i][j] = Math.max(dp[i][j - 1] , dp[i + 1][j] );
    }
    }
  }
}
console.log( dp[0][N - 1],"HAY");

//geeksskeeg
console.log("Longest palindrome substring is; ");
const subStr = str.substring(start, start + maxLength);
console.log(subStr);
