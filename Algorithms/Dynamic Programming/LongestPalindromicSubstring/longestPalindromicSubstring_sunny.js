// dynamic programming 

const str = "forgeeksskeegfor";

const table = []
let maxLength = 1
for (let i = 0; i < str.length ; i++) {
  table[i] = []
  table[i][i] = true;
}

let start = 0

for (let i = 0; i < str.length - 1; i++) {
  if (str.charAt(i) == str.charAt(i + 1)) {
    table[i][i + 1] = true;
    maxLength = 2
    start = i;
  }
}

//
for (let k = 3; k < str.length - 1; k++) {

  for (let i = 0; i < str.length-k+1; i++) { 
    //{first time i=0 to i=2 {"for"} then i=0 to i=3 {"forg"} }

    let j = i + k -1 ; //{first time i=0 and j=2, then i=1 and j=3}
    if (str.charAt(i) == str.charAt(j) &&
      table[i + 1][j - 1] == true
    ) {
      table[i][j] = true;
      if (k > maxLength) {
        start = i
        maxLength = k
      }
    }
  }
}

console.log("Longest palindrome substring is; ");
const subStr = str.substring(start, start + maxLength);
console.log(subStr);
